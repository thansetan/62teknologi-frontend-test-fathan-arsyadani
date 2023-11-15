import { useParams } from 'react-router-dom'
import PhotoCarousel from './PhotoCarousel'
import MapComponent from './Map'
import useBusiness from '../hooks/useBusiness'
import { Container, Box, Typography, CircularProgress } from '@mui/material'
import BusinessData from './BusinessData'
import Reviews from './Reviews'
import OpenHours from './OpenHours'

const Business = () => {
    const { businessAlias } = useParams() as { businessAlias: string }
    const { isLoading, business, error } = useBusiness({ businessAlias })

    return error ? (
        <h1>{error}</h1>
    ) : isLoading ? (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <CircularProgress />
        </Box>
    ) : (
        <Container fixed>
            <Typography variant="h2">{business.name}</Typography>
            <PhotoCarousel photos={business.photos} />
            <Reviews businessAlias={businessAlias} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'flex-start',
                    marginTop: 5,
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        width: { xs: '100%', md: '70%' },
                        marginRight: { xs: 0, md: 5 },
                    }}
                >
                    <BusinessData business={business} />{' '}
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', md: '30%' },
                    }}
                >
                    <MapComponent coordinates={business.coordinates} />
                </Box>
            </Box>
            <Box>
                <Typography fontWeight="bold" variant="h5">
                    Business Open Hours
                </Typography>
                <OpenHours openHours={business.hours[0].open} />
            </Box>
        </Container>
    )
}

export default Business
