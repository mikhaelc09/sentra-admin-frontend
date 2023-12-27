import generateabsensi from "../utils/generateabsensi.js";
import generateabsensiSatuan from "../utils/generateabsensiSatuan.js";
import db from "../models/index.js";

const Sequelize = db.Sequelize;

const getLaporanAbsensi = async (request, response, data) => {
  const method = request.method;

  /**
   * GET Method
   * Handler untuk mengembalikan value seluruh karyawan
   */
  if (method == "get") {
    const karyawan = await db["Karyawan"].findAll({
      raw: true,
    });
    return { karyawan: JSON.stringify(karyawan) };
  }

  /**
   * POST METHOD
   * Absensi
   * 
   * Handler untuk mengembalikan value absensi karyawan secara individual
   * Data akan dikirim untuk diolah menjadi laporan individu
   */
  if (request.payload.type == "absensi") {
    const ddate = request.payload.month.split("-");
    const month = ddate[1];
    const year = ddate[0];
    const nik = request.payload.nik;
    const rawAbsensi = await db.sequelize.query(
      "select k.nik as `Karyawan.nik`, k.nama as `Karyawan.nama`, d.nama as `Karyawan.divisi`, date(a.created_at) as `Absensi.tanggal`, " +
        "a.created_at as `Absensi.jam`, a.status `Absensi.status` " +
        "from karyawan k join divisi d on k.id_divisi=id  " +
        "left join absensi a on a.nik=k.nik and a.status = 1 " +
        "where month(a.created_at) = :month and year(a.created_at) = :year and k.nik = :nik ",
      {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          month,
          year,
          nik,
        },
        nest: true,
      }
    );

    let absensi = {
      nik: rawAbsensi[0].Karyawan.nik,
      nama: rawAbsensi[0].Karyawan.nama,
      divisi: rawAbsensi[0].Karyawan.divisi,
      Absensi: [],
    };
    rawAbsensi.reduce((acc, entry) => {
      const index = acc.Absensi.findIndex(
        (item) => item.tanggal == entry.Absensi.tanggal
      );

      if (index == -1) {
        acc.Absensi.push({
          tanggal: entry.Absensi.tanggal,
          jam_masuk: entry.Absensi.jam,
          jam_keluar: null,
          status: entry.Absensi.status,
        });

        return acc;
      }
      acc.Absensi[index].jam_keluar = entry.Absensi.jam;

      return acc;
    }, absensi);

    const rawLembur = await db.sequelize.query(
      "select nik, created_at, status from lembur " +
        "where month(created_at) = :month and year(created_at) = :year and nik = :nik and status = 2",
      {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          month,
          year,
          nik,
        },
        nest: true,
      }
    );

    rawLembur.reduce((acc, l) => {
      const index = acc.Absensi.findIndex((item) => {
        return item.tanggal == l.created_at.toISOString().split("T")[0];
      });

      if (index != -1) acc.Absensi[index].lembur = true;

      return acc;
    }, absensi);

    const rawIzin = await db.sequelize.query(
      "select waktu_mulai, waktu_selesai, keterangan, lokasi, jenis " +
        "from izin where status = 2 and month(created_at) = :month " +
        "and year(created_at) = :year and nik_pengaju = :nik",
      {
        type: Sequelize.QueryTypes.SELECT,
        replacements: {
          month,
          year,
          nik,
        },
      }
    );
    console.log('==Izin==')
    console.log(rawIzin)

    rawIzin.reduce((acc, item) => {
      const tanggal_mulai = item.waktu_mulai.split("-")[2];
      const tanggal_selesai = item.waktu_selesai.split("-")[2];
      for (let i = tanggal_mulai; i <= tanggal_selesai; i++) {
        const data = {
          tanggal: `${year}-${month}-${i}`,
          status: 0,
          keterangan: item.keterangan,
          jenis: item.jenis == 1 ? "Cuti" : "MCU",
        };
        if (item.jenis == 2) {
          data.lokasi = item.lokasi;
        }
        acc.Absensi.push(data);
      }

      return acc;
    }, absensi);

    return {
      absensi,
      url: generateabsensiSatuan({
        month: request.payload.month,
        absensi,
      }),
    };
  }


  /**
   * POST METHOD
   * AbsensiAll
   * 
   * Handler untuk mengembalikan value absensi karyawan keseluruhan
   * Data akan dikirim untuk diolah menjadi laporan individu
   * Sifat data berikut merupakan summary dari seluruh karyawan
   */
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
        type: Sequelize.QueryTypes.SELECT,
        nest: true,
      }
    );
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
        type: Sequelize.QueryTypes.SELECT,
        nest: true,
      }
    );

    rawLembur.reduce((acc, entry) => {
      const pivot = acc.find((item) => item.Karyawan.nik == entry.Karyawan.nik);
      if (pivot.Lembur == undefined) pivot.Lembur = [];
      pivot.Lembur.push({
        tanggal: entry.Lembur.tanggal,
        status: entry.Lembur.status,
      });
      return acc;
    }, karyawan);

    const rawIzin = await db.sequelize.query(
      "select k.nik as `Karyawan.nik`, k.nama as `Karyawan.nama`, d.nama as `Karyawan.divisi`,  " +
        "date(i.waktu_mulai) as `Izin.waktu_mulai`, date(i.waktu_selesai) as `Izin.waktu_selesai`,  " +
        "i.jenis as `Izin.jenis`, i.lokasi as `Izin.lokasi`  " +
        "from karyawan k join divisi d on k.id_divisi=id " +
        "left join izin i on i.nik_pengaju=k.nik and i.status = 2 " +
        `where month(i.waktu_mulai) = ${month} and year(i.waktu_mulai) = ${year} `,
      {
        type: Sequelize.QueryTypes.SELECT,
        nest: true,
      }
    );
    rawIzin.reduce((acc, entry) => {
      const pivot = acc.find((item) => item.Karyawan.nik == entry.Karyawan.nik);
      if (pivot.Izin == undefined) {
        pivot.Izin = [];
        pivot.MCU = [];
      }
      if (entry.Izin.jenis == 0) {
        pivot.Izin.push({
          waktu_mulai: entry.Izin.waktu_mulai,
          waktu_selesai: entry.Izin.waktu_selesai,
        });
      } else {
        pivot.MCU.push({
          waktu_mulai: entry.Izin.waktu_mulai,
          waktu_selesai: entry.Izin.waktu_selesai,
          lokasi: entry.Izin.lokasi,
        });
      }

      return acc;
    }, karyawan);

    // console.log(JSON.stringify(karyawan));
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
