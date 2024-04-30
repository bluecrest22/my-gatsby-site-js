import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p><b>Gatsby</b></p>
      <StaticImage
        alt="Gatsby Icon"
        src="../images/gatsbyIcon.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Gatsby" />

export default IndexPage