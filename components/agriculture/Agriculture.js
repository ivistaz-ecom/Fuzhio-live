import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'


import PartnersCarousel from '../homepage/parterns_carousel'


const Agriculture = () => {
    return (
        <>
            {/* Section 2 */}
            <Container fluid style={{ backgroundColor: '#F4D5C5' }}>
                <Container className='p-lg-5 p-3' >
                    <Row className='p-lg-5 p' style={{ color: '#3C3C3CDE', fontSize: '17px', lineHeight: '32px' }}>
                        <p>At Fuzhio, our focus is on creating sustainable opportunities for farmers to improve their market realizations. We lead efforts that improve supply chains and their accompanying infrastructure, and in turn, generate opportunities for smallholders to link their production to sales. Right from improvements in technology, promotion of gender equality, and implementing sustainable farming practices, we help producers reap benefits by creating a plethora of market opportunities.
                        </p>
                        <p>Things we do:</p>
                        <ul className='px-5'>
                            <li>We create forward and backward linkages for farmers through producer companies and help them prosper financially.</li>
                            <li>We create an intangible benefit for farmers through price benchmarking and assured buying.</li>
                            <li>We create linkages to sell impact inputs to farmers, which in turn improves soil health, water and air quality.</li>
                            <li>We enable producer companies to buy the right type of inputs at the right price.</li>
                            <li>We put safe food on the plates of consumers.</li>
                        </ul>
                        <p>We believe that constant support for an agri-business model like this can integrate many more smallholder farmers into the value chain, and ensure food and income security for them.</p>
                    </Row>
                </Container>
            </Container>

            <Container className='p-4'>
                <Row>

                    <Col md={3} className='text-center'>
                        <Row className='agri-hover-effect p-4'>
                            <Image src='/assets/agri/cereals.png' width="100%" />
                        </Row>
                        <h4 className='text-black'>Cereals</h4>
                    </Col>
                    <Col md={3} className='text-center'>
                        <Row className='agri-hover-effect p-4'>
                            <Image src='/assets/agri/pulses.png' width="100%" />
                        </Row>
                        <h4 className='text-black'>Pulses</h4>
                    </Col>
                    <Col md={3} className='text-center'>
                        <Row className='agri-hover-effect p-4'>
                            <Image src='/assets/agri/veg.png' width="100%" />
                        </Row>
                        <h4 className='text-black'>Vegetables</h4>
                    </Col>
                    <Col md={3} className='text-center'>
                        <Row className='agri-hover-effect p-4'>
                            <Image src='/assets/agri/bio.png' width="100%" />
                        </Row>
                        <h4 className='text-black'>Bio Inputs</h4>
                    </Col>
                </Row>
            </Container>

            <Container fluid className='p-0 px-3'>
                <Row className='p-0'>
                    <Col md={4} className='p-0'>
                        <Image src='/assets/agri/green_chilli.jpg' width="100%" />
                    </Col>
                    <Col md={4} className='p-0'>
                        <Image src='/assets/agri/white_veg.jpg' width="100%" />
                    </Col>
                    <Col md={4} className='p-0'>
                        <Image src='/assets/agri/green_banana.jpg' width="100%" />
                    </Col>
                    <Col md={4} className='p-0'>
                        <Image src='/assets/agri/tomato.jpg' width="100%" />
                    </Col>
                    <Col md={4} className='p-0'>
                        <Image src='/assets/agri/tomato_lf.jpg' width="100%" />
                    </Col>
                    <Col md={4} className='p-0'>
                        <Image src='/assets/agri/leaf.jpg' width="100%" />
                    </Col>
                </Row>
            </Container>
            <Container className='my-5'>
                <Col className='text-center p-lg-5'>
                    <h1 className=' d-md-inline border-0 border-bottom text-center border-dark text-black p-4'>Partners</h1>
                </Col>
                <PartnersCarousel />
            </Container>

        </>
    )
}

export default Agriculture