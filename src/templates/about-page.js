import React from "react"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import downloadFile from '../download/simple_test.pdf'


export const AboutPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  heading2,
  description,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        width:'800px',
        height:'300px',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    />
    <section className="section section--gradient" style={{paddingTop:'100px'}}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title" id="service-title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns" style={{paddingTop:'200px'}}>
                  <div className="column is-12">
                    <h1 className="has-text-weight-semibold is-size-2" id="features">
                      {heading2}
                    </h1>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section section--gradient" style={{paddingTop:'100px'}}>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                  <a href={downloadFile} download>Download the file that is already in your static folder</a>
                  </div>
                </div>
                <div className="columns" style={{paddingTop:'200px'}}>
                  <div className="column is-12">
                    <h1 className="has-text-weight-semibold is-size-2" id="features">
                      {heading2}
                    </h1>
                    <p>{description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

AboutPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  heading2: PropTypes.string,
  description: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        heading2={frontmatter.heading2}
        description={frontmatter.description}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        heading2
        description
      }
    }
  }
`