import React from 'react'
import { useState } from 'react'
import { Box, Button } from '@adminjs/design-system'
import { useNotice } from 'adminjs'
import axios from 'axios'

const ConfirmIzin = (props) => {
    const [isPending, setIsPending] = useState(props.record.params.status == 1);
    const notice = useNotice()
    const handleTolak = async () => {
        await axios.post(`/admin/api/resources/izin/records/${props.record.params.id}/edit`,{
            status:0
        })
        notice({message: 'Izin ditolak'})
        setIsPending(false)
    }
    const handleSetuju = async () => {
        await axios.post(`/admin/api/resources/izin/records/${props.record.params.id}/edit`,{
            status:2
        })
        notice({message: 'Izin disetujui'})
        setIsPending(false)
    }
    return (
        <Box flex={true} justifyContent={'center'} >
            { isPending &&
            <>
                <Button size='lg' marginLeft={'8px'} variant='danger' onClick={handleTolak}>Tolak</Button>
                <Button size='lg' marginLeft={'8px'} variant='info' onClick={handleSetuju}>Setujui</Button>
            </>
            }
        </Box>
    )
}

export default ConfirmIzin