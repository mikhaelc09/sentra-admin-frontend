import db from '../models/index.js';
import { Components } from '../components/index.js';

export default {
    resource:db["Lembur"],
    options: {
      actions:{
        new:{
          isAccesible: false,
          isVisible: false,
        },
        delete:{
          isAccesible: false,
          isVisible: false,
        }
      },
      parent: {
        name: "",
        icon: 'Clock',
      },
      listProperties: ['nik', 'created_at', 'status'],
      editProperties: ['nik', 'status'],
      showProperties: ['nik', 'created_at', 'status','confirm_lembur'],
      filterProperties: ['nik', 'created_at', 'status'],
      properties:{
        status:{
          availableValues:[
            { value: 0, label: 'Ditolak' },
            { value: 1, label: 'Menunggu' },
            { value: 2, label: 'Disetujui' },
          ]
        },
        confirm_lembur: {
          components: {
              show: Components.ConfirmLembur,
          },
          position: 99,
        }
      }
    },
  }