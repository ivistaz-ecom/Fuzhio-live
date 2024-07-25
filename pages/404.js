import React from 'react'
import Header from '../components/common/Header2'
import Footer from '../components/common/Footer'
import { Container } from 'react-bootstrap'

const Custom404 = () => {

    const h1Text = {
        fontSize: '90px',
        color: '#b34738'
    }
    return (
        <>
            <Header />
            <Container fluid className=' d-lg-flex d-none flex-column justify-content-center ' style={{ height: '90vh', background: '#f5f5f5' }}>
                <Container className='bg-white p-5' style={{}} >
                    <h1 style={h1Text} className='text-center'>
                        This page doesn't seem to exist.
                    </h1>
                    <h3 className='text-center'>
                        It looks like the link pointing here was faulty. Maybe try searching?
                    </h3>
                </Container>
            </Container>

            <Container fluid className=' d-flex d-lg-none flex-column justify-content-center'>
                <Container className='bg-white p-5' style={{}} >
                    <h1 className='text-center'>
                        This page doesn't seem to exist.
                    </h1>
                    <h3 className='text-center'>
                        It looks like the link pointing here was faulty. Maybe try searching?
                    </h3>
                </Container>
            </Container>
            <Footer />
        </>
    )
}

export default Custom404