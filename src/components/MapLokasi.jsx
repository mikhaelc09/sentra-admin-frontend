import React, { useEffect, useRef } from 'react'
import { Box } from '@adminjs/design-system'

const MapLokasi = (props) => {
    const mapContainerRef = useRef(null)

    const params = props.record.params
    console.log(params)
    useEffect(() => {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoibWlraGFlbGMwOSIsImEiOiJjbGk2N24zYXEyMTFkM3Btdmo1NW1scWdtIn0.XIwzLZD8whTG58_DqR9xbQ',
        center: [ params.longitude, params.latitude ],
        zoom: 12
      })

      return () => map.remove()
    }, [])
    
    return (
        <Box>
            <Box ref={mapContainerRef} sx={{ width: '100%', height: '400px' }} />
        </Box>
    )
}

export default MapLokasi