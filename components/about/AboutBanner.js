import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const AboutBanner = () => {
    return (
        <>
            <Container fluid className='about-background-container bg-opacity-50 d-flex flex-wrap align-items-center '>
                <Container className=''>
                    <Row>
                        <Col >
                            <h1 className='text-white banner-font' >
                                ABOUT US
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>

            
        </>
    )
}

export default AboutBanner