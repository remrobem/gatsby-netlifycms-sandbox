import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./services.module.scss"

const Services = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
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

  // filter out md that does not have a video link
  let services = query.allMarkdownRemark.edges.filter(service => {
    return service.node.frontmatter.videoLink
  })

  return (
    <div className={styles.container}>
      <a name="epiphany_services"></a>
      <div className={styles.background}></div>
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>
            In-person services and events at Epiphany have been suspended due the the COVID-19 pandemic
          </h1>
        </div>

        <div className={styles.message}>
          <h1>However, Sunday services are being recorded</h1>
        </div>
        <div className={styles.buttonContainer}>
          {services.map(service => {
            return (
              <a href={service.node.frontmatter.videoLink}>
                <button className={styles.button}>
                  {service.node.frontmatter.title}
                </button>
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
