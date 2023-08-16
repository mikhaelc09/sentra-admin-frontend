import { useState, useEffect } from "react";
import { Box, H6, H5, H2 } from "@adminjs/design-system";
import StatusKaryawan from "./charts/StatusKaryawan";
import IzinKaryawan from "./charts/IzinKaryawan";
import PresensiKaryawan from "./charts/PresensiKaryawan";
import Tile from "./charts/Tile";
import { ApiClient } from "adminjs";

const Dashboard = (props) => {
  const api = new ApiClient();
  const [dataKaryawan, setDataKaryawan] = useState([]);
  const [dataIzin, setDataIzin] = useState([]);
  const [dataPresensi, setDataPresensi] = useState([]);
  const [dataPengajuanIzin, setDataPengajuanIzin] = useState([]);
  const [dataPengajuanLembur, setDataPengajuanLembur] = useState([]);
  const [jumlahKaryawan, SetJumlahKaryawan] = useState(0)
  const [jumlahAbsen, setJumlahAbsen] = useState(0)
  const [jumlahIzin, setJumlahIzin] = useState(0)
  const [tanggal, setTanggal] = useState()

  useEffect(() => {
    api.getDashboard()
    .then((response) => {
      console.log(response.data)
      setDataKaryawan(response.data.DataKaryawan)
      setDataIzin(response.data.DataIzin)
      setDataPresensi(response.data.DataPresensi)
      setDataPengajuanIzin(response.data.DataPengajuanIzin)
      setDataPengajuanLembur(response.data.DataPengajuanLembur)
      SetJumlahKaryawan(response.data.JumlahKaryawan)
      setJumlahAbsen(response.data.JumlahAbsen)
      setJumlahIzin(response.data.JumlahIzin)
      setTanggal(response.data.Tanggal)
    })
    .catch((error) => {
      console.log(error)
    })
  }, []);

  const StatBox = (props) => {
    const { flexGrow } = props;
    return (
      <Box
        variant="white"
        flexGrow={flexGrow ?? 1}
        mx={12}
        borderRadius={12}
        boxShadow={"2px 2px 10px DarkGray"}
      >
        {props.children}
      </Box>
    );
  };

  return (
    <Box m={12} flex={true} flexDirection={"column"}>
      <Box m={12} mb={0}>
        <H2>Welcome, Admin</H2>
      </Box>
      <Box flex flexDirection={"row"} my={12} flexGrow={1}>
        <StatBox>
          <H6>Tanggal</H6>
          <H5>{tanggal}</H5>
        </StatBox>
        <StatBox>
          <H6>Jumlah Karyawan</H6>
          <H5>{ jumlahKaryawan } orang</H5>
        </StatBox>
        <StatBox>
          <H6>Jumlah Sudah Absen</H6>
          <H5>{ jumlahAbsen } orang</H5>
        </StatBox>
        <StatBox>
          <H6>Jumlah Izin</H6>
          <H5>{ jumlahIzin } orang</H5>
        </StatBox>
      </Box>
      <Box flex flexDirection={"row"} my={12} flexGrow={1}>
        <StatBox>
          <H5>Status Kehadiran Karyawan</H5>
          {dataKaryawan.reduce((x, y) => (y.name != 'Belum Absen')? x + y.value : x, 0) > 0 && <StatusKaryawan dataKaryawan={dataKaryawan} />}
          {dataKaryawan.reduce((x, y) => (y.name != 'Belum Absen')? x + y.value : x, 0) == 0 && <H5>Belum ada karyawan yang absen</H5>}
        </StatBox>
        <StatBox>
          <H5>Izin Karyawan</H5>
          {dataIzin.reduce((x, y) => x + y.value, 0) > 0 && <IzinKaryawan dataIzin={dataIzin} />}
          {dataIzin.reduce((x, y) => x + y.value, 0) == 0 && <H5>Tidak ada karyawan yang izin </H5>}
        </StatBox>
        <StatBox flexGrow={2}>
          <H5>Presensi Karyawan</H5>
          {dataPresensi.reduce((x, y) => x + y.jumlah_hadir, 0) > 0 && <PresensiKaryawan dataPresensi={dataPresensi} />}
          {dataPresensi.reduce((x, y) => x + y.jumlah_hadir, 0) == 0 && <H5>Tidak ada presensi dalam 1 minggu terakhir</H5>}
        </StatBox>
      </Box>
      <Box flex flexDirection={"row"} my={12} flexGrow={1}>
        <StatBox>
          <H5>Daftar Pengajuan Izin</H5>
          {dataPengajuanIzin.length == 0 && <H6 textAlign='center'>Tidak ada Pengajuan Izin</H6>}
          {dataPengajuanIzin.length > 0 && dataPengajuanIzin.map((i) => {
            return (
              <Tile
                title={i.nik}
                subtitle={i.mulai + " - " + i.selesai}
                badgeVariant={i.jenis == 1 ? "danger" : "success"}
                badge={i.jenis == 1 ? "Izin" : "MCU"}
              />
            );
          })}
        </StatBox>
        <StatBox>
          <H5>Daftar Pengajuan Lembur</H5>
          {dataPengajuanLembur.length == 0 && <H6 textAlign='center'>Tidak ada Pengajuan Lembur</H6> }
          {dataPengajuanLembur.length > 0 && dataPengajuanLembur.map((i) => {
            return <Tile title={i.nik} subtitle={i.waktu} />;
          })}
        </StatBox>
      </Box>
    </Box>
  );
};

export default Dashboard;
