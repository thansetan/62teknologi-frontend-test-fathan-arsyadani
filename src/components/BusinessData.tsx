import { Card, CardContent, Typography, Stack, Chip } from '@mui/material'
import { BusinessDetail } from '../types'
import IsOpen from './IsOpen'
import RatingComponent from './BusinessRating'

interface BusinessDataProps {
    business: BusinessDetail
}

const BusinessData = ({ business }: BusinessDataProps) => {
    return (
        <Card
            sx={{
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" color="green">
                    {business.price}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center">
                    {business.categories.map((category) => (
                        <Chip
                            key={category.alias}
                            variant="outlined"
                            label={category.title}
                        />
                    ))}
                </Stack>
                <RatingComponent rating={business.rating} />
                <Typography>({business.review_count} reviews)</Typography>
                <Typography variant="h5">{business.display_phone}</Typography>
                <Typography variant="h5">
                    {business.location.display_address.join(', ')}
                </Typography>

                <Stack direction="row" spacing={1} justifyContent="center">
                    <Chip
                        variant="outlined"
                        label={`${
                            business.transactions.indexOf('reservation') === -1
                                ? 'No'
                                : 'Takes'
                        } Reservation`}
                    />

                    <Chip
                        variant="outlined"
                        label={`${
                            business.transactions.indexOf('delivery') === -1
                                ? 'No'
                                : 'Takes'
                        } Delivery`}
                    />

                    <Chip
                        variant="outlined"
                        label={`${
                            business.transactions.indexOf('pickup') === -1
                                ? 'No'
                                : 'Takes'
                        } Pickup`}
                    />
                </Stack>
                <Stack direction="row" justifyContent="center" marginTop={1}>
                    <IsOpen isOpen={!business.hours[0].is_open_now} />
                </Stack>
            </CardContent>
        </Card>
    )
}

export default BusinessData
