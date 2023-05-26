import bp from "@/styles/breakpoints"
import { absoluteFill } from "@/styles/mixins"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import Logo from "@/components/Logo"

import Tags from "@/components/Tags"
import dynamic from "next/dynamic"
import { cover, sections } from "@/content/homepage"

import kron1 from "/public/img/kron1.png"
import kron2 from "/public/img/kron2.png"
import kron3 from "/public/img/kron3.png"
import kron4 from "/public/img/kron4.png"
import kron5 from "/public/img/kron5.png"

const Cards = dynamic(() => import("@/components/Cards"), { ssr: false })

const Section = ({ index, title, children, setStep, step }) => (
  <motion.div
    key={index}
    initial={{ opacity: 0.2 }}
    animate={{ opacity: index - 2 == step ? 1 : 0.2 }}
    viewport={{ amount: 0.4 }}
    onViewportEnter={() => {
      setStep(index - 2)
    }}
    css={bp({ marginBottom: 100, padding: ["0 0 0 12px", "0 0 0 26px"] })}>
    <h2
      css={bp({ fontSize: [72], fontSize: [60], fontWeight: "bold", margin: 0, color: "#E0AED7" })}>
      {0 + index}
    </h2>
    <h2
      css={bp({
        fontSize: [72],
        fontSize: [60],
        fontWeight: "bold",
        margin: 0,
        lineHeight: "0.75em",
        overflowWrap: "anywhere",
      })}>
      {title}
    </h2>
    <div css={bp({ lineHeight: ["26px"], marginTop: 36 })}>{children}</div>
  </motion.div>
)

const Row = ({ children }) => (
  <div css={bp({ display: ["block", "flex", "flex"], flexDirection: "row-reverse" })}>
    <div css={bp({ flexBasis: "67.66%", padding: ["0 11px", "0 22px"] })}>
      <div css={bp({ __backgroundColor: "#F7F8F7", height: "100%" })}>{children[1]}</div>
    </div>
    <div css={bp({ flexBasis: "33.33%", padding: ["0 11px", "0 22px"] })}>{children[0]}</div>
  </div>
)

const Container = props => (
  <div css={bp({ padding: ["0 11px", "0 22px"] })} {...props}>
    <div>{props.children}</div>
  </div>
)

const CoverRow = props => (
  <div css={bp({ padding: ["0 6px", "0 13px"] })} {...props}>
    <div css={bp({ display: "flex" })}>{props.children}</div>
  </div>
)

const Column = props => (
  <div css={bp({ padding: ["0 6px", "0 13px"] })} {...props}>
    <div>{props.children}</div>
  </div>
)

// export default function IndexPage(params) {
//   const [step, setStep] = useState(0)
//   return (
//     <>
//       <Logo />
//       <Container css={bp({ marginTop: 88 })}>
//         <CoverRow
//           css={bp({
//             fontSize: 15,
//             lineHeight: "1.7em",
//             textAlign: "justify",
//             backgroundColor: "#F7F8F7",
//           })}>
//           <Column css={bp({ marginTop: 26 })}>{cover.left}</Column>
//           <Column css={bp({ marginTop: 26 })}>{cover.right}</Column>
//         </CoverRow>
//         <CoverRow css={bp({ backgroundColor: "#F7F8F7" })}>
//           <Column css={bp({ marginBottom: -150 })}>
//             <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
//               <Image src={cover.image} style={{ width: "100%", height: "auto" }} alt=""></Image>
//             </motion.div>
//           </Column>
//         </CoverRow>
//       </Container>

//       {sections.map((section, index) => (
//         <Row key={index}>
//           <Section step={step} setStep={setStep} title={section.title} index={index + 1}>
//             {section.blocks.map((p, i) => (
//               <p key={i}>{p}</p>
//             ))}
//           </Section>
//           {section.image && (
//             <Image alt="" src={section.image} style={{ width: "100%", height: "auto" }} />
//           )}
//         </Row>
//       ))}
//       {/* <Cards /> */}
//     </>
//   )
// }

export default function Home(params) {
  const [step, setStep] = useState(0)
  const controls = useAnimationControls()
  useEffect(() => {
    // controls.start({
    //   scale: 1,
    //   rotate: 0,
    //   transition: {
    //     scale: { type: "spring", velocity: 5, stiffness: 2000, damping: 30 },
    //     rotate: { type: "spring", velocity: 75, stiffness: 500, damping: 10 },
    //   },
    // })
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: -5,
        stiffness: 500,
        damping: 50,
      },
    })
  }, [step])
  const image = [kron1, kron2, kron3, kron4, kron5][step]
  return (
    <div css={bp({ display: "flex" })}>
      <Logo />
      <div css={bp({ padding: 60, width: 475, paddingTop: 100 })}>
        <Section step={step} setStep={setStep} index={2} title={`Выбор земли`}>
          <p>
            С недвижимостью как с едой. Сложно приготовить что-то вкусное из плохих продуктов. Так и
            со строительством: важно все. И все начинается с хорошего куска земли. Как мы находим
            «тот самый» кусок земли?
          </p>

          <p>
            Во-первых, важно следить за рынком: смотреть на больших застройщиков, наблюдать на
            генпланом, получать инсайды. То, что сейчас выглядит унылым пустырем, через два года,
            возможно, станет центром притяжения.
          </p>

          <p>
            Во-вторых, чтобы находить такие лоты нужен опытный взгляд. И интуиция. За 10 лет мы
            построили и запустили 8 торговых центров — и уже неплохо разобрались в вопросе.
          </p>

          <p>
            На наши будущие объекты мы можем посмотреть и глазами арендаторов (коммуникации,
            логистическая доступность, показатели по посещаемости), и глазами обычных людей –
            посетителей ТЦ или сотрудников бизнес-центра.
          </p>

          <p>
            Если мы видим в участке потенциал, мы покупаем его. Обычно на этом этапе у нас уже есть
            общее понимание, что строить. Но это понимание нужно детализировать.
          </p>
        </Section>
        <Section step={step} setStep={setStep} index={3} title={`Проекти-рование`}>
          <p>
            С недвижимостью как с едой. Сложно приготовить что-то вкусное из плохих продуктов. Так и
            со строительством: важно все. И все начинается с хорошего куска земли. Как мы находим
            «тот самый» кусок земли?
          </p>

          <p>
            Во-первых, важно следить за рынком: смотреть на больших застройщиков, наблюдать на
            генпланом, получать инсайды. То, что сейчас выглядит унылым пустырем, через два года,
            возможно, станет центром притяжения.
          </p>

          <p>
            Во-вторых, чтобы находить такие лоты нужен опытный взгляд. И интуиция. За 10 лет мы
            построили и запустили 8 торговых центров — и уже неплохо разобрались в вопросе.
          </p>

          <p>
            На наши будущие объекты мы можем посмотреть и глазами арендаторов (коммуникации,
            логистическая доступность, показатели по посещаемости), и глазами обычных людей –
            посетителей ТЦ или сотрудников бизнес-центра.
          </p>

          <p>
            Если мы видим в участке потенциал, мы покупаем его. Обычно на этом этапе у нас уже есть
            общее понимание, что строить. Но это понимание нужно детализировать.
          </p>
        </Section>
        <Section step={step} setStep={setStep} index={4} title={`Стро-ительство`}>
          <p>
            С недвижимостью как с едой. Сложно приготовить что-то вкусное из плохих продуктов. Так и
            со строительством: важно все. И все начинается с хорошего куска земли. Как мы находим
            «тот самый» кусок земли?
          </p>

          <p>
            Во-первых, важно следить за рынком: смотреть на больших застройщиков, наблюдать на
            генпланом, получать инсайды. То, что сейчас выглядит унылым пустырем, через два года,
            возможно, станет центром притяжения.
          </p>

          <p>
            Во-вторых, чтобы находить такие лоты нужен опытный взгляд. И интуиция. За 10 лет мы
            построили и запустили 8 торговых центров — и уже неплохо разобрались в вопросе.
          </p>

          <p>
            На наши будущие объекты мы можем посмотреть и глазами арендаторов (коммуникации,
            логистическая доступность, показатели по посещаемости), и глазами обычных людей –
            посетителей ТЦ или сотрудников бизнес-центра.
          </p>

          <p>
            Если мы видим в участке потенциал, мы покупаем его. Обычно на этом этапе у нас уже есть
            общее понимание, что строить. Но это понимание нужно детализировать.
          </p>
        </Section>
        <Section step={step} setStep={setStep} index={5} title={`Поиск аренда-торов`}>
          <p>
            С недвижимостью как с едой. Сложно приготовить что-то вкусное из плохих продуктов. Так и
            со строительством: важно все. И все начинается с хорошего куска земли. Как мы находим
            «тот самый» кусок земли?
          </p>

          <p>
            Во-первых, важно следить за рынком: смотреть на больших застройщиков, наблюдать на
            генпланом, получать инсайды. То, что сейчас выглядит унылым пустырем, через два года,
            возможно, станет центром притяжения.
          </p>

          <p>
            Во-вторых, чтобы находить такие лоты нужен опытный взгляд. И интуиция. За 10 лет мы
            построили и запустили 8 торговых центров — и уже неплохо разобрались в вопросе.
          </p>

          <p>
            На наши будущие объекты мы можем посмотреть и глазами арендаторов (коммуникации,
            логистическая доступность, показатели по посещаемости), и глазами обычных людей –
            посетителей ТЦ или сотрудников бизнес-центра.
          </p>

          <p>
            Если мы видим в участке потенциал, мы покупаем его. Обычно на этом этапе у нас уже есть
            общее понимание, что строить. Но это понимание нужно детализировать.
          </p>
        </Section>
        <Section step={step} setStep={setStep} index={6} title={`Жизнь проекта`}>
          <p>
            С недвижимостью как с едой. Сложно приготовить что-то вкусное из плохих продуктов. Так и
            со строительством: важно все. И все начинается с хорошего куска земли. Как мы находим
            «тот самый» кусок земли?
          </p>

          <p>
            Во-первых, важно следить за рынком: смотреть на больших застройщиков, наблюдать на
            генпланом, получать инсайды. То, что сейчас выглядит унылым пустырем, через два года,
            возможно, станет центром притяжения.
          </p>

          <p>
            Во-вторых, чтобы находить такие лоты нужен опытный взгляд. И интуиция. За 10 лет мы
            построили и запустили 8 торговых центров — и уже неплохо разобрались в вопросе.
          </p>

          <p>
            На наши будущие объекты мы можем посмотреть и глазами арендаторов (коммуникации,
            логистическая доступность, показатели по посещаемости), и глазами обычных людей –
            посетителей ТЦ или сотрудников бизнес-центра.
          </p>

          <p>
            Если мы видим в участке потенциал, мы покупаем его. Обычно на этом этапе у нас уже есть
            общее понимание, что строить. Но это понимание нужно детализировать.
          </p>
        </Section>
      </div>
      <div
        css={bp({
          position: "fixed",
          right: 22,
          bottom: 22,
          top: 88,
          left: 475,
          background: "#F7F8F7",
        })}>
        <motion.div
          animate={controls}
          css={bp({ ...absoluteFill, left: 22, right: 22, bottom: 22 })}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: step >= 0 ? 1 : 0 }}>
            <Image
              src={kron1}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: step == 1 ? 1 : 0 }}>
            <Image
              src={kron2}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: step == 2 ? 1 : 0 }}>
            <Image
              src={kron3}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: step == 3 ? 1 : 0 }}>
            <Image
              src={kron4}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: step == 4 ? 1 : 0 }}>
            <Image
              src={kron5}
              style={{ width: "100%", height: "auto", position: "absolute", bottom: 0 }}
            />
          </motion.div>
        </motion.div>
        <Tags active={step + 1} />
      </div>
      {/* <div
        css={bp({
          position: "relative",
          width: "calc(100% - 475px)",
          // border: "1px solid black",
          height: 5342,
        })}></div> */}
      <Cards />
    </div>
  )
}
