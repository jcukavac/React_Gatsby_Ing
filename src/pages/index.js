import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import styles from "../styles/pages/index.module.scss"
import globalStyles from "../styles/global.module.scss"
import btnStyles from "../styles/elements/_buttons.module.scss"


const IndexPage = ({ intl }) => (
  <Layout>
    <SEO title="Home" />
    <div className={globalStyles.row}>
      <div className={`${globalStyles.colLg6} ${globalStyles.p0}`}>
        <h1 className={styles.mainHeading}>
          <span className={globalStyles.red}>
            {intl.formatMessage({ id: "title_part1_index" })}
          </span>
          <br />
          {intl.formatMessage({ id: "title_part2_index" })}
          <br />
          {intl.formatMessage({ id: "title_part3_index" })}
          <span className={globalStyles.red}>.</span>
        </h1>
        <h4 className={globalStyles.textUppercase}>
          {intl.formatMessage({ id: "title_text_index" })}
        </h4>
        <Link
          to="/"
          className={`${globalStyles.textUppercase} ${btnStyles.buttons} ${btnStyles.btnRed}`}
        >
          {intl.formatMessage({ id: "title_button_index" })}
        </Link>
      </div>

      <div
        className={`${globalStyles.colLg6} ${globalStyles.p0} ${globalStyles.mtMd0} ${globalStyles.mt3} ${globalStyles.alignSelfCenter}`}
      >
        <Image />
      </div>
    </div>
  </Layout>
)

export default injectIntl(IndexPage)
