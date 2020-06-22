import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  console.log('footer data: ', data.site.siteMetadata.title)

  return (
    <footer className={styles.footer}>
      {data.site.siteMetadata.title}, © 2020
    </footer>
  )
}

export default Footer