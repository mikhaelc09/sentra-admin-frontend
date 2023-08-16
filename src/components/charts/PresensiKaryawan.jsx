import { BarChart, XAxis, YAxis, Legend, Bar, Tooltip } from 'recharts'

const PresensiKaryawan = ({ dataPresensi }) => {
  return (
    <BarChart width={400} height={200} data={dataPresensi}>
      <XAxis dataKey="name" />
      <YAxis/>
      <Legend name="Jumlah Hadir" />
      <Tooltip/>
      <Bar dataKey="jumlah_hadir" fill="#8884d8" />
    </BarChart>
  );
};

export default PresensiKaryawan;