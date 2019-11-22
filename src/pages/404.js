import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/pages/404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.content}>
      <h1 className={styles.header}>
        {/* {intl.formatMessage({ id: "notfound.header" })} */}
      </h1>
      <p className={styles.errorMessage}>
        {/* {intl.formatMessage({ id: "notfound.description" })} */}
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
