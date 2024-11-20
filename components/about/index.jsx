"use client";
import React from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

import HeroBanner from "./AboutBanner";
import About from "./About";
import FuzhioTeam from "./OurTeam";
import Partners from "./Partners";
import BootstrapScript from "../Style-Script";
import "../Style-Script/index";
import SeoComponents from "../SeoComponents/Seo";
import { usePathname } from "next/navigation";
import { useState } from "react";

const index = () => {
  const pathname = usePathname();
  const [domainName, setDomainName] = useState("");
  const title = "Ecosocial venture enhancing value-chain and environment ";
  const description =
    "Enhancing value chain efficiencies of products that resolve socio economic and environmental issues, Fuzio supports marginalised communities and promotes a sustainable environment";
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
      <HeroBanner />
      <About />
      <FuzhioTeam />
      <Partners />
      <Footer />
    </>
  );
};

export default index;
