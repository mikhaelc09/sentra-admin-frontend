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
    // handler: async () => {
    // //   return {
    // //     dataIzin: [
    // //       { name: "MCU", value: 5 },
    // //       { name: "Cuti", value: 6 },
    // //     ],
    // //     // dataKaryawan: [
    // //     //   { name: "Masuk", value: 25 },
    // //     //   { name: "Izin", value: 4 },
    // //     //   { name: "Belum Absen", value: 2 },
    // //     // ],
    // //     // dataPresensi: [
    // //     //   { jumlah_hadir: 31, name: "09 Jun" },
    // //     //   { jumlah_hadir: 31, name: "10 Jun" },
    // //     //   { jumlah_hadir: 30, name: "11 Jun" },
    // //     //   { jumlah_hadir: 31, name: "12 Jun" },
    // //     //   { jumlah_hadir: 31, name: "13 Jun" },
    // //     //   { jumlah_hadir: 29, name: "14 Jun" },
    // //     //   { jumlah_hadir: 25, name: "15 Jun" },
    // //     // ],
    // //   };
    // },
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
};

const adminJS = new AdminJS(adminJsOptions);

adminJS.watch();

export default adminJS;
