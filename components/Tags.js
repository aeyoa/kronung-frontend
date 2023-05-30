import bp from "@/styles/breakpoints"
import { last } from "underscore"
import { motion, AnimatePresence } from "framer-motion"
import { noSelect } from "@/styles/mixins"

export default function Tags({ onlyLast, section, show }) {
  const initial = [
    { text: "ВСТУПЛЕНИЕ", position: 0 },
    { text: "ВЫБОР ЗЕМЛИ", position: 0 },
    { text: "ПРОЕКТИРОВАНИЕ", position: 1050 },
    { text: "СТРОИТЕЛЬСТВО", position: 2150 },
    { text: "ЗАСЕЛЕНИЕ", position: 0 },
    { text: "ЖИЗНЬ", position: 0 },
    { text: "АРГУМЕНТЫ ЗА", position: 0 },
    { text: "ПРОЕКТЫ", position: 0 },
    { text: "ВОПРОСЫ", position: 0 },
    { text: "СВЯЗЬ С НАМИ", position: 0 },
  ]
  const tags = onlyLast ? last(initial, 4) : initial
  // const tags = initial

  return (
    <div css={bp({ _position: "absolute", top: 25, left: 25, maxWidth: 680, zIndex: 6 })}>
      {/* <Tag show={show} text={"•"} key={0} active={section == 0} position={0} /> */}
      {tags.map((text, index) => (
        <Tag
          index={index}
          show={show}
          text={text.text}
          key={index}
          active={index == section}
          position={text.position}
        />
      ))}
    </div>
  )
}

function Tag({ text, active, position, show, index }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          whileHover={{
            backgroundColor: "rgba(255,255,255,1)",
            boxShadow: "0 1px 3px 0 rgba(0,0,0,0.09), 0 0 26px 0 rgba(137,131,131,0.09)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0, transition: { delay: index * 0.03, duration: 0.3 } }}
          exit={{
            opacity: 0,
            y: 0,
            transition: { delay: (10 - index) * 0.02, duration: 0.2 },
          }}
          onClick={() => {
            // window.scrollTo({ top: position, behavior: "smooth" })
          }}
          css={bp({
            ...noSelect,
            fontFamily: "ApercuMonoPro-Medium",
            display: "inline-block",
            textTransform: "uppercase",
            fontSize: 12,
            padding: "10px 13px 9px",
            backgroundColor: active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
            margin: "0 5px 5px 0",
            borderRadius: 2,
            color: active ? "#3891B2" : "#69696B",
            cursor: "pointer",
            boxShadow: active
              ? "0 1px 3px 0 rgba(0,0,0,0.09), 0 0 26px 0 rgba(137,131,131,0.09)"
              : "",
          })}>
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
