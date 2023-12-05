import moment from "moment";
import db from "../models/index.js";

const Sequelize = db.Sequelize;
const getMonitorAbsensiData = async (request, response, data) => {
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
  }
  
  export default getMonitorAbsensiData