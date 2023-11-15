import { Review } from '../types'
import ReviewCardSkeleton from './ReviewSkeleton'
import ReviewCard from './ReviewCard'
import { Carousel, CarouselItem } from 'react-bootstrap'
interface ReviewListProps {
    isLoading: boolean
    reviews: Review[]
}

const ReviewList = ({ reviews, isLoading }: ReviewListProps) => {
    const skeletons = [1, 2, 3]
    return (
        <Carousel controls={false} indicators={false}>
            {isLoading
                ? skeletons.map((skeleton) => (
                      <CarouselItem interval={1500} key={skeleton}>
                          <ReviewCardSkeleton />
                      </CarouselItem>
                  ))
                : reviews.map((review) => (
                      <CarouselItem interval={1500} key={review.id}>
                          <ReviewCard review={review} key={review.id} />
                      </CarouselItem>
                  ))}
        </Carousel>
    )
}

export default ReviewList
