import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";
import { getAbsolutePath } from "./pathUtils.js";

const generateabsensiSatuan = ({ month, absensi }) => {
  const doc = new jsPDF();
  const date = moment(month, "YYYY-MM");
  moment.locale("id");

  console.log(absensi);

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
    if (a.jam_masuk)
      data.jam_masuk = a.jam_masuk.toISOString().split("T")[1].substring(0, 5);
    if (a.jam_keluar)
      data.jam_keluar = a.jam_keluar
        .toISOString()
        .split("T")[1]
        .substring(0, 5);

    if (!(a.jam_masuk && a.jam_keluar)) {
      if (a.keterangan) a.keterangan += ", ";
      else a.keterangan = "";
      a.keterangan += "Absen tidak lengkap";
    }

    if (a.lembur) {
      data.lembur = true;
      data.keterangan = "Lembur";
    }

    if (a.keterangan) data.keterangan = a.keterangan;
    if (a.jenis) data.jenis = a.jenis;

    return data;
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.text(`Laporan Absensi Karyawan`, 105, 15, {
    align: "center",
  });
  doc.setFontSize(10);
  doc.text(`${"NIK:".padEnd(10)}${absensi.nik}`, 15, 30);
  doc.text(`${"Nama:".padEnd(10)}${absensi.nama}`, 15, 35);
  doc.text(`${"Divisi:".padEnd(10)}${date.format("MMMM YYYY")}`, 150, 30);
  doc.text(`${"Periode:".padEnd(10)}${absensi.divisi}`, 150, 35);

  autoTable.default(doc, {
    headStyles: { fillColor: 0 },
    startY: 40,
    body: absensi.Absensi,
    columns: [
      { header: "Tanggal", dataKey: "tanggal" },
      { header: "Jam Masuk", dataKey: "jam_masuk" },
      { header: "Jam Keluar", dataKey: "jam_keluar" },
      { header: "Status", dataKey: "jenis" },
      { header: "Keterangan", dataKey: "keterangan" },
    ],
    theme: "grid",
    didParseCell: (data) => {
      if (data.row.raw.lembur) data.cell.styles.fillColor = "#00ff00";
      if (data.row.raw.jenis == "Cuti") data.cell.styles.fillColor = "#ffff00";
      if (data.row.raw.jenis == "MCU") data.cell.styles.fillColor = "#00ffff";
    },
  });
  //TODO: buat summary singkat jumlah absen

  const filename = `${month}.pdf`;

  doc.save(getAbsolutePath(`./pdf/${filename}`));

  return filename;
};

export default generateabsensiSatuan;
