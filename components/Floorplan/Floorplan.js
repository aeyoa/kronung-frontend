import bp from "@/styles/breakpoints"
import Vector from "./Vector"
import { boxPadding } from "@/styles/mixins"
import { useViewportSize } from "@mantine/hooks"
import { useEffect, useState } from "react"
import Vertical from "./Vertical"
import { data } from "./data"
import { findWhere } from "underscore"
import { withSpaces } from "@/lib/helpers"

export default function Floorplan(params) {
  const { width: viewportWidth, height: viewportHeight } = useViewportSize()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [id, setId] = useState(null)
  const selected = findWhere(data, { id: id })
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
          {!id && (
            <div
              css={bp({
                paddingTop: [10, 15],
                fontSize: [13, 15],
                opacity: 0.4,
                marginBottom: [20, 30],
              })}>
              <span css={bp({ display: ["none", "none", "block"] })}>
                Наводите на помещения, чтобы посмотреть информацию
              </span>
              <span css={bp({ display: ["block", "block", "none"] })}>
                Тапайте на помещения, чтобы посмотреть информацию
              </span>
            </div>
          )}
          {selected && (
            <div
              css={bp({
                paddingTop: [10, 15],
                fontSize: [13, 15],
                opacity: 1,
                marginBottom: [20, 30],
              })}>
              №{selected.index}, {selected.available ? "доступно к покупке" : "продано"},{" "}
              {selected.desc}
              {Math.ceil(selected.sqrm)} м², {Math.round(selected.price / 100000) / 10} млн руб.
            </div>
          )}
          <div css={bp({})}>
            <Vector id={id} setId={setId} />
            {/* <Vertical /> */}
          </div>
          <div
            css={bp({
              paddingTop: [11, 22],

              fontSize: [13, 15],
              opacity: 0.8,
            })}>
            <a href={"/files/soln-gorod-plan.pdf"} target="_blank">
              <div
                css={bp({
                  color: "#277998",
                })}>
                Скачать подробный план зонирования в PDF
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
