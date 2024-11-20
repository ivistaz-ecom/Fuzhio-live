'use client'
import React from 'react'

import Header from '../common/Header';
import Footer from '../common/Footer';
import FuzhioBanner from './FuzhioBanner';
import FuzhioSection2 from './FuzhioSection2';
import SeoComponents from "../SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";


function index() {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");
  const title =
    "Helping vulnerable strengthen their pandemic response";
  const description =
    "Our work during the time of the pandemic and in the form of Covid Action Collab, spanned geographies and helped support vulnerable communities";
  const path = `${pathname}`;
  const metaImage = "";
  return (
    <>
    
 <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
      />
      <Header />
      <FuzhioBanner />
      <FuzhioSection2 />
      <Footer />
    </>
  )
}

export default index
