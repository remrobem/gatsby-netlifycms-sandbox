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
      
      <div className={styles.bottom}>
        <a href="https://www.episdionc.org/">
          <input
            type="button"
            className={styles.button}
            value="NC Episcopal Diocese"
          />
        </a>
        <a href="https://www.episdionc.org/coronavirus/">
          <input
            type="button"
            className={styles.button}
            value="NC Episcopal Diocese COVID-19"
          />
        </a>
        <a href="https://episcopalchurch.org/">
          <input
            type="button"
            className={styles.button}
            value="National Episcopal Church"
          />
        </a>
      </div>
    </div>
  )
}

// const LandingPage = ({ className }) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         # desktop: file(relativePath: { eq: "../../content/assets/AndTheyTraveled.jpg" })
//         desktop: file(relativePath: { eq: "AndTheyTraveled.jpg" }) {
//           childImageSharp {
//             fluid(quality: 90, maxWidth: 1920) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     `}
//     render={data => {
//       // Set ImageData.
//       const imageData = data.desktop.childImageSharp.fluid
//       return (
//         <BackgroundImage
//         //   Tag="section"
//           className={styles.background}
//           fluid={imageData}
//           // backgroundColor={`#040e18`}
//         >
//           <div className={styles.messageTop}>
//             <div className={styles.message}>
//               <h1>ALL ARE WELCOME</h1>
//             </div>
//             <div className={styles.message}>
//               <h1>
//                 We believe in a loving, liberating, and life-giving God: Father,
//                 Son, and Holy Spirit.
//               </h1>
//             </div>
//           </div>
//         </BackgroundImage>
//       )
//     }}
//   />
// )

// // const StyledLandingPage = styled(LandingPage)`
// //   width: 100%;
// //   background-position: bottom center;
// //   background-repeat: repeat-y;
// //   background-size: cover;
// // `

export default LandingPage
