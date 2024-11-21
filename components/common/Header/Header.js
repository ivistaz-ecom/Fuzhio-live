import React, { useState } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Link from "next/link";
// import SearchModal from "../Header/SearchModul";
import { useRouter } from "next/router";

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
  };

  const handleOnclickMenu = () => {
    setIsMenuOnClick(!isMenuOnClick);
  };

  // Check if we're on the '/blog' page
  const isBlogPage = router.pathname === "/blog";

  return (
    <>
      {/* Apply custom styling for the Blog page */}
      <style jsx global>{`
        body${isBlogPage ? " .custom-header-style" : ""} {
          color: ${isBlogPage ? "black" : ""};
        }
        .custom-header-style {
          white-space: nowrap; /* Prevent wrapping of the text */
        }
      `}</style>

      <Container fluid className="position-absolute py-0 d-lg-block d-none">
        {/* Desktop Menu Bar */}
        <Container className="p-0 py-3">
          <Row>
            {/* Logo with Link */}
            <Col lg={5} className="">
              <Col>
                <Link className="navbar-brand" href="/">
                  <Image src="/fuzhio_logo.png" width={130} />
                </Link>
              </Col>
            </Col>
            {/* Menu with Link */}
            <Col className="d-flex flex-column justify-content-center">
              <Row className="d-flex flex-row flex-wrap gap-3 justify-content-between">
                {/* Home Link */}
                <Col lg={2} className="text-center">
                  <Link
                    href="/"
                    className={`custom-header-style ${
                      isActive("/") ? "active-link" : ""
                    }`}
                  >
                    Home
                  </Link>
                </Col>

                {/* About Link */}
                <Col lg={1} className="text-center">
                  <Link
                    href="/about"
                    className={`custom-header-style ${
                      isActive("/about") ? "active-link" : ""
                    }`}
                  >
                    About
                  </Link>
                </Col>

                {/* Our Work Link */}
                <Col className="text-center position-relative p-0" md={3}>
                  <Col className="p-0 hover-ourwork">
                    <Link
                      href=""
                      className={`custom-header-style our-work-af ${
                        isActive("/our-work") ? "active-link" : ""
                      }`}
                    >
                      Our Work
                    </Link>
                  </Col>

                  <div className="p-0 our-work-element pt-3">
                    <Col
                      className="p-0 "
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
                        >
                          Agriculture
                        </Link>
                      </Col>
                      <Col className="p-0 text-left py-1">
                        <Link
                          href="https://community-engagement.fuzhio.org/"
                          target="_blank"
                          className="custom-header-style border border-0"
                        >
                          Community Engagement
                        </Link>
                      </Col>
                    </Col>
                  </div>
                </Col>

                {/* Fuzhio & Covid Response Link */}
                <Col md={4}>
                  <Link
                    href="/fuzhio-covid-response"
                    className={`custom-header-style ${
                      isActive("/fuzhio-covid-response") ? "active-link" : ""
                    }`}
                  >
                    Fuzhio & Covid Response
                  </Link>
                </Col>

                {/* Blog Link */}
                <Col className="text-center" lg={1}>
                  <Link
                    href="/blog"
                    className={`custom-header-style ${
                      isActive("/blog") ? "active-link" : ""
                    }`}
                  >
                    Blog
                  </Link>
                </Col>
                {/* <Col>
                  <SearchModal />
                </Col> */}
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
          <Row className="d-flex flex-row justify-content-between align-items-center">
            {/* Logo */}
            <Col xs={6} className="p-0">
              <Link className="navbar-brand" href="/">
                <Image src="/fuzhio_logo.png" width={130} />
              </Link>
            </Col>

            {/* Search Modal */}
            {/* <Col xs={3} className="d-flex justify-content-end p-0">
              <SearchModal />
            </Col> */}

            {/* Menu Icon */}
            <Col
              xs={2}
              className="d-flex justify-content-end align-items-center p-0"
            >
              <Col
                className="d-flex flex-row flex-wrap justify-content-end"
                onClick={handleoOnClick}
              >
                <Image
                  src="/nav-bar_mob.svg"
                  alt="nav_bar"
                  width={25}
                  height={25}
                  style={{
                    backgroundColor: isBlogPage ? "black" : "transparent",
                  }}
                />
              </Col>
            </Col>
          </Row>

          {isOnClick && (
            <Row
              className="position-fixed p-0 w-100 mt-5"
              style={{ top: "5rem", left: "1rem", right: 0 }}
            >
              <Col className="mt-5 bg-white p-0">
                {/* Home Link */}
                <Col className="p-3 px-4 p-0 border-bottom">
                  <Link href="/" className="text-decoration-none text-dark">
                    Home
                  </Link>
                </Col>

                {/* About Link */}
                <Col className="p-3 px-4 p-0 border-bottom">
                  <Link
                    href="/about"
                    className="text-decoration-none text-dark"
                  >
                    About
                  </Link>
                </Col>

                {/* Our Work Link */}
                <Col className="p-0">
                  <Col className="p-3 px-4 p-0 border-bottom">
                    <Col className="p-0" onClick={handleOnclickMenu}>
                      <Link
                        href=""
                        className="text-decoration-none text-dark our-work-af-mob"
                      >
                        Our Work
                      </Link>
                    </Col>
                  </Col>

                  {isMenuOnClick && (
                    <Col className="p-0">
                      <Col className="p-3 px-4 p-0 border-bottom">
                        <Link
                          href="/agriculture"
                          className="text-decoration-none text-dark"
                        >
                          &gt; Agriculture
                        </Link>
                      </Col>
                      <Col className="p-3 px-4 p-0 border-bottom">
                        <Link
                          href="https://community-engagement.fuzhio.org/"
                          target="_blank"
                          className="text-decoration-none text-dark"
                        >
                          &gt; Community Engagement
                        </Link>
                      </Col>
                    </Col>
                  )}
                </Col>

                {/* Fuzhio & Covid Response Link */}
                <Col className="p-3 px-4 p-0 border-bottom">
                  <Link
                    href="/fuzhio-covid-response"
                    className="text-decoration-none text-dark"
                  >
                    Fuzhio & Covid Response
                  </Link>
                </Col>

                {/* Blog Link */}
                <Col className="p-3 px-4 p-0 border-bottom">
                  <Link href="/blog" className="text-decoration-none text-dark">
                    Blog
                  </Link>
                </Col>
              </Col>
            </Row>
          )}
        </Container>
      </Container>
    </>
  );
}

export default Header;
