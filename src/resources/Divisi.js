import db from "../models/index.js";
import { Components } from "../components/index.js";
import getKaryawan from '../hooks/getKaryawan.js';

export default {
  resource: db["Divisi"],
  options: {
    parent: {
      name: "",
      icon: "Group",
    },
    listProperties: ["id", "nama", "tunjangan"],
    showProperties: ["id", "nama", "tunjangan", "list_karyawan"],
    editProperties: ["nama", "tunjangan"],
    filterProperties: ["id", "nama", "tunjangan"],
    actions: {
      show: {
        after: [getKaryawan()],
      },
    },
    properties: {
      nama: {
        isTitle: true,
      },
      tunjangan: {
        type: "currency",
        props: {
          decimalSeparator: ".",
          fixedDecimalLength: 2,
          prefix: "Rp ",
          disableGroupSeparator: true,
        },
      },
      list_karyawan: {
        components: {
          show: Components.ListKaryawan,
        },
        position: 99,
      },
    },
  },
};
