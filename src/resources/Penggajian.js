import db from "../models/index.js";
import { Components } from "../components/index.js";
import moment from "moment";

let data = null;
const Sequelize = db.Sequelize

const upsertDetail = async (values, where) => {
  const obj = await db["DPenggajian"].findOne({ ...where });
  if (obj) return await obj.update(values, where);
  return await db["DPenggajian"].create({
    ...values,
    jumlah: 1,
    ...where["where"],
  });
};

const getAbsensiKaryawan = async (ddate, karyawan) => {
  const absensi = await db["Absensi"].findAll({
    where:{
      [Sequelize.Op.and]: [
        Sequelize.where(
          Sequelize.fn("MONTH", Sequelize.col("created_at")),
          moment(ddate).format("MM")
        ),
        Sequelize.where(
          Sequelize.fn("YEAR", Sequelize.col("created_at")),
          moment(ddate).format("YYYY")
        ),
        Sequelize.where(Sequelize.col("status"), 1),
        Sequelize.where(Sequelize.col("nik"), karyawan.nik)
      ],
    },
    raw: true
  })
  return {
    jumlah_masuk: absensi.length,
    jumlah_lembur: absensi.filter(x => x.is_lembur == 1).length
  }
}

const getMCUKaryawan = async (ddate, karyawan) => {
  const mcu = await db["Izin"].findAll({
    where:{
      [Sequelize.Op.and]: [
        Sequelize.where(
          Sequelize.fn("MONTH", Sequelize.col("created_at")),
          moment(ddate).format("MM")
        ),
        Sequelize.where(
          Sequelize.fn("YEAR", Sequelize.col("created_at")),
          moment(ddate).format("YYYY")
        ),
        Sequelize.where(Sequelize.col("status"), 1),
        Sequelize.where(Sequelize.col("jenis"), 1),
        Sequelize.where(Sequelize.col("nik_pengaju"), karyawan.nik)
      ],
    },
    raw: true
  })
  return mcu.length
}

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

const siapkanGajiBulananHandler = async (request, response, context) => {
  // Get current month last date
  const currentDate = new Date();
  const ddate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );

  switch (request.method) {
    case "get":
      const karyawan = await db["Karyawan"].getBelumGajian(
        moment(ddate).format("MM"),
        moment(ddate).format("YYYY")
      );
      return { karyawan };
    case "post":
      const payload = request.payload;
      const listKaryawan = JSON.parse(payload.karyawan);
      const constants = (
        await db["Constant"].findAll({
          raw: true,
        })
      ).map((x) => {
        return { name: x.name, value: x.intvalue };
      });
      // console.log(constants);
      // console.log(listKaryawan);
      // console.log(moment(ddate).format("YYYY-MM-DD"));
      try {
        for (const nik of listKaryawan) {
          const karyawan = await db["Karyawan"].findByPk(nik, {
            raw: true,
          });
          const divisi = await db["Divisi"].findByPk(karyawan.id_divisi, {
            raw: true,
          });
          // console.log(karyawan)
          // console.log(divisi)
          const header = await db["HPenggajian"].create({
            nik: nik,
            tanggal: moment(ddate).format("YYYY-MM-DD"),
            total: 0,
          });
          const {jumlah_masuk, jumlah_lembur} = await getAbsensiKaryawan(ddate, karyawan) ;
          const jumlah_mcu = await getMCUKaryawan(ddate, karyawan) ;     
          const header_id = header.dataValues.id;
          // console.log(jumlah_masuk)
          // console.log(jumlah_lembur)
          // console.log(jumlah_mcu)
          await db["DPenggajian"].bulkCreate([
            //create gaji pokok
            {
              id_header: header_id,
              judul: "Gaji Pokok",
              jumlah: 1,
              nominal: karyawan.gaji_pokok,
              subtotal: karyawan.gaji_pokok,
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
              nominal: karyawan.tunjangan_perusahaan,
              subtotal: karyawan.tunjangan_perusahaan,
            },
            //create uang makan
            {
              id_header: header_id,
              judul: "Uang Makan",
              jumlah: jumlah_masuk,
              nominal: parseInt(constants[0].value),
              subtotal: parseInt(constants[0].value) * jumlah_masuk,
            },
            //create uang transportasi
            {
              id_header: header_id,
              judul: "Uang Transportasi",
              jumlah: jumlah_masuk,
              nominal: parseInt(constants[1].value),
              subtotal: parseInt(constants[1].value) * jumlah_masuk,
            },
            //create fee lembur
            {
              id_header: header_id,
              judul: "Fee Lembur",
              jumlah: jumlah_lembur,
              nominal: parseInt(constants[2].value),
              subtotal: parseInt(constants[2].value) * jumlah_lembur,
            },
            //create fee mcu
            {
              id_header: header_id,
              judul: "Fee MCU",
              jumlah: jumlah_mcu,
              nominal: parseInt(constants[3].value),
              subtotal: parseInt(constants[3].value) * jumlah_mcu,
            },
            //create potongan
            {
              id_header: header_id,
              judul: "Potongan",
              jumlah: -1,
              nominal: 0,
              subtotal: 0,
            },
            //create bpjs kesehatan
            {
              id_header: header_id,
              judul: "BPJS Kesehatan",
              jumlah: -1,
              nominal: constants[4].value,
              subtotal: constants[4].value * -1,
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
    default:
      break;
  }
};

const detailGajiHandler = async (request, response, context) => {
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
                    where: { id_header, judul: values["judul"] },
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
    order: [["judul", "ASC"]],
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
};

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
        handler: siapkanGajiBulananHandler,
        showInDrawer: true,
      },
      detail: {
        actionType: "record",
        component: Components.Penggajian,
        handler: detailGajiHandler,
        icon: 'Edit'
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
    sort: {
      sortBy: "created_at",
      direction: "desc",
    },
  },
};
