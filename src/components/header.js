import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import './header.module.scss'
import styles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* <h1 className={styles.logo}>
          <img src="../../content/assets/Epiphany.jpg" width="170" height="95" alt="Church drawing"></img>
        </h1> */}
        <div className={styles.title}>{data.site.siteMetadata.title} </div>

        <div className={styles.title1}>
          An Episcopal Church
          <div className={(styles.title2, styles.address)}>
            <a
              href="//maps.google.com/?f=q&amp;hl=en&amp;q=Church of the Epiphany Eden NC&maptype=roadmap"
              target="_blank"
            >
              538 Henry St. Eden, NC 27288
            </a>
          </div>
          <div className={(styles.title2, styles.phone)}>
            <a href="tel:1-336-623-9410">336-623-9410</a>
          </div>
          <div className={(styles.title2, styles.email)}>
            <a href="mailto:epiphanyeden@embarqmail.com">epiphanyeden@embarqmail.com</a>
          </div>
        </div>
        {/* <div>
          <div className={styles.address}>538 Henry St</div>
          <div className={styles.address}>Eden, NC 27288</div>
          <div className={styles.phone}>336-623-9410</div>
          <div className={styles.email}>epiphanyeden@embarqmail.com</div>
        </div> */}
      </div>
    </header>
  )
}

export default Header
