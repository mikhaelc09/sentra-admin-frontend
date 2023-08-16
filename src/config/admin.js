import AdminJS from "adminjs";
import SequelizeAdapter from "@adminjs/sequelize";
import sequelize from "../models/index.js";
import resources from "./resource.js";
import moment from "moment";
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
      const KaryawanMasuk = await sequelize.Absensi.findAndCountAll({
        where: {
          created_at: {
            [sequelize.Sequelize.Op.gte]: new Date(
              new Date().setHours(0, 0, 1)
            ),
          },
        },
      });
      const Karyawan = await sequelize.Karyawan.findAndCountAll();
      const Izin = await sequelize.Izin.findAndCountAll({
        where: {
          status: 2,
          waktu_mulai: {
            [sequelize.Sequelize.Op.lte]: new Date(),
          },
          waktu_selesai: {
            [sequelize.Sequelize.Op.gte]: new Date(),
          },
        },
      });
      const CutiCount = Izin.rows.filter((item) => item.jenis === 1).length;
      const MCUCount = Izin.rows.filter((item) => item.jenis === 2).length;
      const PengajuanIzin = await sequelize.Izin.findAndCountAll({
        where: {
          status: 1,
        },
      });
      const PengajuanLembur = await sequelize.Lembur.findAndCountAll({
        where: {
          status: 1,
        },
      });

      const lastWeek = new Date(new Date() - 7 * 24 * 60 * 60 * 1000);
      const presensiKey = [];
      for (let i = 0; i < 7; i++) {
        presensiKey.push(
          new Date(lastWeek.setDate(lastWeek.getDate() + 1))
            .toISOString()
            .split("T")[0]
        );
      }

      const Presensi = await sequelize.Absensi.findAndCountAll({
        where: {
          created_at: {
            [sequelize.Sequelize.Op.gte]: presensiKey[0],
          },
        },
        attributes: [
          [
            sequelize.Sequelize.fn(
              "DATE",
              sequelize.Sequelize.col("created_at")
            ),
            "tanggal",
          ],
          [sequelize.Sequelize.fn("COUNT", "*"), "jumlah"],
        ],
        group: [
          sequelize.Sequelize.fn("DATE", sequelize.Sequelize.col("created_at")),
        ],
      });

      return {
        DataKaryawan: [
          { name: "Masuk", value: KaryawanMasuk.count },
          { name: "Izin", value: Izin.count },
          { name: "Belum Absen", value: Karyawan.count - KaryawanMasuk.count },
        ],
        DataIzin: [
          { name: "MCU", value: MCUCount },
          { name: "Cuti", value: CutiCount },
        ],
        DataPresensi: presensiKey.map((v) => {
          const data = Presensi.count.find((p) => {
            return p["DATE(`created_at`)"] == v;
          });
          return {
            jumlah_hadir: data ? data.count : 0,
            name: moment(v).format("DD MMM"),
          };
        }),
        DataPengajuanIzin: PengajuanIzin.rows.map((v) => {
          return {
            nik: v.nik,
            mulai: v.waktu_mulai,
            selesai: v.waktu_selesai,
            jenis: v.jenis,
          };
        }),
        DataPengajuanLembur: PengajuanLembur.rows.map((v) => {
          return {
            nik: v.nik,
            waktu: v.created_at,
          };
        }),
        JumlahKaryawan: Karyawan.count,
        JumlahAbsen: KaryawanMasuk.count,
        JumlahIzin: Izin.count,
        Tanggal: moment().format("dddd, D MMMM YYYY"),
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
    language: "en",
    availableLanguage: ["en", "id"],
  },
};

const adminJS = new AdminJS(adminJsOptions);

adminJS.watch();

export default adminJS;
