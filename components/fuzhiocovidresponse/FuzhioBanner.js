import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const FuzhioBanner = () => {
    return (
        <>
            <Container fluid className='fuzhiocovid-background-container d-flex flex-wrap align-items-center '>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white banner-font ' >
                                FUZHIO & COVID RESPONSE
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default FuzhioBanner