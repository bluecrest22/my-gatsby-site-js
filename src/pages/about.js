import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <p>This is my Emerging Technology Project, featuring <b>Gatsby</b>.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About The Project" />

export default AboutPage