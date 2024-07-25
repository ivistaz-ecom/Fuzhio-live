import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CommunityBanner = () => {

    return (
        <>
            <Container fluid className='community-background-container overlay d-flex flex-wrap align-items-center '>
                <Container>
                    <Row>
                        <Col>
                            <h1 className='text-white banner-font ' >
                                Community Engagement
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Container fluid style={{ background: '#E9DE89' }} className='py-5'>
                <Container>

                    <Col className='p-0'>
                        <p>
                            The Community Engagement team works with social development partners with the objective of enabling vulnerable communities to make better decisions and deliver services efficiently. The programme seeks to understand vulnerable communities in their local ecosystem and reach out to them. This approach is key to decisions, interventions, and services because the duration and speed of optimal community engagements vary widely based on the needs of stakeholders. Appropriate community engagement is a strategic piece in creating an impact.
                        </p>
                    </Col>

                    <div style={{ background: '#C38C56', padding: '2px', margin: ' 30px 0px 30px 0px ' }}></div>

                    <Col className='p-0'>
                        <p>
                            We work through a network of 2,000+ individuals spread across the most distant parts of India, allowing stakeholders to access communities, gather inputs, and intervene with them, which in turn is critical to designing solutions and creating an impact.
                        </p>
                    </Col>

                    <div style={{ background: '#C38C56', padding: '2px', margin: ' 30px 0px 30px 0px ' }}></div>

                    <Col className='p-0'>
                        <p>
                            By reaching out to the most vulnerable, we can increase access to services, create demand and scale for interventions, increase the effectiveness and efficiency of interventions, address the underlying causes through building community ownership, and ensure sustainability.
                        </p>
                    </Col>

                </Container>
            </Container>
        </>
    )
}

export default CommunityBanner