import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
// import BackgroundVideo from '../components/BackgroundVideo'
import Gallery from '../components/Gallery'
// import Video from '../components/Video'
import { ReactVideo } from "reactjs-media";
import { useMixpanel } from 'gatsby-plugin-mixpanel'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  video,
  gallery,
  downloadfile,
  tracking
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >

      <div
        style={{
          display: 'flex',
          height: '300px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h3 className="subtitle">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <div dangerouslySetInnerHTML={{__html: description}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="BackgroundVideo-section section">
      <ReactVideo
          src={video}
          poster="/img/black.jpg"
          primaryColor="red"
          // other props
          onPlay={() => tracking.track('Start Video') }
      />
    </section>

    <br/><br/><br/>
    <section className="section">
      <div className="container">
        <h2>Our gallery </h2>
        <Gallery images={gallery} />
      </div>
    </section>
    <section>
      <div className="content">
        <div className="tile">
        <a href={downloadfile} download onClick={() => tracking.track('Download') }>Download file</a>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  video: PropTypes.string,
  gallery: PropTypes.array,
  downloadfile: PropTypes.string,
  tracking: PropTypes.func
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const mixpanel = useMixpanel()

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        video={frontmatter.video}
        gallery={frontmatter.gallery}
        downloadfile={frontmatter.downloadfile}
        tracking={mixpanel}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      ...Gallery
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
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        video
        downloadfile
      }
    }
  }
`