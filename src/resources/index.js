import AbsensiResource from "./AbsensiResource.js";
import DivisiResource from "./DivisiResource.js";
import DPenggajianResource from "./DPenggajianResource.js";
import HPenggajianResource from "./HPenggajianResource.js";
import IzinResource from "./IzinResource.js";
import JabatanResource from "./JabatanResource.js";
import JadwalResource from "./JadwalResource.js";
import KaryawanResource from "./KaryawanResource.js";
import LemburResource from "./LemburResource.js";
import LokasiPentingResource from "./LokasiPentingResource.js";


const resources = [
  {
    ...AbsensiResource,
    options: {
      parent: {
        name: "",
        icon: 'ListChecked',
      },
    },
  },
  {
    ...DivisiResource,
    options: {
      parent: {
        name: "",
        icon: 'Group',
      },
    },
  },
  {
    ...DPenggajianResource,
    options: {
      parent: {
        name: "",
        icon: 'ContainerServices',
      },
    },
  },
  {
    ...HPenggajianResource,
    options: {
      parent: {
        name: "",
        icon: 'Money',
      },
    },
  },
  {
    ...IzinResource,
    options: {
      parent: {
        name: "",
        icon: '',
      },
    },
  },
  {
    ...JadwalResource,
    options: {
      parent: {
        name: "",
        icon: 'InProgress',
      },
    },
  },
  {
    ...JabatanResource,
    options: {
      parent: {
        name: "",
        icon: 'ContainerServices',
      },
    },
  },
  {
    ...KaryawanResource,
    options: {
      parent: {
        name: "",
        icon: 'User',
      },
    },
  },
  {
    ...LemburResource,
    options: {
      parent: {
        name: "",
        icon: 'AlarmAdd',
      },
    },
  },
  {
    ...LokasiPentingResource,
    options: {
      parent: {
        name: "",
        icon: 'Location',
      },
    },
  },
];

export default resources;
