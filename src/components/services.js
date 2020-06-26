import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
// import styled from 'styled-components'

import BackgroundImage from "gatsby-background-image"
import styles from "./services.module.scss"

// const videos = useStaticQuery(graphql`
//   {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             videoLink
//             serviceOrderlink
//             title
//           }
//         }
//       }
//     }
//   }
// `)

// console.log('videos: ', videos)


const Services = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        # desktop: file(relativePath: { eq: "../../content/assets/AndTheyTraveled.jpg" })
        desktop: file(relativePath: { eq: "AndTheySaw.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          //   Tag="section"
          className={styles.background}
          fluid={imageData}
          // backgroundColor={`#040e18`}
        >
          <div className={styles.messageTop}>
            <div className={styles.message}>
              <h1>
                Due to Covid-19, services and events at Epiphany have been
                cancelled for the foreseable future
              </h1>
            </div>
            <div className={styles.message}>
              <h1>
                In the interim, Sunday services have been recorded and are
                available here
              </h1>
            </div>

            <a href="https://google.com">
              <input type="button" className={styles.button} value="Button 3" />
            </a>

          </div>
        </BackgroundImage>
      )
    }}
  />
)

// const StyledLandingPage = styled(LandingPage)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

export default Services
