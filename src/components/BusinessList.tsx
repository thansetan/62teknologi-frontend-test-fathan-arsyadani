import { Box, Grid } from '@mui/material'
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
                {isLoading
                    ? skeletons.map((skeleton) => (
                          <Grid item xs={12} key={skeleton}>
                              <BusinessSkeleton />
                          </Grid>
                      ))
                    : businesses.map((business) => (
                          <Grid item xs={12} key={business.alias}>
                              <BusinessCard
                                  business={business}
                                  key={business.alias}
                              />
                          </Grid>
                      ))}
            </Grid>
        </Box>
    )
}

export default BusinessList
