import React from "react"
import styles from "./churchLinks.module.scss"

const ChurchLinks = () => {
  return (
    <div className={styles.container}>
      <a href="#epiphany_services">
        <button className={styles.button}>Epiphany Services</button>
      </a>

      <a href="https://cathedral.org/worship/">
        <button className={styles.button}>National Cathedral Services</button>
      </a>

      <a href="https://www.episdionc.org/coronavirus/">
        <button className={styles.button}>NC Episcopal Diocese COVID-19</button>
      </a>

      <a href="https://www.episdionc.org/">
        <button className={styles.button}>NC Episcopal Diocese</button>
      </a>

      <a href="https://episcopalchurch.org/">
        <button className={styles.button}>National Episcopal Church</button>
      </a>
    </div>
  )
}

export default ChurchLinks
