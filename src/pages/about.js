import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Us</h1>
      <p>
        Stay in touch, <Link to="/contact">contact us!</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
