import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";
import { getAbsolutePath } from "./pathUtils.js";

const generateabsensiSatuan = ({ month, absensi }) => {
  const doc = new jsPDF();
  const date = moment(month, "YYYY-MM");
  moment.locale("id");

  const dayOfMonth = new Date(
    month.split("-")[0],
    month.split("-")[1],
    0
  ).getDate();

  absensi.Absensi = absensi.Absensi.sort(
    (first, next) =>
      parseInt(first.tanggal.split("-")[2]) -
      parseInt(next.tanggal.split("-")[2])
  );

  absensi.Absensi = absensi.Absensi.map((a) => {
    const data = {
      tanggal: a.tanggal,
      jam_masuk: "--:--",
      jam_keluar: "--:--",
      status: a.status,
      lembur: false,
      keterangan: "",
      jenis: "Hadir",
    };
    if (a.jam_masuk) {
      const jam_masuk_view = moment
        .tz(a.jam_masuk, "Asia/Jakarta")
        .utcOffset("+07:00");
        console.log(a.jam_masuk, jam_masuk_view)
      data.jam_masuk = jam_masuk_view
        .toISOString()
        .split("T")[1]
        .substring(0, 5);
    }

    if (a.jam_keluar) {
      const jam_keluar_view = moment
        .tz(a.jam_keluar, "Asia/Jakarta")
        .utcOffset("+07:00");
      console.log(a.jam_keluar, jam_keluar_view)
      data.jam_keluar = jam_keluar_view
        .toISOString()
        .split("T")[1]
        .substring(0, 5);
    }

    if (!(a.jam_masuk && a.jam_keluar)) {
      if (a.keterangan) a.keterangan += ", ";
      else a.keterangan = "";
      a.keterangan += "Absen tidak lengkap";
    }

    if (a.lembur == true) {
      data.lembur = true;
      data.keterangan = "Lembur";
    }

    if (a.keterangan) data.keterangan = a.keterangan;
    if (a.jenis) data.jenis = a.jenis;

    return data;
  });

  const dataAbsensi = [];
  for (let i = 1; i <= dayOfMonth; i++) {
    const tanggal = `${date.format("YYYY-MM")}-${i
      .toString()
      .padStart(2, "0")}`;
    const absen = absensi.Absensi.find((a) => a.tanggal == tanggal);
    if (absen) dataAbsensi.push(absen);
    else
      dataAbsensi.push({
        tanggal,
        jam_masuk: "--:--",
        jam_keluar: "--:--",
        status: "tidak hadir",
        lembur: false,
        keterangan: "",
        jenis: "Tidak Hadir",
      });
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  //TODO: tambah logo sentra di pojok kiri dan header lainnya
  doc.text(`Laporan Absensi Karyawan`, 105, 15, {
    align: "center",
  });
  doc.setFontSize(10);
  doc.text(`${"NIK:".padEnd(10)}${absensi.nik}`, 15, 30);
  doc.text(`${"Nama:".padEnd(10)}${absensi.nama}`, 15, 35);
  doc.text(`${"Divisi:".padEnd(10)}${absensi.divisi}`, 150, 30);
  doc.text(`${"Periode:".padEnd(10)}${date.format("MMMM YYYY")}`, 150, 35);

  autoTable.default(doc, {
    headStyles: { fillColor: 0 },
    startY: 40,
    body: dataAbsensi,
    columns: [
      { header: "Tanggal", dataKey: "tanggal" },
      { header: "Jam Masuk", dataKey: "jam_masuk" },
      { header: "Jam Keluar", dataKey: "jam_keluar" },
      { header: "Status", dataKey: "jenis" },
      { header: "Keterangan", dataKey: "keterangan" },
    ],
    theme: "grid",
    didParseCell: (data) => {
      if (data.row.raw.lembur == true) data.cell.styles.fillColor = "#00ff00";
      else if (data.row.raw.jenis == "Cuti")
        data.cell.styles.fillColor = "#ffff00";
      else if (data.row.raw.jenis == "MCU")
        data.cell.styles.fillColor = "#00ffff";
      else if (data.row.raw.jenis == "Tidak Hadir") {
        data.cell.styles.fillColor = "#ff0000";
        data.cell.styles.textColor = "#000000";
      } else if (data.row.raw.keterangan == "Absen tidak lengkap")
        data.cell.styles.fillColor = "#999999";
    },
  });
  //TODO: buat summary singkat jumlah absen

  const filename = `${month}.pdf`;

  doc.save(getAbsolutePath(`./pdf/${filename}`));

  return filename;
};

export default generateabsensiSatuan;
