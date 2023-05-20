import db from '../models/index.js';
import { Components } from '../components/index.js';

export default {
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
  }