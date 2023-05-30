import { useInView } from "framer-motion"
import { useEffect } from "react"

export default function Sensor({ height, contentRef, setHits }) {
  // if (height == 0) return <div></div>
  const hits = useInView(contentRef, {
    margin: `0px 0px -85% 0px`,
  })
  useEffect(() => {
    setHits(hits)
  }, [hits])
  return <div></div>
}
