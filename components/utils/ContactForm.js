'use client'
import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap';
import { RotatingLines } from 'react-loader-spinner';

import '../../styles/Home.module.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        lastName: '',
        businessEmail: '',
        message: '',
    });

    const isBlank = (str) => {
        return !str.trim();
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (isBlank(formData.fullName)) {
            setError('Please enter a full name.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.lastName)) {
            setError('Please enter a last name.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.businessEmail)) {
            setError('Please enter an email.');
            setIsSubmitting(false);
            return;
        }

        if (isBlank(formData.message)) {
            setError('Please enter a message.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post(
                'https://docs.fuzhio.org/wp-json/contact-form-7/v1/contact-forms/18/feedback',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        // 'Content-Type': 'application/json',
                    },
                }
            );

            console.log(response.data.status);

            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                setSuccessMessage('Thank you for your submission!');
            } else {
                setError('An error occurred. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            // console.error('Error submitting form:', err);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="form-bg py-md-5 py-3 px-3">
            <h3 className='text-white pb-4'>
                Send us your message.
            </h3>
            {formVisible ? (
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <Row>
                        <Col>
                            <div className="mb-3">
                                {/* <label htmlFor="fullName" className="form-label">
                                    Full Name <span className="required">*</span>
                                </label> */}
                                <input
                                    type="text"
                                    name="fullName"
                                    className="form-control"
                                    id="fullName"
                                    placeholder="Full Name"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="mb-3">
                                {/* <label htmlFor="lastName" className="form-label">
                                    Last Name <span className="required">*</span>
                                </label> */}
                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="mb-3">
                                {/* <label htmlFor="businessEmail" className="form-label">
                                    Email <span className="required">*</span>
                                </label> */}
                                <input
                                    type="text"
                                    name="businessEmail"
                                    className="form-control"
                                    id="businessEmail"
                                    placeholder="Email"
                                    value={formData.businessEmail}
                                    onChange={handleChange}
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="mb-3">
                                {/* <label htmlFor="message" className="form-label">
                                    Message <span className="required">*</span>
                                </label> */}
                                <textarea
                                    type="text"
                                    id="message"
                                    className="form-control"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Message'
                                    name="message"
                                    rows="4"
                                    cols="50"
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <button
                                type="submit"
                                className="py-3 px-5 mt-2 bg-white text-dark rounded-0 poppins-bold"
                                disabled={isSubmitting}
                            >
                                Submit
                                {isSubmitting && (
                                    <RotatingLines
                                        strokeColor="white"
                                        strokeWidth="3"
                                        animationDuration="1"
                                        width="20"
                                        visible={true}
                                    />
                                )}
                            </button>
                        </Col>
                    </Row>
                    {error && <p className="error">{error}</p>}
                </form>
            ) : (
                <Container>
                    <h2>{successMessage}</h2>
                    <p>We will get back to you soon.</p>
                </Container>
            )}
        </div>
    );
};

export default ContactForm;