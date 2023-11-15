import React from 'react'
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import { Review } from '../types'
import RatingComponent from './BusinessRating'

interface ReviewCardProps {
    review: Review
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <Card sx={{ display: 'flex', height: 150 }}>
            <Box
                sx={{
                    width: 150,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    alt={review.user.name}
                    src={review.user.image_url}
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '80%',
                }}
            >
                <CardContent>
                    <Typography variant="h4" component="h2">
                        {review.user.name}
                    </Typography>
                    <RatingComponent rating={review.rating} />
                    <Typography variant="body2" component="p">
                        {review.text}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default ReviewCard
