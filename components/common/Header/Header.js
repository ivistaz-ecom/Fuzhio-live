"use client"
import React, { useState } from "react"
import { IoMdClose } from "react-icons/io"
import { Container, Image, Row, Col } from "react-bootstrap"
import Link from "next/link"
import { useRouter } from "next/router"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import Collapse from "react-bootstrap/Collapse"
import { GiHamburgerMenu } from "react-icons/gi"
import { useEffect } from "react"

function Header() {
  const router = useRouter()

  const [isOnClick, setIsOnClick] = useState(false)

  // Function to check if a link is active
  const isActive = (href) => {
    return router.pathname === href
  }

  // Check if we're on the '/blog' page
  const isBlogPage =
    router.pathname === "/blog" || router.pathname.startsWith("/posts/")

  // Handle closing the mobile menu
  const handleCloseMenu = () => {
    setIsOnClick(false)
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen)
  }

  const handleMenuItemClick = (href) => {
    if (router.pathname === href) {
      setIsMenuOpen(false) // Close the menu if the current page is the same
    }
  }

  // Inside your component
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [isMenuOpen]);

  return (
    <>
      <style jsx global>{`
        body${isBlogPage ? " .custom-header-style" : ""} {
          color: ${isBlogPage ? "black" : ""};
        }
        .custom-header-style {
          white-space: nowrap;
        }
      `}</style>

      {/* Desktop Menu Bar */}
      <Container fluid className="position-absolute py-0 d-lg-block d-none ">
        <Container className="p-0 py-3 ">
          <Row>
            <Col lg={4}>
              <Link className="navbar-brand" href="/">
                <Image src="/fuzhio_logo.png" width={130} />
              </Link>
            </Col>
            <Col className="d-flex flex-column justify-content-center">
              <Row className="d-flex flex-row flex-wrap gap-3 justify-content-between">
                <Col lg={2} className="text-center">
                  <Link
                    href="/"
                    className={`custom-header-style ${
                      isActive("/") ? "active-link" : ""
                    }`}
                    onClick={() => handleMenuItemClick("/")}
                  >
                    Home
                  </Link>
                </Col>

                <Col lg={1} className="text-center">
                  <Link
                    href="/about"
                    className={`custom-header-style ${
                      isActive("/about") ? "active-link" : ""
                    }`}
                    onClick={() => handleMenuItemClick("/about")}
                  >
                    About
                  </Link>
                </Col>

                <Col className="text-center position-relative p-0" md={3}>
                  <Col className="p-0 hover-ourwork">
                    <Link
                      href=""
                      className={`custom-header-style our-work-af ${
                        isActive("/our-work") ? "active-link" : ""
                      }`}
                      onClick={() => handleMenuItemClick("/our-work")}
                    >
                      Our Work
                    </Link>
                  </Col>

                  <div className="p-0 our-work-element pt-3">
                    <Col
                      className="p-0"
                      style={{
                        width: "180px",
                        left: "11px",
                        display: "flex",
                        flexDirection: "column",
                        zIndex: "100",
                      }}
                    >
                      <Col className="p-0 text-left py-1">
                        <Link
                          href="/agriculture"
                          className="custom-header-style ps-5 border border-0"
                          onClick={() => handleMenuItemClick("/agriculture")}
                        >
                          Agriculture
                        </Link>
                      </Col>
                      <Col className="p-0 text-left py-1">
                        <Link
                          href="https://community-engagement.fuzhio.org/"
                          target="_blank"
                          className="custom-header-style border border-0"
                          onClick={() =>
                            handleMenuItemClick(
                              "https://community-engagement.fuzhio.org/"
                            )
                          }
                        >
                          Community Engagement
                        </Link>
                      </Col>
                    </Col>
                  </div>
                </Col>

                <Col md={3}>
                  <Link
                    href="/fuzhio-covid-response"
                    className={`custom-header-style ${
                      isActive("/fuzhio-covid-response") ? "active-link" : ""
                    }`}
                    onClick={() =>
                      handleMenuItemClick("/fuzhio-covid-response")
                    }
                  >
                    Fuzhio & Covid Response
                  </Link>
                </Col>

                <Col className="text-center" lg={1}>
                  <Link
                    href="/blog"
                    className={`custom-header-style ${
                      isActive("/blog") ? "active-link" : ""
                    }`}
                    onClick={() => handleMenuItemClick("/blog")}
                  >
                    Blog
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Mobile Menu */}
      <Container
        fluid
        className="position-absolute d-lg-none d-block"
        style={{ zIndex: "100" }}
      >
        <Container>
          <Row className="d-flex flex-row justify-content-around p-0 gap-3">
            <Col xs={9} className="p-0">
              <Link className="navbar-brand" href="/">
                <Image src="/fuzhio_logo.png" width={130} />
              </Link>
            </Col>

            <Col
              xs={2}
              className="d-flex justify-content-end align-items-center p-0"
            >
              <Col
                className="d-flex flex-row flex-wrap justify-content-end"
                onClick={handleMobileMenuToggle}
              >
                <GiHamburgerMenu
                  size={50}
                  className={isBlogPage ? "text-black" : "text-white"}
                />
              </Col>
            </Col>
          </Row>

          {isMenuOpen && (
            <Row
              className="position-fixed p-0 w-100 h-100"
              style={{ top: "0rem", left: "", right: 15 }}
            >
              <Col className=" bg-white p-0">
                <Col className="d-flex justify-content-end">
                  <button
                    className="text-dark p-0 border-0 bg-transparent mr-2 p-1"
                    onClick={handleMobileMenuToggle}
                    style={{ fontSize: "23px", fontWeight: "bold" }}
                  >
                    <IoMdClose size={30} className="bg-warning rounded-4"/>
                  </button>
                </Col>

                <Col className="pb-3 px-4 p-0 border-bottom">
                  <Link
                    href="/"
                    className="text-decoration-none text-dark"
                    onClick={() => handleMenuItemClick("/")}
                  >
                    Home
                  </Link>
                </Col>

                <Col className="p-3 px-4 p-0 border-bottom">
                  <Link
                    href="/about"
                    className="text-decoration-none text-dark"
                    onClick={() => handleMenuItemClick("/about")}
                  >
                    About
                  </Link>
                </Col>

                <Col className="p-0">
                  <Col
                    className="p-3 px-4 p-0 border-bottom d-flex justify-content-between align-items-center"
                    onClick={handleSubMenuToggle}
                  >
                    <Link href="#" className="text-decoration-none text-dark">
                      Our Work
                      {isSubMenuOpen ? (
                        <FaChevronUp
                          style={{
                            fontSize: "10px",
                            color: "black",
                            marginLeft: "5px",
                          }}
                        />
                      ) : (
                        <FaChevronDown
                          style={{
                            fontSize: "10px",
                            color: "black",
                            marginLeft: "5px",
                          }}
                        />
                      )}
                    </Link>
                  </Col>

                  <Collapse in={isSubMenuOpen}>
                    <div>
                      <Col className="p-3 px-4 p-0 border-bottom">
                        <Link
                          href="/agriculture"
                          className="text-decoration-none text-dark"
                          onClick={() => handleMenuItemClick("/agriculture")}
                        >
                          &gt; Agriculture
                        </Link>
                      </Col>
                      <Col className="p-3 px-4 p-0 border-bottom">
                        <Link
                          href="https://community-engagement.fuzhio.org/"
                          target="_blank"
                          className="text-decoration-none text-dark"
                          onClick={() =>
                            handleMenuItemClick(
                              "https://community-engagement.fuzhio.org/"
                            )
                          }
                        >
                          &gt; Community Engagement
                        </Link>
                      </Col>
                    </div>
                  </Collapse>
                </Col>

                <Col className="p-3 px-4 p-0 border-bottom">
                  <Link
                    href="/fuzhio-covid-response"
                    className="text-decoration-none text-dark"
                    onClick={() =>
                      handleMenuItemClick("/fuzhio-covid-response")
                    }
                  >
                    Fuzhio & Covid Response
                  </Link>
                </Col>

                <Col className="p-3 px-4 p-0 border-bottom">
                  <Link
                    href="/blog"
                    className="text-decoration-none text-dark"
                    onClick={() => handleMenuItemClick("/blog")}
                  >
                    Blog
                  </Link>
                </Col>
              </Col>
            </Row>
          )}
        </Container>
      </Container>
    </>
  )
}

export default Header
