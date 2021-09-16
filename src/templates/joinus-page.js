import React from "react"
import "../styles/bootstrap/bootstrap.min.css"
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const JoinPageTemplate = ({
    title,
    description,
  }) => (
      <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <Player
          hover={true}
          autoplay={false}
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_tthccsda.json"
          style={{ height: '300px', width: '300px' }}
        >
          <Controls visible={false} />
        </Player>
      </div>
  )

  JoinPageTemplate.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
  }

  const JoinPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark
  
    return (
      <Layout>
        <JoinPageTemplate
          title={frontmatter.title}
          description={frontmatter.subheading}
        />
      </Layout>
    )
  }

  JoinPage.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        frontmatter: PropTypes.object,
      }),
    }),
  }
  
  export default JoinPage

  export const pageQuery = graphql`
  query JoinPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "joinus-page" } }) {
      frontmatter {
        title
        subheading
      }
    }
  }
`