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
import * as Chakra from "@chakra-ui/react"
import gsap from "gsap"

// import Header from "./header"
import "./layout.css"

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
  let cursor = React.useRef(null)

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {/* <Chakra.Box
        ref={cursor}
        style={{
          position: "fixed",
          backgroundColor: "black",
          width: "10px",
          height: "10px",
          borderRadius: "100%",
          zIndex: "1",
          transition: `0.3s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform,
        0.2s cubic-bezier(0.75, -0.27, 0.3, 1.33) opacity`,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: "10000",
          transform: `scale(1)`,
        }}
      ></Chakra.Box> */}
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `1440px`,
          width: `100%`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div>
          <main>{children}</main>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
