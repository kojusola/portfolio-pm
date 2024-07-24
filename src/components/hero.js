import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import gsap from "gsap"
import { Tween, ScrollTrigger } from "react-gsap"

const Hero = ({ siteTitle }) => {
  return (
    <Chakra.Box
      className="square"
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "64px", md: "164px" }}
    >
      <Chakra.Text
        fontFamily="Roboto"
        fontWeight="700"
        fontSize={{ base: "30px", md: "64px" }}
        lineHeight={{ base: "72px", md: "75px" }}
        mb="0px"
      >
        Product Manager
      </Chakra.Text>
      <Chakra.Box
        width="100%"
        height="auto"
        justifyContent="space-between"
        display="flex"
      >
        <Chakra.Box w="100%" maxW="700px" mt={{ base: "24px", md: "36px" }}>
          <Chakra.Text
            fontFamily="Roboto"
            fontWeight="400"
            fontSize={{ base: "16px", md: "16px" }}
            lineHeight={{ base: "27px", md: "27px" }}
            mb="0px"
          >
            I’m{" "}
            <Chakra.Box as="span" fontWeight="700">
              Adeola Fafemi
            </Chakra.Box>
            , a{" "}
            <Chakra.Box as="span" fontWeight="700">
              Product Manager.
            </Chakra.Box>{" "}
            {/* based in{" "}
            <Chakra.Box as="span" fontWeight="700">
              Lagos, Nigeria.
            </Chakra.Box>{" "} */}
            I am a dedicated and results-driven Product Manager with a passion
            for bringing innovative products to life. My journey in product
            management is marked by a blend of strategic thinking, technical
            expertise, and a commitment to user-centered design. I have two
            years experience creating interactive experiences for amazing people
            using modern frontend frameworks like reactjs and building
            functional web applications. While pursuing my Master's degree in
            management, I honed my leadership, strategic thinking, team
            management, analytical and problem-solving abilities. My
            professional journey began as an Intern Product Manager at HNG
            Internship 11, where I gained hands-on experience in creating
            product require documents (prd) for a boilerplate and
            product(Youtube summarizer), functional requirement document,
            creating tickets for a MVP, user research, feature prioritization,
            and competitive analysis. My expertise includes strategic planning,
            user-centered design, agile methodologies, and market analysis. I
            excel at managing project lifecycles from initiation to user
            adoption and collaborating with cross-functional teams in dynamic
            environments to achieve optimal results that drive product
            excellence and enhance financial profitability.
          </Chakra.Text>
          <Chakra.Box height="80px"></Chakra.Box>
        </Chakra.Box>
        <Chakra.Box
          width="1px"
          backgroundColor="black"
          display={{ base: "none", lg: "flex" }}
        >
          <Tween
            to={{
              yPercent: 200,
              scrollTrigger: {
                trigger: ".square",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.5,
              },
            }}
          >
            <Chakra.Box
              height="180px"
              ml="-1px"
              width="3px"
              backgroundColor="black"
            ></Chakra.Box>
          </Tween>
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Hero
