import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { Coordinates } from '../types'
import { Box, Typography } from '@mui/material'

interface MapProps {
    coordinates: Coordinates
}
const MapComponent = ({ coordinates }: MapProps) => {
    return (
        <Box
        // sx={{
        //     display: 'flex',
        //     flexDirection: 'column',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        // }}
        >
            <Map
                height={300}
                defaultCenter={[coordinates.latitude, coordinates.longitude]}
                defaultZoom={15}
            >
                <ZoomControl />
                <Marker
                    width={30}
                    anchor={[coordinates.latitude, coordinates.longitude]}
                    onClick={() => {
                        window.open(
                            `https://www.google.com/maps/place/${coordinates.latitude},${coordinates.longitude}`
                        )
                    }}
                />
            </Map>
            <Typography variant="caption">
                Click on the marker to open Google Maps
            </Typography>
        </Box>
    )
}

export default MapComponent
