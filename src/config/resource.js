import AbsensiResource from '../resources/Absensi.js';
import ConstantResource from '../resources/Constant.js';
import DivisiResource from '../resources/Divisi.js';
import IzinResource from '../resources/Izin.js';
import JadwalResource from '../resources/Jadwal.js';
import KaryawanResource from '../resources/Karyawan.js';
import LemburResource from '../resources/Lembur.js';
import LokasiPentingResource from '../resources/LokasiPenting.js';
import PenggajianResource from '../resources/Penggajian.js';

const resources = [
  KaryawanResource,
  DivisiResource,
  JadwalResource,
  AbsensiResource,
  IzinResource,
  LemburResource,
  PenggajianResource,
  LokasiPentingResource,
];

// console.log(resources);

export default resources;
