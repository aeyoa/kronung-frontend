import bp from "@/styles/breakpoints"
import Vector from "./Vector"
import { boxPadding } from "@/styles/mixins"
import { useViewportSize } from "@mantine/hooks"
import { useEffect, useState } from "react"
import Vertical from "./Vertical"

export default function Floorplan(params) {
  const { width: viewportWidth, height: viewportHeight } = useViewportSize()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(
    _ => {
      const horizontal = viewportWidth > viewportHeight
      if (horizontal) {
      }
    },
    [viewportWidth, viewportHeight]
  )
  return (
    <div css={bp({ margin: ["0 5px", "0 11px"] })}>
      <div css={bp({ ...boxPadding })}>
        <div css={bp({ backgroundColor: "#F7F8F7", padding: [14, 28] })}>
          <div
            css={bp({
              fontSize: [17, 22],

              display: "flex",
              justifyContent: "space-between",
            })}>
            Планировка ТЦ
          </div>
          <div
            css={bp({
              paddingTop: [0, 0],
              fontSize: [13, 15],
              opacity: 0.4,
              marginBottom: [20, 30],
            })}>
            Кликайте на помещения, чтобы посмотреть подробную информацию
          </div>
          <div css={bp({})}>
            <Vector />
            {/* <Vertical /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
