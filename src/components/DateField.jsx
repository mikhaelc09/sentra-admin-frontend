import React from 'react'
// import { ShowPropertyProps } from 'adminjs' 
import { Box } from '@adminjs/design-system'
import moment from 'moment';

const DateField = (props) => {
    const value = new Date(props.record.params.tanggal_lahir).toLocaleDateString()
    return <Box>{moment(value).format('D MMMM YYYY')}</Box>;
}

export default DateField