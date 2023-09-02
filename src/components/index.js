import  { getAbsolutePath } from '../utils/pathUtils.js'
import { ComponentLoader } from 'adminjs';

const loader = new ComponentLoader()
const Components  = {
  DateField: loader.add('DateField', getAbsolutePath('./components/DateField.jsx')),
  Dashboard: loader.add('Dashboard', getAbsolutePath('./components/Dashboard.jsx')),
  ListKaryawan: loader.add('ListKaryawan', getAbsolutePath('./components/ListKaryawan.jsx')),
  WorkHour: loader.add('WorkHour', getAbsolutePath('./components/WorkHour.jsx')),
  ConfirmIzin: loader.add('ConfirmIzin', getAbsolutePath('./components/ConfirmIzin.jsx')),
  ConfirmLembur: loader.add('ConfirmLembur', getAbsolutePath('./components/ConfirmLembur.jsx')),
  TableJamKerja: loader.add('TableJamKerja', getAbsolutePath('./components/TableJamKerja.jsx')),
  SettingGaji: loader.add('SettingGaji', getAbsolutePath('./components/pages/SettingGaji.jsx')),
  // MapLokasi: loader.add('MapLokasi', getAbsolutePath('./components/MapLokasi.jsx')),
  SiapkanGaji: loader.add('SiapkanGaji', getAbsolutePath('./components/SiapkanGaji.jsx')),
  Penggajian: loader.add('Penggajian', getAbsolutePath('./components/pages/Penggajian.jsx')),
  MonitorAbsensi: loader.add('MonitorAbsensi', getAbsolutePath('./components/pages/MonitorAbsensi.jsx')),
  LaporanAbsensi: loader.add('LaporanAbsensi', getAbsolutePath('./components/pages/LaporanAbsensi.jsx')),
  Signature: loader.add('Signature', getAbsolutePath('./components/Signature.jsx')),  
  Login: loader.override('Login', getAbsolutePath('./components/pages/LoginPage.jsx')),
}

export {
    Components,
    loader
}