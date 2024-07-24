import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import gsap from "gsap"
import { Tween, Reveal, ScrollTrigger } from "react-gsap"
import EyeImage from "../images/red-eye-image.png"

const Projects = ({ siteTitle }) => {
  const [flag, setFlag] = Chakra.useBoolean()
  const [leave, setLeave] = React.useState(false)
  const ref = React.useRef([])
  ref.current = []
  const addToRefs = el => {
    if (!ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  React.useEffect(() => {
    ref.current.forEach(
      el => {
        const image = el.querySelector("img")
        const text = el.querySelector("p")

        el.addEventListener("mouseenter", e => {
          gsap.to(image, { autoAlpha: 1 })
        })

        el.addEventListener("mouseleave", e => {
          gsap.to(image, { autoAlpha: 0 })
        })

        el.addEventListener("mousemove", e => {
          gsap.set(image, { x: e.offsetX - 200 })
        })
      },
      [ref]
    )
  })

  const Projects = [
    {
      name: "Market Intelligence Report",
      technologies: ["Google Docs"],
      description: `Market Intelligence report is a comprehensive analyses that provides detailed information about a specific market or industry`,
      whatWasDone: `I created a market intelligence report on a youtube summarizer which includes competitor analysis, value proposition, marketing channels, customer personas etc.`,
      links: [
        {
          name: "Analysis",
          link: "https://docs.google.com/document/d/1oyL3aa5NrcVA-uhqoaoR-3th3IuXVe0tigrvQCZuZgk/edit?usp=sharing",
        },
      ],
    },
    {
      name: "Boilerplate",
      technologies: ["Figma", "Google Docs", "Linear", "Excel"],
      description: `Boilerplate is a particular project stacks that show simple, secure and efficient ways of achieving common things that one tends to need to do in those stacks.`,
      whatWasDone: `I collaborated with a team to develop a product requirements document for the boilerplate and created actionable tickets for developers. Additionally, managed the developers to bring the boilerplate to fruition.`,
      links: [
        {
          name: "Prd",
          link: "https://docs.google.com/document/d/10DxsfZY4Tc75545NYkkkWcvbst9EqfgpQZ9XmVQIiIE/edit?usp=sharing",
        },
        {
          name: "Github",
          link: "https://github.com/hngprojects/hng_boilerplate_java_web",
        },
        {
          name: "Tickets",
          link: "https://docs.google.com/spreadsheets/d/11L_vkTrrlbRIDeuDdBjiiO6kuQZq3-SGap2BRyOvrHE/edit?usp=sharing",
        },
      ],
    },
    {
      name: "Youtube Summarizer",
      technologies: ["Figma", "Google Docs", "Linear", "Excel"],
      description: `It is an AI-powered application that provides concise summaries of long or short videos, capturing the main points without the need to watch the entire video. `,
      whatWasDone: `I collaborated with a team to develop a product requirements document and functional requirements documents for the YouTube Summarizer application and created actionable tickets for the developers. Additionally, I managed designers to create the application's designs.`,
      links: [
        {
          name: "Prd",
          link: "https://docs.google.com/document/d/1ihWIvazUbs3dTFmx3GgJbfQrgDUgePX6zNEtmS2qzwA/edit?usp=sharing",
        },
        {
          name: "Frd",
          link: "https://docs.google.com/document/d/18Vo3KU0rbxlT20GZUOyCExKb7n1xv22bzXTG5_l4zQI/edit",
        },
        {
          name: "Tickets",
          link: "https://docs.google.com/spreadsheets/d/1SVVPfZYThMz1Akb4eLxvB6_BhweJvH3cr_McHTbiPLQ/edit?usp=sharing",
        },
        {
          name: "Figma",
          link: "https://www.figma.com/design/w6ecEJFoSnclA7u3chIOEd/Team-YouTube-Transcriber?node-id=1256-22904&t=CDr2dFaRVrNOEXx0-1",
        },
      ],
    },
  ]
  return (
    <Chakra.Box
      className="projectTop"
      id="projects"
      px={{ base: "20px", md: "100px" }}
      pt={{ base: "30px", md: "111px" }}
    >
      <Chakra.Box width="auto" height="75px">
        <Reveal repeat>
          <Tween from={{ opacity: 0, x: -100 }} duration={2}>
            <Chakra.Text
              fontFamily="Roboto"
              fontWeight="700"
              fontSize={{ base: "35px", md: "64px" }}
              lineHeight="75px"
              color="#E5E5E5"
              whiteSpace="nowrap"
              mb={{ base: "40px", md: "48px" }}
            >
              Selected Projects
            </Chakra.Text>
          </Tween>
        </Reveal>
      </Chakra.Box>
      <Chakra.Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        className="project"
        height="auto"
        mt={{ base: "20px", md: "40px" }}
      >
        <Chakra.Box maxWidth="700px" with="100%">
          {Projects &&
            Projects.map(
              (
                { name, technologies, description, whatWasDone, links },
                idx
              ) => {
                return (
                  <Chakra.Box
                    key={idx}
                    mb="48px"
                    position="relative"
                    // ref={addToRefs}
                    role="group"
                  >
                    <Chakra.Image
                      src={EyeImage}
                      position="absolute"
                      width="300px"
                      height="300px"
                      object-fit="cover"
                      transform="translateX(-50%) translateY(-50%)"
                      top="25%"
                      left="25%"
                      zIndex="-10"
                      opacity="0"
                      visibility="hidden"
                      pointerEvents="none"
                    />
                    <Chakra.Box height="42px" mb="16px" overflow="hidden">
                      <Chakra.Box
                      // transform={flag ? "translateY(58px)" : "translateY(0px)"}
                      // transition="all 300ms ease-in-out"
                      // _hover={{
                      //   transform: "translateY(-58px)",
                      //   transition: "all 300ms ease-in-out",
                      //   filter: "grayScale(1)",
                      // }}
                      // _hover={{
                      //   transform: ` ${
                      //     leave ? "translateY(58px)" : "translateY(0px)"
                      //   }`,
                      //   transition: leave ? "all 300ms ease-in-out" : "",
                      //   filter: "grayScale(1)",
                      // // }}
                      // onMouseEnter={setFlag.on}
                      // onMouseLeave={setFlag.off}
                      >
                        <Chakra.Text
                          fontFamily="Roboto"
                          fontWeight="700"
                          fontSize="36px"
                          lineHeight="42px"
                          mb="16px"
                          // _groupHover={{
                          //   color: "white",
                          //   backdropFilter: "blur(10px)",
                          //   opacity: "0.5",
                          // }}
                        >
                          {name}
                        </Chakra.Text>
                        <Chakra.Text
                          fontFamily="Roboto"
                          fontWeight="700"
                          fontSize="36px"
                          lineHeight="42px"
                        >
                          {name}
                        </Chakra.Text>
                      </Chakra.Box>
                    </Chakra.Box>
                    <Chakra.Box
                      display="flex"
                      maxWidth="405px"
                      width="100%"
                      mb="16px"
                    >
                      {technologies &&
                        technologies.map(each => {
                          return (
                            <Chakra.Text
                              key={each}
                              fontFamily="Roboto"
                              fontSize="16px"
                              lineHeight="27px"
                              color="#E5E5E5"
                              mb="0px"
                              mr="16px"
                            >
                              {each}
                            </Chakra.Text>
                          )
                        })}
                    </Chakra.Box>
                    <Chakra.Box width="100%" maxWidth="547px">
                      <Chakra.Text
                        fontFamily="Roboto"
                        fontSize="16px"
                        lineHeight="27px"
                        mb="0px"
                        color="#525252"
                      >
                        {description}
                      </Chakra.Text>
                      <Chakra.Text
                        fontFamily="Roboto"
                        fontSize="16px"
                        lineHeight="27px"
                        mb="0px"
                        color="#525252"
                      >
                        {whatWasDone}
                      </Chakra.Text>
                    </Chakra.Box>
                    <Chakra.Box
                      display="flex"
                      maxWidth="405px"
                      width="100%"
                      mt="16px"
                    >
                      {links &&
                        links.map(each => {
                          return (
                            <Chakra.Link
                              fontFamily="Roboto"
                              fontWeight="400"
                              fontSize="16px"
                              lineHeight="21px"
                              cursor="none"
                              mr="16px"
                              mb="0px"
                              position="relative"
                              color="black"
                              href={each.link}
                              target="_blank"
                              _before={{
                                content: '""',
                                position: "absolute",
                                width: "100%",
                                transform: "scale(0)",
                                height: "1px",
                                bottom: "0",
                                right: "0",
                                backgroundColor: "black",
                                transformOrigin: "bottom right ",
                                transition: "transform 0.3s ease-out",
                              }}
                              display="block"
                              opacity={{ base: "1", md: "1" }}
                              transition="opacity 0.5s, color 0.5s"
                              _hover={{
                                color: "black",
                                opacity: "1",
                              }}
                              _focus={{ boxShadow: "none" }}
                              css={{
                                ":hover:before": {
                                  transform: "scale(1)",
                                  transformOrigin: "bottom left",
                                },
                              }}
                            >
                              {each.name}
                            </Chakra.Link>
                          )
                        })}
                    </Chakra.Box>
                  </Chakra.Box>
                )
              }
            )}
        </Chakra.Box>
        <Chakra.Box
          width="1px"
          backgroundColor="black"
          display={{ base: "none", lg: "flex" }}
        >
          <Tween
            to={{
              yPercent: 450,
              scrollTrigger: {
                trigger: ".project",
                start: "top top",
                end: "bottom bottom",
                scrub: 0.7,
              },
            }}
          >
            <Chakra.Box
              height="200px"
              ml="-1px"
              width="3px"
              backgroundColor="black"
            ></Chakra.Box>
          </Tween>
        </Chakra.Box>
        {/* <Tween
          to={{
            yPercent: 120,
            scrollTrigger: {
              trigger: ".project",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.7,
            },
          }}
        >
          <Chakra.Box
            height="400px"
            width="1px"
            backgroundColor="black"
            display={{ base: "none", lg: "flex" }}
          >
            <Tween
              to={{
                yPercent: 300,
                scrollTrigger: {
                  trigger: ".project",
                  start: "top top",
                  end: "bottom bottom",
                  scrub: 0.5,
                },
              }}
            >
              <Chakra.Box
                height="100px"
                ml="-1px"
                width="3px"
                backgroundColor="black"
              ></Chakra.Box>
            </Tween>
          </Chakra.Box>
        </Tween> */}
      </Chakra.Box>
    </Chakra.Box>
  )
}

export default Projects
