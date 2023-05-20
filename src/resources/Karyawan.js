import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  resource: db["Karyawan"],
  options: {
    parent: {
      name: "",
      icon: "User",
    },
    listProperties: ["nik", "nama", "email", "status"],
    filterProperties: ["nik", "nama", "email", "status"],
    editProperties: [
      "nik",
      "nama",
      "id_divisi",
      "email",
      "no_telp",
      "tanggal_lahir",
      "alamat",
      "nama_rekening",
      "no_rekening",
      "keterangan",
    ],
    showProperties: [
      "nik",
      "nama",
      "id_divisi",
      "email",
      "no_telp",
      "tanggal_lahir",
      "alamat",
      "nama_rekening",
      "no_rekening",
      "keterangan",
    ],
    properties: {
      nama: {
        isTitle: true,
      },
      status: {
        availableValues: [
          { value: 0, label: "Inactive" },
          { value: 1, label: "Active" },
        ],
      },
      tanggal_lahir: {
        type: "date",
      },
      created_at: {
        components: {
          list: Components.DateField,
        },
      },
    },
    sort: {
      sortBy: "updatedAt",
      direction: "desc",
    },
  },
};
