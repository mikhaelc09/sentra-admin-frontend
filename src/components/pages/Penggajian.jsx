import React, { useState, useEffect } from 'react'
import { Box } from '@adminjs/design-system'
import { ApiClient, useNotice } from "adminjs";

const api = new ApiClient();

const Penggajian = (props) => {
    useEffect(() => {
        api.resourceAction({
            resourceId: "Penggajian",
            actionName: "detail",
        }).then((response) => {
            console.log(response)
        })
    })
    const notice = useNotice();

    return <Box>Test</Box>
}

export default Penggajian