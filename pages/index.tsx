import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { useEffect, useState } from "react"
import Link from "next/link"
import "bootstrap/dist/css/bootstrap.min.css"

import Header from "../components/common/Header/index"
import Footer from "../components/common/Footer/index"

import MainHome from "./home"
import Head from "next/head"

const HomePage = () => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js" />
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" />
      </Head>

      <Header />
      <MainHome />
      <Footer />
    </>
  )
}

export default HomePage
