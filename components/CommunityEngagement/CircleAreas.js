'use client'
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const CircleAreas = () => {

    const [isOnclick, setIsOnclick] = useState(false);
    const [isOnclick1, setIsOnclick1] = useState(false);
    const [isOnclick2, setIsOnclick2] = useState(false);
    const [isOnclick3, setIsOnclick3] = useState(false);
    const [isOnclick4, setIsOnclick4] = useState(false);
    const [isOnclick5, setIsOnclick5] = useState(false);

    const bgIcon1 = {
        backgroundImage: 'url("/assets/community-engagement/circle/center_icon.svg")',
        Height: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }

    const imgCenterContainer = {
        width: '20%',
        backgroundImage: 'url("/assets/community-engagement/circle/center_icon.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '232px',
        zIndex: 2,
        top: '222px'
    }

    // handle onclick 1
    const handleOnclick = () => {
        setIsOnclick(true);
    }

    const handleOnClickClose = () => {
        setIsOnclick(false);
    }

    // handle onclick 2
    const handleOnclick1 = () => {
        setIsOnclick1(true);
    }
    const handleOnClickClose1 = () => {
        setIsOnclick1(false);
    }

    // handle onclick 3
    const handleOnclick2 = () => {
        setIsOnclick2(true);
    }
    const handleOnClickClose2 = () => {
        setIsOnclick2(false);
    }

    // handle onclick 4
    const handleOnclick3 = () => {
        setIsOnclick3(true);
    }
    const handleOnClickClose3 = () => {
        setIsOnclick3(false);
    }

    // handle onclick 5
    const handleOnclick4 = () => {
        setIsOnclick4(true);
    }
    const handleOnClickClose4 = () => {
        setIsOnclick4(false);
    }

    // handle onclick 6
    const handleOnclick5 = () => {
        setIsOnclick5(true);
    }
    const handleOnClickClose5 = () => {
        setIsOnclick5(false);
    }



    const customStyle = {
        minHeight: '85vh'
    }

    const mobCircleBg = {
        background: '#f2f7de',
        padding: '20px'
    }
    return (
        <>
            <Container className='py-5 d-lg-block d-none'>
                <h1 className='text-center pb-3' >
                    Areas of Expertise
                </h1>

                <Col style={customStyle} className='d-flex flex-column justify-content-center align-items-center position-relative'>


                    {/* Center Container */}

                    <Col style={imgCenterContainer} className='d-flex flex-column justify-content-center align-items-center position-absolute '>
                        <h5>
                            Community <br />
                            Engagement
                        </h5>
                    </Col>


                    {/* icon 1 */}
                    <Image src='/assets/community-engagement/circle/icon-1.svg' alt='' className='position-absolute custom-icon-1' />
                    <Image
                        src='/assets/community-engagement/circle/data4_icon1.svg'
                        alt=''
                        style={{ zIndex: '2' }}
                        className=' custom-inside-icon-1'
                        onClick={handleOnclick} />
                    <p className='icon-1-text text-dark text-center'>
                        Data 4 <br />
                        Decisions
                    </p>


                    {/* Icon 2 */}

                    <Image src='/assets/community-engagement/circle/circle-icon-2.svg' alt='' className='position-absolute custom-icon-2' />
                    <Image
                        src='/assets/community-engagement/circle/community_icon_2.svg'
                        alt=''
                        style={{ zIndex: '2' }}
                        className=' custom-inside-icon-2'
                        onClick={handleOnclick1}
                    />
                    <p className='icon-2-text text-dark text-center'>
                        Community Voices <br />
                        and Insights
                    </p>


                    {/* Icon 3 */}

                    <Image src='/assets/community-engagement/circle/icon-3.svg' alt='' className='position-absolute custom-icon-3' />
                    <Image
                        src='/assets/community-engagement/circle/tech4_icon_3.svg'
                        alt=''
                        style={{ zIndex: '2' }}
                        className='custom-inside-icon-3'
                        onClick={handleOnclick2}
                    />
                    <p className='icon-3-text text-dark text-center'>
                        Tech 4 <br />
                        Community
                    </p>

                    {/* Icon 4 */}

                    <Image src='/assets/community-engagement/circle/icon-4.svg' alt='' className='position-absolute custom-icon-4' />
                    <Image
                        src='/assets/community-engagement/circle/skills4_icon_4.svg'
                        alt=''
                        style={{ zIndex: '2' }}
                        className=' custom-inside-icon-4'
                        onClick={handleOnclick3}
                    />
                    <p className='icon-4-text text-dark text-center'>
                        Skills 4 <br />
                        Community
                    </p>

                    {/* Icon 5 */}

                    <Image src='/assets/community-engagement/circle/icon-5.svg' alt='' className='position-absolute custom-icon-5' />
                    <Image
                        src='/assets/community-engagement/circle/start_icon_5.svg'
                        alt=''
                        style={{ zIndex: '2' }}
                        className=' custom-inside-icon-5'
                        onClick={handleOnclick4}
                    />
                    <p className='icon-5-text text-dark text-center'>
                        Start-up Support
                    </p>

                    {/* Icon 6 */}

                    <Image src='/assets/community-engagement/circle/icon-6.svg' alt='' className='position-absolute custom-icon-6' />
                    <Image
                        src='/assets/community-engagement/circle/assessments_icon_6.svg'
                        alt=''
                        style={{ zIndex: '2' }}
                        className=' custom-inside-icon-6'
                        onClick={handleOnclick5}
                    />
                    <p className='icon-6-text text-dark text-center'>
                        Assessments 4 <br />
                        Community
                    </p>

                </Col>

                {isOnclick && (
                    <Col className='popup-circle' onClick={handleOnClickClose}>
                        <span className='popup-circle-span'></span>
                        <div className='p-4 popup-content'>
                            <div className='d-flex flex-column gap-3 position-relative'>
                                <h3 className='close-btn-menu' onClick={handleOnClickClose}>
                                    X
                                </h3>
                                <div>
                                    <Image src='/assets/community-engagement/circle/data_popup.png' alt='' fluid />
                                </div>
                                <h5 className='mt-3'>
                                    Data Management (DM)
                                </h5>

                                <div className='circle-line my-3'></div>
                                <p className=''>
                                    We specialise in designing data collection applications using SurveyCTO, KoboCollect, ODK, and Commcare, ensuring efficient information gathering. Our expertise extends to secondary and big data mining for valuable insights, and we prioritise data quality assurance to maintain accuracy and reliability. With stringent data security measures, including regular encrypted backups and robust protocols, your information remains safeguarded. Finally, our advanced data analysis platforms transform raw data into actionable intelligence, empowering you to make informed decisions.
                                </p>
                            </div>
                        </div>
                    </Col>
                )}

                {isOnclick1 && (
                    <Col className='popup-circle' onClick={handleOnClickClose1}>
                        <span className='popup-circle-span'></span>
                        <div className='p-4 popup-content'>
                            <div className='d-flex flex-column gap-3 position-relative'>
                                <h3 className='close-btn-menu' onClick={handleOnClickClose1}>
                                    X
                                </h3>
                                <div>
                                    <Image src='/assets/community-engagement/circle/info_popup_2.png' alt='' fluid />
                                </div>
                                <h5 className='mt-3'>
                                    Info4Insights - Qualitative Research (I4I)
                                </h5>

                                <div className='circle-line my-3'></div>
                                <p className=''>
                                    Our team specialises in comprehensive database design, providing essential technical support throughout data digitalisation process and ensuring data integrity. We excel in managing various database types, including both traditional PC-based solutions and online databases, continually assessing their advantages and limitations. Our expertise extends to meticulous data accuracy reviews, underpinned by a commitment to ongoing learning and software exploration. We master a multitude of functions and features to guarantee the seamless operation of data collection software. Our strong emphasis on critical thinking and problem-solving ensures databases are maintained with the highest levels of accuracy and completeness. Additionally, we offer versatile interviewing mechanisms such as CAPI, CATI, CAWI, and KYC verification support, aligning with government regulations as needed. Your data’s security and quality are our foremost priorities

                                </p>
                            </div>
                        </div>
                    </Col>
                )}

                {isOnclick2 && (
                    <Col className='popup-circle' onClick={handleOnClickClose2}>
                        <span className='popup-circle-span'></span>
                        <div className='p-4 popup-content'>
                            <div className='d-flex flex-column gap-3 position-relative'>
                                <h3 className='close-btn-menu' onClick={handleOnClickClose2}>
                                    X
                                </h3>
                                <div>
                                    <Image src='/assets/community-engagement/circle/popup_3.png' alt='' fluid />
                                </div>
                                <h5 className='mt-3'>
                                    Tech4Community (T4C)
                                </h5>

                                <div className='circle-line my-3'></div>
                                <p className=''>
                                    In today’s dynamic landscape, groundbreaking technologies offer great potential for vulnerable communities. However, organisations often struggle due to limited tech awareness, scalability understanding, and the need for local adaptation. Our team, with expert navigators, bridges this gap, facilitating effective tech implementation and deployment.
                                </p>
                            </div>
                        </div>
                    </Col>
                )}

                {isOnclick3 && (
                    <Col className='popup-circle' onClick={handleOnClickClose3}>
                        <span className='popup-circle-span'></span>
                        <div className='p-4 popup-content'>
                            <div className='d-flex flex-column gap-3 position-relative'>
                                <h3 className='close-btn-menu' onClick={handleOnClickClose3}>
                                    X
                                </h3>
                                <div>
                                    <Image src='/assets/community-engagement/circle/popup_4.png' alt='' fluid />
                                </div>
                                <h5 className='mt-3'>
                                    Skills4Communities (S4C)
                                </h5>

                                <div className='circle-line my-3'></div>
                                <p className=''>
                                    Unlock the potential of your community-based organisations (CBOs) and self-help groups (SHGs) with our comprehensive capacity-building program. In collaboration with Vrutti, we offer a unique blend of essential soft skills, entrepreneurship expertise, and business acumen training. Our program is designed to empower individuals and groups with the knowledge and skills needed to thrive in their endeavours.
                                </p>
                            </div>
                        </div>
                    </Col>
                )}

                {isOnclick4 && (
                    <Col className='popup-circle' onClick={handleOnClickClose4}>
                        <span className='popup-circle-span'></span>
                        <div className='p-4 popup-content'>
                            <div className='d-flex flex-column gap-3 position-relative'>
                                <h3 className='close-btn-menu' onClick={handleOnClickClose4}>
                                    X
                                </h3>
                                <div>
                                    <Image src='/assets/community-engagement/circle/popup_5.png' alt='' fluid />
                                </div>
                                <h5 className='mt-3'>
                                    Project Start-up Support (PSS)
                                </h5>

                                <div className='circle-line my-3'></div>
                                <p className=''>
                                    Our team specialises in providing on-ground support for implementation programs. From handling logistics and preparation support to facilitating local mobilisation of stakeholders and communities, we ensure a seamless transition from project initiation to program execution. Our expertise lies in setting up essential community systems and fulfilling other project requirements, streamlining the initial phases of your initiatives. With a dedicated focus on setup and a seamless handover to your program team, we pave the way for your organisation’s success in delivering impactful projects.
                                </p>
                            </div>
                        </div>
                    </Col>
                )}

                {isOnclick5 && (
                    <Col className='popup-circle' onClick={handleOnClickClose5}>
                        <span className='popup-circle-span'></span>
                        <div className='p-4 popup-content'>
                            <div className='d-flex flex-column gap-3 position-relative'>
                                <h3 className='close-btn-menu' onClick={handleOnClickClose4}>
                                    X
                                </h3>
                                <div>
                                    <Image src='/assets/community-engagement/circle/popup_6.svg' alt='' fluid />
                                </div>
                                <h5 className='mt-3'>
                                    Data4Decisions Insights (DDI)
                                </h5>

                                <div className='circle-line my-3'></div>
                                <p className=''>
                                    Our team specialises in comprehensive database design, providing essential technical support throughout data digitalisation process and ensuring data integrity. We excel in managing various database types, including both traditional PC-based solutions and online databases, continually assessing their advantages and limitations. Our expertise extends to meticulous data accuracy reviews, underpinned by a commitment to ongoing learning and software exploration. We master a multitude of functions and features to guarantee the seamless operation of data collection software. Our strong emphasis on critical thinking and problem-solving ensures databases are maintained with the highest levels of accuracy and completeness. Additionally, we offer versatile interviewing mechanisms such as CAPI, CATI, CAWI, and KYC verification support, aligning with government regulations as needed. Your data’s security and quality are our foremost priorities
                                </p>
                            </div>
                        </div>
                    </Col>
                )}
            </Container >






            {/* Mobile view */}
            <Container className='d-lg-none d-block'>
                <h1 className='text-center pb-3' >
                    Areas of Expertise
                </h1>

                <Col className='d-flex flex-column p-0'>

                    <Col className='mt-3' style={mobCircleBg}>
                        <div>
                            <Image src='/assets/community-engagement/circle/popup_6.svg' alt='' fluid />
                        </div>
                        <h5 className='mt-3'>
                            Data4Decisions Insights (DDI)
                        </h5>

                        <div className='circle-line my-3'></div>
                        <p className=''>
                            Our team specialises in comprehensive database design, providing essential technical support throughout data digitalisation process and ensuring data integrity. We excel in managing various database types, including both traditional PC-based solutions and online databases, continually assessing their advantages and limitations. Our expertise extends to meticulous data accuracy reviews, underpinned by a commitment to ongoing learning and software exploration. We master a multitude of functions and features to guarantee the seamless operation of data collection software. Our strong emphasis on critical thinking and problem-solving ensures databases are maintained with the highest levels of accuracy and completeness. Additionally, we offer versatile interviewing mechanisms such as CAPI, CATI, CAWI, and KYC verification support, aligning with government regulations as needed. Your data’s security and quality are our foremost priorities
                        </p>
                    </Col>

                    <Col className='mt-3' style={mobCircleBg}>
                        <div>
                            <Image src='/assets/community-engagement/circle/info_popup_2.png' alt='' fluid />
                        </div>
                        <h5 className='mt-3'>
                            Info4Insights - Qualitative Research (I4I)
                        </h5>

                        <div className='circle-line my-3'></div>
                        <p className=''>
                            Our team specialises in comprehensive database design, providing essential technical support throughout data digitalisation process and ensuring data integrity. We excel in managing various database types, including both traditional PC-based solutions and online databases, continually assessing their advantages and limitations. Our expertise extends to meticulous data accuracy reviews, underpinned by a commitment to ongoing learning and software exploration. We master a multitude of functions and features to guarantee the seamless operation of data collection software. Our strong emphasis on critical thinking and problem-solving ensures databases are maintained with the highest levels of accuracy and completeness. Additionally, we offer versatile interviewing mechanisms such as CAPI, CATI, CAWI, and KYC verification support, aligning with government regulations as needed. Your data’s security and quality are our foremost priorities

                        </p>
                    </Col>

                    <Col className='mt-3' style={mobCircleBg}>
                        <div>
                            <Image src='/assets/community-engagement/circle/popup_3.png' alt='' fluid />
                        </div>
                        <h5 className='mt-3'>
                            Tech4Community (T4C)
                        </h5>

                        <div className='circle-line my-3'></div>
                        <p className=''>
                            In today’s dynamic landscape, groundbreaking technologies offer great potential for vulnerable communities. However, organisations often struggle due to limited tech awareness, scalability understanding, and the need for local adaptation. Our team, with expert navigators, bridges this gap, facilitating effective tech implementation and deployment.
                        </p>
                    </Col>

                    <Col className='mt-3' style={mobCircleBg}>
                        <div>
                            <Image src='/assets/community-engagement/circle/popup_4.png' alt='' fluid />
                        </div>
                        <h5 className='mt-3'>
                            Skills4Communities (S4C)
                        </h5>

                        <div className='circle-line my-3'></div>
                        <p className=''>
                            Unlock the potential of your community-based organisations (CBOs) and self-help groups (SHGs) with our comprehensive capacity-building program. In collaboration with Vrutti, we offer a unique blend of essential soft skills, entrepreneurship expertise, and business acumen training. Our program is designed to empower individuals and groups with the knowledge and skills needed to thrive in their endeavours.
                        </p>
                    </Col >

                    <Col className='mt-3' style={mobCircleBg}>
                        <div>
                            <Image src='/assets/community-engagement/circle/popup_5.png' alt='' fluid />
                        </div>
                        <h5 className='mt-3'>
                            Project Start-up Support (PSS)
                        </h5>

                        <div className='circle-line my-3'></div>
                        <p className=''>
                            Our team specialises in providing on-ground support for implementation programs. From handling logistics and preparation support to facilitating local mobilisation of stakeholders and communities, we ensure a seamless transition from project initiation to program execution. Our expertise lies in setting up essential community systems and fulfilling other project requirements, streamlining the initial phases of your initiatives. With a dedicated focus on setup and a seamless handover to your program team, we pave the way for your organisation’s success in delivering impactful projects.
                        </p>
                    </Col >

                    <Col className='mt-3' style={mobCircleBg}>
                        <div>
                            <Image src='/assets/community-engagement/circle/data_popup.png' alt='' fluid />
                        </div>
                        <h5 className='mt-3'>
                            Data Management (DM)
                        </h5>

                        <div className='circle-line my-3'></div>
                        <p className=''>
                            We specialise in designing data collection applications using SurveyCTO, KoboCollect, ODK, and Commcare, ensuring efficient information gathering. Our expertise extends to secondary and big data mining for valuable insights, and we prioritise data quality assurance to maintain accuracy and reliability. With stringent data security measures, including regular encrypted backups and robust protocols, your information remains safeguarded. Finally, our advanced data analysis platforms transform raw data into actionable intelligence, empowering you to make informed decisions.
                        </p>
                    </Col >
                </Col>
            </Container >
        </>
    )
}

export default CircleAreas