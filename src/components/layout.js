/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
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

  const [hidden1, setHidden1] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  const [hidden3, setHidden3] = useState(true);
  const [hidden4, setHidden4] = useState(true);

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
        <nav style={{ display: 'flex', fontSize: '15px'}}>
        <Link to="/" style={{ textDecoration: 'none', paddingLeft: 13 }}><img src={"/img/gatsby-icon.png"} alt={"altImage1"} style={{width: "50px"}}></img></Link>
        <Link to="/about" style={{ textDecoration: 'none' }} onMouseEnter={ () => setHidden1(false) } onMouseLeave={ () => setHidden1(true) }>
          <div className="menubar">
          <div style={{ width: '50px'}} hidden={hidden1}>
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
        <Link to="/product" style={{ textDecoration: 'none' }} onMouseEnter={ () => setHidden2(false) } onMouseLeave={ () => setHidden2(true) }>
          <div className="menubar">
          <div style={{ width: '50px'}} hidden={hidden2}>
            <Player
              autoplay
              loop
              src="https://assets2.lottiefiles.com/private_files/lf30_p9cis9ii.json"
              style={{ height: '80px', width: '80px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>
            OUR BUSINESSES
          </div>
        </Link>
        <Link to="/people" style={{ textDecoration: 'none' }} onMouseEnter={ () => setHidden3(false) } onMouseLeave={ () => setHidden3(true) }>
          <div className="menubar">
          <div style={{ width: '50px'}} hidden={hidden3}>
            <Player
              autoplay
              loop
              src="https://assets4.lottiefiles.com/private_files/lf30_ncf9a4hg.json"
              style={{ height: '50px', width: '50px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>
            <span style={{ marginLeft: '-20px'}}>OUR PEOPLE</span>
          </div>
        </Link>
        <Link to="/joinus" style={{ textDecoration: 'none' }} onMouseEnter={ () => setHidden4(false) } onMouseLeave={ () => setHidden4(true) }>
          <div className="menubar">
          <div style={{ width: '50px'}} hidden={hidden4}>
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_0sqygfw1.json"
              style={{ height: '50px', width: '50px' }}
            >
              <Controls visible={false} />
            </Player>
          </div>
            <span style={{marginLeft: '-20px'}}>JOIN US</span>
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
