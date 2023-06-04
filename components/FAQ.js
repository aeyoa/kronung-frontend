import questions from "@/content/faq"
import bp from "@/styles/breakpoints"
import { useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export default function FAQ({ setSection, id }) {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-49% 0% -50% 0%" })
  useEffect(
    _ => {
      if (inView) setSection()
    },
    [inView]
  )
  return (
    <div ref={ref} id={id} css={bp({ margin: 22, backgroundColor: "#F7F8F7" })}>
      {questions.map((question, index) => {
        return (
          <div css={bp({ padding: 44, borderBottom: "1px solid #E7E8E7" })} key={index}>
            {question.title}
          </div>
        )
      })}
    </div>
  )
}
