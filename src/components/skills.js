import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import { Tween, Reveal, ScrollTrigger } from "react-gsap"

const Skills = ({ siteTitle }) => {
  return (
    <Chakra.Box
      className="skills"
      id="skills"
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
              Skills
            </Chakra.Text>
          </Tween>
        </Reveal>
      </Chakra.Box>
      {/* <Chakra.Box maxWidth="865px" width="100%">
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="700"
          fontSize={{ base: "30px", md: "64px" }}
          lineHeight={{ base: "39px", md: "75px" }}
        >
          Send that DM, Let’s work together.
        </Chakra.Text>
      </Chakra.Box> */}
      <Chakra.Box
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        // justifyContent="space-between"
        gap="20px"
        width="100%"
        // overflow="hidden"
        mt="32px"
      >
        <Tween
          from={{
            y: "300px",
            scrollTrigger: {
              trigger: ".skills",
              start: "200px bottom",
              end: "bottom bottom",
              scrub: 0.8,
            },
          }}
          duration={1.5}
          stagger={0.2}
        >
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Team Leadership and Coordination
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Time Management
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Presentation
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Analytics and logical Thinking
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Process Improvement
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Written and Verbal communication
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Linear
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Google Suites
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Office Suite
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Trello
          </Chakra.Box>
          <Chakra.Box
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "18px" }}
            lineHeight="27px"
            mb="0px"
            position="relative"
            color="black"
            mt={{ base: "0px", md: "15px" }}
          >
            Github
          </Chakra.Box>
        </Tween>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Skills
