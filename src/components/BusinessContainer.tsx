import { Container } from '@mui/material'
import BusinessList from './BusinessList'
import useBusinesses from '../hooks/useBusinesses'
import PaginationComponent from './Pagination'
import { useState } from 'react'
import { Filters } from '../types'

interface BusinessContainerProps {
    location: string
    filter: Filters
}

const BusinessContainer = ({ location, filter }: BusinessContainerProps) => {
    const { openNow, sortBy } = filter
    const [page, setPage] = useState(1)
    const { businesses, isLoading, totalPage, error } = useBusinesses({
        location,
        page,
        openNow,
        sortBy,
    })

    return (
        <Container fixed>
            {error ? (
                <h1>{error}</h1>
            ) : (
                <>
                    <BusinessList
                        businesses={businesses}
                        isLoading={isLoading}
                    />
                    {!isLoading ? (
                        <PaginationComponent
                            currentPage={page}
                            pageCount={totalPage}
                            changeHandler={(e, v) => {
                                setPage(v)
                            }}
                        />
                    ) : null}
                </>
            )}
        </Container>
    )
}

export default BusinessContainer
