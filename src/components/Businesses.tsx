import { useState } from 'react'
import { Container, Grid } from '@mui/material'
import BusinessContainer from './BusinessContainer'
import Filter from './Filter'
import { useLocation } from 'react-router-dom'

const Businesses = () => {
    const [sortBy, setSortBy] = useState('best_match')
    const [openNow, setOpenNow] = useState(false)

    let location
    try {
        location = useLocation().state.location
    } catch (error) {
        location = 'New York'
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={9}>
                    <BusinessContainer
                        location={location}
                        filter={{ sortBy, openNow }}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Filter
                        onOpenChange={(data) => {
                            setOpenNow(data)
                        }}
                        onSortChange={(data) => {
                            setSortBy(data)
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Businesses
