import { sections } from "@/content/homepage"
import bp from "@/styles/breakpoints"
import { useViewportSize } from "@mantine/hooks"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"

import kron1 from "/public/img/kron1.png"
import kron2 from "/public/img/kron2.png"
import kron3 from "/public/img/kron3.png"
import kron4 from "/public/img/kron4.png"
import kron5 from "/public/img/kron5.png"
import { absoluteFill } from "@/styles/mixins"

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
    top = 210
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

  const controls = useAnimationControls()
  useEffect(() => {
    // controls.start({
    //   scale: 1,
    //   rotate: 0,
    //   transition: {
    //     scale: { type: "spring", velocity: 5, stiffness: 2000, damping: 30 },
    //     rotate: { type: "spring", velocity: 75, stiffness: 500, damping: 10 },
    //   },
    // })
    // if (section > 1 && section < 6) {
    //   controls.start({
    //     scale: 1,
    //     transition: {
    //       type: "spring",
    //       velocity: -3,
    //       stiffness: 750,
    //       damping: 50,
    //     },
    //   })
    // }
  }, [section])

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
        {/* <Image
          src={sections[index].image}
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            bottom: 0,
          }}
          alt="*"
        /> */}
        <motion.div animate={controls} css={bp({ ...absoluteFill, left: 0, right: 0, bottom: 0 })}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ transition: { duration: 0.01 }, opacity: section <= 1 ? 1 : 0 }}>
            <Image
              alt="*"
              src={kron1}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ transition: { duration: 0.01 }, opacity: section == 2 ? 1 : 0 }}>
            <Image
              alt="*"
              src={kron2}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ transition: { duration: 0.01 }, opacity: section == 3 ? 1 : 0 }}>
            <Image
              alt="*"
              src={kron3}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ transition: { duration: 0.01 }, opacity: section == 4 ? 1 : 0 }}>
            <Image
              alt="*"
              src={kron4}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ transition: { duration: 0.01 }, opacity: section >= 5 ? 1 : 0 }}>
            <Image
              alt="*"
              src={kron5}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
        </motion.div>
      </div>
      {/* To calculate bottom of sticky */}
      <div ref={ref} css={bp({ height: 1, _backgroundColor: "red" })}></div>
    </>
  )
}
