import generateabsensi from "../utils/generateabsensi.js";
import generateabsensiSatuan from "../utils/generateAbsensiSatuan.js";
import db from "../models/index.js";
import util from "util";
import moment from "moment";
const Sequelize = db.Sequelize;

moment.locale("id");  
/**
 * GET Method
 * Handler untuk mengembalikan value seluruh karyawan
 */
const getKaryawan = async () => {
  const karyawan = await db["Karyawan"].findAll({
    raw: true,
  });
  return { karyawan: JSON.stringify(karyawan) };
};

/**
 * *Detail Absensi
 * POST METHOD
 *
 * Handler untuk mengembalikan value absensi karyawan secara individual
 * Data akan dikirim untuk diolah menjadi laporan individu
 */
const getDetailAbsensi = async (nik, start, end) => {
  const queryTanggal = { 
    [Sequelize.Op.and]: [
      {
        created_at: {
          [Sequelize.Op.gte]: start.toDate()
        }
      },
      {
        created_at: {
          [Sequelize.Op.lte]: end.toDate()
        }
      },
    ] 
  };
  const rawKaryawan = await db["Karyawan"].findOne({
    where: {
      nik: nik
    },
    include: {
      model: db["Divisi"],
      as: "Divisi",
      attributes: ["nama"]
    },
    attributes:['nik', 'nama'],
    raw: true
  })

  let detail = {
    nik: rawKaryawan.nik,
    nama: rawKaryawan.nama,
    divisi: rawKaryawan['Divisi.nama'],
    Absensi: [],
    summary: {
      hadir: 0,
      tidak_hadir: 0,
      lembur: 0,
      cuti: 0,
      mcu: 0
    }
  };

  const rawAbsensi = await db["Absensi"].findAll(
    {
      where: {
        status: 1,
        nik:nik,
        ...queryTanggal
      },
      attributes: [
        [Sequelize.fn('date', Sequelize.col('created_at')), 'tanggal'],
        [Sequelize.fn('time', Sequelize.col('created_at')), 'jam']
      ],
      raw: true,
    }
  )

  rawAbsensi.reduce((acc, entry) => {
    const index = acc.Absensi.findIndex(
      (item) => item.tanggal == entry.tanggal
    );

    if (index == -1) {
      acc.Absensi.push({
        tanggal: entry.tanggal,
        jam_masuk: entry.jam,
        jam_keluar: null,
        lembur: false
      });

      acc.summary.hadir += 1;

      return acc;
    }
    acc.Absensi[index].jam_keluar = entry.jam;

    return acc;
  }, detail);

  const rawLembur = await db["Lembur"].findAll(
    {
      where: {
        status: 2,
        nik:nik,
        ...queryTanggal
      },
      attributes: [
        [Sequelize.fn('date', Sequelize.col('created_at')), 'tanggal'],
      ],
      raw: true,
    }
  )

  rawLembur.reduce((acc, l) => {
    const index = acc.Absensi.findIndex((item) => {
      return item.tanggal == l.tanggal;
    });

    if (index != -1) {
      acc.Absensi[index].lembur = true;
      acc.summary.lembur += 1;
    }

    return acc;
  }, detail);

  const rawIzin = await db["Izin"].findAll(
    {
      where: {
        status: 2,
        nik_pengaju: nik,
        waktu_mulai: {
          [Sequelize.Op.lte]: end.toDate()
        },
        waktu_selesai: {
          [Sequelize.Op.gte]: start.toDate()
        }
      },
      attributes: [
        [Sequelize.fn('date', Sequelize.col('waktu_mulai')), 'waktu_mulai'],
        [Sequelize.fn('date', Sequelize.col('waktu_selesai')), 'waktu_selesai'],
        'keterangan',
        'jenis',
        'lokasi'
      ],
      raw: true,
    }
  )

  rawIzin.reduce((acc, item) => {
    const tanggal_mulai = item.waktu_mulai.split("-")[2];
    const tanggal_selesai = item.waktu_selesai.split("-")[2];
    const month = item.waktu_mulai.split("-")[1];
    const year = item.waktu_mulai.split("-")[0];

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
      acc.summary[item.jenis == 1 ? "cuti" : "mcu"] += 1;
    }

    return acc;
  }, detail);

  
  // Sorting absensi berdasarkan tanggal untuk membuat laporan yang lebih tertata
  detail.Absensi = detail.Absensi.sort(
    (first, next) =>
      parseInt(first.tanggal.split("-")[2]) -
      parseInt(next.tanggal.split("-")[2])
  );

  detail.Absensi = detail.Absensi.map((a) => {
    // Format absensi menjadi record yang lebih mudah dibaca dan terstruktur
    const data = {
      hari: moment(a.tanggal).format("dddd"),
      tanggal: a.tanggal,
      jam_masuk: "--:--",
      jam_keluar: "--:--",
      status: a.status,
      lembur: false,
      keterangan: "",
      jenis: "Hadir",
    };

    // Masukkan jam masuk ke dalam record absensi
    if (a.jam_masuk) {
      // Melakukan formatting tanggal agar sesuai dengan timezone Jakarta
      const jam_masuk_view = moment(a.jam_masuk, 'hh:mm:ss')
        .utcOffset(7)

      // Format jam masuk menjadi HH:mm
      data.jam_masuk = jam_masuk_view.format("HH:mm");
    }

    // Masukkan jam keluar ke dalam record absensi
    if (a.jam_keluar) {
      // Melakukan formatting tanggal agar sesuai dengan timezone Jakarta
      const jam_keluar_view = moment(a.jam_keluar, "hh:mm:ss")
        .utcOffset("+07:00");
      // Format jam keluar menjadi HH:mm
      data.jam_keluar = jam_keluar_view.format("HH:mm");
    }

    // Jika absensi tidak lengkap, maka tambahkan keterangan
    if (!(a.jam_masuk && a.jam_keluar) && !a.jenis) {
      // Jika keterangan sudah ada, maka tambahkan delimiter
      if (a.keterangan) a.keterangan += ", ";
      else a.keterangan = "";

      // Tambahkan keterangan absensi tidak lengkap
      a.keterangan += "Absen tidak lengkap";
    }

    // Jika absensi merupakan lembur, maka tambahkan keterangan
    if(a.lembur == true){
      data.lembur = a.lembur;
      data.keterangan = "Lembur";
    }

    if (a.keterangan) data.keterangan = a.keterangan;
    if (a.jenis) data.jenis = a.jenis;

    return data;
  });


  const dataAbsensi = [];
  const startDate = start.clone()
  const endDate = end.clone()
  while(startDate <= endDate){
    //Append to DataAbsensi
    const absen = detail.Absensi.find((a) => a.tanggal == startDate.format("YYYY-MM-DD"));
    if (absen) dataAbsensi.push(absen);
    else{
      dataAbsensi.push({
        hari: moment(startDate).format("dddd"),
        tanggal: startDate.format("YYYY-MM-DD"),
        jam_masuk: "--:--",
        jam_keluar: "--:--",
        status: "tidak hadir",
        lembur: false,
        keterangan: "",
        jenis: "Tidak Hadir",
      });
      detail.summary.tidak_hadir += 1;
    }
    //Add startDate
    startDate.add(1, 'day')
  }
  detail.DataAbsensi = dataAbsensi;

  return detail;
};


/**
 * *AbsensiAll
 * POST METHOD
 *
 * Handler untuk mengembalikan value absensi karyawan keseluruhan
 * Data akan dikirim untuk diolah menjadi laporan individu
 * Sifat data berikut merupakan summary dari seluruh karyawan
 */
const getAbsensiReport = async (start, end) => {
  const karyawan = await db["Karyawan"].findAll({
    attributes: ['nik', 'nama'],
    raw: true
  })

  const response = await Promise.all(karyawan.map(async (a) => {
    const detail = await getDetailAbsensi(a.nik, start, end)
    return detail
  }))

  return response;
};

const getLaporanAbsensi = async (request, response, data) => {
  const method = request.method;
  if (method == "get") {
    const karyawan = await getKaryawan();
    return karyawan;
  }

  if (request.payload.type == "absensi") {
    const _periodeStart = moment(request.payload.periodeStart, 'YYYY-MM-DD');
    const _periodeEnd = moment(request.payload.periodeEnd, 'YYYY-MM-DD');
    _periodeEnd.add(23, 'hours').add(59, 'minutes')
    const nik = request.payload.nik;
    const absensi = await getDetailAbsensi(nik, _periodeStart, _periodeEnd);

    return {
      absensi,
      url: generateabsensiSatuan({
        start: _periodeStart,
        end: _periodeEnd,
        absensi,
      }),
    };
  }

  if (request.payload.type == "absensiAll") {
    const _periodeStart = moment(request.payload.periodeStart, 'YYYY-MM-DD');
    const _periodeEnd = moment(request.payload.periodeEnd, 'YYYY-MM-DD');
    _periodeEnd.add(23, 'hours').add(59, 'minutes')
    const karyawan = await getAbsensiReport(_periodeStart, _periodeEnd);

    return {
      karyawan,
      url: generateabsensi({
        start: _periodeStart,
        end: _periodeEnd,
        karyawan,
      }),
    };
  }
  return "_";
};

export default getLaporanAbsensi;

export {
  getKaryawan,
  getDetailAbsensi as getAbsensiIndividu,
  getAbsensiReport,
};
