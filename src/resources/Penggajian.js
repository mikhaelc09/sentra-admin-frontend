import db from "../models/index.js";
import { Components } from "../components/index.js";
import moment from "moment";

let data = null;

const upsertDetail = async (values, where) => {
  const obj = await db["DPenggajian"].findOne({ ...where });
  if (obj) return await obj.update(values, where);
  return await db["DPenggajian"].create({ ...values, jumlah:1, ...where["where"] });
};
const dEditMapper = [
  {
    judul: "Pajak PPH21",
    key: "PPH21",
    depth: 0,
  },
  {
    judul: "Gaji Pokok",
    key: "gajiPokok",
    depth: 0,
  },
  {
    judul: "Tunjangan Jabatan",
    key: "tunjanganJabatan",
    depth: 0,
  },
  {
    judul: "Tunjangan Perusahaan",
    key: "tunjanganPerusahaan",
    depth: 0,
  },
  {
    judul: "Uang Makan",
    key: "uangMakan",
    depth: 1,
  },
  {
    judul: "Uang Transportasi",
    key: "uangTransportasi",
    depth: 1,
  },
  {
    judul: "Fee Lembur",
    key: "feeLembur",
    depth: 1,
  },
  {
    judul: "Fee MCU",
    key: "feeMCU",
    depth: 1,
  },
  {
    judul: "Potongan",
    key: "potongan",
    depth: 1,
  },
  {
    judul: "BPJS Kesehatan",
    key: "BPJSKesehatan",
    depth: 0,
  },
  {
    judul: "Gaji Lain Lain",
    key: "gajiLainLain",
    depth: 2,
  },
  {
    judul: "Potongan Lain Lain",
    key: "potonganLainLain",
    depth: 2,
  },
];

export default {
  resource: db["HPenggajian"],
  options: {
    editProperties: ["nik", "tanggal", "total"],
    listProperties: ["nik", "tanggal", "total"],
    filterProperties: ["nik", "tanggal"],
    parent: {
      name: "",
      icon: "DollarSign",
    },
    id: "Penggajian",
    properties: {
      total: {
        type: "currency",
        props: {
          decimalSeparator: ".",
          fixedDecimalLength: 2,
          prefix: "Rp ",
          disableGroupSeparator: true,
        },
      },
    },
    actions: {
      new: {
        isAccessible: false,
        isVisible: false,
      },
      SiapkanGajiBulanan: {
        actionType: "resource",
        icon: "PlusCircle",
        component: Components.SiapkanGaji,
        handler: async (request, response, context) => {
          const ddate = new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
          );
          if (request.method == "get") {
            const karyawan = await db["Karyawan"].getBelumGajian(
              moment(ddate).format("MM"),
              moment(ddate).format("YYYY")
            );
            return {
              karyawan,
            };
          } else if (request.method == "post") {
            const payload = request.payload;
            const listKaryawan = JSON.parse(payload.karyawan);
            const constants = await db["Constant"].findAll({
              raw: true,
            });
            // console.log(constants)
            // console.log(listKaryawan)
            // console.log(moment(ddate).format('YYYY-MM-DD'))
            try {
              for (const nik of listKaryawan) {
                const karyawan = await db["Karyawan"].findByPk(nik, {
                  raw: true,
                });
                const divisi = await db["Divisi"].findByPk(karyawan.id_divisi, {
                  raw: true,
                });
                const header = await db["HPenggajian"].create({
                  nik: nik,
                  tanggal: moment(ddate).format("YYYY-MM-DD"),
                  total: 0,
                });
                const jumlah_masuk = 30;
                const jumlah_lembur = 0;
                const jumlah_mcu = 0;
                const header_id = header.dataValues.id;
                await db["DPenggajian"].bulkCreate([
                  //create gaji pokok
                  {
                    id_header: header_id,
                    judul: "Gaji Pokok",
                    jumlah: 1,
                    nominal: constants[0].intvalue,
                    subtotal: constants[0].intvalue,
                  },
                  //create tunjangan jabatan
                  {
                    id_header: header_id,
                    judul: "Tunjangan Jabatan",
                    jumlah: 1,
                    nominal: divisi.tunjangan,
                    subtotal: divisi.tunjangan,
                  },
                  //create tunjangan perusahaan
                  {
                    id_header: header_id,
                    judul: "Tunjangan Perusahaan",
                    jumlah: 1,
                    nominal: constants[1].intvalue,
                    subtotal: constants[1].intvalue,
                  },
                  //create uang makan
                  {
                    id_header: header_id,
                    judul: "Uang Makan",
                    jumlah: jumlah_masuk,
                    nominal: constants[2].intvalue,
                    subtotal: parseInt(constants[2].intvalue) * jumlah_masuk,
                  },
                  //create uang transportasi
                  {
                    id_header: header_id,
                    judul: "Uang Transportasi",
                    jumlah: jumlah_masuk,
                    nominal: constants[3].intvalue,
                    subtotal: parseInt(constants[3].intvalue) * jumlah_masuk,
                  },
                  //create fee lembur
                  {
                    id_header: header_id,
                    judul: "Fee Lembur",
                    jumlah: jumlah_lembur,
                    nominal: constants[4].intvalue,
                    subtotal: parseInt(constants[4].intvalue) * jumlah_lembur,
                  },
                  //create fee mcu
                  {
                    id_header: header_id,
                    judul: "Fee MCU",
                    jumlah: jumlah_mcu,
                    nominal: constants[5].intvalue,
                    subtotal: parseInt(constants[5].intvalue) * jumlah_mcu,
                  },
                  //create potongan
                  {
                    id_header: header_id,
                    judul: "Potongan",
                    jumlah: 0,
                    nominal: 1000 * -1,
                    subtotal: 0,
                  },
                  //create bpjs kesehatan
                  {
                    id_header: header_id,
                    judul: "BPJS Kesehatan",
                    jumlah: 1,
                    nominal: constants[6].intvalue * -1,
                    subtotal: constants[6].intvalue * -1,
                  },
                  //create pph21
                  {
                    id_header: header_id,
                    judul: "Pajak PPH21",
                    jumlah: 1,
                    nominal: 0,
                    subtotal: 0,
                  },
                ]);
                // console.log(header)
                const total = await db["DPenggajian"].sum("subtotal", {
                  where: {
                    id_header: header_id,
                  },
                });
                await db["HPenggajian"].update(
                  { total },
                  {
                    where: {
                      id: header_id,
                    },
                  }
                );
              }
              return {
                msg: "Success",
                counter: listKaryawan.length,
              };
            } catch (e) {
              return {
                msg: `Error: ${e.toString()}`,
              };
            }
          }
        },
        showInDrawer: true,
      },
      detail: {
        actionType: "record",
        component: Components.Penggajian,
        handler: async (request, response, context) => {
          if (request.method == "post") {
            const payload = request.payload;
            const jsonString = JSON.stringify(payload)
              .replace(/'/g, '"')
              .replace(/\[/g, ".")
              .replace(/\]/g, "");

            const data = {};

            Object.entries(JSON.parse(jsonString)).forEach(([key, value]) => {
              const keys = key.split(".");
              let currentObj = data;

              keys.forEach((innerKey, index) => {
                if (index === keys.length - 1) {
                  currentObj[innerKey] = value;
                } else {
                  currentObj[innerKey] = currentObj[innerKey] || {};
                  currentObj = currentObj[innerKey];
                }
              });
            });

            const id_header = data.header_id;

            await Promise.all(
              dEditMapper.map(async ({ judul, key, depth }) => {
                switch (depth) {
                  case 0:
                    return await db["DPenggajian"].update(
                      {
                        nominal: data[key],
                        subtotal: data[key],
                      },
                      {
                        where: { id_header, judul },
                      }
                    );
                  case 1:
                    return await db["DPenggajian"].update(
                      {
                        jumlah: data[key]["jumlah"],
                        subtotal: data[key]["subtotal"],
                      },
                      {
                        where: { id_header, judul },
                      }
                    );
                  case 2:
                    return await Promise.all(
                      Object.keys(data[key]).map(async (k) => {
                        const values = data[key][k];
                        return await upsertDetail(
                          {
                            nominal: values["nominal"],
                            subtotal: values["nominal"],
                            keterangan: values["keterangan"],
                          },
                          {
                            where: { id_header, judul: values['judul'] },
                          }
                        );
                      })
                    );
                }
              })
            );

            await db["HPenggajian"].update(
              {
                total: data.totalGaji,
              },
              {
                where: {
                  id: id_header,
                },
              }
            );

            return "OK";
          }
          const { record, currentAdmin } = context;
          if (record != null) {
            data = record;
          }
          const detail = await db["DPenggajian"].findAll({
            where: {
              id_header: data.params.id,
            },
            raw: true,
            order:[
              ['judul', 'ASC']
            ]
          });

          const karyawan = await db["Karyawan"].findByPk(data.params.nik, {
            raw: true,
          });

          data.populated.detail = detail;
          data.populated.header_id = data.params.id;
          data.populated.karyawan = karyawan;
          return {
            record: data.toJSON(currentAdmin),
          };
        },
      },
      show: {
        isVisible: false,
      },
      create: {
        isVisible: false,
      },
      edit: {
        isVisible: false,
      },
    },
  },
};
