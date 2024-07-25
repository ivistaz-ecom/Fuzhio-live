import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import PartnersCarousel from '../homepage/parterns_carousel'

const Partners = () => {
    return (
        <>
            <Container fluid className='py-5'>
                <Container >
                    <Row className='d-flex flex-lg-row flex-column p-md-0 p-3 z-2'>
                        <Col className='p-0'>
                            <Image src='/assets/about/workplace_1.jpg' alt='grl1' width="100%" />
                        </Col>
                        <Col className='p-0'>
                            <Image src='/assets/about/workplace_2.jpeg' alt='grl2' width="100%" />
                        </Col>
                        <Col className='p-0'>
                            <Image src='/assets/about/workplace_3.jpeg' alt='grl3' width="100%" />
                        </Col>
                    </Row>
                </Container >
                <Container className='my-5'>
                    <Col className='text-center p-md-5'>
                        <h1 className=' d-md-inline border-0 border-bottom text-center border-dark text-black p-4'>Partners</h1>
                    </Col>
                    <PartnersCarousel />
                </Container>
            </Container>
        </>
    )
}

export default Partners