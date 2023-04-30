import db from '../models/index.js';

const resources = [
  {
    resource:db["Karyawan"],
    options: {
      parent: {
        name: "Karyawan",
        icon: 'User',
      },
      listProperties: ['email', 'created_at'],
      properties:{
        created_at:{
          type:'date',
        }
      }
    },
  },
  {
    resource:db["Divisi"],
    options: {
      parent: {
        name: "Karyawan",
        icon: 'Group',
      },
    },
  },
  {
    resource:db["Absensi"],
    options: {
      parent: {
        name: "",
        icon: 'ListChecked',
      },
    },
  },
  {
    resource:db["HPenggajian"],
    options: {
      parent: {
        name: "",
        icon: 'Money',
      },
      id: "Penggajian"
    },
  },
  {
    resource:db["Jadwal"],
    options: {
      parent: {
        name: "",
        icon: 'Timer',
      },
    },
  },
  {
    resource:db["Izin"],
    options: {
      parent: {
        name: "",
        icon: 'HealthCross',
      },
    },
  },
  {
    resource:db["Lembur"],
    options: {
      parent: {
        name: "",
        icon: 'AlarmAdd',
      },
    },
  },
  {
    resource:db["LokasiPenting"],
    options: {
      parent: {
        name: "",
        icon: 'Location',
      },
    },
  },
  {
    resource:db["Constant"],
    options: {
      id:  "Setting",
      parent: {
        name: "",
        icon: 'SettingsAdjust',
      },
    },
  },
];

// console.log(resources);

export default resources;
