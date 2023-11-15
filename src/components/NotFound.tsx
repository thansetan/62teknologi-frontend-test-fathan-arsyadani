import { Box, Typography } from '@mui/material'

const NotFound = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="70vh"
        >
            <Typography variant="h1">404</Typography>

            <Typography variant="h2">Not Found</Typography>
        </Box>
    )
}

export default NotFound
