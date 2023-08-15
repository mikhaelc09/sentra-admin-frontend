import { useState, useEffect } from "react";
import moment from "moment";
import { Box, H6, H5, H2, Badge, Label } from "@adminjs/design-system";
import StatusKaryawan from "./charts/StatusKaryawan";
import IzinKaryawan from "./charts/IzinKaryawan";
import PresensiKaryawan from "./charts/PresensiKaryawan";
import Tile from "./charts/Tile";

const Dashboard = (props) => {
  const [dataKaryawan, setDataKaryawan] = useState([]);
  const [dataIzin, setDataIzin] = useState([]);
  const [dataPresensi, setDataPresensi] = useState([]);
  const [dataPengajuanIzin, setDataPengajuanIzin] = useState([]);
  const [dataPengajuanLembur, setDataPengajuanLembur] = useState([]);

  useEffect(() => {
    setDataKaryawan([
      { name: "Masuk", value: 25 },
      { name: "Izin", value: 4 },
      { name: "Belum Absen", value: 2 },
    ]);
    setDataIzin([
      { name: "MCU", value: 3 },
      { name: "Cuti", value: 1 },
    ]);
    setDataPresensi([
      { jumlah_hadir: 31, name: "09 Jun" },
      { jumlah_hadir: 31, name: "10 Jun" },
      { jumlah_hadir: 30, name: "11 Jun" },
      { jumlah_hadir: 31, name: "12 Jun" },
      { jumlah_hadir: 31, name: "13 Jun" },
      { jumlah_hadir: 29, name: "14 Jun" },
      { jumlah_hadir: 25, name: "15 Jun" },
    ]);
    setDataPengajuanIzin([
      {
        nik: "2021212",
        mulai: "2023-07-30",
        selesai: "2023-07-31",
        jenis: 1,
      },
      {
        nik: "2213112",
        mulai: "2023-08-05",
        selesai: "2023-08-07",
        jenis: 2,
      },
      {
        nik: "2028432",
        mulai: "2023-08-10",
        selesai: "2023-08-12",
        jenis: 1,
      },
      {
        nik: "2067353",
        mulai: "2023-08-10",
        selesai: "2023-08-15",
        jenis: 2,
      },
    ]);
    setDataPengajuanLembur([
      {
        nik: "46144324",
        waktu: "2023-07-12",
      },
      {
        nik: "68456785",
        waktu: "2023-08-10",
      },
      {
        nik: "93345645",
        waktu: "2023-08-13",
      },
    ]);
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
