import db from "../models/index.js";
import { Components } from "../components/index.js";
import { response } from "express";
import HPenggajian from "../models/HPenggajian.js";
import moment from "moment";

let data = null;

export default {
  resource: db["HPenggajian"],
  options: {
    editProperties: ['nik','tanggal', 'total'],
    listProperties: ['nik','tanggal', 'total'],
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
            console.log(listKaryawan)
            console.log(moment(ddate).format('YYYY-MM-DD'))
            try{
              for (const nik of listKaryawan) {
                await db["HPenggajian"].create({  
                  nik: nik,
                  tanggal: moment(ddate).format('YYYY-MM-DD'),
                  total: 0
                })
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
        handler: (request, response, context) => {
          const { record, currentAdmin } = context
          if(record != null){
            data = record
          }
          return {
            record: data.toJSON(currentAdmin),
          }
        },
      },
    }
  },
};
