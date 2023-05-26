import bp from "@/styles/breakpoints"

export default function Tags({ active }) {
  const tags = [
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
  return (
    <div css={bp({ position: "absolute", top: 25, left: 25, maxWidth: 650, zIndex: 99 })}>
      {tags.map((text, index) => (
        <Tag text={text.text} key={index} active={index == active} position={text.position} />
      ))}
    </div>
  )
}

function Tag({ text, active, position }) {
  return (
    <div
      onClick={() => {
        window.scrollTo({ top: position, behavior: "smooth" })
      }}
      css={bp({
        fontFamily: "ApercuMonoPro-Medium",
        display: "inline-block",
        textTransform: "uppercase",
        fontSize: 12,
        padding: "8px 13px 9px",
        backgroundColor: active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.5)",
        margin: "0 5px 5px 0",
        borderRadius: 2,
        color: active ? "#3891B2" : "#69696B",
        cursor: "pointer",
        boxShadow: active ? "0 1px 3px 0 rgba(0,0,0,0.09), 0 0 26px 0 rgba(137,131,131,0.09)" : "",
      })}>
      {text}
    </div>
  )
}
