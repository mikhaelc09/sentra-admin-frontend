import db from '../models/index.js';
import { Components } from '../components/index.js';

export default {
    resource:db["Lembur"],
    options: {
      actions:{
        new:{
          isAccesible: false,
          isVisible: false,
        }
      },
      parent: {
        name: "",
        icon: 'AlarmAdd',
      },
      listProperties: ['nik', 'created_at', 'status'],
      listProperties: ['nik', 'created_at', 'status'],
      listProperties: ['nik', 'created_at', 'status'],
      listProperties: ['nik', 'created_at', 'status'],
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