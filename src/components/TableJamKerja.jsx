import { Label, FormGroup, Box, Table, TableHead, TableBody, TableRow, TableCell } from '@adminjs/design-system'
import pkg from 'adminjs'
const { flat } = pkg
const ListKaryawan = (props) => {
    const params = flat.unflatten(props.record.params)

    return <FormGroup>
        <Label>Jam kerja</Label>
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Hari</TableCell>
                        <TableCell>Jam Kerja</TableCell>
                        <TableCell>Lokasi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!params.jadwal.length && (
                        <TableRow>
                            <TableCell colSpan={3} style={{ textAlign: 'center' }}>
                                Tidak ada jadwal untuk karyawan ini
                            </TableCell>
                        </TableRow>
                    )}
                    {params.jadwal.length > 0 && params.jadwal.map((j, index) => {
                        console.log(j);
                        return(
                        <TableRow key={index}>
                            <TableCell>{j.hari}</TableCell>
                            <TableCell>{j.jam_kerja} jam</TableCell>
                            <TableCell>{j.lokasi}</TableCell>
                        </TableRow>
                    )
                    })}
                </TableBody>
            </Table>
        </Box>
    </FormGroup>;
}

export default ListKaryawan;