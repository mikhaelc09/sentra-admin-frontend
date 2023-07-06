import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  resource: db["Absensi"],
  options: {
    parent: {
      name: "",
      icon: "ListChecked",
    },
    listProperties: ["nik", "created_at", "is_lembur", "status", "keterangan"],
    filterProperties: [
      "nik",
      "is_lembur",
      "keterangan",
      "status",
      "created_at",
    ],
    showProperties: ["nik", "is_lembur", "status", "created_at", "keterangan"],
    editProperties: ["status"],
    properties: {
      status: {
        availableValues: [
          { value: 0, label: "Invalid" },
          { value: 1, label: "Valid" },
        ],
      },
      is_lembur: {
        availableValues: [
          { value: 0, label: "Normal" },
          { value: 1, label: "Overtime" },
        ],
      },
    },
    sort: {
      sortBy: "created_at",
      direction: "desc",
    },
  },
};
