import bp from "@/styles/breakpoints"
import { boxPadding, noSelect, pointer } from "@/styles/mixins"

export default function InfoCard({ info, desc, link, url, more, toggle, onClick, opened }) {
  return (
    <div css={bp({ ...boxPadding, flexBasis: "100%", display: "flex" })}>
      <div
        css={bp({
          backgroundColor: "#F7F8F7",
          padding: [14, 28],
          width: "100%",
          _margin: ["6px 6px", "0 11px"],
        })}>
        <div
          css={bp({
            fontSize: [17, 22],
            marginBottom: [6, 12],
            display: "flex",
            justifyContent: "space-between",
          })}>
          <div>{desc}</div>
          {link && (
            <div>
              <a target="_blank" href={url}>
                {link}
              </a>
            </div>
          )}
        </div>
        <div
          css={bp({
            color: "#A7C0CD",
            fontFamily: "DrukSuper, sans-serif",
            textTransform: "uppercase",
            fontSize: [50, 50, 70],
            lineHeight: 1,
            margin: 0,
          })}>
          {info}
        </div>
        {more && (
          <div css={bp({ marginTop: [9, 14], fontSize: [13, 15], opacity: 0.4 })}>{more}</div>
        )}
        {toggle && (
          <div
            onClick={onClick}
            css={bp({
              paddingTop: [9, 14],
              fontSize: [13, 15],
              opacity: 0.4,
              ...pointer,
              ...noSelect,
            })}>
            {opened && "Свернуть"}
            {!opened && "Подробнее"}
          </div>
        )}
      </div>
    </div>
  )
}
