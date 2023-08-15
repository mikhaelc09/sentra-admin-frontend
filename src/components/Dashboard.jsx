import { useState, useEffect } from "react";
import moment from "moment";
import { Box, H6, H5, H2, Badge, Label } from "@adminjs/design-system";
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

  useEffect(() => {
    api.getDashboard()
    .then((response) => {
      setDataKaryawan(response.data.DataKaryawan)
      setDataIzin(response.data.DataIzin)
      setDataPresensi(response.data.DataPresensi)
      setDataPengajuanIzin(response.data.DataPengajuanIzin)
      setDataPengajuanLembur(response.data.DataPengajuanLembur)
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
          <H5>{moment().format("dddd, D MMMM YYYY")}</H5>
        </StatBox>
        <StatBox>
          <H6>Jumlah Karyawan</H6>
          <H5>31 orang</H5>
        </StatBox>
        <StatBox>
          <H6>Jumlah Sudah Absen</H6>
          <H5>25 orang</H5>
        </StatBox>
        <StatBox>
          <H6>Jumlah Izin</H6>
          <H5>4 orang</H5>
        </StatBox>
      </Box>
      <Box flex flexDirection={"row"} my={12} flexGrow={1}>
        <StatBox>
          <H5>Status Kehadiran Karyawan</H5>
          <StatusKaryawan dataKaryawan={dataKaryawan} />
        </StatBox>
        <StatBox>
          <H5>Izin Karyawan</H5>
          <IzinKaryawan dataIzin={dataIzin} />
        </StatBox>
        <StatBox flexGrow={2}>
          <H5>Presensi Karyawan</H5>
          <PresensiKaryawan dataPresensi={dataPresensi} />
        </StatBox>
      </Box>
      <Box flex flexDirection={"row"} my={12} flexGrow={1}>
        <StatBox>
          <H5>Daftar Pengajuan Izin</H5>
          {dataPengajuanIzin.map((i) => {
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
          {dataPengajuanLembur.map((i) => {
            return <Tile title={i.nik} subtitle={i.waktu} />;
          })}
        </StatBox>
      </Box>
    </Box>
  );
};

export default Dashboard;
