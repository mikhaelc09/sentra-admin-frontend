import React from "react";
import moment from "moment";
import { Box, H6, H5, H2 } from "@adminjs/design-system";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, Legend } from "recharts";

const Dashboard = (props) => {
  const dataKaryawan = [
    { name: "Masuk", value: 25 },
    { name: "Izin", value: 4 },
    { name: "Belum Absen", value: 2 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const dataIzin = [
    { name: "MCU", value: 3 },
    { name: "Cuti", value: 1 },
  ];

  const dataPresensi = [
    { jumlah_hadir: 31, name: "09 Jun" },
    { jumlah_hadir: 31, name: "10 Jun" },
    { jumlah_hadir: 30, name: "11 Jun" },
    { jumlah_hadir: 31, name: "12 Jun" },
    { jumlah_hadir: 31, name: "13 Jun" },
    { jumlah_hadir: 29, name: "14 Jun" },
    { jumlah_hadir: 25, name: "15 Jun" },
  ];

  return (
    <Box m={12} flex={true} flexDirection={"column"}>
      <Box m={12} mb={0}>
        <H2>Welcome, Admin</H2>
      </Box>
      <Box flex flexDirection={"row"} my={12} flexGrow={1}>
        <Box variant="white" mx={12} flexGrow={1}>
          <H6>Tanggal</H6>
          <H5>{moment().format('dddd, D MMMM YYYY')}</H5>
        </Box>
        <Box variant="white" mx={12} flexGrow={1}>
          <H6>Jumlah Karyawan</H6>
          <H5>31 orang</H5>
        </Box>
        <Box variant="white" mx={12} flexGrow={1}>
          <H6>Jumlah Sudah Absen</H6>
          <H5>25 orang</H5>
        </Box>
        <Box variant="white" mx={12} flexGrow={1}>
          <H6>Jumlah Izin</H6>
          <H5>4 orang</H5>
        </Box>
      </Box>
      <Box flex flexDirection={"row"} my={12} flexGrow={1}>
        <Box variant="white" flexGrow={1} mx={12}>
          <H5>Status Karyawan</H5>
          <PieChart width={200} height={200} margin={30}>
            <Pie
              data={dataKaryawan}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataKaryawan.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Box>
        <Box variant="white" flexGrow={1} mx={12}>
          <H5>Izin Karyawan</H5>
          <PieChart width={200} height={200} margin={30}>
            <Pie
              data={dataIzin}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {dataIzin.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Box>
        <Box variant="white" flexGrow={2} mx={12}>
          <H5>Presensi Karyawan</H5>
          <BarChart width={400} height={200} data={dataPresensi}>
            <XAxis dataKey="name" />
            <Legend name="Jumlah Hadir" />
            <Bar dataKey="jumlah_hadir" fill="#8884d8" />
          </BarChart>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
