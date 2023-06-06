import questions from "@/content/faq"
import bp from "@/styles/breakpoints"
import { pointer } from "@/styles/mixins"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function FAQ({ setSection, id }) {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-49% 0% -50% 0%" })
  useEffect(
    _ => {
      if (inView) setSection()
    },
    [inView]
  )
  const [open, setOpen] = useState(0)
  return (
    <div ref={ref} id={id} css={bp({ margin: [11, 22], backgroundColor: "#F7F8F7" })}>
      {questions.map((question, index) => {
        return (
          <div
            onClick={() => {
              setOpen(index)
            }}
            css={bp({
              padding: ["22px 12px", "44px 22px"],
              fontSize: [18, 22],
              borderBottom: index == questions.length - 1 ? "none" : "1px solid #E7E8E7",
              ...pointer,
            })}
            key={index}>
            {question.title}
            {index == open && (
              <div css={bp({ marginTop: 20, fontSize: [14, 15], opacity: 0.4, maxWidth: 1000 })}>
                {question.desc}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
