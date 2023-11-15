import { Box, Pagination } from '@mui/material'

interface PaginationProps {
    currentPage: number
    pageCount: number
    changeHandler: (e: any, val: number) => void
}
const PaginationComponent = ({
    currentPage,
    pageCount,
    changeHandler,
}: PaginationProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Pagination
                variant="outlined"
                page={currentPage}
                count={pageCount}
                shape="rounded"
                color="primary"
                onChange={changeHandler}
            />
        </Box>
    )
}

export default PaginationComponent
