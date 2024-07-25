"use client"
import React, { useState } from "react"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import ContactForm from "../../../components/utils/ContactForm"

const Footer = () => {
  const [date, setDate] = useState(new Date())
  return (
    <>
      <Container
        fluid
        style={{ background: "rgba(110,24,12,.78)" }}
        className="p-0"
      >
        <Container>
          <Row>
            <Col md={6} className="text-center text-md-left p-md-5 p-2">
              <Col className="text-left" md={9}>
                <Image
                  src="/assets/footer/fuzhio_logo.png"
                  alt=""
                  width="80%"
                />
                <div className="py-3 ">
                  <p className="text-white">
                    Fuzhio Health and Business Services Pvt Ltd No. 25, RMV 2nd
                    Stage, AECS Layout, 1st Main Road, Ashwathnagar, Bangalore -
                    560094.
                  </p>
                </div>
                <div>
                  <div>
                    <a
                      href="tel:+91 937981 5394"
                      className="text-decoration-none text-white"
                    >
                      <b>Phone</b>: +91 937981 5394
                    </a>
                  </div>
                  <div>
                    <a
                      href="mailto:info@fuzhio.co"
                      className="text-decoration-none text-white"
                    >
                      <b>Email</b>: info@fuzhio.co
                    </a>
                  </div>
                </div>
                <div className="pt-3 d-flex flex-row">
                  <div className="p-2">
                    <a
                      href="https://www.linkedin.com/company/fuzhio-health-and-business-services-private-limited"
                      target="_blank"
                    >
                      <Image src="/linked.svg" alt="" fluid width={25} />
                    </a>
                  </div>
                  <div className="p-2">
                    <a
                      href="https://www.facebook.com/fuzhioagri/"
                      target="_blankl"
                    >
                      <Image src="/facebook.svg" alt="" fluid width={25} />
                    </a>
                  </div>
                </div>
              </Col>
            </Col>

            <Col md={6} className="p-md-5 p-2">
              <ContactForm />
            </Col>
          </Row>
        </Container>
        <hr className="border border-1" />
        <Container className="hidden md:block d-none text-center text-white p-2">
          <p style={{ fontSize: "10pt", color: "rgba(255,255,255,.5)" }}>
            &copy; {date.getFullYear()} Fuzhio Health and Business Services |
            Powered by Fuzhio Health and Business Services
          </p>
        </Container>

        {/* Mobile View */}
        <Container className="block  text-center text-white p-2">
          <p style={{ fontSize: "12pt", color: "rgba(255,255,255,.5)" }}>
            &copy; {date.getFullYear()} Fuzhio Health and Business Services |
            Powered by Fuzhio Health and Business Services
          </p>
        </Container>
      </Container>
    </>
  )
}

export default Footer
