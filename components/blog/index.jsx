'use client'
import React from 'react'

import DynamiLoopTemplate from './DyamicLoopTemplate';

import Header from '../common/Header2';
import Footer from '../common/Footer';
import { NextSeo } from 'next-seo';

const index = () => {
  return (
    <>

      <NextSeo
        title="We aim to improve value chains & business growth plan for farmers"
        description="Browse through our blog section to understand how we constantly strive to improve value chains and ensure a business growth plan for farmers that enhances profitability"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'We aim to improve value chains & business growth plan for farmers',
          description: 'Browse through our blog section to understand how we constantly strive to improve value chains and ensure a business growth plan for farmers that enhances profitability',
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
      <DynamiLoopTemplate />
      <Footer />
    </>
  )
}

export default index