'use client'
import React from 'react'

import HomeBanner from './HomeBanner'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>
      <NextSeo
        title="Fuzhio Health and Business Services"
        description="Fuzhio is an eco social venture that aims to enhance value chain efficiencies of products that resolve socio economic and environmental issues"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Fuzhio Health and Business Services',
          description: 'Fuzhio is an eco social venture that aims to enhance value chain efficiencies of products that resolve socio economic and environmental issues',
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

      <HomeBanner />
    </>
  )
}

export default index