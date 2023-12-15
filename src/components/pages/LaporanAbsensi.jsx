import { useEffect, useState } from "react";
import { ApiClient } from "adminjs";
import {
  Box,
  H4,
  Label,
  Button,
  Input,
  Select,
  CheckBox,
} from "@adminjs/design-system";
import { toFormData } from "axios";

const LaporanAbsensi = (props) => {
  const [month, setMonth] = useState("2023-06");
  const [karyawan, setKaryawan] = useState([]);
  const [selectedKaryawan, setSelectedKaryawan] = useState();
  const api = new ApiClient();

  useEffect(() => {
    api
      .getPage({
        pageName: "LaporanAbsensi",
        method: "GET",
      })
      .then((response) => {
        setKaryawan(JSON.parse(response.data.karyawan));
      });
  }, []);

  const generateAbsensi = () => {
    api
      .getPage({
        pageName: "LaporanAbsensi",
        method: "POST",
        data: toFormData({
          month: month,
          karyawan: selectedKaryawan,
          type: "absensi",
        }),
      })
      .then((response) => {
        window.location.href = "/pdf/" + response.data.url;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const generateAllAbsensi = () => {
    api
      .getPage({
        pageName: "LaporanAbsensi",
        method: "POST",
        data: toFormData({
          month: month,
          type: "absensiAll",
        }),
      })
      .then((response) => {
        window.location.href = "/pdf/" + response.data.url;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box variant="white">
      <H4>Generate Laporan</H4>
      <Box
        flex={true}
        justifyContent={"space-between"}
        flexDirection="column"
        style={{
          gap: "8px",
        }}
      >
        <Input
          type="month"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
          style={{
            marginBottom: "8px",
          }}
        />

        {/**
         * Laporan Absensi
         */}
        <Box
          mb={12}
          flex={true}
          justifyContent={"space-between"}
          alignItems="baseline"
        >
          <Label mr={12} fontSize={16}>
            Laporan Absensi
          </Label>
          <Box flex={true} alignItems={"baseline"} style={{ gap: "12px" }}>
            {karyawan && (
              <Select
                options={karyawan.map((x) => ({
                  value: x.nik,
                  label: x.nama,
                }))}
                placeholder=" -- Pilih Karyawan -- "
                value={selectedKaryawan}
                onChange={(selected) => {
                  setSelectedKaryawan(selected);
                }}
              />
            )}
            <Button onClick={generateAbsensi} variant="primary" disabled={!selectedKaryawan}>
              Generate Absensi{" "}
              {selectedKaryawan &&
                karyawan.find((x) => x.nik == selectedKaryawan.value).nama}
              {
                !selectedKaryawan && "Satuan"
              }
            </Button>
            <Button onClick={generateAbsensi} variant="primary">
              Generate Absensi Keseluruhan
            </Button>
          </Box>
        </Box>

        <Box
          mb={12}
          flex={true}
          justifyContent={"space-between"}
          alignItems="baseline"
        >
          <Box flex={true} alignItems={"baseline"}>
            <Label mr={12} fontSize={16}>
              Laporan Penggajian
            </Label>
          </Box>
          <Button onClick={generateAbsensi} variant="primary" disabled>
            Generate
          </Button>
        </Box>
        <Box
          mb={12}
          flex={true}
          justifyContent={"space-between"}
          alignItems="baseline"
        >
          <Box flex={true} alignItems={"baseline"}>
            <Label mr={12} fontSize={16}>
              Laporan MCU
            </Label>
          </Box>
          <Button onClick={generateAbsensi} variant="primary" disabled>
            Generate
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LaporanAbsensi;
