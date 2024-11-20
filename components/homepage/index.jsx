"use client";
import React from "react";
import HomeBanner from "./HomeBanner";
import SeoComponents from "../SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const index = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");
  const title = "Fuzhio Health and Business Services";
  const description =
    "Fuzhio is an eco social venture that aims to enhance value chain efficiencies of products that resolve socio economic and environmental issues";
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
      <HomeBanner />
    </>
  );
};

export default index;
