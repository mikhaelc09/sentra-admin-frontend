import db from "../models/index.js";
import { Components } from "../components/index.js";
import getJadwal from "../hooks/getJadwal.js";

export default {
  resource: db["Karyawan"],
  options: {
    parent: {
      name: "",
      icon: "User",
    },
    listProperties: ["nik", "nama", "email", "status"],
    filterProperties: ["nik", "nama", "email", "status"],
    editProperties: ["nik","nama","id_divisi","email","no_telp","nama_rekening","no_rekening","keterangan","status","gaji_pokok", "tunjangan_perusahaan"],
    showProperties: ["nik","nama","id_divisi","email","no_telp","nama_rekening","no_rekening","keterangan","tabel_jamkerja","gaji_pokok", "tunjangan_perusahaan"],
    actions: {
      show: { after: [getJadwal()] },
    },
    properties: {
      nama: { isTitle: true },
      status: {
        availableValues: [
          { value: 0, label: "Inactive" },
          { value: 1, label: "Active" },
        ],
      },
      tanggal_lahir: { type: "date" },
      tabel_jamkerja: {
        components: {
          show: Components.TableJamKerja,
        },
        position: 99,
      },
    },
    sort: {
      sortBy: "nama",
      direction: "asc",
    },
  },
};
