import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

interface PhotoCarouselProps {
    photos: string[]
}

const PhotoCarousel = ({ photos }: PhotoCarouselProps) => {
    return (
        <Carousel fade controls={false}>
            {photos.map((photo, index) => (
                <Carousel.Item key={index} interval={1000}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            maxHeight: '500px',
                        }}
                    >
                        <img className="d-block" src={photo} alt="slide" />
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default PhotoCarousel
