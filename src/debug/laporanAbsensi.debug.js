import { getKaryawan, getAbsensiIndividu, getAbsensiReport } from '../hooks/laporanAbsensiHandler.js';
import chalk from 'chalk';

const testGetKaryawan = async () => {
    console.log(chalk.bgBlue('test getKaryawan()'));
    try{
        const karyawan = await getKaryawan();
        console.log(karyawan);
        return 1
    }
    catch(e) {
        return 0
    }
}

const testGetAbsensiIndividu = async () => {
    console.log(chalk.bgBlue('test getAbsensiIndividu()'));
    try{
        const absensi = await getAbsensiIndividu(12, 2023, '1149715837');
        console.log(absensi);
        return 1
    }
    catch(e){
        return 0;
    }
}

const testGetAbsensiReport = async () => {
    console.log(chalk.bgBlue('test getAbsensiReport()'));
    try{
        const absensi = await getAbsensiReport(12, 2023);
        console.dirxml(absensi);
        return 1
    }
    catch(e){
        return 0;
    }
}


const laporanAbsensiDebug = async () => {
    let passResult = 0
    passResult += await testGetKaryawan()
    passResult += await testGetAbsensiIndividu()
    passResult += await testGetAbsensiReport()
    return ["Laporan Absensi", passResult, 3]
}

export default laporanAbsensiDebug