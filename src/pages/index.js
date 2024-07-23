import * as React from "react"
import { Box, Text } from "@chakra-ui/react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Contacts from "../components/contacts"
import CustomCursor from "../components/custom-cursor"
import Seo from "../components/seo"
import Skills from "../components/skills"
import Growth from "../components/growth"
import gsap from "gsap"
import { Tween } from "react-gsap"

const IndexPage = () => {
  React.useEffect(() => {})
  return (
    <Box position="relative" cursor="none">
      <CustomCursor />
      <Layout>
        <Seo title="Home" />
        <Hero />
        <Projects />
        <Skills />
        <Growth />
        <Contacts />
      </Layout>
    </Box>
  )
}

export default IndexPage
