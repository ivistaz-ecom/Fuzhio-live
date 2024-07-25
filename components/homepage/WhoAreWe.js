import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import VLImage from '/public/home/Vijayalakshmi_who_are_we.jpg'
import MapImage from '/public/home/map.png'
import Girl1 from '/public/home/fuzhio_home_girl1.jpg'
import Girl2 from '/public/home/fuzhio_home_girl2.jpg'
import Girl3 from '/public/home/fuzhio_home_girl3.jpg'


// import NumberCounter from '../NumberCounter/NumberComponent'
import PartnersCarousel from './parterns_carousel'

import NumberCounter from '../NumberCounter/NumberComponent'


const WhoAreWe = () => {
    return (
        <>

            {/* Section 1 */}
            <Container fluid style={{ backgroundColor: '#6e180CAB' }}>
                <Container className='py-5'>
                    <Row md={12} gap={4}>
                        <Col md={6} sm={12} className='d-flex flex-column justify-content-center lato-regular p-md-5'>
                            <Row className='p-md-5'>
                                <h1 className=' text-white py-2 bor'>Who Are We</h1>
                                <h3 className='fs-2 text-white fw-normal'>Fuzhio promotes Impact Products</h3>
                                <p className='text-white' style={{ lineHeight: '32px', fontSize: '18px' }}>Fuzhio strives to improve value chains and make them equitable and sustainable. Our market-led activities unlock business opportunities for vulnerable communities, and enhance socio-economic and environmental value for all stakeholders. Our environmentally-aligned initiatives create mutual synergies for stakeholders, value-added products for farmers and partners, and profits for all involved.</p>
                                <a href="/about/" className='mt-md-5 text-decoration-none text-white'>READ MORE</a>
                            </Row>
                        </Col>
                        <Col md={6} sm={12} className='mt-5 mt-md-0'>
                            <Image src='/home/Vijayalakshmi_who_are_we.jpg' alt='vl_img' width="100%" />
                        </Col>
                    </Row>
                </Container>
            </Container >

            {/* Section 2 */}

            <Container fluid className='p-5 d-none d-md-block' style={{ backgroundColor: '#6e180C29' }}>
                <Container className='p-5'>
                    <Row>
                        <Image src='/home/map.png' alt='map' width="100%" />
                    </Row>
                </Container>
            </Container>

            {/* Section 3 */}
            {/* Our Differentiators */}

            <Container className='py-5'>
                <Row className='d-flex flex-column align-items-center'>
                    <h1 className='text-center'>Our Differentiators</h1>
                    <hr className='w-50 border-3 my-3' />
                </Row>
            </Container>
            <Container>
                <Row className='d-flex d-md-row flex-md-row flex-column justify-content-center'>
                    {/* Row 1 */}
                    <Col className='d-flex flex-column flex-row justify-content-between our-dirc p-md-5 laro-regular p-5 w-100' style={{}}>
                        <p className='text-white p-0 lh-lg '>The products in the value chains that we enhance ensure positive social and environmental impact</p>
                        <div className='border border-3 w-25 d-md-block d-none '></div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between our-dirc-1  p-md-5 laro-regular p-5 w-100' >
                        <p className='text-white p-0 lh-lg'>We make the markets work for the poor. Our workforce is comprised of smallholder farmers, women, and members of various marginalised communities</p>
                        <div className='border border-3 w-25 d-md-block d-none '></div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between our-dirc our-dirc-2  p-md-5 laro-regular p-5 ' >
                        <p className='text-white p-0 lh-lg '>Returns from our initiatives flow directly to our community stakeholders, thus making our system equitable</p>
                        <div className='border border-3 w-25 d-md-block d-none '></div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between our-dirc our-dirc-3  p-md-5 laro-regular p-5 ' >
                        <p className='text-white p-0 lh-lg '>We not only improve market linkages, but also integrate our stakeholders into unique business opportunities</p>
                        <div className='border border-3 w-25 d-md-block d-none '></div>
                    </Col>
                    <Col className='d-flex flex-column justify-content-between our-dirc our-dirc-4  p-md-5 laro-regular p-5 ' >
                        <p className='text-white p-0 lh-lg '>We enable traceability and transparency, and promise quality assurance of all our products</p>
                        <div className='border border-3 w-25 d-md-block d-none '></div>
                    </Col>
                </Row>
                {/* Row 2 */}
                

            </Container >

            {/* Section 4 */}
            {/* Our Impact */}

            <Container>
                <Row className='p-md-5 '>
                    <Col md={4} >
                        <h1 className='w-50 d-md-block d-none py-3' style={{ color: 'black', borderBottom: '2px solid #923022', letterSpacing: '5px' }}>Our Impact</h1>
                        <h1 className='w-100 d-md-none d-block p-5 text-center'>Our Impact</h1>
                    </Col>

                    <Col className='w-100 '>
                        <Row className='text-center d-flex flex-column text-center flex-md-row'>
                            <Col className=''>
                                <NumberCounter start={0} end={25000} symbol="+" title="Farmers we work with" />
                            </Col>
                            <Col className=''>
                                <NumberCounter start={0} end={25000} symbol="ha+" title="Area under cultivation" />
                            </Col>
                        </Row>
                        <Row className='text-center d-flex flex-column text-center flex-md-row'>
                            <Col className=''>
                                <NumberCounter start={0} end={25} symbol="+" title="FPOs we work with" />
                            </Col>
                            <Col className=''>
                                <NumberCounter start={0} end={5} title="States we work in" />
                            </Col>
                        </Row>
                        <Row className=' text-center d-flex flex-column text-center flex-md-row '>
                            <Col className='mt-4'>
                                <NumberCounter start={0} end={13500} symbol="+" title="Trees planted" />
                            </Col>
                            <Col className=''>
                                <NumberCounter start={30} end={365} symbol=" tonnes+" title="Plastic saved from entering the ocean" />
                            </Col>
                        </Row>
                    </Col>
                </Row >
            </Container >

            {/* Section 5 */}
            {/* Gallery */}

            <Container className='mt-md-5'>
                <Row className='d-flex flex-lg-row flex-column p-md-0 p-3 z-2'>
                    <Col className='p-0'>
                        <Image src='/home/fuzhio_home_girl1.jpg' alt='grl1' width="100%" />
                    </Col>
                    <Col className='p-0'>
                        <Image src='/home/fuzhio_home_girl2.jpg' alt='grl2' width="100%" />
                    </Col>
                    <Col className='p-0'>
                        <Image src='/home/fuzhio_home_girl3.jpg' alt='grl3' width="100%" />
                    </Col>
                </Row>
            </Container >

            {/* Section 6 */}
            {/* Partners Carousel */}

            <Container fluid className='parters-bg'>
                <Container>
                    <Col className='text-center'>
                        <h1 className='d-inline-block d-none text-center pb-4 px-5' style={{ color: '#923022', borderBottom: '2px solid #923022', letterSpacing: '5px' }}>Partners</h1>
                    </Col>
                    <PartnersCarousel />
                </Container>
            </Container>


        </>
    )
}

export default WhoAreWe