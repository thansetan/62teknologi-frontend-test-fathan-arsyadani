import { Card, CardContent, Typography, Stack, Chip } from '@mui/joy'
import { BusinessDetail } from '../types'
import IsOpen from './IsOpen'
import RatingComponent from './BusinessRating'

interface BusinessDataProps {
    business: BusinessDetail
}

const BusinessData = ({ business }: BusinessDataProps) => {
    return (
        <Card>
            <CardContent orientation="horizontal">
                <CardContent
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Typography level="h3" textColor="green">
                        {business.price}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        {business.categories.map((category) => (
                            <Chip key={category.alias} variant="outlined">
                                {category.title}
                            </Chip>
                        ))}
                    </Stack>
                    <RatingComponent rating={business.rating} />
                    <Typography level="body-md">
                        ( {business.review_count} reviews)
                    </Typography>
                    <Typography level="h3">{business.display_phone}</Typography>
                    <Typography level="h3">
                        {business.location.display_address.join(', ')}
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Chip variant="outlined">
                            {business.transactions.indexOf(
                                'restaurant_reservation'
                            ) === -1
                                ? 'No'
                                : 'Takes'}{' '}
                            Reservation
                        </Chip>
                        <Chip variant="outlined">
                            {business.transactions.indexOf('delivery') === -1
                                ? 'No'
                                : 'Takes'}{' '}
                            Delivery
                        </Chip>

                        <Chip variant="outlined">
                            {business.transactions.indexOf('pickup') === -1
                                ? 'No'
                                : 'Takes'}{' '}
                            Pickup
                        </Chip>
                    </Stack>
                    <IsOpen isOpen={!business.hours[0].is_open_now} />
                </CardContent>
            </CardContent>
        </Card>
    )
}

export default BusinessData
