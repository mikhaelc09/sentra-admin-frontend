import db from '../models/index.js';
import { Components } from '../components/index.js';

export default {
    resource:db["Constant"],
    options: {
      id:  "Setting",
      parent: {
        name: "",
        icon: 'SettingsAdjust',
      },
    },
  }