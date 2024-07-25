'use client'
import React from 'react'

import Header from '../common/Header';
import Footer from '../common/Footer';

import Agriculture from './Agriculture';
import AgriBanner from './AgriBanner';
import { NextSeo } from 'next-seo';

const index = () => {
  return (
    <>

      <NextSeo
        title="Ensures food & income security for smallholder farmers"
        description="Creating sustainable and gender equal opportunities for farmers to improve their market realizations and supporting through improvement in technology"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Ensures food & income security for smallholder farmers',
          description: 'Creating sustainable and gender equal opportunities for farmers to improve their market realizations and supporting through improvement in technology',
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
      <AgriBanner />
      <Agriculture />
      <Footer />
    </>

  )
}

export default index