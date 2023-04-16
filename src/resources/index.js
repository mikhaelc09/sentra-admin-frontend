const AbsensiResource = require("./AbsensiResource.js");
const DivisiResource = require("./DivisiResource.js");
const DPenggajianResource = require("./DPenggajianResource.js");
const HPenggajianResource = require("./HPenggajianResource.js");
const IzinResource = require("./IzinResource.js");
const JabatanResource = require("./JabatanResource.js");
const JadwalResource = require("./JadwalResource.js");
const KaryawanResource = require("./KaryawanResource.js");
const LemburResource = require("./LemburResource.js");
const LokasiPentingResource = require("./LokasiPentingResource.js");


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

module.exports = resources;
