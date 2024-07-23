import React from "react"
import useMouse from "@react-hook/mouse-position"
import gsap from "gsap"
import { CssTransition } from "./css-transition"
import { useAnimatableLayoutEffect } from "./use-animatable-layout-effect"

const CursorContext = React.createContext({
  setCursor: () => null,
  currentCursor: {
    cursor: null,
    method: "follow",
  },
})

export const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = React.useState({ cursor: null, method: "follow" })

  const mouseContainerRef = React.useRef(null)
  const customCursorRef = React.useRef(null)
  const mouse = useMouse(mouseContainerRef, {
    enterDelay: 100,
    leaveDelay: 100,
  })

  useAnimatableLayoutEffect(() => {
    if (mouseContainerRef?.current && customCursorRef?.current) {
      if (mouse?.x && mouse?.y) {
        gsap.to(customCursorRef.current, {
          duration: cursor.method === "follow" ? 0.3 : 0.2,
          opacity: 1,
          translateX:
            cursor.method === "follow"
              ? `${(mouse.clientX ? mouse.clientX : 0) + 30}px`
              : `${mouse.clientX}px`,
          translateY:
            cursor.method === "follow"
              ? `${(mouse.clientY ? mouse.clientY : 0) - 30}px`
              : `${mouse.clientY}px`,
        })
      }
    }
  }, [mouse])

  return (
    <CursorContext.Provider
      value={{
        setCursor,
        currentCursor: cursor,
      }}
    >
      <div
        ref={mouseContainerRef}
        style={{ cursor: cursor.method === "follow" ? undefined : "none" }}
      >
        {children}
        <div
          className="fixed pointer-events-none 767:hidden z-100 text-white top-0 left-0 flex items-center justify-center"
          position="fixed"
          zIndex="100"
          color="white"
          top="0"
          left="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          pointerEvents="none"
          ref={customCursorRef}
        >
          <CssTransition
            shouldChange={cursor.cursor ? "true" : "false"}
            transition="scale-down-center-scale-up-center"
          >
            {cursor.cursor ? (
              cursor.cursor
            ) : (
              <div
                className="relative rounded-full bg-[#a4805b]"
                position="relative"
                borderRadius="6px"
                backgroundColor="#a4805b"
                style={{ padding: "6px" }}
              />
            )}
          </CssTransition>
        </div>
      </div>
    </CursorContext.Provider>
  )
}

export const CustomCursorArea = ({ children, cursor, method, ...props }) => {
  const context = React.useContext(CursorContext)

  return (
    <div
      onMouseEnter={e => {
        e.preventDefault()
        e.stopPropagation()
        context.setCursor({ cursor, method })
      }}
      onMouseLeave={e => {
        e.preventDefault()
        e.stopPropagation()
        context.setCursor({ cursor: null, method: "follow" })
      }}
      {...props}
    >
      {children}
    </div>
  )
}
