import { Components } from '../index.js';
import db from '../../models/index.js';

const pages = {
    SettingGaji:{
        label: "Setting Gaji",
        component: Components.SettingGaji,
        icon: 'SettingsAdjust',
        handler: async(request, response, data) => {
            const gaji = await db["Constant"].findAll({
                raw:true
            })
            return {
                gajiPokok:gaji[0].intvalue,
                tunjanganPerusahaan:gaji[1].intvalue,
                uangMakan:gaji[2].intvalue,
                uangTransportasi:gaji[3].intvalue,
                feeLembur:gaji[4].intvalue,
                BPJSKesehatan:gaji[5].intvalue,
            }
        }
    },
    MonitorAbsensi: {
        label: "Monitor Absensi",
        component: Components.MonitorAbsensi,
        icon: 'Calendar',
        handler: async(request, response, data) => {
            const karyawan = await db["Karyawan"].findAll({
                raw:true
            })
            return {
                karyawan
            }
        }
    }
}

export default pages