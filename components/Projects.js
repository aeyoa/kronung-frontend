import bp from "@/styles/breakpoints"
import { absoluteFill, pointer, relative } from "@/styles/mixins"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

import project1 from "/public/img/soln-1.jpg"
import { useEffect, useRef } from "react"

const AnimatedImage = ({ notMobile }) => {
  const { scrollY } = useScroll()
  const ref = useRef()
  const y = useTransform(scrollY, value => {
    const factor = !notMobile ? -15 : -7.5
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      return rect.top / factor
    } else {
      return 0
    }
  })

  // const scale = useTransform(scrollY, value => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect()
  //     return 1.2 - rect.top / 5000
  //   } else {
  //     return 1
  //   }
  // })
  return (
    <div
      ref={ref}
      css={bp({
        margin: ["11px 0px", "22px 11px"],
        height: [300, 600],
        backgroundColor: "#F7F8F7",
        ...relative,
        overflow: "hidden",
      })}>
      <motion.div style={{ y, scale: 1.1 }} css={bp({ ...absoluteFill })}>
        <Image src={project1} fill css={bp({ objectFit: "cover" })} alt="*" />
      </motion.div>
    </div>
  )
}

export default function Projects({ setSection, id, notMobile }) {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-49% 0% -50% 0%" })
  useEffect(
    _ => {
      if (inView) setSection()
    },
    [inView]
  )
  return (
    <div ref={ref} id={id} css={bp({ margin: ["5px 11px", "11px"] })}>
      {/* Main desc */}
      <Link href="/projects/soln-gorod">
        <div
          css={bp({
            margin: [0, 11],
            padding: ["14px 14px", 33],
            backgroundColor: "#F7F8F7",
            display: ["block", "flex"],
            ...pointer,
          })}>
          <h3
            css={bp({
              color: "#A7C0CD",
              fontFamily: "DrukSuper",
              textTransform: "uppercase",
              fontSize: [50, 50, 70],
              lineHeight: 1,
              margin: 0,
              flexBasis: "50%",
            })}>
            Солнечный город
          </h3>
          <p
            css={bp({
              flexBasis: "50%",
              margin: 0,
              marginTop: [16, 0],
              fontSize: 15,
              letterSpacing: "-0.3px",
              lineHeight: "1.5em",
            })}>
            Небольшой одноэтажный торговый центр площадью 5000 м2 в новом, стремительно растущем
            районе Петербурга. Практически идеальная планировка. Якорный арендатор — «Перекресток»
            площадью 1700 м2.{" "}
          </p>
        </div>
      </Link>
      {/* Main Image */}
      <Link href="/projects/soln-gorod">
        <AnimatedImage src={project1} notMobile={notMobile} />
      </Link>
      {/* Two more projects */}
      {/* <div css={bp({ display: ["block", "flex"], alignContent: "flex-start" })}>
        <div
          css={bp({
            margin: [0, "0 11px"],
            flexBasis: "50%",
            padding: [11, 22],
            backgroundColor: "#F7F8F7",
            marginBottom: [11, 0],
            ...pointer,
          })}>
          <h3
            css={bp({
              color: "#A7C0CD",
              fontFamily: "DrukSuper",
              textTransform: "uppercase",
              fontSize: [50, 50, 70],
              lineHeight: 1,
              margin: 0,
            })}>
            Янино
            <br />
            Square
          </h3>
        </div>
        <div
          css={bp({
            margin: [0, "0 11px"],
            flexBasis: "50%",
            padding: [11, 22],
            backgroundColor: "#F7F8F7",
            ...pointer,
          })}>
          <h3
            css={bp({
              color: "#A7C0CD",
              fontFamily: "DrukSuper",
              textTransform: "uppercase",
              fontSize: [50, 50, 70],
              lineHeight: 1,
              margin: 0,
            })}>
            Новый дом
            <br />
            на Новой улице
          </h3>
        </div>
      </div> */}
    </div>
  )
}
