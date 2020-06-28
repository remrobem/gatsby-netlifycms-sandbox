import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import './header.module.scss'
import styles from "./header.module.scss"
import { GrLocation } from "react-icons/gr"
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

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

        <div className={styles.title}>
          {data.site.siteMetadata.title}
          <div className={(styles.links)}>

            <a
              className={styles.link}
              href="//maps.google.com/?f=q&amp;hl=en&amp;q=Church of the Epiphany Eden NC&maptype=roadmap"
              target="_blank"
            >
              <FaMapMarkerAlt /> 538 Henry St. Eden, NC 27288
            </a>

            <a className={styles.link} href="tel:1-336-623-9410">
              <FaPhone /> 336-623-9410
            </a>

            <a
              className={styles.link}
              href="mailto:epiphanyeden@embarqmail.com"
            >
              <FaEnvelope /> epiphanyeden@embarqmail.com
            </a>

            <a
              className={styles.link}
              href="https://www.facebook.com/epiphanyeden"
            >
              <FaFacebookSquare /></a>

              <a
              className={styles.link}
              href="https://www.instagram.com/epiphanyeden/"
            >
              <FaInstagramSquare /></a>

          </div>
        </div>
        {/* <div>
          <div className={(styles.title2, styles.address, styles.link)}>
           
            <a className={styles.link}
              href="//maps.google.com/?f=q&amp;hl=en&amp;q=Church of the Epiphany Eden NC&maptype=roadmap"
              target="_blank"
            >
               <FaMapMarkerAlt /> 538 Henry St. Eden, NC 27288
            </a>
          </div>
          <div className={(styles.title2, styles.phone, styles.link)}>
            <a className={styles.link}
            href="tel:1-336-623-9410"><FaPhone /> 336-623-9410</a>
          </div>
          <div className={(styles.title2, styles.email, styles.link)}>
            <a  className={styles.link}
            href="mailto:epiphanyeden@embarqmail.com">
              <FaEnvelope /> epiphanyeden@embarqmail.com
            </a>
          </div> */}
        {/* </div> */}
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
