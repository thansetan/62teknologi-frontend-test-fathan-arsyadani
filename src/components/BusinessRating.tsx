import Rating from '@mui/material/Rating'

interface RatingComponentProps {
    rating: number
}

export default function RatingComponent({ rating }: RatingComponentProps) {
    return (
        <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.1}
            size="large"
            readOnly
        />
    )
}
