import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  resource: db["Jadwal"],
  options: {
    parent: {
      name: "",
      icon: "Calendar",
    },
    listProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
    showProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
    editProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
    filterProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
    properties:{
      hari:{
        availableValues: [
          { value: "SENIN", label: "SENIN" },
          { value: "SELASA", label: "SELASA" },
          { value: "RABU", label: "RABU" },
          { value: "KAMIS", label: "KAMIS" },
          { value: "JUMAT", label: "JUMAT" },
          { value: "SABTU", label: "SABTU" },
          { value: "MINGGU", label: "MINGGU" },
        ],
      }
    },
  },
};
