import { jsPDF } from "jspdf";
import moment from "moment";
import { getAbsolutePath } from "./pathUtils.js";

const generateabsensi = ({ month, karyawan }) => {
  const doc = new jsPDF();
  moment.locale("id");
  const date = moment(month, "YYYY-MM");

  let tableData = [];
  for (const k of karyawan) {
    tableData.push({
      nik: k.Karyawan.nik,
      nama: k.Karyawan.nama,
      divisi: k.Karyawan.divisi,
      masuk: `${
        (k.Absensi.filter((a) => a.status == "hadir") ?? []).length
      }    hari`,
      lembur: `${(k.Lembur ?? []).length}    hari`,
      cuti: `${(k.Izin ?? []).length}    hari`,
      mcu: `${(k.MCU ?? []).length}    hari`,
    });
  }

  doc.text(`Laporan Absensi ${date.format("MMMM YYYY")}`, 10, 10);
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
    doc.text(`${"NIK:".padEnd(10)}${k.Karyawan.nik}`, 15, 20);
    doc.text(`${"Nama:".padEnd(10)}${k.Karyawan.nama}`, 15, 25);
    doc.text(`${"Divisi:".padEnd(10)}${k.Karyawan.divisi}`, 150, 20);
    doc.text(`${"Periode:".padEnd(10)}${date.format("MMMM YYYY")}`, 150, 25);

    doc.autoTable({
      headStyles: { fillColor: 0 },
      startY: 30,
      body: k.Detail,
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

  const filename = `${month}.pdf`;

  doc.save(getAbsolutePath(`./pdf/${filename}`));

  return filename;
};

export default generateabsensi;
