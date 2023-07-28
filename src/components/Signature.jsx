import React, { useState, useEffect } from "react";
import { Box, Label } from '@adminjs/design-system'

const Signature = (props) => {
    const [signature, setSignature] = useState('')

    useEffect(() => {
        setSignature(props.record.params.signature)
    }, [])

    return <Box>
        <Label>Signature</Label>
        <img src={signature}></img>
    </Box>
}

export default Signature;