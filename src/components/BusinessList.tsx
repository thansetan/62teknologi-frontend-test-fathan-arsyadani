import { Box, Grid, Typography } from '@mui/material'
import BusinessCard from './BusinessCard'
import { Business } from '../types'
import BusinessSkeleton from './BusinessSkeleton'

interface BusinessListProps {
    isLoading: boolean
    businesses: Business[]
}
const BusinessList = ({ businesses, isLoading }: BusinessListProps) => {
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <Box sx={{ flexGrow: 1, marginBottom: 5 }}>
            <Grid container spacing={2}>
                {isLoading ? (
                    skeletons.map((skeleton) => (
                        <Grid item xs={12} key={skeleton}>
                            <BusinessSkeleton />
                        </Grid>
                    ))
                ) : businesses.length > 0 ? (
                    businesses.map((business, ix) => (
                        <Grid item xs={12} key={business.alias}>
                            <BusinessCard
                                business={business}
                                key={business.alias}
                                bgColor={ix % 2 == 1 ? 'white' : 'grey'}
                            />
                        </Grid>
                    ))
                ) : (
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        width="100%"
                        justifyContent="center"
                    >
                        No business found in this area
                    </Typography>
                )}
            </Grid>
        </Box>
    )
}

export default BusinessList
