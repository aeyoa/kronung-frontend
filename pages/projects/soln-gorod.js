import AnimatedImage from "@/components/AnimatedImage"
import Contact from "@/components/Contact"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"
import InfoCard from "@/components/InfoCard"
import Logo from "@/components/Logo"
import bp from "@/styles/breakpoints"
import { boxPadding } from "@/styles/mixins"

import soln1 from "/public/img/soln-1.jpg"
import soln2 from "/public/img/soln-2.jpg"
import soln3 from "/public/img/soln-3.jpg"
import soln4 from "/public/img/soln-4.jpg"
import soln5 from "/public/img/soln-5.jpg"
import Head from "next/head"

const Row = ({ children, addcss }) => {
  return (
    <div
      css={bp({
        display: ["block", "flex"],
        margin: ["0 5px", "0 11px"],
        ...addcss,
      })}>
      {children}
    </div>
  )
}

export default function SolnGorod(params) {
  return (
    <div>
      <Head>
        <title>Солнечный город | проект Kronung</title>
        <meta property="og:title" content="Солнечный город | проект Kronung" key="title" />
        <meta
          property="og:description"
          content={
            "Небольшой одноэтажный торговый центр площадью 5000 м2 в новом, стремительно растущем районе Петербурга. Практически идеальная планировка. Якорный арендатор — «Перекресток» площадью 1700 м2."
          }
          key="description"
        />
        <meta property="og:image" content={"/public/img/soln-1.jpg"} key="og:image" />
        <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" key="twitter:image" content={"/public/img/soln-1.jpg"} />
      </Head>
      <Logo fullwidth subpage />
      <Row addcss={{ marginTop: [-6, -11] }}>
        <div css={bp({ ...boxPadding })}>
          <div
            css={bp({
              // margin: ["0 6px", 11],
              padding: ["14px 14px", 33],
              backgroundColor: "#F7F8F7",
              display: ["block", "flex"],
            })}>
            <h3
              css={bp({
                color: "#A7C0CD",
                fontFamily: "DrukSuper, sans-serif",
                textTransform: "uppercase",
                fontSize: [50, 50, 70],
                lineHeight: 1,
                margin: 0,
                flexBasis: "50%",
              })}>
              Солнечный город
            </h3>
            <p
              css={bp({
                flexBasis: "50%",
                margin: 0,
                marginTop: [16, 0],
                fontSize: 15,
                letterSpacing: "-0.3px",
                lineHeight: "1.5em",
              })}>
              Небольшой одноэтажный торговый центр площадью 5000 м2 в новом, стремительно растущем
              районе Петербурга. Практически идеальная планировка. Якорный арендатор — «Перекресток»
              площадью 1700 м2.{" "}
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <AnimatedImage image={soln1} />
      </Row>
      <Row>
        <InfoCard desc={"Статус"} info={"Строится"} />
        <InfoCard desc={"Год запуска"} info={"2024"} />
      </Row>
      <Row>
        <InfoCard desc={"Площадь"} info={"5000 м²"} />
        <InfoCard desc={"Помещений доступно к покупке"} info={"19 из 30"} />
      </Row>
      <Row>
        <AnimatedImage image={soln2} />
      </Row>
      <Row>
        <InfoCard
          desc={"Локация"}
          info={"Поселок Сергиево"}
          link={"Открыть на карте"}
          url={"https://yandex.com/maps/-/CCU1fVFdPB"}
        />
      </Row>
      <Row>
        <AnimatedImage image={soln3} />
      </Row>
      <Row>
        <AnimatedImage image={soln4} />
      </Row>
      <Row>
        <AnimatedImage image={soln5} />
      </Row>
      {/* <FAQ setSection={() => {}} /> */}
      <Contact setSection={() => {}} />
      <Footer />
    </div>
  )
}
