import db from "../models/index.js";
import { Components } from "../components/index.js";
import { response } from "express";
import HPenggajian from "../models/HPenggajian.js";
import moment from "moment";
import { raw } from "mysql2";

let data = null;

export default {
  resource: db["HPenggajian"],
  options: {
    editProperties: ['nik','tanggal', 'total'],
    listProperties: ['nik','tanggal', 'total'],
    filterProperties: ['nik','tanggal'],
    parent: {
      name: "",
      icon: "Money",
    },
    id: "Penggajian",
    properties:{
      total:{
        type: 'currency',
        props: {
          decimalSeparator: ".",
          fixedDecimalLength: 2,
          prefix: "Rp ",
          disableGroupSeparator: true,
        }
      }
    },
    actions: {
      SiapkanGajiBulanan:{  
        actionType:'resource',
        icon:'Money',
        component: Components.SiapkanGaji,
        handler: async (request, response, context) => {
          const ddate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
          if(request.method == 'get'){
            const karyawan = await db['Karyawan'].getBelumGajian(moment(ddate).format('MM'), moment(ddate).format('YYYY'))
            return {
              karyawan
            }
          }
          else if(request.method == 'post'){
            const payload = request.payload
            const listKaryawan = JSON.parse(payload.karyawan)
            const constants = await db['Constant'].findAll({
              raw: true
            })
            console.log(constants)
            // console.log(listKaryawan)
            // console.log(moment(ddate).format('YYYY-MM-DD'))
            try{
              for (const nik of listKaryawan) {
                const karyawan = await db['Karyawan'].findByPk(nik,{
                  raw: true
                })
                const divisi = await db['Divisi'].findByPk(karyawan.id_divisi,{
                  raw: true
                })
                const header = await db["HPenggajian"].create({  
                  nik: nik,
                  tanggal: moment(ddate).format('YYYY-MM-DD'),
                  total: 0
                })
                const jumlah_masuk=30
                const jumlah_lembur=0
                const jumlah_mcu=0
                const header_id = header.dataValues.id
                await db["DPenggajian"].bulkCreate([
                  //create gaji pokok
                  {
                    id_header: header_id,
                    judul: "Gaji Pokok",
                    jumlah: 1,
                    nominal: constants[0].intvalue,
                    subtotal: constants[0].intvalue
                  },
                  //create tunjangan jabatan
                  {
                    id_header: header_id,
                    judul: "Tunjangan Jabatan",
                    jumlah: 1,
                    nominal: divisi.tunjangan,
                    subtotal: divisi.tunjangan
                  },
                  //create tunjangan perusahaan
                  {
                    id_header: header_id,
                    judul: "Tunjangan Perusahaan",
                    jumlah: 1,
                    nominal: constants[1].intvalue,
                    subtotal: constants[1].intvalue
                  },
                  //create uang makan
                  {
                    id_header: header_id,
                    judul: "Uang Makan",
                    jumlah: jumlah_masuk,
                    nominal: constants[2].intvalue,
                    subtotal: parseInt(constants[2].intvalue) * jumlah_masuk
                  },
                  //create uang transportasi
                  {
                    id_header: header_id,
                    judul: "Uang Transportasi",
                    jumlah: jumlah_masuk,
                    nominal: constants[3].intvalue,
                    subtotal: parseInt(constants[3].intvalue) * jumlah_masuk
                  },
                  //create fee lembur
                  {
                    id_header: header_id,
                    judul: "Fee Lembur",
                    jumlah: jumlah_lembur,
                    nominal: constants[4].intvalue,
                    subtotal: parseInt(constants[4].intvalue) * jumlah_lembur
                  },
                  //create fee mcu
                  {
                    id_header: header_id,
                    judul: "Fee MCU",
                    jumlah: jumlah_mcu,
                    nominal: constants[5].intvalue,
                    subtotal: parseInt(constants[5].intvalue) * jumlah_mcu
                  },
                  //create potongan
                  {
                    id_header: header_id,
                    judul: "Potongan",
                    jumlah: 0,
                    nominal: 1000 * -1,
                    subtotal: 0
                  },
                  //create bpjs kesehatan
                  {
                    id_header: header_id,
                    judul: "BPJS Kesehatan",
                    jumlah: 1,
                    nominal: constants[6].intvalue * -1,
                    subtotal: constants[6].intvalue * -1
                  },
                  //create pph21
                  {
                    id_header: header_id,
                    judul: "Pajak PPH21",
                    jumlah: 1,
                    nominal: 0,
                    subtotal: 0
                  }
                ])
                // console.log(header)
              }
              return {
                msg: "Success",
                counter: listKaryawan.length
              }
            }
            catch(e){
              return {
                msg: `Error: ${e.toString()}`
              }
            }
          }
        },
        showInDrawer: true,
      },
      detail:{
        actionType:'record',
        component:Components.Penggajian,
        handler: async (request, response, context) => {
          if(request.method == "post"){
            console.log(request.payload)
            const payload = request.payload
            await db["DPenggajian"].update({
              jumlah: payload["uangMakan[jumlah]"],
              subtotal: payload["uangMakan[subtotal]"]
            },{
              where:{
                id_header: payload.header_id,
                judul: "Uang Makan"
              }
            })
            await db["DPenggajian"].update({
              jumlah: payload["uangTransportasi[jumlah]"],
              subtotal: payload["uangTransportasi[subtotal]"]
            },{
              where:{
                id_header: payload.header_id,
                judul: "Uang Transportasi"
              }
            })
            await db["DPenggajian"].update({
              jumlah: payload["feeLembur[jumlah]"],
              subtotal: payload["feeLembur[subtotal]"]
            },{
              where:{
                id_header: payload.header_id,
                judul: "Fee Lembur"
              }
            })
            await db["DPenggajian"].update({
              jumlah: payload["feeMCU[jumlah]"],
              subtotal: payload["feeMCU[subtotal]"]
            },{
              where:{
                id_header: payload.header_id,
                judul: "Fee MCU"
              }
            })
            await db["DPenggajian"].update({
              jumlah: payload["potongan[jumlah]"],
              subtotal: payload["potongan[subtotal]"]
            },{
              where:{
                id_header: payload.header_id,
                judul: "Potongan"
              }
            })
            await db["DPenggajian"].update({
              nominal: payload.PPH21,
              subtotal: payload.PPH21
            },{
              where:{
                id_header: payload.header_id,
                judul: "Pajak PPH21"
              }
            })

            await db["HPenggajian"].update({
              total: payload.totalGaji
            },{
              where:{
                id: payload.header_id
              }
            })

            return "OK"
          }
          const { record, currentAdmin } = context
          if(record != null){
            data = record
          }
          const detail = await db["DPenggajian"].findAll({
            where:{
              id_header: data.params.id
            },
            raw: true
          })
          
          data.populated.detail = detail
          data.populated.header_id = data.params.id
          // console.log(data)
          return {
            record: data.toJSON(currentAdmin),
          }
        },
      },
      show:{
        isVisible: false,
      },
      create:{
        isVisible: false,
      },
      edit:{
        isVisible: false,
      }
    }
  },
};
