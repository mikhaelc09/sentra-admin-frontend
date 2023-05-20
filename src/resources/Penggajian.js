import db from "../models/index.js";
import { Components } from "../components/index.js";

export default {
  resource: db["HPenggajian"],
  options: {
    parent: {
      name: "",
      icon: "Money",
    },
    id: "Penggajian",
  },
};
