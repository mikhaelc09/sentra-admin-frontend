import { useEffect, useState } from "react";
import { ApiClient } from "adminjs";
import moment from "moment";
import {
  Box,
  H4,
  H6,
  Label,
  Button,
  Input,
  Select,
} from "@adminjs/design-system";
import { toFormData } from "axios";

const LaporanAbsensi = (props) => {
  /**
   * State
   */
  const [month, setMonth] = useState(
    `${new Date().getFullYear()}-${(new Date().getMonth() + 1)
      .toString()
      .padStart(2, "0")}`
  );
  const [periode, setPeriode] = useState({
    start: new Date(month),
    end: new Date(month),
  })
  const [karyawan, setKaryawan] = useState([]);
  const [selectedKaryawan, setSelectedKaryawan] = useState();
  const api = new ApiClient();

  /**
   * UseEffects
   */
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

  useEffect(() => {
    const [strYear, strMonth] = month.split('-')
    const startDate = moment(`${strYear}-${strMonth}-26`, "YYYY-MM-DD")
    const endDate = moment(`${strYear}-${strMonth}-25`, "YYYY-MM-DD")
    startDate.subtract(1, 'month')
    setPeriode({
      start: startDate.toDate(),
      end: endDate.toDate()
    })

  }, [month])

  /**
   * Handlers
   * Lihat di  src/hooks/laporanAbsensiHandler.js
   */
  const generateAbsensi = () => {
    api
      .getPage({
        pageName: "LaporanAbsensi",
        method: "POST",
        data: toFormData({
          periodeStart: periode['start'].toISOString().split("T")[0],
          periodeEnd: periode['end'].toISOString().split("T")[0],
          nik: selectedKaryawan.value,
          type: "absensi",
        }),
      })
      .then((response) => {
        window.open("/pdf/" + response.data.url, '_blank').focus();
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
          periodeStart: periode['start'].toISOString().split("T")[0],
          periodeEnd: periode['end'].toISOString().split("T")[0],
          type: "absensiAll",
        }),
      })
      .then((response) => {
        window.open("/pdf/" + response.data.url, '_blank').focus();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Components
   */
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
      <Control label="Laporan Absensi">
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
      <Control label="Laporan Penggajian">
        <Button onClick={generateAbsensi} variant="contained" disabled>
          Generate
        </Button>
      </Control>
    );
  };

  const MCUControl = () => {
    return (
      <Control label="Laporan MCU">
        <Button onClick={generateAbsensi} variant="contained" disabled>
          Generate
        </Button>
      </Control>
    );
  };


  /**
   * Default parent
   */
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
        <Box
          flex={true}
          justifyContent={"space-between"}
          flexDirection="row"
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
              marginBottom: "8px"
            }}
          />
          <H6
            style={{
              marginTop: 'auto',
              marginBottom: 'auto'
            }}>
            Laporan dibuat untuk tanggal {moment(periode.start).format("DD MMMM YYYY")} sampai {moment(periode.end).format("DD MMMM YYYY")}
          </H6>
        </Box>
        <AbsensiControl />
        <PenggajianControl />
        <MCUControl />
      </Box>
    </Box>
  );
};

export default LaporanAbsensi;
