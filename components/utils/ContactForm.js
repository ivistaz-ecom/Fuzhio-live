"use client"
import { useState } from "react"
import axios from "axios"
import { Col, Row } from "react-bootstrap"
import { RotatingLines } from "react-loader-spinner"
import "../../styles/Home.module.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    businessEmail: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isBlank = (str) => !str.trim()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSuccessMessage("")

    if (isBlank(formData.fullName)) {
      setError("Please enter a full name.")
      setIsSubmitting(false)
      return
    }
    if (isBlank(formData.lastName)) {
      setError("Please enter a last name.")
      setIsSubmitting(false)
      return
    }
    if (isBlank(formData.businessEmail)) {
      setError("Please enter an email.")
      setIsSubmitting(false)
      return
    }
    if (isBlank(formData.message)) {
      setError("Please enter a message.")
      setIsSubmitting(false)
      return
    }

    const formPayload = new FormData()
    formPayload.append("fullName", `${formData.fullName} ${formData.lastName}`)
    formPayload.append("businessEmail", formData.businessEmail)
    formPayload.append("message", formData.message)

    try {
      const response = await axios.post(
        "https://docs.fuzhio.org/wp-json/contact-form-7/v1/contact-forms/7/feedback",
        formPayload,
        { headers: { "Content-Type": "multipart/form-data" } }
      )

      if (response.data.status === "mail_sent") {
        setSuccessMessage("Thank you for your submission!")
        setShowModal(true)
        setFormData({ fullName: "", lastName: "", businessEmail: "", message: "" })
      } else {
        setError("An error occurred. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="form-bg py-md-5 py-3 px-3">
      <h3 className="text-white pb-4">Send us your message.</h3>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <Row>
          <Col>
            <input
              type="text"
              name="fullName"
              className="form-control mb-3"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <input
              type="text"
              name="lastName"
              className="form-control mb-3"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="email"
              name="businessEmail"
              className="form-control mb-3"
              placeholder="Email"
              value={formData.businessEmail}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <textarea
              name="message"
              className="form-control mb-3"
              rows="4"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              type="submit"
              className="py-3 px-5 mt-2 bg-white text-dark rounded-0 poppins-bold"
              disabled={isSubmitting}
            >
              Submit
              {isSubmitting && (
                <RotatingLines
                  strokeColor="black"
                  strokeWidth="3"
                  animationDuration="1"
                  width="20"
                  visible={true}
                />
              )}
            </button>
          </Col>
        </Row>
        {error && <p className="text-danger mt-3">{error}</p>}
      </form>

      {/* React-controlled Bootstrap Modal */}
      {showModal && (
        <>
          <div className="modal-backdrop fade show"></div>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Message Sent</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setShowModal(false)}
                  >x</button>
                </div>
                <div className="modal-body">
                  <p>{successMessage}</p>
                  <p className="mb-0">We will get back to you soon.</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ContactForm
