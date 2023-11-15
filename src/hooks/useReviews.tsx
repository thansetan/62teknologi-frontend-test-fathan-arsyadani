import { useEffect, useState } from 'react'
import { Review } from '../types'
import axios from 'axios'

interface useReviewProps {
    businessAlias: string
}

const useReviews = ({ businessAlias }: useReviewProps) => {
    const [reviews, setReviews] = useState<Review[]>([])
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [totalReviews, setTotalReviews] = useState(0)

    const reqURL = `https://api.yelp.com/v3/businesses/${businessAlias}/reviews` // only returns 3 reviews
    console.log(reqURL)
    useEffect(() => {
        axios
            .get(`http://cors-anywhere.herokuapp.com/${reqURL}`, {
                headers: {
                    Authorization: `Bearer ${
                        import.meta.env.VITE_YELP_API_KEY
                    }`,
                    Accept: 'application/json',
                },
            })
            .then((response) => {
                console.log('TRIGGERED')
                setReviews(response.data.reviews)
                setTotalReviews(response.data.total)
                setLoading(false)
                setError('')
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    if (
                        err.response.data.error.description.includes(
                            "'Bearer undefined' does not match"
                        )
                    ) {
                        setError(
                            "Invalid API Key / you haven't set your API Key in .env"
                        )
                    } else {
                        setError(err.response.data.error.description)
                    }
                } else {
                    setError(err.message)
                }
                setLoading(false)
            })
    }, [businessAlias])

    return { reviews, isLoading, error, totalReviews }
}

export default useReviews
