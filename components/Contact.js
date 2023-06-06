import bp from "@/styles/breakpoints"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Contact({ setSection, id }) {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-49% 0% -50% 0%" })
  useEffect(
    _ => {
      if (inView) setSection()
    },
    [inView]
  )
  return (
    <div
      id={id}
      ref={ref}
      css={bp({
        margin: [11, 22],
        padding: [11, 22],
        backgroundColor: "#F7F8F7",
        minHeight: "calc(100vh - 88px - 202px)",
      })}>
      <div
        css={bp({
          fontFamily: "DrukSuper",
          fontSize: [50, 60, 70],
          lineHeight: 1,
          textTransform: "uppercase",
          color: "#A7C0CD",
        })}>
        <a css={bp({ display: "block" })} href="mailto:hello@kronung.group">
          hello @ kronung . group
        </a>
        <a css={bp({ display: "block" })} href="tel:+79219501048">
          8 (921) 950-1048
        </a>
      </div>
      <div
        css={bp({
          marginTop: [20, 40],
          fontFamily: "ApercuMonoPro-Medium",
          textTransform: "uppercase",
          fontSize: [11, 12],
          color: "#68686A",
          lineHeight: 1.4,
        })}>
        <p>
          Санкт-Петербург,
          <br />
          Набережная реки Мойки,
          <br />
          75-79Б, офис Kronung
          <br />
          190000
        </p>
        <a target="_blank" href="https://yandex.com/maps/-/CCUwyQbJwD">
          Построить маршрут
        </a>
      </div>
    </div>
  )
}
