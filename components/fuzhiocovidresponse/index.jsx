'use client'
import React from 'react'

import Header from '../common/Header';
import Footer from '../common/Footer';
import FuzhioBanner from './FuzhioBanner';
import FuzhioSection2 from './FuzhioSection2';
import { NextSeo } from 'next-seo';


function index() {
  return (
    <>

      <NextSeo
        title="Helping vulnerable strengthen their pandemic response"
        description="Our work during the time of the pandemic and in the form of Covid Action Collab, spanned geographies and helped support vulnerable communities"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Helping vulnerable strengthen their pandemic response',
          description: 'Our work during the time of the pandemic and in the form of Covid Action Collab, spanned geographies and helped support vulnerable communities',
          images: [
            {
              url: '/fuzhio_logo.png',
              width: 800,
              height: 600,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            {
              url: '/fuzhio_logo.png',
              width: 900,
              height: 800,
              alt: 'Awards and Recognitions',
              type: 'image/jpeg',
            },
            { url: '/fuzhio_logo.png' },
            { url: '/fuzhio_logo.png' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />

      <Header />
      <FuzhioBanner />
      <FuzhioSection2 />
      <Footer />
    </>
  )
}

export default index
