import moment from "moment";
import sequelize from "../../../models/index.js";

const getKaryawanMasuk = async () => {
    const KaryawanMasuk = await sequelize.Absensi.findAndCountAll({
      where: {
        created_at: {
          [sequelize.Sequelize.Op.gte]: new Date(new Date().setHours(0, 0, 1)),
        },
      },
    });
    return KaryawanMasuk;
  };
  
  const getIzin = async () => {
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
    return [Izin, CutiCount, MCUCount];
  };
  
  const getPengajuanIzin = async () => {
    const PengajuanIzin = await sequelize.Izin.findAndCountAll({
      where: {
        status: 1,
      },
    });
    return PengajuanIzin;
  };
  
  const getPengajuanLembur = async () => {
    const PengajuanLembur = await sequelize.Lembur.findAndCountAll({
      where: {
        status: 1,
      },
    });
    return PengajuanLembur;
  };
  
  const getPresensi = async () => {
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
          sequelize.Sequelize.fn("DATE", sequelize.Sequelize.col("created_at")),
          "tanggal",
        ],
        [sequelize.Sequelize.fn("COUNT", "*"), "jumlah"],
      ],
      group: [
        sequelize.Sequelize.fn("DATE", sequelize.Sequelize.col("created_at")),
      ],
    });
    return [presensiKey, Presensi];
  };

const dashboardFetcher = async () => {
  const KaryawanMasuk = await getKaryawanMasuk();
  const Karyawan = await sequelize.Karyawan.findAndCountAll();

  const [Izin, CutiCount, MCUCount] = await getIzin();

  const PengajuanIzin = await getPengajuanIzin();
  const PengajuanLembur = await getPengajuanLembur();

  const [presensiKey, Presensi] = await getPresensi();

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
};
export default dashboardFetcher;
