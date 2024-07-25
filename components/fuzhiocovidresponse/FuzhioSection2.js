import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const FuzhioSection2 = () => {
    return (
        <>
            {/* Section 2 */}
            <Container fluid style={{ backgroundColor: '#F4D5C5' }}>
                <Container className='p-lg-5 p-3' >
                    <Row className='p-lg-5' style={{ color: '#3C3C3CDE', fontSize: '17px', lineHeight: '32px' }}>
                        <p>Our work during the pandemic spanned demographics and supported the most vulnerable population. Right from devising coordination structures to deliver ration, and providing a stream of work to support communities, to creating flexible response mechanisms, and need-of-the-hour innovations, our swift actions helped marginalised communities strengthen their pandemic response.</p>
                    </Row>
                    <Row className='text-center d-flex flex-row flex-wrap align-content-center justify-content-center'>
                        <Col md={3} className='text-center '>
                            <h3>Ensuring access to food</h3>
                            <p>Provided vegetables and ration kits for vulnerable communities</p>
                        </Col>

                        <Col md={3} className='text-center d-flex flex-column flex-wrap align-content-center'>
                            <h3>Protecting livelihoods</h3>
                            <p >Creating alternative livelihood measures throughout the lockdown</p>
                        </Col>

                        <Col md={3} className='text-center d-flex flex-column flex-wrap align-content-center'>
                            <h3>Enabling prevention of Covid-19</h3>
                            <p>Produced 24,000 Home Quarantine Kits</p>
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col>
                            <Image src='/assets/fuzhiocovid/covid_logo.png' width="50%" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default FuzhioSection2