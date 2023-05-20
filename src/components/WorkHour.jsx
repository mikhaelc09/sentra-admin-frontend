import React from 'react'
import { Box } from '@adminjs/design-system'
import moment from 'moment';

const WorkHour = (props) => {
    const value = props.record.params
    console.log(value)
    return <Box>{value}</Box>;
}

export default WorkHour