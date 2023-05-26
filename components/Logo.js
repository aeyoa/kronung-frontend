import bp from "@/styles/breakpoints"
import { centerWithAbsolute, relative } from "@/styles/mixins"
import { useMeasure } from "@react-hookz/web"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Logo(props) {
  const [mes, ref] = useMeasure()
  const [p, setP] = useState(40)
  useEffect(() => {
    if (mes) {
      setP((mes.width - 60) / 6)
    }
  }, [mes])
  // if (p == 40) return <div></div>
  return (
    <div
      css={bp({
        height: 88,
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: "#fff",
      })}>
      <div
        ref={ref}
        css={bp({
          position: "absolute",
          left: props.fullwidth ? 22 : 470,
          right: 22,
          top: 0,
          bottom: 0,
        })}>
        <Letter l="K" x={p * -6} />
        <Letter l="R" x={p * -5} />
        <Letter l="O" x={p * -4} />
        <Letter l="N" x={p * -3} />
        <Letter l="U" x={p * -2} />
        <Letter l="N" x={p * -1} />
        <Letter l="G" x={p * -0} />
      </div>
    </div>
  )
}

function Letter({ x, l }) {
  return (
    <motion.div
      initial={{ y: -20, x: x - 6 }}
      animate={{ x: x - 6 }}
      transition={{ type: "tween", duration: 0.5 }}
      css={bp({
        width: 25,
        height: 40,
        position: "absolute",
        // ...centerWithAbsolute,
        top: 44,
        right: 10,
      })}>
      <img
        css={bp({ margin: "auto", display: "block", ...relative, top: 4 })}
        src={`/img/${l}.svg`}
      />
    </motion.div>
  )
}
