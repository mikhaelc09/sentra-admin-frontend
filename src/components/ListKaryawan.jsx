import { Label, FormGroup, Box, Table, TableHead, TableBody, TableRow, TableCell } from '@adminjs/design-system'
import pkg from 'adminjs'
const { flat } = pkg
const ListKaryawan = (props) => {
    const params = flat.unflatten(props.record.params)

    return <FormGroup>
        <Label>List Karyawan</Label>
        <Box>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>NIK</TableCell>
                        <TableCell>Nama</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!params.karyawan.length && (
                        <TableRow>
                            <TableCell colSpan={4} style={{ textAlign: 'center' }}>
                                Tidak ada karyawan pada divisi ini
                            </TableCell>
                        </TableRow>
                    )}
                    {params.karyawan.length > 0 && params.karyawan.map(({profil}, index) => {
                        console.log(profil);
                        return(
                        <TableRow key={index}>
                            <TableCell>{profil.nik}</TableCell>
                            <TableCell>{profil.nama}</TableCell>
                            <TableCell>{profil.email}</TableCell>
                            <TableCell>{profil.status == 0 ? "Inactive" : "Active"}</TableCell>
                        </TableRow>
                    )
                    })}
                </TableBody>
            </Table>
        </Box>
    </FormGroup>;
}

export default ListKaryawan;