import { Card, CardContent, CardActions, Box, Skeleton } from '@mui/material'

function BusinessCardSkeleton() {
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ width: '30%' }}>
                <Skeleton variant="rectangular" sx={{ height: '200px' }} />
            </Box>
            <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}
            >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </CardContent>
            </Box>
            <CardActions>
                <Skeleton
                    variant="rectangular"
                    sx={{ width: '100%', height: '100%' }}
                />
            </CardActions>
        </Card>
    )
}

export default BusinessCardSkeleton
