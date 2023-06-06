import bp from "@/styles/breakpoints"

export default function Footer(params) {
  return (
    <div css={bp({ paddingBottom: 1 })}>
      <div
        css={bp({
          margin: [11, 22],
          padding: [11, 22],
          backgroundColor: "#F7F8F7",
          display: ["block", "flex"],
          justifyContent: "space-between",
          fontFamily: "ApercuMonoPro-Medium",
          textTransform: "uppercase",
          fontSize: [11, 12],
          color: "#68686A",
        })}>
        <div>2008 — {new Date().getFullYear()}. Все права принадлежат Krounung Group</div>
        <div css={bp({ marginTop: [10, 0] })}>
          Сайт сделан в{" "}
          <a target="_blank" href="https://aeyoa.com/">
            aeyoa.com
          </a>
        </div>
      </div>
    </div>
  )
}
