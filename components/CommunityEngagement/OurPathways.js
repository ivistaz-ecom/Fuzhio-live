import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const OurPathways = () => {
    return (
        <Container className='py-5'>
            <h1 className='text-center pb-5'>Our Pathways</h1>

            <Row className='d-flex flex-md-row flex-column gap-3 mt-5 '>
                <Col className='pb-lg-0 pb-5'>
                    <Col className="border border-dark p-3 pt-0">
                        <Col style={{ marginTop: '-91px', }} className='p-0'>
                            <Image src="/assets/community-engagement/collabrations.svg" alt='' height={129} />
                        </Col>
                        <h4 style={{ color: '#641F13' }} className='mt-3'>
                            <b>
                                Collaborations
                            </b>
                        </h4>
                        <p className='mt-3 pr-md-5 pr-0'>
                            Identifying and collaborating with local people, groups, community leaders, partners, and organisations for their issues, needs, and developments.
                        </p>
                    </Col>
                </Col>


                <Col className='pt-lg-0 pt-5'>
                    <Col className="border border-dark p-lg-3 p pt-0">
                        <Col style={{ marginTop: '-91px', }} className='p-0'>
                            <Image src="/assets/community-engagement/community_mobilisation.svg" alt='' height={129} />
                        </Col>
                        <h4 style={{ color: '#641F13' }} className='mt-3'>
                            <b>
                                Community Mobilisation
                            </b>
                        </h4>
                        <p className='mt-3 pr-md-5 pr-0'>
                            We have a rich working experience of mobilising vulnerable groups, including women, children, people with disabilities, and elderly people, among others.
                        </p>
                    </Col>
                </Col>
            </Row>

            <Col className='pt-5 text-center'>

                <h1 className='text-center pb-5'>Strength, Experience, and Reach</h1>

                <Image src='/assets/community-engagement/strength_exp.png' fluid alt='' />

                <Row className='d-flex flex-md-row flex-wrap flex-column mt-5 justify-content-center'>
                    <Col md={4} className='p-0'>
                        <Col className='d-flex flex-column align-self-stretch text-center'>
                            <Col>
                                <Image src='/assets/community-engagement/field_base.svg' alt='' height={50} />
                            </Col>
                            <Col className='text-center mt-3'>
                                <p style={{ color: '#01963e', lineHeight: '20px' }}>
                                    Field base – <br />
                                    Presence and Reach
                                </p>
                                <p style={{ lineHeight: '20px' }}>
                                    We are working to reach the most vulnerable, increase their access to services, create demand and scale for interventions, increase the effectiveness and efficiency of interventions, and address the underlying causes through community ownership and sustainability. We have a presence across India, Nepal, Sri Lanka, Bangladesh, Kenya, Turkey, Jordan, and Cambodia.
                                </p>
                            </Col>
                        </Col>
                    </Col>

                    <Col md={4} className='p-0'>
                        <Col className='d-flex flex-column align-self-stretch text-center'>
                            <Col>
                                <Image src='/assets/community-engagement/trained_certified.svg' alt='' height={50} />
                            </Col>
                            <Col className='text-center mt-3'>
                                <p style={{ color: '#72852b', lineHeight: '20px' }}>
                                    Trained, certified, <br />
                                    and hand-picked field force
                                </p>
                                <p style={{ lineHeight: '20px' }}>
                                    Highest in people diversity, geographical diversity, data diversity, and domain knowledge. We collect genuine and accurate data and ensure timely completion of our projects.
                                </p>
                            </Col>
                        </Col>
                    </Col>

                    <Col md={4} className='p-0'>
                        <Col className='d-flex flex-column align-self-stretch text-center p-2'>
                            <Col>
                                <Image src='/assets/community-engagement/real_time.svg' alt='' height={50} />
                            </Col>
                            <Col className='text-center mt-3'>
                                <p style={{ color: '#bcd55d', lineHeight: '20px' }}>
                                    Real-time execution <br />
                                    of large projects
                                </p>
                                <p style={{ lineHeight: '20px' }}>
                                    We have presence across India with more than 2,000 network associates at the district levels of major states for quicker development.
                                </p>
                            </Col>
                        </Col>
                    </Col>

                    <Col md={4} className='p-0'>
                        <Col className='d-flex flex-column align-self-stretch text-center'>
                            <Col>
                                <Image src='/assets/community-engagement/multi_ling.svg' alt='' height={50} />
                            </Col>
                            <Col className='text-center mt-3'>
                                <p style={{ color: '#f7a100', lineHeight: '20px' }}>
                                    Multi-linguist <br />
                                    team
                                </p>
                                <p style={{ lineHeight: '20px' }}>
                                    We cover almost all Indian languages and the languages of the respective countries where we have our partners present.
                                </p>
                            </Col>
                        </Col>
                    </Col>

                    <Col md={4} className='p-0'>
                        <Col className='d-flex flex-column align-self-stretch text-center'>
                            <Col>
                                <Image src='/assets/community-engagement/multi.svg' alt='' height={50} />
                            </Col>
                            <Col className='text-center mt-3'>
                                <p style={{ color: '#e36200', lineHeight: '20px' }}>
                                    Network – <br />
                                    Multi-domain and theme
                                </p>
                                <p style={{ lineHeight: '20px' }}>
                                    We are working on huge contracts and networking for training and thematic-based local organisations, and have experienced field researchers.
                                </p>
                            </Col>
                        </Col>
                    </Col>

                    <Col md={4} className='p-0'>
                        <Col className='d-flex flex-column align-self-stretch text-center p-2'>
                            <Col>
                                <Image src='/assets/community-engagement/commited_team.svg' alt='' height={50} />
                            </Col>
                            <Col className='text-center mt-3'>
                                <p style={{ color: '#e3000f', lineHeight: '20px' }}>
                                    Committed team
                                    <br />
                                </p>
                                <p style={{ lineHeight: '20px' }}>
                                    We have more than 15 years of experience in the core research team, supported by master trainers with multiple languages and adult training skills.
                                </p>
                            </Col>
                        </Col>
                    </Col>

                    <Col md={4} className='p-0'>
                        <Col className='d-flex flex-column align-self-stretch text-center p-2'>
                            <Col>
                                <Image src='/assets/community-engagement/rigorous_data.svg' alt='' height={50} />
                            </Col>
                            <Col className='text-center mt-3'>
                                <p style={{ color: '#e3000f', lineHeight: '20px' }}>
                                    Rigorous data quality assurance <br />
                                    and control
                                </p>
                                <p style={{ lineHeight: '20px' }}>
                                    Our protocols on data security and storage ensure 100% data consistency and verifiable and auditable data sets.
                                </p>
                            </Col>
                        </Col>
                    </Col>
                </Row>


            </Col>
        </Container>
    )
}

export default OurPathways