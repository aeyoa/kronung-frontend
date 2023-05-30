import bp from "@/styles/breakpoints"
import { absoluteFill, relative } from "@/styles/mixins"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const Section = ({ index, notMobile, section, setSection }) => {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-45% 0% -45% 0%" })
  useEffect(() => {
    if (inView) {
      setSection(index)
    }
  }, [inView])
  return (
    <div
      ref={ref}
      key={index}
      css={bp({
        ...relative,
        zIndex: index == 0 ? 6 : 0,
        display: "flex",
        padding: 44,
        marginBottom: notMobile ? 0 : index == 0 ? "64%" : 0,
      })}>
      <div css={bp({})}>
        <div>{index}</div>
        {section.blocks.map((block, index) => (
          <p key={index}>{block}</p>
        ))}
      </div>
    </div>
  )
}

export default Section
