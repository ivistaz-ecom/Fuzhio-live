import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PartnersCarousel = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            showDots: false, // Remove navigation dots
        },
        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            showDots: false, // Remove navigation dots
        },
        mobile: {
            breakpoint: { max: 768, min: 0 },
            items: 1,
            showDots: false, // Remove navigation dots
        },
    };

    return (
        <Container>
            <Row>
                <Col>
                    <Carousel responsive={responsive}
                        infinite
                        autoPlay
                        autoPlaySpeed={1000}
                        className='py-5 px-3'>
                        {/* Place your carousel items here */}
                        <div className='p-3'>
                            <Image src='/home/swasti.png' alt='swasti' width="100%" />
                        </div>
                        <div className='p-3'>
                            <Image src='/home/vrutti.png' alt='Vrutti' width="100%" />
                        </div>
                        <div className='p-3'>
                            <Image src='/home/cms.png' alt='CMS' width="100%" />
                        </div>
                        <div className='p-3'>
                            <Image src='/home/cac.png' alt='swasti' width="100%" />
                        </div>
                        {/* Add more items as needed */}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default PartnersCarousel;
