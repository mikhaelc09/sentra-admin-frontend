
import generateabsensi from "../../../utils/generateabsensi.js";
import moment from "moment";
import db from "../../../models/index.js";

const Sequelize = db.Sequelize;

const getLaporanAbsensi = async (request, response, data) => {
  if (request.payload.type == "absensi") {
    const ddate = request.payload.month.split("-");
    const month = ddate[1];
    const year = ddate[0];
    const filterMonth = [
      Sequelize.where(
        Sequelize.fn("MONTH", Sequelize.col("created_at")),
        month
      ),
      Sequelize.where(Sequelize.fn("YEAR", Sequelize.col("created_at")), year),
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
      if (
        karyawan
          .find((item) => item.nik == a.nik)
          .masuk.indexOf(moment(a.created_at).format("YYYY-MM-DD")) == -1
      ) {
        karyawan
          .find((item) => item.nik == a.nik)
          .masuk.push(moment(a.created_at).format("YYYY-MM-DD"));
      }
    }
    for (const l of lembur) {
      if (karyawan.find((item) => item.nik == l.nik).lembur == null)
        karyawan.find((item) => item.nik == l.nik).lembur = 0;
      karyawan.find((item) => item.nik == l.nik).lembur += 1;
    }
    for (const l of izin) {
      if (karyawan.find((item) => item.nik == l.nik).cuti == null)
        karyawan.find((item) => item.nik == l.nik).cuti = 0;
      karyawan.find((item) => item.nik == l.nik).cuti += 1;
    }
    for (const l of mcu) {
      if (karyawan.find((item) => item.nik == l.nik).mcu == null)
        karyawan.find((item) => item.nik == l.nik).mcu = 0;
      karyawan.find((item) => item.nik == l.nik).mcu += 1;
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
};


export default getLaporanAbsensi