import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/pages/404.module.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.content}>
      <h1 className={styles.header}>NOT FOUND</h1>
      <p className={styles.errorMessage}>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
