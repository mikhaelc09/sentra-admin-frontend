import AdminJS from "adminjs";
import SequelizeAdapter from "@adminjs/sequelize";
import sequelize from "../models/index.js";
import resources from "./resource.js";
import pages from "../components/pages/index.js";
import { loader as componentLoader, Components } from "../components/index.js";

AdminJS.registerAdapter({
  Resource: SequelizeAdapter.Resource,
  Database: SequelizeAdapter.Database,
});
const adminJsOptions = {
  dashboard: {
    component: Components.Dashboard,
    handler: async () => {
      return {
        DataKaryawan: [
          { name: "Masuk", value: 25 },
          { name: "Izin", value: 4 },
          { name: "Belum Absen", value: 2 },
        ],
        DataIzin: [
          { name: "MCU", value: 3 },
          { name: "Cuti", value: 1 },
        ],
        DataPresensi: [
          { jumlah_hadir: 31, name: "09 Jun" },
          { jumlah_hadir: 31, name: "10 Jun" },
          { jumlah_hadir: 30, name: "11 Jun" },
          { jumlah_hadir: 31, name: "12 Jun" },
          { jumlah_hadir: 31, name: "13 Jun" },
          { jumlah_hadir: 29, name: "14 Jun" },
          { jumlah_hadir: 25, name: "15 Jun" },
        ],
        DataPengajuanIzin: [
          {
            nik: "2021212",
            mulai: "2023-07-30",
            selesai: "2023-07-31",
            jenis: 1,
          },
          {
            nik: "2213112",
            mulai: "2023-08-05",
            selesai: "2023-08-07",
            jenis: 2,
          },
          {
            nik: "2028432",
            mulai: "2023-08-10",
            selesai: "2023-08-12",
            jenis: 1,
          },
          {
            nik: "2067353",
            mulai: "2023-08-10",
            selesai: "2023-08-15",
            jenis: 2,
          },
        ],
        DataPengajuanLembur: [
          {
            nik: "46144324",
            waktu: "2023-07-12",
          },
          {
            nik: "68456785",
            waktu: "2023-08-10",
          },
          {
            nik: "93345645",
            waktu: "2023-08-13",
          },
        ],
      };
    },
  },
  pages,
  resources: resources,
  rootPath: "/admin",
  logoutPath: "/admin/logout",
  branding: {
    companyName: "Sentra Medika Surabaya",
    logo: "/assets/logo_white.png",
    withMadeWithLove: false,
    favicon: "/assets/logo_white.png",
  },
  database: sequelize,
  adapter: SequelizeAdapter,
  assets: {
    styles: ["/styles/sidebar.css"],
  },
  componentLoader,
  locale: {
    language: 'en',
    availableLanguage: ['en', 'id']
  }
};

const adminJS = new AdminJS(adminJsOptions);

adminJS.watch();

export default adminJS;
