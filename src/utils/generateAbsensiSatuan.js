import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import moment from "moment";
import { getAbsolutePath } from "./pathUtils.js";

const generateabsensiSatuan = ({ month, absensi }) => {
  const doc = new jsPDF();
  const date = moment(month, "YYYY-MM");
  moment.locale("id");

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
    body: absensi.DataAbsensi,
    columns: [
      { header: "Hari", dataKey: "hari" },
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
