import { addNbsp } from "@/lib/helpers"
import bp from "@/styles/breakpoints"
import { absoluteFill, relative } from "@/styles/mixins"
import { motion, useInView } from "framer-motion"

import { useEffect, useRef, useState } from "react"

const AnimatedWord = ({ children, transparent, inView, order, show }) => {
  return (
    <div
      css={bp({
        fontFamily: "DrukSuper",
        textTransform: "uppercase",
        fontSize: [50, 50, 70],
        lineHeight: 0.8,
        color: "#3C95B6",
        opacity: transparent || !show ? 0.2 : 1,
      })}>
      <div css={bp({ ...relative, overflow: "hidden" })}>
        <div css={bp({ opacity: 0 })}>{children}</div>
        <motion.div
          animate={{
            y: inView ? 0 : "50%",
            opacity: inView ? 1 : 0,
            transition: { type: "tween", duration: 0.25, delay: order * 0.05 },
          }}
          css={bp({ position: "absolute", top: 0 })}>
          {children}
        </motion.div>
      </div>
    </div>
  )
}

const Title = ({ number, text, show }) => {
  const words = text.split(" ")
  const ref = useRef()
  const inView = useInView(ref, { amount: 0.5 })
  // const inView = true

  return (
    <div ref={ref}>
      <AnimatedWord transparent inView={true} order={0}>
        {number}
      </AnimatedWord>
      {words.map((word, index) => {
        return (
          <AnimatedWord inView={true} key={index} order={1 + index} show={true}>
            {word}
          </AnimatedWord>
        )
      })}
    </div>
  )
}

const Section = ({ index, notMobile, section, setSection, active }) => {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-50% 0% -49% 0%" })
  useEffect(() => {
    if (inView) {
      setSection(index)
    }
  }, [inView])
  return (
    <div
      id={`section-${index}`}
      ref={ref}
      key={index}
      css={bp({
        ...relative,
        // zIndex: index == 0 ? 6 : 0,
        display: "flex",
        padding: ["0 22px 40px 22px", "0 22px 70px 44px"],
        // marginBottom: notMobile ? 0 : ,
      })}>
      <div css={bp({ fontSize: [15], lineHeight: 1.4 })}>
        <Title number={"0" + (index + 1)} text={section.title} show={active} />
        {section.blocks.map((block, index) => (
          <p css={bp({ marginTop: 20, marginBottom: 20 })} key={index}>
            {addNbsp(block)}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Section
