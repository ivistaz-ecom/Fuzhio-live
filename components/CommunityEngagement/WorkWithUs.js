import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const WorkWithUs = () => {

    const workWithBg = {
        backgroundImage: 'url("")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',

    }

    return (
        <>
            <Container className='py-lg-5 py-0 pt-lg-0 pt-4'>
                <Row className='d-flex flex-lg-row flex-column'>
                    <Col className='p-0'>
                        <Image src='/assets/community-engagement/work_with_us_bg.png' alt='' fluid width="100%" />
                    </Col>

                    <Col style={{ background: '#f7a100', zIndex: '' }} className='py-3'>
                        <h1 className='text-white'>
                            Work with Us
                        </h1>
                        <div style={{ width: '10%' }} className='border border-dark my-3' />

                        <Row className='mt-4 d-flex flex-lg-row flex-column'>
                            <Col >
                                <Image src='/assets/community-engagement/becom_network.svg' fluid alt='' />
                                <h5 className='text-white mt-3'>
                                    Become a Network Consultant
                                </h5>
                                <p className='text-white'>
                                    Become a part of our large network.
                                </p>
                            </Col>
                            <Col>
                                <Image src='/assets/community-engagement/partner_for.svg' fluid alt='' />
                                <h5 className='text-white mt-3'>
                                    Partner for Projects/
                                    Services
                                </h5>
                                <p className='text-white'>
                                    Utilise our skills and resources to maximise results for your organisation.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container fluid style={{ background: '#e6e3dc' }}>
                <Container className='py-5'>
                    <Col>
                        <Row className='d-flex flex-lg-row flex-column'>
                            <Col className='text-center d-lg-flex d-none' md={1}>
                                <Col className='p-0' style={{ marginTop: '45px' }} >
                                    <Col className='text-center p-0'>
                                        <p style={{ lineHeight: '18px', paddingTop: '35px', paddingBottom: '20px', transform: 'rotate(-90deg)', color: '#6e180c' }}>
                                            ACTIVITIES
                                        </p>
                                    </Col>
                                    <Col style={{ paddingTop: '10px', paddingBottom: '10px', transform: 'rotate(-90deg)', color: '#6e180c' }}>
                                        <p className='mt-2'>
                                            CATI
                                        </p>
                                    </Col>
                                    <Col className='text-center' style={{ paddingTop: '30px', paddingBottom: '10px', transform: 'rotate(-90deg)', color: '#6e180c' }}>
                                        <p>
                                            CATI/ <br />
                                            ONLINE
                                        </p>
                                    </Col>
                                </Col>
                            </Col>

                            <Col className='text-center '>
                                <Col style={{ zIndex: '1' }}>
                                    <Image src='/assets/community-engagement/household_1.svg' alt='household' height={50} width={50} />
                                </Col>
                                <Col className='p-0' style={{ border: '2px solid #01963e', marginTop: '-25px' }}>
                                    <Col className='text-center p-0'>
                                        <p className='text-white' style={{ lineHeight: '18px', paddingTop: '35px', background: '#9fbe2b', paddingBottom: '20px' }}>
                                            Household <br />
                                            Survey
                                        </p>
                                    </Col>
                                    <Col style={{ borderBottom: '1px solid black', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <p>
                                            1,50,000+
                                        </p>
                                    </Col>
                                    <Col className='text-center' style={{ paddingTop: '30px', paddingBottom: '10px' }}>
                                        <p>
                                            30,000+
                                        </p>
                                    </Col>
                                </Col>
                            </Col>

                            <Col className='text-center mt-lg-0 mt-4'>
                                <Col style={{ zIndex: '1' }}>
                                    <Image src='/assets/community-engagement/in_depth_2.svg' alt='household' height={50} width={50} />
                                </Col>
                                <Col className='p-0' style={{ border: '2px solid #01963e', marginTop: '-25px' }}>
                                    <Col className='text-center p-0'>
                                        <p className='text-white' style={{ lineHeight: '18px', paddingTop: '35px', background: '#f7a100', paddingBottom: '20px' }}>
                                            In depth <br />
                                            Interviews, KII
                                        </p>
                                    </Col>
                                    <Col style={{ borderBottom: '1px solid black', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <p>
                                            50,000+
                                        </p>
                                    </Col>
                                    <Col className='text-center' style={{ paddingTop: '30px', paddingBottom: '10px' }}>
                                        <p>
                                            2,000+
                                        </p>
                                    </Col>
                                </Col>
                            </Col>


                            <Col className='text-center mt-lg-0 mt-4'>
                                <Col style={{ zIndex: '1' }}>
                                    <Image src='/assets/community-engagement/focus_group.svg' alt='household' height={50} width={50} />
                                </Col>
                                <Col className='p-0' style={{ border: '2px solid #01963e', marginTop: '-25px' }}>
                                    <Col className='text-center p-0'>
                                        <p className='text-white' style={{ lineHeight: '18px', paddingTop: '35px', background: '#e36200', paddingBottom: '20px' }}>
                                            Focus Group <br />
                                            Discussion
                                        </p>
                                    </Col>
                                    <Col style={{ borderBottom: '1px solid black', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <p>
                                            10,000+
                                        </p>
                                    </Col>
                                    <Col className='text-center' style={{ paddingTop: '30px', paddingBottom: '10px' }}>
                                        <p>
                                            -
                                        </p>
                                    </Col>
                                </Col>
                            </Col>

                            <Col className='text-center mt-lg-0 mt-4'>
                                <Col style={{ zIndex: '1' }}>
                                    <Image src='/assets/community-engagement/pooling_boothe.svg' alt='household' height={50} width={50} />
                                </Col>
                                <Col className='p-0' style={{ border: '2px solid #01963e', marginTop: '-25px' }}>
                                    <Col className='text-center p-0'>
                                        <p className='text-white' style={{ lineHeight: '18px', paddingTop: '35px', background: '#01963e', paddingBottom: '20px' }}>
                                            Polling Booth
                                            <br />
                                            <br />
                                        </p>
                                    </Col>
                                    <Col style={{ borderBottom: '1px solid black', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <p>
                                            3,000+
                                        </p>
                                    </Col>
                                    <Col className='text-center' style={{ paddingTop: '30px', paddingBottom: '10px' }}>
                                        <p>
                                            -
                                        </p>
                                    </Col>
                                </Col>
                            </Col>

                            <Col className='text-center mt-lg-0 mt-4'>
                                <Col style={{ zIndex: '1' }}>
                                    <Image src='/assets/community-engagement/training-5.svg' alt='household' height={50} width={50} />
                                </Col>
                                <Col className='p-0' style={{ border: '2px solid #01963e', marginTop: '-25px' }}>
                                    <Col className='text-center p-0'>
                                        <p className='text-white' style={{ lineHeight: '18px', paddingTop: '35px', background: '#e3000f', paddingBottom: '20px' }}>
                                            Training
                                            <br />
                                            <br />
                                        </p>
                                    </Col>
                                    <Col style={{ borderBottom: '1px solid black', paddingTop: '10px', paddingBottom: '10px' }}>
                                        <p>
                                            5000+
                                        </p>
                                    </Col>
                                    <Col className='text-center' style={{ paddingTop: '30px', paddingBottom: '10px' }}>
                                        <p>
                                            100+
                                        </p>
                                    </Col>
                                </Col>
                            </Col>

                            <Col md={1}>
                            </Col>

                        </Row>
                    </Col>
                </Container >
            </Container >
        </>
    )
}

export default WorkWithUs