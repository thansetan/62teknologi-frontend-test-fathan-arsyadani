import useReviews from '../hooks/useReviews'
import ReviewList from './ReviewList'
import { Box, Typography } from '@mui/material'
interface ReviewProps {
    businessAlias: string
}

const Reviews = ({ businessAlias }: ReviewProps) => {
    const { isLoading, reviews, error } = useReviews({ businessAlias })

    return error ? (
        <h1>{error}</h1>
    ) : (
        <Box sx={{ flexGrow: 1, marginTop: 5 }}>
            <Typography variant="h4" fontWeight="bold">
                What our customer says:
            </Typography>
            <ReviewList reviews={reviews} isLoading={isLoading} />
        </Box>
    )
}

export default Reviews
