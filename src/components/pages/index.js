import { Components } from "../index.js";
import db from "../../models/index.js";
import moment from "moment";
import { toFormData } from "axios";
import generateabsensi from "../../utils/generateabsensi.js";

const Sequelize = db.Sequelize;
const pages = {
  SettingGaji: {
    label: "Setting Gaji",
    component: Components.SettingGaji,
    icon: "SettingsAdjust",
    handler: async (request, response, data) => {
      const gaji = await db["Constant"].findAll({
        raw: true,
      });
      return {
        gajiPokok: gaji[0].intvalue,
        tunjanganPerusahaan: gaji[1].intvalue,
        uangMakan: gaji[2].intvalue,
        uangTransportasi: gaji[3].intvalue,
        feeLembur: gaji[4].intvalue,
        BPJSKesehatan: gaji[5].intvalue,
      };
    },
  },
  MonitorAbsensi: {
    label: "Monitor Absensi",
    component: Components.MonitorAbsensi,
    icon: "Calendar",
    handler: async (request, response, data) => {
      const ddate = new Date(
        new Date().getFullYear(),
        new Date().getMonth() + 1,
        0
      );
      const month = moment(ddate).format("MM");
      const year = moment(ddate).format("YYYY");
      const karyawan = await db["Karyawan"].findAll({
        raw: true,
      });
      const absensi = await db["Absensi"].findAll({
        raw: true,
        where: {
          [Sequelize.Op.and]: [
            Sequelize.where(
              Sequelize.fn("MONTH", Sequelize.col("created_at")),
              month
            ),
            Sequelize.where(
              Sequelize.fn("YEAR", Sequelize.col("created_at")),
              year
            ),
            Sequelize.where(Sequelize.col("status"), 1),
          ],
        },
      });
      for (const a of absensi) {
        if (karyawan.find((item) => item.nik == a.nik).masuk == null)
          karyawan.find((item) => item.nik == a.nik).masuk = [];
        if (karyawan.find((item) => item.nik == a.nik).masukToday == null)
          karyawan.find((item) => item.nik == a.nik).masukToday = false;
        if (
          karyawan
            .find((item) => item.nik == a.nik)
            .masuk.indexOf(moment(a.created_at).format("YYYY-MM-DD")) == -1
        )
          karyawan
            .find((item) => item.nik == a.nik)
            .masuk.push(moment(a.created_at).format("YYYY-MM-DD"));
        if (
          moment(a.created_at).format("YYYY-MM-DD") ==
          moment().format("YYYY-MM-DD")
        )
          karyawan.find((item) => item.nik == a.nik).masukToday = true;
      }
      return { karyawan: JSON.stringify(karyawan) };
    },
  },
  LaporanAbsensi: {
    label: "Laporan",
    component: Components.LaporanAbsensi,
    icon: "ReportData",
    handler: async (request, response, data) => {
      if (request.payload.type == "absensi") {
        const ddate = request.payload.month.split("-");
        const month = ddate[1];
        const year = ddate[0];
        const filterMonth = [
            Sequelize.where(
              Sequelize.fn("MONTH", Sequelize.col("created_at")),
              month
            ),
            Sequelize.where(
              Sequelize.fn("YEAR", Sequelize.col("created_at")),
              year
            ),
          ];
        const karyawan = await db["Karyawan"].findAll({
          raw: true,
          attributes: ["nik", "nama"],
          include: [
            {
              model: db["Divisi"],
              attributes: ["nama"],
            },
          ],
        });
        const lembur = await db["Lembur"].findAll({
          raw: true,
          where: {
            [Sequelize.Op.and]: [...filterMonth],
          },
        });
        const izin = await db["Izin"].findAll({
          raw: true,
          where: {
            [Sequelize.Op.and]: [
              ...filterMonth,
              Sequelize.where(Sequelize.col("jenis"), 1),
            ],
          },
        });
        const mcu = await db["Izin"].findAll({
          raw: true,
          where: {
            [Sequelize.Op.and]: [
              ...filterMonth,
              Sequelize.where(Sequelize.col("jenis"), 2),
            ],
          },
        });
        const absensi = await db["Absensi"].findAll({
          raw: true,
          where: {
            [Sequelize.Op.and]: [
              ...filterMonth,
              Sequelize.where(Sequelize.col("status"), 1),
            ],
          },
        });
        for (const a of absensi) {
          if (karyawan.find((item) => item.nik == a.nik).masuk == null)
            karyawan.find((item) => item.nik == a.nik).masuk = [];
          if (karyawan
              .find((item) => item.nik == a.nik)
              .masuk.indexOf(moment(a.created_at).format("YYYY-MM-DD")) == -1) {
            karyawan
              .find((item) => item.nik == a.nik)
              .masuk.push(moment(a.created_at).format("YYYY-MM-DD"));
          }
        }
        for (const l of lembur) {
            if (karyawan.find((item) => item.nik == l.nik).lembur == null)
                karyawan.find((item) => item.nik == l.nik).lembur = 0
            karyawan.find((item) => item.nik == l.nik).lembur+=1
        }
        for (const l of izin) {
            if (karyawan.find((item) => item.nik == l.nik).cuti == null)
                karyawan.find((item) => item.nik == l.nik).cuti = 0
            karyawan.find((item) => item.nik == l.nik).cuti+=1
        }
        for (const l of mcu) {
            if (karyawan.find((item) => item.nik == l.nik).mcu == null)
                karyawan.find((item) => item.nik == l.nik).mcu = 0
            karyawan.find((item) => item.nik == l.nik).mcu+=1
        }
        console.log(karyawan);
        return {
          url: generateabsensi({
            month: request.payload.month,
            karyawan,
          }),
        };
      }
      return "_";
    },
  },
};

export default pages;
