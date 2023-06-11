import bp from "@/styles/breakpoints"
import { boxPadding } from "@/styles/mixins"

export default function InfoCard({ info, desc, link, url }) {
  return (
    <div css={bp({ ...boxPadding, flexBasis: "100%" })}>
      <div
        css={bp({
          backgroundColor: "#F7F8F7",
          padding: [14, 28],

          _margin: ["6px 6px", "0 11px"],
        })}>
        <div
          css={bp({
            fontSize: [15, 22],
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
      </div>
    </div>
  )
}
