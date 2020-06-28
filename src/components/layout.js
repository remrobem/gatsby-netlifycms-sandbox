import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import Footer from "../components/footer"
import Videos from "../components/videos"
import Header from "../components/header"
import BackgroundSection from "./landingPage"
import LandingPage from "./landingPage"
import Services from "./services"
import styles from "./layout.module.scss"
import ChurchLinks from "./churchLinks"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  // let header

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   )
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `Montserrat, sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   )
  // }
  return (
    <div>
      {/* <header>{header}</header> */}
      <Header />
     
      <LandingPage />
      <ChurchLinks />
      <Services />
      {/* <main>{children}</main> */}
      <Footer />
    </div>
  )
}

export default Layout
