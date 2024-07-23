import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as Chakra from "@chakra-ui/react"

const CustomCursor = ({ siteTitle }) => {
  const cursorRef = React.useRef(null)
  React.useEffect(() => {
    document.addEventListener("mousemove", event => {
      const { clientX, clientY } = event

      const mouseX = clientX - cursorRef.current.clientWidth / 2
      const mouseY = clientY - cursorRef.current.clientHeight / 2
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}PX, 0)`
    })

    return () => {}
  }, [])
  return (
    <Chakra.Box
      ref={cursorRef}
      position="fixed"
      zIndex="1000"
      borderRadius="50%"
      width="15px"
      height="15px"
      backgroundColor="black"
      border="1px solid black"
      pointerEvents="none"
      overflow="hidden"
      transform="translate3d(0, 0,0)"
      display={{ base: "none", lg: "flex" }}
    ></Chakra.Box>
  )
}

export default CustomCursor
