import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import WhoAreWe from './WhoAreWe'

const HomeBanner = () => {
    return (
        <>
            <Container fluid className='home-background-container overlay d-flex flex-wrap align-items-center '>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white banner-font ' >
                                Making markets work for vulnerable communities
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <WhoAreWe />
        </>
    )
}

export default HomeBanner