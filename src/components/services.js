import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
// import styled from 'styled-components'

// import BackgroundImage from "gatsby-background-image"
import styles from "./services.module.scss"

const Services = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              videoLink
              serviceOrderlink
              title
            }
          }
        }
      }
    }
  `)
  console.log("services: ", query.allMarkdownRemark.edges)
  let services = query.allMarkdownRemark.edges.filter( (service) => {
    return (
      service.node.frontmatter.videoLink
    )
  })

  console.log("services filtered: ", services)


  return (
    <div className={styles.container}>
      <div className={styles.background}></div>

      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>
            Due to Covid-19, services and events at Epiphany have been cancelled
            for the foreseable future
          </h1>
        </div>
        <div className={styles.message}>
          <h1>In the interim, Sunday services are being recorded</h1>
        </div>

        {services.map(service => {
          return (
            <a href={service.node.frontmatter.videoLink}>
              <input
                type="button"
                className={styles.button}
                value={service.node.frontmatter.title}
              />
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Services
