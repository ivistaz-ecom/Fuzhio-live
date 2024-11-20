"use client";
import React from "react";

import DynamiLoopTemplate from "./DyamicLoopTemplate";

import Header from "../common/Header";
import Footer from "../common/Footer";
import SeoComponents from "../SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const index = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");
  const title =
    "We aim to improve value chains & business growth plan for farmers ";
  const description =
    "Browse through our blog section to understand how we constantly strive to improve value chains and ensure a business growth plan for farmers that enhances profitability";
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
      <DynamiLoopTemplate />
      <Footer />
    </>
  );
};

export default index;
