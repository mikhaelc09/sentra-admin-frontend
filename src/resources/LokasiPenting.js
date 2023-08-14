import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  //TODO: Make Map View on Show & Map Choose from from edit & create
  resource: db["LokasiPenting"],
  options: {
    parent: {
      name: "",
      icon: "Navigation2",
    },
    listProperties: ["nama", "longitude", "latitude"],
    showProperties: ["nama", "longitude", "latitude"],
    filterProperties: ["nama"],
    editProperties: ["nama", "longitude", "latitude"],
    properties: {
      nama: {
        isTitle: true,
      },
      peta: {
        components: {
          show: Components.MapLokasi,
        },
        position: 99,
      },
    },
  },
};
