import generateabsensi from "../utils/generateabsensi.js";
import moment from "moment";
import db from "../models/index.js";

const Sequelize = db.Sequelize;

const getLaporanAbsensi = async (request, response, data) => {
  const method = request.method;
  if (method == "get") {
    const karyawan = await db["Karyawan"].findAll({
      raw: true,
    });
    return { karyawan: JSON.stringify(karyawan) };
  }

  if (request.payload.type == "absensi") {
    const absensi = await db.sequelize.query("", {
      type: db.Sequelize.QueryTypes.SELECT,
    });

    return {
      absensi,
      // url: generateabsensi({
      //   month: request.payload.month,
      //   karyawan,
      // }),
    };
  }

  if (request.payload.type == "absensiAll") {
    const ddate = request.payload.month.split("-");
    const month = ddate[1];
    const year = ddate[0];

    const rawAbsensi = await db.sequelize.query(
      "select k.nik as `Karyawan.nik`, k.nama as `Karyawan.nama`, d.nama as `Karyawan.divisi`, date(a.created_at) as `Absensi.tanggal`, " +
        "sum(a.status) as `Absensi.jumlah`, if(sum(a.status) >= 2, 'hadir','tidak hadir') as `Absensi.status`" +
        "from karyawan k " +
        "join divisi d on k.id_divisi=id " +
        "left join absensi a on a.nik=k.nik " +
        `where month(a.created_at) = ${month} and year(a.created_at) = ${year} ` +
        "group by k.nik, date(a.created_at) ",
      {
        type: db.Sequelize.QueryTypes.SELECT,
        nest: true,
      }
    );
    console.log(rawAbsensi)
    const karyawan = rawAbsensi.reduce((acc, entry) => {
      if (acc == undefined) acc = [];
      if (
        acc.find((item) => item.Karyawan.nik == entry.Karyawan.nik) == undefined
      ) {
        acc.push({
          Karyawan: {
            nik: entry.Karyawan.nik,
            nama: entry.Karyawan.nama,
            divisi: entry.Karyawan.divisi,
          },
          Absensi: [],
        });
      }
      const pivot = acc.find((item) => item.Karyawan.nik == entry.Karyawan.nik);
      pivot.Absensi.push({
        tanggal: entry.Absensi.tanggal,
        jumlah: entry.Absensi.jumlah,
        status: entry.Absensi.status,
      });
      return acc;
    }, []);

    const rawLembur = await db.sequelize.query(
      "select k.nik as `Karyawan.nik`, k.nama as `Karyawan.nama`, d.nama as `Karyawan.divisi`,  " +
        "date(l.created_at) as `Lembur.tanggal`, l.status as `Lembur.status`  " +
        "from karyawan k join divisi d on k.id_divisi=id " +
        "left join lembur l on l.nik=k.nik and l.status = 2 " +
        `where month(l.created_at) = ${month} and year(l.created_at) = ${year} ` +
        "group by `Karyawan.nik`, `Lembur.tanggal` ",
      {
        type: db.Sequelize.QueryTypes.SELECT,
        nest: true,
      }
    );
    console.log(rawLembur)
    rawLembur.reduce((acc, entry) => {
      const pivot = acc.find((item) => item.Karyawan.nik == entry.Karyawan.nik);
      if (pivot.Lembur == undefined) pivot.Lembur = [];
      pivot.Lembur.push({
        tanggal: entry.Lembur.tanggal,
        status: entry.Lembur.status,
      });
      return acc;
    }, karyawan);

    //TODO: IZIN & MCU

    console.log(karyawan)
    return {
      karyawan,
      url: generateabsensi({
        month: request.payload.month,
        karyawan,
      }),
    };
  }
  return "_";
};

export default getLaporanAbsensi;
