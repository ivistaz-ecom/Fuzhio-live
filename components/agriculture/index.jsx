"use client";
import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

import Agriculture from "./Agriculture";
import AgriBanner from "./AgriBanner";
import SeoComponents from "../SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const index = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");
  const title = "Ensures food & income security for smallholder farmers ";
  const description =
    "Creating sustainable and gender equal opportunities for farmers to improve their market realizations and supporting through improvement in technology";
  const path = `${pathname}`;
  const metaImage = "";
  const keywords = "";

  return (
    <>
      <SeoComponents
        title={title}
        description={description}
        path={path}
        metaImage={metaImage}
        keywords={keywords}
      />

      <Header />
      <AgriBanner />
      <Agriculture />
      <Footer />
    </>
  );
};

export default index;
