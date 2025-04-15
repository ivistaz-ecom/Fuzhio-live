import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa" // Importing new icons from FontAwesome

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow left-arrow"
      style={{
        position: "absolute",
        left: "10px", // Adjust the left margin
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        border: "none", // Removed border
        backgroundColor: "transparent", // Removed background color
        padding: "1px",
        borderRadius: "50%", // Optional: to make it round
      }}
    >
      <FaArrowLeft size={23} /> {/* Using the new left arrow icon */}
    </button>
  )
}

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow right-arrow"
      style={{
        position: "absolute",
        right: "10px", // Adjust the right margin
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        border: "none", // Removed border
        backgroundColor: "transparent", // Removed background color
        padding: "1px",
        borderRadius: "50%", // Optional: to make it round
      }}
    >
      <FaArrowRight size={23} /> {/* Using the new right arrow icon */}
    </button>
  )
}

const PartnersCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  }

  return (
    <Container>
      <Row>
        <Col>
          <Carousel
            responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            arrows
            className=" "
          >
            <div className="p-5">
              <Image src="/home/swasti.png" alt="swasti" width="100%" />
            </div>
            <div className="p-5">
              <Image src="/home/vrutti.png" alt="Vrutti" width="100%" />
            </div>
            <div className="p-5">
              <Image src="/home/cms.png" alt="CMS" width="100%" />
            </div>
            <div className="p-5">
              <Image src="/home/cac.png" alt="swasti" width="100%" />
            </div>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}

export default PartnersCarousel
