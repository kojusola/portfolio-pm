import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import { Tween, Reveal, ScrollTrigger } from "react-gsap"

const Growth = ({ siteTitle }) => {
  return (
    <Chakra.Box
      className="skills"
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "40px", md: "64px" }}
      pb={{ base: "20px", md: "50px" }}
      //   height={{ base: "400px", lg: "300px" }}
      overflow="hidden"
    >
      <Chakra.Box width="auto" height="auto">
        <Reveal repeat>
          <Tween from={{ opacity: 0, x: -80 }} duration={2}>
            <Chakra.Text
              fontFamily="Roboto"
              fontWeight="700"
              fontSize={{ base: "35px", md: "64px" }}
              lineHeight="75px"
              color="#E5E5E5"
              whiteSpace="nowrap"
            >
              Growth
            </Chakra.Text>
          </Tween>
        </Reveal>
      </Chakra.Box>
      <Chakra.Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        // justifyContent="space-between"
        gap="20px"
        width="100%"
        // overflow="hidden"
        mt="32px"
        maxW="700px"
      >
        <Chakra.Box
          fontFamily="Roboto"
          fontWeight="400"
          fontSize={{ base: "16px", md: "18px" }}
          lineHeight="27px"
          mb="0px"
          position="relative"
          color="black"
          mt="15px"
        >
          Working on the YouTube Summarizer project in the{" "}
          <Chakra.Link
            cursor="none"
            textDecoration="underline"
            target="_blank"
            href="https://hng.tech/internship"
          >
            HNG Internship
          </Chakra.Link>{" "}
          has taught me the critical importance of user-centered design,
          creating actionable tickets, quality market intelligence and
          data-driven decision-making. The experience highlighted the value of
          cross-functional collaboration and agile methodologies in delivering
          high-quality products efficiently. To further grow as a Product
          Manager, I plan to deepen my analytical skills by gaining
          certification in advanced data analysis tools, enhance my leadership
          capabilities through continuous participation in the{" "}
          <Chakra.Link
            cursor="none"
            textDecoration="underline"
            target="_blank"
            href="https://hng.tech/internship"
          >
            HNG Internship
          </Chakra.Link>{" "}
          , and expand my technical knowledge by learning the basics of a
          backend framework. Moreover, I aim to strengthen my understanding of
          UX design principles and strategic planning to create more intuitive
          products and align them effectively with business goals. This
          continuous learning and development will enable me to drive greater
          success in future projects.
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Growth
