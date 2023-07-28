import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  resource: db["Izin"],
  options: {
    actions:{
      new:{
        isAccesible: false,
        isVisible: false,
      },
      delete:{
        isAccesible: false,
        isVisible: false,
      },
    },
    parent: {
      name: "",
      icon: "HealthCross",
    },
    filterProperties: [
      "nik_pengaju",
      "nik_pengganti",
      "waktu_mulai",
      "waktu_selesai",
      "jenis",
      "status",
    ],
    listProperties: [
      "nik_pengaju",
      "nik_pengganti",
      "waktu_mulai",
      "waktu_selesai",
      "jenis",
      "status",
    ],
    editProperties: ["nik_pengganti"],
    showProperties: [
      "nik_pengaju",
      "nik_pengganti",
      'lokasi',
      "waktu_mulai",
      "waktu_selesai",
      "jenis",
      "status",
      "signature",
      'confirm_izin'
    ],
    properties: {
      signature:{
        components:{
          show: Components.Signature,
        }
      },
      status: {
        availableValues: [
          { value: 0, label: "Rejected" },
          { value: 1, label: "Pending" },
          { value: 2, label: "Approved" },
        ],
      },
      jenis: {
        availableValues: [
          { value: 1, label: "Cuti" },
          { value: 2, label: "MCU" },
        ],
      },
      confirm_izin: {
        components: {
            show: Components.ConfirmIzin,
        },
        position: 99,
      }
    },
  },
};
