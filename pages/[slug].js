import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import config from "../config.json";

export default function Page({ data }) {
  const formatPublishedDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const generateSchemaMarkup = (post) => {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": post.title.rendered,
      "description": post.acf?.meta_description || "No description provided",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${config.mainWebUrl}/${post.slug}`,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Your Organization Name",
        "logo": {
          "@type": "ImageObject",
          "url": `${config.mainWebUrl}/path-to-logo.png`,
        },
      },
      "image": {
        "@type": "ImageObject",
        "url": post.acf?.featured_image_url || `${config.mainWebUrl}/default-image.png`,
        "height": 600,
        "width": 1200,
      },
    };
  };

  return (
    <>
      <Header />

      <Container fluid className="w-100 p-0">
        <div
          className="banner d-flex align-items-center justify-content-center text-white text-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.9934567577030813) 0%, rgba(110,23,13,1) 64%)",
            height: "600px",
            color: "#fff",
          }}
        >
          <h1
            className="fs-1 fw-bold"
            dangerouslySetInnerHTML={{ __html: data[0]?.title.rendered }}
          />
        </div>
      </Container>
      <Container className="py-5">
        <div className="p-0">
          <div md={8} className="">
            {data.map((item) => (
              <div key={item.id}>
                <p style={{ fontSize: "12px", color: "#126634" }}>
                  {formatPublishedDate(item.date)}
                </p>

                <div
                  dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                />

                {/* Add Schema Markup */}
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateSchemaMarkup(item)),
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

// Fetch data server-side
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const url = `${config.wpApiUrl}/fuzhio-seo-blog?slug=${slug}`;
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
