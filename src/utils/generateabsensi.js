import { jsPDF } from 'jspdf'
import { getAbsolutePath } from './pathUtils.js'

const generateabsensi = (month)  => {
    const doc = new jsPDF()

    doc.text(`Laporan Absensi ${month}`, 10,10) 
    const filename='test.pdf'

    doc.save(getAbsolutePath(`./pdf/${filename}`))

    return filename
}

export default generateabsensi