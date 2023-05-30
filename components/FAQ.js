import questions from "@/content/faq"
import bp from "@/styles/breakpoints"

export default function FAQ(params) {
  return (
    <div css={bp({ margin: 22, backgroundColor: "#F7F8F7" })}>
      {questions.map((question, index) => {
        return (
          <div css={bp({ padding: 44, borderBottom: "1px solid #E7E8E7" })} key={index}>
            {question.title}
          </div>
        )
      })}
    </div>
  )
}
