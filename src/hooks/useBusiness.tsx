import { useEffect, useState } from 'react'
import { BusinessDetail } from '../types'
import axios from 'axios'

interface useBusinessProps {
    businessAlias: string
}

const useBusiness = ({ businessAlias }: useBusinessProps) => {
    const [isLoading, setLoading] = useState(true)
    const [business, setBusiness] = useState({} as BusinessDetail)
    const [error, setError] = useState('')

    useEffect(() => {
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${businessAlias}`,
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
                console.log('TRIGGERED')
                setBusiness(response.data)
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

    return { business, isLoading, error }
}

export default useBusiness
