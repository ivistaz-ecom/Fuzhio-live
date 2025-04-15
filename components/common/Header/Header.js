"use client"
import React, { useState, useEffect } from "react"
import { IoMdClose } from "react-icons/io"
import { Container, Image, Row, Col } from "react-bootstrap"
import Link from "next/link"
import { useRouter } from "next/router"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import Collapse from "react-bootstrap/Collapse"
import { GiHamburgerMenu } from "react-icons/gi"

function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  // Menu items configuration
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Our Work",
      href: "",
      submenu: [
        { name: "Agriculture", href: "/agriculture" },
        {
          name: "Community Engagement",
          href: "https://community-engagement.fuzhio.org/",
          external: true,
        },
      ],
    },
    { name: "Fuzhio & Covid Response", href: "/fuzhio-covid-response" },
    { name: "Blog", href: "/blog" },
  ]

  // Check if we're on the '/blog' page
  const isBlogPage =
    router.pathname === "/blog" || router.pathname.startsWith("/posts/")

  // Function to check if a link is active
  // const isActive = (href) => router.pathname === href

  const handleMobileMenuToggle = () => setIsMenuOpen(!isMenuOpen)
  const handleSubMenuToggle = () => setIsSubMenuOpen(!isSubMenuOpen)

  const handleMenuItemClick = (href) => {
    if (router.pathname === href) {
      setIsMenuOpen(false) // Close the menu if clicked on current page
    }
  }

  // Add/remove no-scroll class to body when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }

    return () => document.body.classList.remove("no-scroll")
  }, [isMenuOpen])

  const isActive = (href, submenu = []) => {
    if (submenu.length > 0) {
      return submenu.some(
        (subItem) =>
          !subItem.external && router.pathname.startsWith(subItem.href)
      )
    }
    if (!href || href.startsWith("http")) return false
    if (href === "/") return router.pathname === "/"
    return router.pathname.startsWith(href)
  }

  return (
    <>
      <style jsx global>{`
        body${isBlogPage ? " .custom-header-style" : ""} {
          color: ${isBlogPage ? "black" : ""};
        }
        .custom-header-style {
          white-space: nowrap;
        }
        ${isBlogPage
          ? `
    .custom-header-style:hover {
      color: black !important;
    }
  `
          : ""}
      `}</style>

      {/* Desktop Menu Bar */}
      <Container
        fluid
        className="position-absolute py-0 d-lg-block d-none"
        style={{ zIndex: 999 }}
      >
        <Container className="p-0 py-3 ">
          <Row>
            <Col lg={4}>
              <Link className="navbar-brand" href="/">
                <Image src="/fuzhio_logo.png" width={130} />
              </Link>
            </Col>
            <Col className="d-flex flex-column justify-content-center ">
              <Row className="d-flex flex-row flex-wrap gap-3 justify-content-between ">
                {menuItems.map((item, index) => {
                  if (item.name === "Our Work") {
                    return (
                      <Col
                        key={index}
                        className="text-center position-relative p-0"
                        md={3}
                      >
                        <Col className="p-0 hover-ourwork">
                          <Link
                            href={item.href}
                            className={`custom-header-style our-work-af ${
                              isActive(item.href, item.submenu)
                                ? "active-link"
                                : ""
                            }`}
                            onClick={() => handleMenuItemClick(item.href)}
                          >
                            {item.name}
                          </Link>
                        </Col>

                        <div className="p-0 our-work-element pt-3 ">
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
                            {item.submenu.map((subItem, subIndex) => (
                              <Col
                                key={subIndex}
                                className="p-0 text-left py-1 custom-header-style  "
                              >
                                <Link
                                  href={subItem.href}
                                  className={`custom-header-style ps-5 border-0 ${
                                    isActive(subItem.href) ? "active-link" : ""
                                  }`}
                                  onClick={() =>
                                    handleMenuItemClick(subItem.href)
                                  }
                                  target={
                                    subItem.external ? "_blank" : undefined
                                  }
                                >
                                  {subItem.name}
                                </Link>
                              </Col>
                            ))}
                          </Col>
                        </div>
                      </Col>
                    )
                  } else if (item.name === "Fuzhio & Covid Response") {
                    return (
                      <Col key={index} md={3}>
                        <Link
                          href={item.href}
                          className={`custom-header-style ${
                            isActive(item.href) ? "active-link" : ""
                          }`}
                          onClick={() => handleMenuItemClick(item.href)}
                        >
                          {item.name}
                        </Link>
                      </Col>
                    )
                  } else if (item.name === "Home") {
                    return (
                      <Col key={index} lg={2} className="text-center">
                        <Link
                          href={item.href}
                          className={`custom-header-style ${
                            isActive(item.href) ? "active-link" : ""
                          }`}
                          onClick={() => handleMenuItemClick(item.href)}
                        >
                          {item.name}
                        </Link>
                      </Col>
                    )
                  } else if (item.name === "Blog") {
                    return (
                      <Col key={index} className="text-center" lg={1}>
                        <Link
                          href={item.href}
                          className={`custom-header-style ${
                            isActive(item.href) ? "active-link" : ""
                          }`}
                          onClick={() => handleMenuItemClick(item.href)}
                        >
                          {item.name}
                        </Link>
                      </Col>
                    )
                  } else {
                    return (
                      <Col key={index} lg={1} className="text-center">
                        <Link
                          href={item.href}
                          className={`custom-header-style ${
                            isActive(item.href) ? "active-link" : ""
                          }`}
                          onClick={() => handleMenuItemClick(item.href)}
                        >
                          {item.name}
                        </Link>
                      </Col>
                    )
                  }
                })}
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
              <Col className="bg-white p-0">
                <Col className="d-flex justify-content-end">
                  <button
                    className="text-dark p-0 border-0 bg-transparent mr-2 p-1"
                    onClick={handleMobileMenuToggle}
                    style={{ fontSize: "23px", fontWeight: "bold" }}
                  >
                    <IoMdClose size={30} className="bg-warning rounded-4" />
                  </button>
                </Col>

                {menuItems.map((item, index) => {
                  if (item.name === "Our Work") {
                    return (
                      <Col key={index} className="p-0">
                        <Col
                          className="p-3 px-4 p-0 border-bottom d-flex justify-content-between align-items-center"
                          onClick={handleSubMenuToggle}
                        >
                          <Link
                            href="#"
                            className="text-decoration-none text-dark"
                          >
                            {item.name}
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
                            {item.submenu.map((subItem, subIndex) => (
                              <Col
                                key={subIndex}
                                className="p-3 px-4 p-0 border-bottom"
                              >
                                <Link
                                  href={subItem.href}
                                  className="text-decoration-none text-dark"
                                  onClick={() =>
                                    handleMenuItemClick(subItem.href)
                                  }
                                  target={subItem.external ? "_blank" : ""}
                                >
                                  &gt; {subItem.name}
                                </Link>
                              </Col>
                            ))}
                          </div>
                        </Collapse>
                      </Col>
                    )
                  } else {
                    return (
                      <Col key={index} className="p-3 px-4 p-0 border-bottom">
                        <Link
                          href={item.href}
                          className="text-decoration-none text-dark"
                          onClick={() => handleMenuItemClick(item.href)}
                        >
                          {item.name}
                        </Link>
                      </Col>
                    )
                  }
                })}
              </Col>
            </Row>
          )}
        </Container>
      </Container>
    </>
  )
}

export default Header
