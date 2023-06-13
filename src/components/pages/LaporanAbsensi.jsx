import { useEffect, useState } from "react";
import { ApiClient } from "adminjs";
import { Box, H4, Label, Button } from "@adminjs/design-system";
import { toFormData } from "axios";

const LaporanAbsensi = (props) => {
  const [month, setMonth] = useState('2023-06');
  const api = new ApiClient();

  const generateAbsensi = () => {
    api
      .getPage({
        pageName: "LaporanAbsensi",
        method: "POST",
        data: toFormData({
          month: month,
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

  return (
    <Box variant="white">
      <H4>Generate Laporan</H4>
      <Box flex={true} justifyContent={"space-between"} alignItems="baseline">
        <Box flex={true} alignItems={"baseline"}>
          <Label mr={12} fontSize={16}>
            Laporan Absensi
          </Label>
          <input
            type="month"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
            }}
          />
        </Box>
        <Button onClick={generateAbsensi} variant="primary">
          Generate
        </Button>
      </Box>
    </Box>
  );
};

export default LaporanAbsensi;
