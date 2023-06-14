import { jsPDF } from 'jspdf'
import autoTable from 'jspdf-autotable'
import moment from 'moment'
import { getAbsolutePath } from './pathUtils.js'

const generateabsensi = ({month, karyawan})  => {
    const doc = new jsPDF()
    moment.locale('id')
    const date = moment(month, 'YYYY-MM')

    let tableData = []
    for (const k of karyawan) {
        tableData.push({
            nik: k.nik,
            nama: k.nama,
            divisi: k["Divisi.nama"],
            masuk: `${k.masuk.length}    hari`,
            lembur: `${k.lembur ?? 0}    hari`,
            cuti: `${k.cuti ?? 0}    hari`,
            mcu: `${k.mcu ?? 0}    hari`
        })
    }

    doc.text(`Laporan Absensi ${date.format("MMMM YYYY")}`, 10,10) 
    // doc.table(10,20, tableData, ['nik', 'nama', 'divisi', 'masuk', 'lembur', 'cuti', 'mcu'],{
    //     fontSize: 10,
    //     autoSize: true
    // })
    console.log(autoTable)
    autoTable.default(doc, {
        startY: 20,
        body: tableData,
        columns: [
            {header: 'NIK', dataKey: 'nik'},
            {header: 'Nama Karyawan', dataKey: 'nama'},
            {header: 'Divisi', dataKey: 'divisi'},
            {header: 'Jumlah Masuk', dataKey: 'masuk'},
            {header: 'Jumlah Lembur', dataKey: 'lembur'},
            {header: 'Jumlah Cuti', dataKey: 'cuti'},
            {header: 'Jumlah MCU', dataKey: 'mcu'},
        ]
    })
    const filename=`${month}.pdf`

    doc.save(getAbsolutePath(`./pdf/${filename}`))

    return filename
}

export default generateabsensi