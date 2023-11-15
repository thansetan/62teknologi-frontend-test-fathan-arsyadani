import { Card, Box, CardContent, Skeleton } from '@mui/material'

function ReviewCardSkeleton() {
    return (
        <Card sx={{ display: 'flex', height: 150 }}>
            <Box sx={{ width: 150, marginRight: 10 }}>
                <Skeleton variant="circular" width={100} height={100} />
            </Box>
            <Box
                sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}
            >
                <CardContent>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                </CardContent>
            </Box>
        </Card>
    )
}

export default ReviewCardSkeleton
