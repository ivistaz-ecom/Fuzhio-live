import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AgriBanner = () => {
    return (
        <>
            <Container fluid className='agri-background-container d-flex flex-wrap align-items-center '>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white banner-font ' >
                                AGRICULTURE
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default AgriBanner