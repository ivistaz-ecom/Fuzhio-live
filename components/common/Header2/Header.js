import React, { useState } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import Link from 'next/link';

// import '/styles/Home.module.css'

import { useRouter } from 'next/router';

function Header() {
    const router = useRouter();

    // Function to check if a link is active
    const isActive = (href) => {
        return router.pathname === href;
    };

    const [isOnClick, setIsOnClick] = useState(false);

    const [isMenuOnClick, setIsMenuOnclick] = useState(false);

    const handleoOnClick = () => {
        setIsOnClick(!isOnClick);
    }

    const handleOnclickMenu = () => {
        setIsMenuOnclick(!isMenuOnClick);
    }

    return (
        <>

            <Container fluid className=' py-0 d-lg-block d-none'>
                {/* Desktop Menu Bar */}
                <Container className="p-0 py-3">
                    <Row>
                        {/* Logo with Link */}
                        <Col>
                            <Col>
                                <Link class="navbar-brand" href="/">
                                    <Image src="/fuzhio_logo.png" width={130} />
                                </Link>
                            </Col>
                        </Col>

                        {/* Menu with Link */}
                        <Col className='d-flex flex-column justify-content-center'>
                            <Row className="d-flex flex-row flex-wrap gap-3">
                                {/* Home Link */}
                                <Col className="text-center">
                                    <Link href="/" className={`custom-header-style ${isActive('/') ? 'active-link' : ''}`}>
                                        Home
                                    </Link>
                                </Col>

                                {/* About Link */}
                                <Col className="text-center">
                                    <Link href="/about" className={`custom-header-style ${isActive('/about') ? 'active-link' : ''}`}>
                                        About
                                    </Link>
                                </Col>

                                {/* Our Work Link */}
                                <Col className="text-center position-relative p-0" md={2}>
                                    <Col className="p-0 hover-ourwork p-0">
                                        <Link href="" className={`custom-header-style our-work-af ${isActive('/our-work') ? 'active-link' : ''}`}>
                                            Our Work
                                        </Link>
                                    </Col>

                                    <div className='p-0 our-work-element pt-3'>
                                        <Col className='p-0 ' style={{ width: '180px', left: '11px', display: 'flex', flexDirection: 'column', zIndex: '100' }}>
                                            <Col className='p-0 text-left pt-1'>
                                                <Link href="/agriculture" className='custom-header-style p-0 border border-0'>
                                                    Agriculture
                                                </Link>
                                            </Col>
                                            {/* <Col className='p-0 text-left py-3'>
                                                <Link href="/noble-plastic" className='custom-header-style border border-0'>
                                                    Noble Plastic
                                                </Link>
                                            </Col> */}
                                            <Col className='p-0 text-left'>
                                                <Link href="/community-engagement" className='custom-header-style border border-0'>
                                                    Community Engagement
                                                </Link>
                                            </Col>
                                        </Col>
                                    </div>
                                </Col>

                                {/* Fuzhio & Covid Response Link */}
                                <Col md={4}>
                                    <Link href="/fuzhio-covid-response" className={`custom-header-style ${isActive('/fuzhio-covid-response') ? 'active-link' : ''}`}>
                                        Fuzhio & Covid Response
                                    </Link>
                                </Col>

                                {/* Blog Link */}
                                <Col className="text-center">
                                    <Link href="/blog" className={`custom-header-style ${isActive('/blog') ? 'active-link' : ''}`}>
                                        Blog
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container >
            </Container >



            {/* Mobile Menu */}

            <Container fluid className='d-lg-none d-block' style={{ zIndex: '100' }}>
                <Container>
                    <Row className='d-flex flex-row justify-content-center'>
                        <Col className='p-0'>
                            <Link class="navbar-brand" href="/">
                                <Image src="/fuzhio_logo.png" width={130} />
                            </Link>
                        </Col>

                        <Col className='d-flex flex-row align-items-center'>
                            <Col>
                            </Col>
                            <Col
                                className='d-flex flex-row flex-wrap justify-content-center'
                                onClick={handleoOnClick}
                            >
                                <Image src='/nav-bar_mob.svg' alt='nav_bar' width={25} className='bg-dark p-1' />
                            </Col>
                        </Col>
                        {isOnClick && (
                            <Col className='position-absolute p-0 w-100 mt-5'>
                                <Col className='mt-5 bg-white p-0 '>
                                    {/* Home Link */}
                                    <Col className=" p-3 px-4 p-0 border-bottom">
                                        <Link href="/" className='text-decoration-none text-dark'>
                                            Home
                                        </Link>
                                    </Col>

                                    {/* About Link */}
                                    <Col className=" p-3 px-4 p-0 border-bottom">
                                        <Link href="/about" className='text-decoration-none text-dark'>
                                            About
                                        </Link>
                                    </Col>


                                    {/* Our Work Link */}
                                    <Col className='p-0'>
                                        <Col className="p-3 px-4 p-0 border-bottom">
                                            <Col className="p-0"
                                                onClick={handleOnclickMenu}
                                            >
                                                <Link
                                                    href=""
                                                    className='text-decoration-none text-dark our-work-af-mob'
                                                >
                                                    Our Work
                                                </Link>
                                            </Col>
                                        </Col>

                                        {isMenuOnClick && (
                                            <Col className='p-0'>
                                                <Col className=" p-3 px-4 p-0 border-bottom">
                                                    <Link href="/agriculture" className='text-decoration-none text-dark'>
                                                        &gt; Agriculture
                                                    </Link>
                                                </Col>
                                                {/* <Col className=" p-3 px-4 p-0 border-bottom">
                                                    <Link href="/noble-plastic" className='text-decoration-none text-dark'>
                                                        &gt;  Noble Plastic
                                                    </Link>
                                                </Col> */}
                                                <Col className=" p-3 px-4 p-0 border-bottom">
                                                    <Link href="/community-engagement" className='text-decoration-none text-dark'>
                                                        &gt;  Community Engagement
                                                    </Link>
                                                </Col>
                                            </Col>
                                        )}
                                    </Col>

                                    {/* Fuzhio & Covid Response Link */}
                                    <Col className=" p-3 px-4 p-0 border-bottom">
                                        <Link href="/fuzhio-covid-response" className='text-decoration-none text-dark'>
                                            Fuzhio & Covid Response
                                        </Link>
                                    </Col>

                                    {/* Blog Link */}
                                    <Col className=" p-3 px-4 p-0 border-bottom">
                                        <Link href="/blog" className='text-decoration-none text-dark'>
                                            Blog
                                        </Link>
                                    </Col>
                                </Col>

                            </Col>
                        )}
                    </Row>
                </Container>
            </Container >
        </>
    );
}

export default Header;
