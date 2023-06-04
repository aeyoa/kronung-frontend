import bp from "@/styles/breakpoints"
import { absoluteFill, relative } from "@/styles/mixins"
import Image from "next/image"
import { motion, useInView, useScroll, useTransform } from "framer-motion"

import project1 from "/public/img/project-1.jpg"
import { useEffect, useRef } from "react"

const AnimatedImage = () => {
  const { scrollY } = useScroll()
  const ref = useRef()
  const y = useTransform(scrollY, value => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      return rect.top / -7.5
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
        margin: "22px 11px",
        height: [250, 600],
        backgroundColor: "#F7F8F7",
        ...relative,
        overflow: "hidden",
      })}>
      <motion.div style={{ y }} css={bp({ ...absoluteFill })}>
        <Image src={project1} fill css={bp({ objectFit: "cover" })} alt="*" />
      </motion.div>
    </div>
  )
}

export default function Projects({ setSection, id }) {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-49% 0% -50% 0%" })
  useEffect(
    _ => {
      if (inView) setSection()
    },
    [inView]
  )
  return (
    <div ref={ref} id={id} css={bp({ margin: "11px" })}>
      {/* Main desc */}
      <div
        css={bp({
          margin: 11,
          padding: 33,
          backgroundColor: "#F7F8F7",
          display: ["block", "flex"],
        })}>
        <h3
          css={bp({
            color: "#A7C0CD",
            fontFamily: "DrukSuper",
            textTransform: "uppercase",
            fontSize: [50, 50, 70],
            lineHeight: 0.8,
            margin: 0,

            flexBasis: "50%",
          })}>
          Солнечный
          <br />
          город
        </h3>
        <p
          css={bp({
            flexBasis: "50%",
          })}>
          Большой ТЦ в новом районе в поселке Горелово. Это будет целый кластер объектов с классной
          парковой территорией, детскими площадками, ресторанами и кафе. Запуск запланирован на 2024
          год. Вокруг строится жилье объемом 20000 человек, так что Сосновая площадь станет
          локальным местом притяжения. Проект доступен для инвестиций.{" "}
        </p>
      </div>
      {/* Main Image */}
      <AnimatedImage src={project1} />
      {/* Two more projects */}
      <div css={bp({ display: "flex", alignContent: "flex-start" })}>
        <div
          css={bp({
            margin: "0 11px",
            flexBasis: "50%",
            padding: 22,
            backgroundColor: "#F7F8F7",
          })}>
          <h3
            css={bp({
              color: "#A7C0CD",
              fontFamily: "DrukSuper",
              textTransform: "uppercase",
              fontSize: [50, 50, 70],
              lineHeight: 0.8,
              margin: 0,
            })}>
            Янино
            <br />
            Square
          </h3>
        </div>
        <div
          css={bp({
            margin: "0 11px",
            flexBasis: "50%",
            padding: 22,
            backgroundColor: "#F7F8F7",
          })}>
          <h3
            css={bp({
              color: "#A7C0CD",
              fontFamily: "DrukSuper",
              textTransform: "uppercase",
              fontSize: [50, 50, 70],
              lineHeight: 0.8,
              margin: 0,
            })}>
            Новый дом
            <br />
            на Новой улице
          </h3>
        </div>
      </div>
    </div>
  )
}
