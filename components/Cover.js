import { cover } from "@/content/homepage"
import bp from "@/styles/breakpoints"
import { primaryColor, relative } from "@/styles/mixins"
import { AnimatePresence, useInView, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInterval } from "@mantine/hooks"

const Title = () => {
  const titles = [
    "Зарабатываем для вас деньги",
    "Проектируем и строим здания",
    "Строительный инвестфонд",
  ]
  const [focus, setFocus] = useState(0)
  // const interval = useInterval(() => setFocus(s => s + 1), 3000)

  // useEffect(() => {
  //   interval.start()
  //   return interval.stop
  // }, [])
  const first = titles[(0 + focus) % 3]
  const second = titles[(1 + focus) % 3]
  const third = titles[(2 + focus) % 3]
  return (
    <div
      onClick={() => {
        setFocus(focus + 1)
      }}
      css={bp({ position: "absolute", width: "100%", top: 0, _overflow: "hidden" })}>
      <AnimatePresence initial={false}>
        <motion.div
          key={first}
          transition={{ duration: 0.8, type: "tween", ease: [0.8, 0, 0.2, 1], delay: 0 }}
          style={{ position: "absolute" }}
          initial={{ y: "100%", opacity: 0.2 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}>
          {first}
        </motion.div>
        <motion.div
          key={second}
          transition={{ duration: 0.8, type: "tween", ease: [0.8, 0, 0.2, 1], delay: 0.05 }}
          style={{ position: "absolute" }}
          initial={{ y: "200%", opacity: 0 }}
          animate={{ y: "100%", opacity: 0.2 }}
          exit={{ y: "0%", opacity: 1 }}>
          {second}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Cover({ setShowTagsOnDesktop, setShowTagsOnMobile }) {
  // const imageRef = useRef()
  // const imageInView = useInView(imageRef, { margin: "-88px 0px 0px 0px" })
  // useEffect(
  //   _ => {
  //     setShowTagsOnDesktop(!imageInView)
  //   },
  //   [imageInView]
  // )

  const ref = useRef()
  const inView = useInView(ref, { margin: "-88px 0px 0px 0px" })
  useEffect(
    _ => {
      setShowTagsOnDesktop(!inView)
      setShowTagsOnMobile(!inView)
    },
    [inView]
  )
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 75], { clamp: true })
  const opacity = useTransform(scrollY, [20, 100], [1, 0.75], { clamp: false })
  // const scale = useTransform(scrollY, [0, 1000], [1, 1.02], { clamp: true })
  return (
    <div
      ref={ref}
      css={bp({ ...relative, zIndex: 8, padding: ["11px 18px", "22px 33px"], marginBottom: 0 })}>
      <div css={bp({ display: "flex", flexWrap: "wrap", marginBottom: 20 })}>
        <div css={bp({ padding: "0 11px", width: ["100%", "50%"], textAlign: "justify" })}>
          <motion.h1
            style={{ opacity }}
            css={bp({
              textAlign: "left",
              fontFamily: "DrukSuper",
              color: primaryColor,
              fontSize: [60, 110],
              lineHeight: 0.9,
              margin: 0,
              margin: ["11px 0", "22px 11px"],
              // overflow: "hidden",
              textTransform: "uppercase",
              ...relative,
              display: "block",
            })}>
            <div css={bp({ opacity: 0 })}>Зарабатываем для вас деньги</div>
            <Title />
          </motion.h1>
        </div>
        <div
          css={bp({
            display: ["none", "block"],
            padding: "11px 11px",
            width: ["100%", "50%"],
            _textAlign: "justify",
            fontSize: [15],
            lineHeight: [1.4, 1.75],
          })}>
          <div>{cover.left}</div>
          <div css={bp({ marginTop: [20] })}>{cover.right}</div>
        </div>
      </div>
      <motion.div style={{}} css={bp({ ...relative, marginTop: [-20, -100] })}>
        <Image src={cover.image} style={{ width: "100%", height: "auto" }} alt=""></Image>
      </motion.div>
      <div
        css={bp({
          display: ["block", "none"],
          padding: ["25px 11px", "0 11px"],
          width: ["100%", "50%"],
          _textAlign: "justify",
          fontSize: [15],
          lineHeight: [1.4, 1.75],
        })}>
        <div>{cover.left}</div>
        <div css={bp({ marginTop: [20] })}>{cover.right}</div>
      </div>
    </div>
  )
}
