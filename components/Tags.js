import bp from "@/styles/breakpoints"
import { last } from "underscore"
import { motion, AnimatePresence } from "framer-motion"
import { noSelect } from "@/styles/mixins"
import { useEffect, useState } from "react"
import { useScrollIntoView } from "@mantine/hooks"

export default function Tags({ section, show, hide, stickyBottom, notMobile }) {
  const initial = [
    { text: "ВЫБОР ЗЕМЛИ", id: "section-1" },
    { text: "ПРОЕКТИРОВАНИЕ", id: "section-2" },
    { text: "СТРОИТЕЛЬСТВО", id: "section-3" },
    { text: "ПОИСК АРЕНДАТОРОВ", id: "section-4" },
    { text: "ЖИЗНЬ", id: "section-5" },
    { text: "АРГУМЕНТЫ ЗА", id: "section-cards" },
    { text: "ПРОЕКТЫ", id: "section-projects" },
    { text: "ВОПРОСЫ", id: "section-faq" },
    { text: "СВЯЗЬ С НАМИ", id: "section-contact" },
  ]
  // const tags = onlyLast ? last(initial, 4) : initial
  const tags = initial
  const [onlyLast, setOnlyLast] = useState(false)
  useEffect(
    _ => {
      if (section > 5) {
        setOnlyLast(true)
      } else {
        setOnlyLast(false)
      }
    },
    [section]
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? 1 : 0, transition: { duration: 0.1 } }}
      css={bp({ _position: "absolute", top: 22, left: 22, maxWidth: 650, zIndex: 6 })}>
      {/* <Tag show={show} text={"•"} key={0} active={section == 0} position={0} /> */}
      {tags.map((text, index) => (
        <Tag
          index={index}
          show={show && !hide}
          hide={onlyLast && index < 5}
          text={text.text}
          key={index}
          active={index == section - 1}
          id={text.id}
          stickyBottom={stickyBottom}
          notMobile={notMobile}
        />
      ))}
    </motion.div>
  )
}

function Tag({ text, active, show, index, hide, id, notMobile, stickyBottom }) {
  const scrollToSection = () => {
    const fromTop = notMobile ? 190 : index < 5 ? 480 : 156
    const offset =
      document.getElementById(id).getBoundingClientRect().top + window.scrollY - fromTop
    window.scrollTo({ top: offset, behavior: "smooth" })
  }
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          whileHover={{
            backgroundColor: "rgba(255,255,255,1)",
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.09), 0 0 26px 0 rgba(137,131,131,0.09)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{
            opacity: 0,
            y: 5,
            backgroundColor: "rgba(255,255,255,0.5)",
            color: "#69696B",
            boxShadow: "none",
          }}
          // style={{

          // }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: index * 0.03, duration: 0.3 },
            backgroundColor: active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
            color: active ? "#3891B2" : "#69696B",
            boxShadow: active
              ? "0 1px 3px 0 rgba(0,0,0,0.09), 0 0 26px 0 rgba(137,131,131,0.09)"
              : "",
          }}
          exit={{
            opacity: 0,
            y: 0,
            transition: { delay: (10 - index) * 0.02, duration: 0.2 },
          }}
          onClick={() => {
            scrollToSection()
          }}
          css={bp({
            ...noSelect,
            fontFamily: "ApercuMonoPro-Medium",
            textTransform: "uppercase",
            fontSize: [11, 12],
            display: hide ? "none" : "inline-block",
            padding: ["10px 9px 9px", "10px 13px 9px"],
            margin: "0 5px 5px 0",
            borderRadius: 2,
            cursor: "pointer",
          })}>
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
