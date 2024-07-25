
import React from 'react'
import { Container, Row } from 'react-bootstrap'

const About = () => {
    return (

        <>
            {/* Section 2 */}
            <Container fluid style={{ backgroundColor: '#FFD0B3' }}>
                <Container className='p-md-5 p-3' >
                    <Row className='p-md-5'>
                        <p style={{ color: '#3C3C3CDE', fontSize: '17px', fontWeight: '900', lineHeight: '31px' }}>Fuzhio is an eco-social venture that aims to enhance value-chain efficiencies of products that resolve socio-economic and environmental issues. Founded in 2006 by IRMA graduates, Fuzhio is built upon the legacy and expertise of <a href="https://catalysts.global/" target='_blank' className='text-decoration-none' style={{ color: '#b34738' }}><strong>Catalyst Group</strong></a> , a 27-year-old social enterprise platform that seeks to enhance the health and wealth of vulnerable communities. Our market-led activities unlock business opportunities for vulnerable communities, by offering services that help them receive maximum value of their products for the least cost. In the agricultural domain, our efforts are geared not just towards unlocking business opportunities for marginalised farmers, but also connecting them to bio-inputs that ensure good farming practices that improve the health of the environment. Additionally, our circular economy initiatives through our project ‘Noble Plastic’ drive the effective repurposing of plastic waste in order to clean up the environment, provide employment through the sorting process, and create value-added products for all our stakeholders. Through our initiatives, we are aligned with the UN’s Sustainable Development Goals (SDG) of inclusive, safe, and sustainable cities and communities, ensuring good use of resources, improving energy efficiency, creating green and decent jobs, and ensuring a better quality of life for all. We work with organisations and CSR brands who have mapped their business goals to these SDGs. We also partner with sustainable apparel brands to enhance social and environmental value, while also increasing the competitiveness of their value chain. Our on-ground operations arm forms the crux of our initiatives, and includes recyclers, pyrolysis experts, aggregators, and tech deployers. Additionally, we engage with policy shapers to leverage their bodies of knowledge and create a relevant market for eco-social ventures like ours. In doing all of this, Fuzhio’s mission is to improve the livelihoods of marginalised communities, preserve and promote sustainable environmental practices, and provide consumers with safe and responsible products.
                        </p>
                    </Row>
                </Container>
            </Container>
        </>

    )
}

export default About