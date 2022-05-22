/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const moreLinks = [
  { text: "Impressum", url: "/impressum" },
  {
    text: "Datenschutz",
    url: "/datenschutz",
  },
  {
    text: "Kontakt",
    url: "mailto:info@cookroom.de",
  },
]

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          // maxWidth: `var(--size-content)`,
          // padding: `var(--size-gutter)`,
          minHeight: '100%',
          display: 'flex',
          flexDirection: 'column',
          // background: 'red'
        }}
      >
        <main style={{flexGrow:1}}>{children}</main>
        <footer
          className="content-fullwidth"
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            background: "#cccccc",
            padding: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            {moreLinks.map((link, i) => (
              <React.Fragment key={link.url}>
                <a href={`${link.url}`} style={{paddingRight: '20px'}}>{link.text}</a>
              </React.Fragment>
            ))}
          </div>
          <div>
          © 2011 - {new Date().getFullYear()}
          &middot;
          {` `}
          <a href="http://www.hotel-schoenbuch.de" target="_blank">Hotel Schönbuch</a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
