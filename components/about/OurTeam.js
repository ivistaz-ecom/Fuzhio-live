import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const OurTeam = () => {
    return (
        <>
            <Container fluid style={{ background: '#6E180CD4' }}>
                <Container className='py-lg-5 text-center'>

                    <h1 className=' text-white d-inline-block border-bottom pb-4'>Our Team</h1>

                    <Row className='d-flex flex-md-row justify-content-center align-content-center m-lg-5 m-2'>
                        <Col md={4} className='p-3 text-center' >
                            <Image src='/assets/about/our_team/krishna.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>Krishnamoorthy</h1>
                            <h6 className='text-white'>Director</h6>
                        </Col>
                        <Col md={4} className='p-3 text-center'>
                            <Image src='/assets/about/our_team/chandrashekarappa.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>CP Chandrashekarappa</h1>
                            <h6 className='text-white'>Director</h6>
                        </Col>

                        <Col md={4} className='p-3 text-center'>
                            <Image src='/assets/about/our_team/shivkumar.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>Shiv Kumar</h1>
                            <h6 className='text-white'>Founder/Mentor</h6>
                        </Col>
                        <Col md={4} className='p-3 text-center'>
                            <Image src='/assets/about/our_team/raghunathan.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>Raghunathan</h1>
                            <h6 className='text-white'>Founder/Mentor</h6>
                        </Col>
                        <Col md={4} className='p-3 text-center'>
                            <Image src='/assets/about/our_team/shaonli.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>Shaonli Chakraborty</h1>
                            <h6 className='text-white'>Advisor/Mentor</h6>
                        </Col>
                        <Col md={4} className='p-3 text-center'>
                            <Image src='/assets/about/our_team/vsihrut.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>Vishrut Shivkumar</h1>
                            <h6 className='text-white'>Operations Lead, Noble Plastic</h6>
                        </Col>
                        <Col md={4} className='p-3 text-center'>
                            <Image src='/assets/about/our_team/rakesh.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>Rakesh BH</h1>
                            <h6 className='text-white'>Finance Lead</h6>
                        </Col>
                        <Col md={4} className='p-3 text-center'>
                            <Image src='/assets/about/our_team/abdul.png' width="90%" />
                            <h1 className='text-white mt-2' style={{ fontSize: '26px' }}>Abdul Latheef P</h1>
                            <h6 className='text-white'>Community Engagement</h6>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default OurTeam