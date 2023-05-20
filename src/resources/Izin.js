import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  resource: db["Izin"],
  options: {
    parent: {
      name: "",
      icon: "HealthCross",
    },
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
      "waktu_mulai",
      "waktu_selesai",
      "jenis",
      "status",
    ],
    properties: {
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
    },
  },
};
