import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const ContentPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.content_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.content_image_alt}
      />
      {children}
      <Link to={`/content/${data.mdx.frontmatter.next}`}>
                {data.mdx.frontmatter.nextTitle}
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        next
        nextTitle
        content_image_alt
        content_image_credit_link
        content_image_credit_text
        content_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  `


export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default ContentPost