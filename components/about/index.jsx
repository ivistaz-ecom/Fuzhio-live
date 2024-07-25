'use client'
import React from 'react'

import Header from '../common/Header'
import Footer from '../common/Footer'

import HeroBanner from './AboutBanner'
import About from './About'
import FuzhioTeam from './OurTeam'
import Partners from './Partners'

import BootstrapScript from '../Style-Script'

import '../Style-Script/index'
import { NextSeo } from 'next-seo'


const index = () => {
  return (
    <>
      <NextSeo
        title="Ecosocial venture enhancing value-chain and environment"
        description="Enhancing value chain efficiencies of products that resolve socio economic and environmental issues, Fuzio supports marginalised communities and promotes a sustainable environment"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Ecosocial venture enhancing value-chain and environment',
          description: 'Enhancing value chain efficiencies of products that resolve socio economic and environmental issues, Fuzio supports marginalised communities and promotes a sustainable environment',
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
      <HeroBanner />
      <About />
      <FuzhioTeam />
      <Partners />
      <Footer />
    </>
  )
}

export default index