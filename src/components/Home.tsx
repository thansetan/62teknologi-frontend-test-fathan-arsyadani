import { Box, Typography } from '@mui/material'

const Home = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="70vh"
        >
            <Typography variant="h2">YELP kalo dibalik jadi PLEY</Typography>
            <Typography variant="h4" color="red">
                *search field di kanan atas y
            </Typography>
        </Box>
    )
}

export default Home
