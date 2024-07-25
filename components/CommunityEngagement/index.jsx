'use client'
import React from 'react'

import Header from '../common/Header';
import Footer from '../common/Footer';

import CommunityBanner from './CommunityBanner'
import OurPathways from './OurPathways';
import CircleAreas from './CircleAreas';

import '../Style-Script'
import WorkWithUs from './WorkWithUs';
import KeyPartners from './KeyPartners';
import CommunityPartnersCarousel from './CommunityPartnersCarousel';

import '../Style-Script'
import { NextSeo } from 'next-seo';

const index = () => {
  return (
    <>

      <NextSeo
        title="Community Engagement: Strategies for Social Development"
        description="Community Engagement The Community Engagement team works with social development partners with the objective of enabling vulnerable communities to make better decisions and deliver services efficiently The programme seeks to understand vulnerable communities in their local ecosystem and reach out to them This approach is key to decisions, interventions, and services because the duration and"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Community Engagement: Strategies for Social Development',
          description: 'Community Engagement The Community Engagement team works with social development partners with the objective of enabling vulnerable communities to make better decisions and deliver services efficiently The programme seeks to understand vulnerable communities in their local ecosystem and reach out to them This approach is key to decisions, interventions, and services because the duration and',
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
      <CommunityBanner />
      <OurPathways />
      <CircleAreas />
      <WorkWithUs />

      <KeyPartners />
      <CommunityPartnersCarousel />
      <Footer />
    </>
  )
}

export default index