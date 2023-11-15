import { useEffect, useState } from 'react'
import axios from 'axios'

import { Business } from '../types'

interface useBusinessesProps {
    page: number
    location: string
    openNow: boolean
    sortBy: string
}

const useBusinesses = ({
    page,
    location,
    openNow,
    sortBy,
}: useBusinessesProps) => {
    const [businesses, setBusinesses] = useState<Business[]>([])
    const [error, setError] = useState('')
    const [totalPage, setTotalPage] = useState(0)
    const [isLoading, setLoading] = useState(false)
    const limit = 10
    const offset = Math.min((page - 1) * limit, 990)

    useEffect(() => {
        setError('')
        setLoading(true)
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&open_now=${openNow}&sort_by=${sortBy}&limit=${limit}&offset=${offset}`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            import.meta.env.VITE_YELP_API_KEY
                        }`,
                        Accept: 'application/json',
                    },
                }
            )
            .then((response) => {
                setBusinesses(response.data.businesses)
                setLoading(false)
                setTotalPage(
                    Math.min(Math.ceil(response.data.total / limit), 100)
                )
                setError('')
            })
            .catch((err) => {
                if (err.response.status === 400) {
                    if (
                        err.response.data.error.description.includes(
                            'too short'
                        )
                    ) {
                        setError('Please specify a location')
                    } else if (
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
    }, [page, location, openNow, sortBy])

    return { businesses, error, isLoading, totalPage }
}

export default useBusinesses
