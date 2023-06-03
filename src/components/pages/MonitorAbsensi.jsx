import { useEffect, useState } from "react";
import { Box, Header, Text, H6, Table, TableHead, TableBody, TableRow, TableCell  } from '@adminjs/design-system'
import { ApiClient } from "adminjs";

const api = new ApiClient();
const lastDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate()

const MonitorAbsensi = (props) => {
    const [karyawan, setKaryawan] = useState([])
    useEffect(() => {   
        api.getPage({
            pageName: "MonitorAbsensi",
            method: "GET",
        }).then((response) => {
            setKaryawan(JSON.parse(response.data.karyawan))
        })
    }, [])

    useEffect(() => {
        console.log(karyawan);
    }, [karyawan])

    return <Box variant="white" p={16}>
        <Header>Monitor Absensi</Header>
        <Text>Sisa Hari Kerja Bulan ini: {lastDate-(new Date()).getDate()}</Text>
        <Box margin={40}></Box>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell><H6 textAlign={'center'}>Status</H6></TableCell>
                    <TableCell><H6 textAlign={'center'}>Jumlah Kehadiran</H6></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {karyawan.map((karyawan, index) => {
                    return <TableRow key={index}>
                        <TableCell>{index+1}</TableCell>
                        <TableCell><H6>{karyawan.nama}</H6></TableCell>
                        <TableCell color={karyawan.masukToday?'green':'red'}><H6 textAlign={'center'}>{karyawan.masukToday?'Sudah Absen':'Belum Absen'}</H6></TableCell>
                        <TableCell><H6 textAlign={"center"}>{karyawan.masuk ? karyawan.masuk.length : 0}/{lastDate}</H6></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </Box>
}

export default MonitorAbsensi