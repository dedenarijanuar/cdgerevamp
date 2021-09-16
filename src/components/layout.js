/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      { /*<Header siteTitle={data.site.siteMetadata.title} />*/ }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <nav style={{ display: 'flex'}}>
        <Link to="/" style={{ textDecoration: 'none', paddingLeft: 13 }}><img src={"/img/gatsby-icon.png"} alt={"altImage1"} style={{width: "50px"}}></img></Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <div className="menubar">
          <div style={{ width: '50px'}}>
            <Player
              autoplay
              loop
              src="https://assets9.lottiefiles.com/packages/lf20_iF9sFw.json"
              style={{ height: '80px', width: '80px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>
            OUR COMPANY
          </div>
        </Link>
        <Link to="/product" style={{ textDecoration: 'none' }}>
          <div className="menubar">
          <div style={{ width: '50px'}}>
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
              style={{ height: '80px', width: '80px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>
            OUR BUSINESSES
          </div>
        </Link>
        <Link to="/people" style={{ textDecoration: 'none' }}>
          <div className="menubar">
          <div style={{ width: '50px'}}>
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
              style={{ height: '80px', width: '80px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>
            OUR PEOPLE
          </div>
        </Link>
        <Link to="/joinus" style={{ textDecoration: 'none' }}>
          <div className="menubar">
          <div style={{ width: '50px'}}>
            <Player
              autoplay
              loop
              src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
              style={{ height: '80px', width: '80px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>
            JOIN US
          </div>
        </Link>
        
        </nav>
        <main>{children}</main>
        { /*<footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>*/ }
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
