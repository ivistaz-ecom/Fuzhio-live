import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Page({ data }) {
    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Header />

            <Container fluid className="w-100 p-0">
                <div
                    className="banner d-flex align-items-center justify-content-center text-white text-center"
                    style={{
                        background: 'linear-gradient(90deg, rgba(0,0,0,0.9934567577030813) 0%, rgba(110,23,13,1) 64%)',
                        height: '600px',
                        color: '#fff',
                    }}
                >
                    <h1
                        className="fs-1 fw-bold"
                        dangerouslySetInnerHTML={{ __html: data[0]?.title.rendered }}
                    />
                </div>

                <Container fluid className="py-5">
                    <Row className="p-0">
                        <Col md={8} className="d-flex flex-column gap-2 mx-auto">
                            {data.map((item) => (
                                <div key={item.id}>
                                    <p style={{ fontSize: '12px', color: '#126634' }}>
                                        {formatPublishedDate(item.date)}
                                    </p>

                                    <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </Container>

            <Footer />
        </>
    );
}

// Fetch data server-side
export async function getServerSideProps(context) {
    const { slug } = context.params;
    const url = `https://docs.fuzhio.org/wp-json/wp/v2/fuzhio-seo-blog?slug=${slug}`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data || data.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data,
        },
    };
}
