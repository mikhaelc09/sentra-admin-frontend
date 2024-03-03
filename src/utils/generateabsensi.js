import { jsPDF } from "jspdf";
import moment from "moment";
import { getAbsolutePath } from "./pathUtils.js";

const generateabsensi = ({ start, end, karyawan }) => {
  const doc = new jsPDF();
  moment.locale("id");

  let tableData = [];
  console.log(karyawan)
  for (const k of karyawan) {
    tableData.push({
      nik: k.nik,
      nama: k.nama,
      divisi: k.divisi,
      masuk: `${k.summary.hadir}    hari`,
      lembur: `${k.summary.lembur}    hari`,
      cuti: `${k.summary.cuti}    hari`,
      mcu: `${k.summary.mcu}    hari`,
    });
  }

  doc.text(`Laporan Absensi ${start.format("DD MMMM YYYY")}-${end.format("DD MMMM YYYY")}`, 10, 10);
  doc.autoTable({
    startY: 20,
    body: tableData,
    columns: [
      { header: "NIK", dataKey: "nik" },
      { header: "Nama Karyawan", dataKey: "nama" },
      { header: "Divisi", dataKey: "divisi" },
      { header: "Jumlah Masuk", dataKey: "masuk" },
      { header: "Jumlah Lembur", dataKey: "lembur" },
      { header: "Jumlah Cuti", dataKey: "cuti" },
      { header: "Jumlah MCU", dataKey: "mcu" },
    ],
  });

  karyawan.forEach((k) => {
    doc.addPage();
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(`${"NIK:".padEnd(10)}${k.nik}`, 15, 20);
    doc.text(`${"Nama:".padEnd(10)}${k.nama}`, 15, 25);
    doc.text(`${"Divisi:".padEnd(10)}${k.divisi}`, 130, 20);
    doc.text(`${"Periode:".padEnd(10)}${start.format("DD-MM-YYYY")} sampai ${end.format("DD-MM-YYYY")}`, 130, 25);

    doc.autoTable({
      headStyles: { fillColor: 0 },
      startY: 30,
      body: k.DataAbsensi,
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
  });

  const filename = `${start.format("DD MMMM YYYY")}-${end.format("DD MMMM YYYY")}.pdf`;

  doc.save(getAbsolutePath(`./pdf/${filename}`));

  return filename;
};

export default generateabsensi;
