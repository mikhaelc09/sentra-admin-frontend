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

  const Control = ({ children, label }) => {
    return (
      <Box
        mb={12}
        flex={true}
        justifyContent={"space-between"}
        alignItems="baseline"
      >
        <Box flex={true} alignItems={"baseline"}>
          <Label mr={12} fontSize={16}>
            {label}
          </Label>
        </Box>
        <Box flex={true} alignItems={"baseline"} style={{ gap: "12px" }}>
          {children}
        </Box>
      </Box>
    );
  };

  const AbsensiControl = () => {
    return (
      <Control label='Laporan Absensi'>
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
          <Button
            onClick={generateAbsensi}
            variant="primary"
            disabled={!selectedKaryawan}
          >
            Generate Absensi {!selectedKaryawan && "Satuan"}
            {selectedKaryawan &&
              karyawan.find((x) => x.nik == selectedKaryawan.value).nama}
          </Button>
          <Button onClick={generateAllAbsensi} variant="contained">
            Generate Absensi Keseluruhan
          </Button>
      </Control>
    );
  };

  const PenggajianControl = () => {
    return (
      <Control label='Laporan Penggajian'>
        <Button onClick={generateAbsensi} variant="contained" disabled>
          Generate
        </Button>
      </Control>
    );
  };

  const MCUControl = () => {
    return (
      <Control label='Laporan MCU'>
        <Button onClick={generateAbsensi} variant="contained" disabled>
          Generate
        </Button>
      </Control>
    );
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
        <AbsensiControl />
        <PenggajianControl />
        <MCUControl />
      </Box>
    </Box>
  );
};

export default LaporanAbsensi;
