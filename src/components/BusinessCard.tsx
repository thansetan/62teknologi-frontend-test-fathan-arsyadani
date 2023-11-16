import { Business } from '../types'
import RatingComponent from './BusinessRating'
import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
    styled,
} from '@mui/material'

interface BusinessCardProps {
    business: Business
    bgColor: string
}

const Category = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.grey[500],
    marginLeft: theme.spacing(0.5),
    borderRadius: '5px',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
}))

const BusinessCard = ({ business, bgColor }: BusinessCardProps) => {
    return (
        <Card
            sx={{
                display: 'flex',
                maxHeight: { xs: '100%', md: '200px' },
                backgroundColor: bgColor,
            }}
        >
            <Box
                sx={{
                    width: '30%',
                }}
            >
                <CardMedia
                    component="img"
                    sx={{ height: '100%' }}
                    image={business.image_url}
                    alt={business.name}
                />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '70%',
                }}
            >
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                        component={'div'}
                        variant="h5"
                        fontWeight="bold"
                        align="left"
                    >
                        {business.name}{' '}
                        {business.price ? `(${business.price})` : ''}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        align="left"
                    >
                        {business.location.display_address.join(', ')}
                    </Typography>
                    <Box display="flex" flexDirection="row" flexWrap="wrap">
                        {business.categories.map((category) => (
                            <Category key={category.alias}>
                                {category.title}
                            </Category>
                        ))}
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', md: 'row' }}
                        alignContent="flex-start"
                        alignItems="flex-start"
                        marginBottom={1}
                    >
                        <RatingComponent rating={business.rating} />
                        <Typography variant="h6">
                            ({business.review_count} reviews)
                        </Typography>
                    </Box>
                    <Box display="flex" flexDirection="row">
                        <Typography variant="h6" fontWeight="bold">
                            {business.display_phone}
                        </Typography>
                    </Box>
                </CardContent>
            </Box>
            <CardActions>
                <Button
                    href={`biz/${business.alias}`}
                    variant="contained"
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    Detail
                </Button>
            </CardActions>
        </Card>
    )
}

export default BusinessCard
