import bp from "@/styles/breakpoints"
import { relative } from "@/styles/mixins"
import Slider, { slidesToShowPlugin } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

export default function Cards(params) {
  return (
    <div
      css={bp({
        padding: "0 11px",
        display: "flex",
        width: "100%",
        position: "sticky",
        top: 225,
      })}>
      <Card title="Недвижимость всегда в цене">
        Фондовые рынки рушатся, криптовалюты взлетают и падают, золотовалютные резервы куда-то
        пропадают… и только старая-добрая недвижимость — стоит (и стóит) и будет стоять (и стоить).
        Пока люди ходят за продуктами, стригутся и покупают одежду — коммерческая недвижимость будет
        в цене.{" "}
      </Card>
      <Card title="Недвижимость всегда в цене">
        Фондовые рынки рушатся, криптовалюты взлетают и падают, золотовалютные резервы куда-то
        пропадают… и только старая-добрая недвижимость — стоит (и стóит) и будет стоять (и стоить).
        Пока люди ходят за продуктами, стригутся и покупают одежду — коммерческая недвижимость будет
        в цене.{" "}
      </Card>
    </div>
  )
}

function Card({ title, children }) {
  return (
    <div
      css={bp({
        width: ["100%", "50%"],
        // marginTop: 11,
        // marginBottom: 11,
        padding: ["0 11px 11px 11px"],
        color: "#fff",
        flexBasis: "50%",
      })}>
      <div css={bp({ backgroundColor: "#A7C0CD", height: 470, padding: 11 })}>
        <h3
          css={bp({
            margin: 0,
            fontWeight: "bold",
            fontSize: 72,
            lineHeight: "0.75em",
            ...relative,
          })}>
          {title}
        </h3>
        <div
          css={bp({
            position: "absolute",
            bottom: 0,
            left: 11,
            right: 11,
            padding: 22,
            fontSize: 15,
            letterSpacing: "-0.3px",
            lineHeight: "1.5em",
          })}>
          {children}
        </div>
      </div>
    </div>
  )
}
