import { Components } from '../index.js';
import db from '../../models/index.js';
import moment from 'moment';

const Sequelize = db.Sequelize;
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
            const ddate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0)
            const month = moment(ddate).format('MM')
            const year = moment(ddate).format('YYYY')
            const karyawan = await db["Karyawan"].findAll({
                raw:true
            })
            const absensi = await db["Absensi"].findAll({
                raw: true,
                where: {
                    [Sequelize.Op.and]: [
                        Sequelize.where(Sequelize.fn('MONTH', Sequelize.col('created_at')), month),
                        Sequelize.where(Sequelize.fn('YEAR', Sequelize.col('created_at')), year),
                        Sequelize.where(Sequelize.col('status'), 1)
                    ]
                }
            })
            for (const a of absensi) {
                if(karyawan.find((item) => item.nik == a.nik).masuk == null){
                    karyawan.find((item) => item.nik == a.nik).masuk = 0;
                }
                if(karyawan.find((item) => item.nik == a.nik).masukToday == null){
                    karyawan.find((item) => item.nik == a.nik).masukToday = false
                }
                karyawan.find((item) => item.nik == a.nik).masuk += 1
                if(moment(a.created_at).format("YYYY-MM-DD") == moment().format("YYYY-MM-DD")){
                    karyawan.find((item) => item.nik == a.nik).masukToday = true
                }
            }
            console.log(karyawan)
            return {
                karyawan
            }
        }
    }
}

export default pages