import React from 'react'
import { Box } from '@adminjs/design-system'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config();

const LocationMap = (props) => {
    const [mapImage, setMapImage] = useState(null)
    const params = props.record.params
    console.log(params)
    useEffect(() => {
        // const first = axios.get(`https://image.maps.ls.hereapi.com/mia/1.6/mapview?c=${},${}&z=${}&apiKey=${process.env.HERE_API_KEY}`)
        // const second = first.then((response) => {
        //     setMapImage(response.data)
        // })
    
      return () => {
        second
      }
    }, [])
    
    return (
        <Box>
            Map
        </Box>
    )
}

export default LocationMap