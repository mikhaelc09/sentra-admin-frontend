import db from '../models/index.js';
import { Components } from '../components/index.js';
import getKaryawan from '../hooks/getKaryawan.js';

const resources = [
  {
    resource:db["Karyawan"],
    options: {
      parent: {
        name: "",
        icon: 'User',
      },
      listProperties: ['nik', 'nama', 'email','status'],
      filterProperties: ['nik', 'nama', 'email','status'],
      editProperties: ['nik','nama','id_divisi','email','no_telp','tanggal_lahir', 'alamat','nama_rekening','no_rekening', 'keterangan'],
      showProperties: ['nik','nama','id_divisi','email','no_telp','tanggal_lahir', 'alamat','nama_rekening','no_rekening', 'keterangan'],
      properties:{
        nama:{
          isTitle: true
        },
        status:{
          availableValues:[
            { value: 0, label: 'Inactive' },
            { value: 1, label: 'Active' },
          ]
        },
        tanggal_lahir:{
          type:'date'
        },
        created_at:{
          components: {
            list: Components.DateField
          }
        }
      },
      sort:{
        sortBy: 'updatedAt',
        direction: 'desc',
      }
    },
  },
  {
    resource:db["Divisi"],
    options: {
      parent: {
        name: "",
        icon: 'Group',
      },
      listProperties: ['id','nama','tunjangan'],
      showProperties: ['id', 'nama', 'tunjangan','list_karyawan'],
      editProperties: ['nama', 'tunjangan'],
      filterProperties: ['id','nama', 'tunjangan'],
      actions:{
        show: {
          after: [getKaryawan()]
        }
      },
      properties:{
        nama:{
          isTitle: true
        },
        tunjangan:{
          type:'currency',
          props:{
            decimalSeparator: '.',
            fixedDecimalLength:2,
            prefix:'Rp ',
            disableGroupSeparator: true
          }
        },
        list_karyawan:{
          components:{
            show: Components.ListKaryawan
          },
          position: 99
        }
      }
    },
  },
  {
    //TODO: Sort by last created_at
    //TODO: Filter default on today
    resource:db["Absensi"],
    options: {
      parent: {
        name: "",
        icon: 'ListChecked',
      },
      listProperties: ['nik', 'created_at', 'keterangan', 'is_lembur', 'status'], 
      filterProperties: ['nik', 'is_lembur', 'keterangan', 'status', 'created_at'], 
      showProperties: ['nik', 'is_lembur', 'keterangan', 'status', 'created_at'], 
      properties:{
        status:{
          availableValues:[
            { value: 0, label: 'Invalid' },
            { value: 1, label: 'Valid' },
          ]
        },
        is_lembur:{
          availableValues:[
            { value: 0, label: 'Normal' },
            { value: 1, label: 'Overtime' },
          ]
        },
      },
      sort:{
        sortBy: 'created_at',
        direction: 'desc',
      }
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
    //TODO: Show each jam_kerja as a column
    resource:db["Jadwal"],
    options: {
      parent: {
        name: "",
        icon: 'Timer',
      },
      listProperties: ['nik', 'id_lokasi', 'hari', 'jam_kerja'],
      showProperties: ['nik', 'id_lokasi', 'hari', 'jam_kerja'],
      editProperties: ['nik', 'id_lokasi', 'hari', 'jam_kerja'],
      filterProperties: ['nik', 'id_lokasi', 'hari', 'jam_kerja'],
    },
  },
  {
    resource:db["Izin"],
    options: {
      parent: {
        name: "",
        icon: 'HealthCross',
      },
      listProperties: ["nik_pengaju", "nik_pengganti", "waktu_mulai", "waktu_selesai", "jenis", "status"],
      editProperties: ["nik_pengganti", "status"],
      showProperties: ["nik_pengaju", "nik_pengganti", "waktu_mulai", "waktu_selesai", "jenis", "status"],
      properties:{
        status:{
          availableValues:[
            { value: 0, label: 'Rejected' },
            { value: 1, label: 'Pending' },
            { value: 2, label: 'Approved' },
          ]
        }
      }
    },
  },
  {
    resource:db["Lembur"],
    options: {
      parent: {
        name: "",
        icon: 'AlarmAdd',
      },
      listProperties: ['nik', 'tanggal', 'status'],
      listProperties: ['nik', 'tanggal', 'status'],
      listProperties: ['nik', 'tanggal', 'status'],
      listProperties: ['nik', 'tanggal', 'status'],
      properties:{
        status:{
          availableValues:[
            { value: 0, label: 'Rejected' },
            { value: 1, label: 'Pending' },
            { value: 2, label: 'Approved' },
          ]
        }
      }
    },
  },
  {
    //TODO: Make Map View on Show & Map Choose from from edit & create
    resource:db["LokasiPenting"],
    options: {
      parent: {
        name: "",
        icon: 'Location',
      },
      listProperties:['nama', 'longitude', 'latitude'],
      showProperties:['nama', 'longitude', 'latitude'],
      filterProperties:['nama'],
      editProperties:['nama', 'longitude', 'latitude'],
      properties:{
        nama:{
          isTitle: true
        }
      }
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
