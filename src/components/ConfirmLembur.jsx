import React from 'react'
import { useState } from 'react'
import { Box, Button } from '@adminjs/design-system'
import { useNotice } from 'adminjs'
import axios from 'axios'

const ConfirmLembur = (props) => {
    const [isPending, setIsPending] = useState(props.record.params.status == 0);
    const notice = useNotice()
    const handleTolak = async () => {
        await axios.post(`/admin/api/resources/lembur/records/${props.record.params.id}/edit`,axios.toFormData({
            status:0
        }))
        notice({message: 'Lembur ditolak'})
        setIsPending(false)
    }
    const handleSetuju = async () => {
        await axios.post(`/admin/api/resources/lembur/records/${props.record.params.id}/edit`,axios.toFormData({
            status:2
        }))
        notice({message: 'Lembur disetujui'})
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

export default ConfirmLembur