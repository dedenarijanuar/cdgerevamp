import React from "react"
import "../styles/bootstrap/bootstrap.min.css"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Features from '../components/Features'

export const BusinessPageTemplate = ({
    title,
    heading,
    subheading,
    intro,
  }) => (
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <Features gridItems={intro.blurbs} />
      </div>
  )

  BusinessPageTemplate.propTypes = {
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    intro: PropTypes.shape({
      blurbs: PropTypes.array,
    }),
  }
  
  const BusinessPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <BusinessPageTemplate
          title={frontmatter.title}
          heading={frontmatter.heading}
          subheading={frontmatter.subheading}
          intro={frontmatter.intro}
        />
      </Layout>
    )
  }
  
  BusinessPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }
  
  export default BusinessPage

  export const pageQuery = graphql`
  query BusinessPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "business-page" } }) {
      frontmatter {
        title
        heading
        subheading
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`