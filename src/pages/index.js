import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styles from "../styles/pages/index.module.scss"
import globalStyles from "../styles/global.module.scss"
import btnStyles from "../styles/elements/_buttons.module.scss"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={globalStyles.row}>
      <div className={`${globalStyles.colLg6} ${globalStyles.p0}`}>
        <h1 className={styles.mainHeading}>
          <span className={globalStyles.red}>A Full-Cycle</span>
          <br />
          Software Development
      <br />
          Company
      <span className={globalStyles.red}>.</span>
        </h1>
        <h4 className={globalStyles.textUppercase}>And the ultimate technology partner for startups</h4>
        <Link to="/" className={`${globalStyles.textUppercase} ${btnStyles.buttons} ${btnStyles.btnRed}`}>let's connect</Link>
      </div>

      <div className={`${globalStyles.colLg6} ${globalStyles.p0} ${globalStyles.mtMd0} ${globalStyles.mt3} ${globalStyles.alignSelfCenter}`}>
        <Image />
      </div>
    </div>
  </Layout>
)

export default IndexPage
