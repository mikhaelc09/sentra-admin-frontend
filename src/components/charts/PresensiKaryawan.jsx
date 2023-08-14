import { BarChart, XAxis, Legend, Bar } from 'recharts'

const PresensiKaryawan = ({ dataPresensi }) => {
  return (
    <BarChart width={400} height={200} data={dataPresensi}>
      <XAxis dataKey="name" />
      <Legend name="Jumlah Hadir" />
      <Bar dataKey="jumlah_hadir" fill="#8884d8" />
    </BarChart>
  );
};

export default PresensiKaryawan;