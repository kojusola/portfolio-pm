import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"
import Hamburger from "../images/hamburger.inline.svg"
import Cancel from "../images/cancel.inline.svg"

const Header = ({ siteTitle }) => {
  const { isOpen, onOpen, onClose } = Chakra.useDisclosure()
  const firstField = React.useRef()
  return (
    <Chakra.Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingTop="65px"
      px={{ base: "20px", md: "100px" }}
      width="100%"
    >
      <Chakra.Text
        fontFamily="Roboto"
        fontWeight="700"
        fontSize="20px"
        lineHeight="23px"
        mb="0px"
      >
        Adeola
      </Chakra.Text>
      <Chakra.Box
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        maxWidth={{ base: "auto", md: "286px" }}
        w={{ base: "auto", md: "100%" }}
      >
        <Chakra.Box
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
          position="relative"
          color="black"
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
          css={{
            ":hover:before": {
              transform: "scale(1)",
              transformOrigin: "bottom left",
            },
          }}
        >
          Contact me
        </Chakra.Box>
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
          position="relative"
          color="black"
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
          css={{
            ":hover:before": {
              transform: "scale(1)",
              transformOrigin: "bottom left",
            },
          }}
        >
          Projects
        </Chakra.Text>
        <Chakra.Text
          fontFamily="Roboto"
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          mb="0px"
          position="relative"
          color="black"
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
          css={{
            ":hover:before": {
              transform: "scale(1)",
              transformOrigin: "bottom left",
            },
          }}
        >
          My Info
        </Chakra.Text>
      </Chakra.Box>
      <Chakra.Box display={{ base: "flex", md: "none" }} alignItems="center">
        <button onClick={onOpen}>
          <Hamburger />
        </button>
        <Chakra.Drawer
          isOpen={isOpen}
          size="full"
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <Chakra.DrawerOverlay backgroundColor="#000000" />
          <Chakra.DrawerContent
            position="relative"
            backgroundColor="#000000"
            paddingTop="60px"
          >
            <Chakra.Box position="absolute" right="32px">
              <button onClick={onClose}>
                <Cancel />
              </button>
            </Chakra.Box>
            <Chakra.DrawerBody width="auto">
              <Chakra.Box
                paddingTop="101px"
                width="auto"
                display="flex"
                flexDirection="column"
              >
                <Chakra.Box
                  fontFamily="Roboto"
                  fontWeight="700"
                  fontSize="48px"
                  lineHeight="72px"
                  color="white"
                  mb="0px"
                  width="auto"
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    transform: "scale(0)",
                    height: "1px",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "white",
                    transformOrigin: "bottom right ",
                    transition: "transform 0.3s ease-out",
                  }}
                  display="block"
                  opacity={{ base: "1", md: "1" }}
                  transition="opacity 0.5s, color 0.5s"
                  _hover={{
                    color: "white",
                    opacity: "1",
                  }}
                  css={{
                    ":hover:before": {
                      transform: "scale(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  Contact Me
                </Chakra.Box>
                <Chakra.Box
                  fontFamily="Roboto"
                  fontWeight="700"
                  fontSize="48px"
                  lineHeight="72px"
                  color="white"
                  marginTop="32px"
                  width="auto"
                  mb="0px"
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    transform: "scale(0)",
                    height: "1px",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "white",
                    transformOrigin: "bottom right ",
                    transition: "transform 0.3s ease-out",
                  }}
                  display="block"
                  opacity={{ base: "1", md: "1" }}
                  transition="opacity 0.5s, color 0.5s"
                  _hover={{
                    color: "white",
                    opacity: "1",
                  }}
                  css={{
                    ":hover:before": {
                      transform: "scale(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  Projects
                </Chakra.Box>
                <Chakra.Box
                  fontFamily="Roboto"
                  fontWeight="700"
                  fontSize="48px"
                  lineHeight="72px"
                  color="white"
                  marginTop="32px"
                  mb="0px"
                  width="auto"
                  position="relative"
                  _before={{
                    content: '""',
                    position: "absolute",
                    width: "100%",
                    transform: "scale(0)",
                    height: "1px",
                    bottom: "0",
                    right: "0",
                    backgroundColor: "white",
                    transformOrigin: "bottom right ",
                    transition: "transform 0.3s ease-out",
                  }}
                  display="block"
                  opacity={{ base: "1", md: "1" }}
                  transition="opacity 0.5s, color 0.5s"
                  _hover={{
                    color: "white",
                    opacity: "1",
                  }}
                  css={{
                    ":hover:before": {
                      transform: "scale(1)",
                      transformOrigin: "bottom left",
                    },
                  }}
                >
                  My Info
                </Chakra.Box>
              </Chakra.Box>
            </Chakra.DrawerBody>
          </Chakra.DrawerContent>
        </Chakra.Drawer>
      </Chakra.Box>
    </Chakra.Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
