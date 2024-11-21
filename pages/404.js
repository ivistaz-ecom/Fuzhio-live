import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

const Custom404 = () => {
  const h1Text = {
    fontSize: "40px",
    color: "#b34738",
  };

  return (
    <>
      <style>
        {`
        .arrow-icon {
                color :#b34738 !important;
                }
        .link-text {
                color :#b34738 !important;
                }
        .hover-effect {
                transition: color 0.3s ease;
                }

        .hover-effect:hover .arrow-icon,
        .hover-effect:hover .link-text {
                color: black !important;
                }
       `}
      </style>
      <Header />
      {/* Desktop View */}
      <Container
        fluid
        className="d-flex flex-column justify-content-center"
        style={{ height: "90vh", background: "#f5f5f5" }}
      >
        <Container className="bg-white p-5">
          <h1 style={h1Text} className="text-center">
            This page doesn't seem to exist.
          </h1>
          <h3 className="text-center">
            It looks like the link pointing here was faulty. Maybe try
            searching?
          </h3>
          <div className="text-center mt-4">
            <div className="d-inline-flex align-items-center gap-2 hover-effect">
              <IoArrowBack className="arrow-icon" />
              <Link href="/" className="link-text">
                Back to Home
              </Link>
            </div>
          </div>
        </Container>
      </Container>

      <Footer />
    </>
  );
};

export default Custom404;
