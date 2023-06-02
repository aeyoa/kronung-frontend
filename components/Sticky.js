import { sections } from "@/content/homepage"
import bp from "@/styles/breakpoints"
import { useViewportSize } from "@mantine/hooks"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const ASPECT_RATIO = 0.64
const TABLET = 640
const COLUMN_WIDTH = 0.7

export default function Sticky({ setStickyBottom, section }) {
  const { width, height } = useViewportSize()
  const ref = useRef()
  useEffect(() => {
    setStickyBottom(
      ref.current.getBoundingClientRect().top +
        window.scrollY +
        ref.current.getBoundingClientRect().height
    )
  }, [width])
  let w, h, top
  if (width < TABLET) {
    w = width
    h = w * ASPECT_RATIO
    top = 240
  } else {
    const areaWidth = width * COLUMN_WIDTH - 88
    const areaHeight = height - 88 - 22 - 44
    if (areaHeight / areaWidth > ASPECT_RATIO) {
      /* Fits vertically */
      w = areaWidth
      h = w * ASPECT_RATIO
      top = height - h - 44
    } else {
      /* Doesnt fit */
      h = areaHeight
      w = h / ASPECT_RATIO
      top = height - h - 44
    }
  }

  let index = 0
  if (section >= 0 && section < 6) {
    index = section
  } else {
    index = 5
  }

  return (
    <>
      <div
        css={bp({
          zIndex: 6,
          // This should be calculated
          marginTop: [0, 200],
          position: "sticky",
          // height: "calc(100vw * 0.7 * 0.64)",
          // top: [250, "calc(100vh - (100vw * 0.7 * 0.64))"],
          marginLeft: "auto",
          marginRight: "auto",
          height: h,
          width: w,
          top,
        })}>
        <Image
          src={sections[index].image}
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            bottom: 0,
          }}
          alt="*"
        />
      </div>
      {/* To calculate bottom of sticky */}
      <div ref={ref} css={bp({ height: 1, _backgroundColor: "red" })}></div>
    </>
  )
}
