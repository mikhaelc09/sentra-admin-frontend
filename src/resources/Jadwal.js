import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  resource: db["Jadwal"],
  options: {
    parent: {
      name: "",
      icon: "Timer",
    },
    listProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
    showProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
    editProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
    filterProperties: ["nik", "id_lokasi", "hari", "jam_kerja"],
  },
};
