import React from "react"
// import { graphql, StaticQuery } from "gatsby"
// import styled from 'styled-components'

// import BackgroundImage from "gatsby-background-image"
import styles from "./landingPage.module.scss"

const LandingPage = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.background}></div>

      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>ALL ARE WELCOME</h1>
        </div>
        <div className={styles.message}>
          <h1>
            We believe in a loving, liberating, and life-giving God: Father,
            Son, and Holy Spirit.
          </h1>
        </div>
      </div>
    </div>
  )
}


export default LandingPage
