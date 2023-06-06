import { addNbsp } from "@/lib/helpers"
import bp from "@/styles/breakpoints"
import { relative } from "@/styles/mixins"
import { useInView, motion } from "framer-motion"
import { useEffect, useRef } from "react"

export default function Cards({ setSection, id }) {
  const ref = useRef()
  const inView = useInView(ref, { margin: "-49% 0% -50% 0%" })
  useEffect(
    _ => {
      if (inView) setSection()
    },
    [inView]
  )

  return (
    <div
      id={id}
      ref={ref}
      css={bp({
        padding: ["0 5px", "0 11px"],
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
      })}>
      <Card title="Недви&shy;жимость всегда в цене">
        Фондовые рынки рушатся, криптовалюты взлетают и падают, золотовалютные резервы пропадают… и
        только старая-добрая недвижимость — стоит (и стóит) и будет стоять (и стоить). Пока люди
        ходят за продуктами, стригутся и покупают одежду — коммерческая недвижимость будет в цене.{" "}
      </Card>
      <Card title="Нулевые риски для клиентов">
        Вместе с каждым договором продажи «в комплекте идет» и договор аренды. На практике это
        значит, что мы начнем выплачивать аренду нашим клиентам после срока, указанного в договоре.
        Даже если помещение будет еще не готово или будет пустовать.{" "}
      </Card>
      <Card title="Железо&shy;бетонное спокойствие">
        В случае с проектами Kronung вы покупаете помещение. Как правило — это железобетонная
        конструция. Настоящий физический актив. Это дает определенное спокойствие и задает настрой.
        Возможно, в нынешних условиях, бетонные стены — лучшая инвестиция.{" "}
      </Card>
      <Card title="Хорошая доходность">
        Стандартная доходность консервативных методов — 6-7%. Мы предлагаем 11%, не теряя в
        надежности. Это на 80% больше. Это хороший баланс доходности, гибкости и спокойствия.{" "}
      </Card>

      <Card title="Простой вход">
        Индивидуальное владение в наших проектах начинается от 10 миллионов рублей. Довольно низкий
        порог входа, учитывая формат владения и нашу репутацию. Для наших клиектов это плюс, потому
        что можно инвестировать по мере возможности. Есть свободные $150.000 — отлично, мы подберем
        помещение.{" "}
      </Card>
      <Card title="По-настоящ&shy;ему пассивный актив">
        Часто бывает, что недвижимостью нужно «заниматься». Самостоятельно сдавать в аренду, следить
        за состоянием, обновлять. В случае с Kronung — мы занимаемся экплуатацией наших объектов по
        себестоимости. Для наших клиентов это значит, что они не «покупают головную боль», а просто
        получают деньги.
      </Card>
    </div>
  )
}

function Card({ title, children }) {
  return (
    <motion.div
      css={bp({
        overflow: "hidden",
        width: ["100%", "50%"],
        marginTop: [5, 11],
        // marginBottom: 0,
        padding: ["0 6px 6px 6px", "0 11px 11px 11px"],
        // padding: ["0 6px 6px 6px", "3px"],
        color: "#fff",
        flexBasis: ["100%", "50%"],
        ...relative,
      })}>
      <div
        css={bp({
          backgroundColor: "#A7C0CD",
          // backgroundColor: "#F7F8F7",
          // color: "#9D999A",
          height: [470, 470],
          padding: ["17px 17px", "33px 22px"],
        })}>
        <h3
          css={bp({
            margin: 0,
            fontFamily: "DrukSuper",
            textTransform: "uppercase",
            fontSize: [50, 50, 70],
            lineHeight: "0.75em",
            ...relative,
            letterSpacing: "1px",
            lineHeight: 1,
          })}>
          {addNbsp(title)}
        </h3>
        <div
          css={bp({
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: [21, 31],
            fontSize: 15,
            letterSpacing: "-0.3px",
            lineHeight: "1.5em",
            // color: "#5c5858",
          })}>
          {children}
        </div>
      </div>
    </motion.div>
  )
}
