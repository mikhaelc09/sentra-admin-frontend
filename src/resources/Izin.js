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
      icon: "Heart",
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
    editProperties: ["nik_pengganti", "status"],
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
          { value: 0, label: "Ditolak" },
          { value: 1, label: "Menunggu" },
          { value: 2, label: "Disetujui" },
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
