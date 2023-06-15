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
import solnDetails1 from "/public/img/soln-details-1.jpg"
import solnDetails2 from "/public/img/soln-details-2.jpg"
import solnDetails3 from "/public/img/soln-details-3.jpg"
import solnDetails4 from "/public/img/soln-details-4.jpg"
import solnDetails5 from "/public/img/soln-details-5.jpg"
import solnDetails6 from "/public/img/soln-details-6.jpg"
import solnDetails7 from "/public/img/soln-details-7.jpg"
import solnDetails8 from "/public/img/soln-details-8.jpg"
import solnDetails9 from "/public/img/soln-details-9.jpg"
import solnDetails10 from "/public/img/soln-details-10.jpg"
import solnDetails11 from "/public/img/soln-details-11.jpg"

import yanino1 from "/public/img/yanino-1.jpg"
import yanino2 from "/public/img/yanino-2.jpg"
import yanino3 from "/public/img/yanino-3.jpg"
import yanino4 from "/public/img/yanino-4.jpg"
import yanino5 from "/public/img/yanino-5.jpg"

import Head from "next/head"
import { useState } from "react"
import Floorplan from "@/components/Floorplan/Floorplan"

const Row = ({ children, addcss }) => {
  return (
    <div
      css={bp({
        display: ["block", "flex"],
        margin: ["0 5px", "0 11px"],
        ...addcss,
        flex: 1,
        alignItems: "stretch",
      })}>
      {children}
    </div>
  )
}

export default function SolnGorod(params) {
  const [showDetails, setShowDetails] = useState(false)
  return (
    <div>
      <Head>
        <title>Янино Маркет | проект Kronung</title>
        <meta property="og:title" content="Янино Маркет | проект Kronung" key="title" />
        <meta
          property="og:description"
          content={
            "Наш второй проект в поселке Янино на востоке Петербурга. В этот раз мы решили отойти от привычного образа «коробочных» ТЦ и сделать что-то интересное в плане архитектуры: визуально Янино Маркет состоит из нескольких домиков, хотя внутри у ТЦ традиционная (удобная) планировка. Результатом остались довольны и мы, и владельцы помещений, и жители этого района. Среди арендаторов сейчас — «Вкусно и Точка» площадью 430 м², Улыбка Радуги и ВкусВилл. "
          }
          key="description"
        />
        <meta property="og:image" content={"/img/yanino-2.jpg"} key="og:image" />
        <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" key="twitter:image" content={"/img/yanino-2.jpg"} />
      </Head>
      <Logo fullwidth subpage />

      <Row addcss={{ marginTop: [-6, -11] }}>
        <div css={bp({ ...boxPadding, width: "100%" })}>
          <div
            css={bp({
              // margin: ["0 6px", 11],
              padding: ["14px 14px", 33],
              backgroundColor: "#F7F8F7",
              display: ["block", "flex"],
              width: "100%",
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
              Янино Маркет
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
              Наш второй проект в поселке Янино на востоке Петербурга. В этот раз мы решили отойти
              от привычного образа «коробочных» ТЦ и сделать что-то интересное в плане архитектуры:
              визуально Янино Маркет состоит из нескольких домиков, хотя внутри у ТЦ традиционная
              (удобная) планировка. Результатом остались довольны и мы, и владельцы помещений, и
              жители этого района. Среди арендаторов сейчас — «Вкусно и Точка» площадью 430 м²,
              Улыбка Радуги и ВкусВилл.
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <AnimatedImage image={yanino2} />
      </Row>
      <Row>
        <InfoCard desc={"Статус"} info={"Сдан"} />
        <InfoCard desc={"Год запуска"} info={"2022"} />
      </Row>
      <Row>
        <InfoCard desc={"Площадь"} info={"2000 м²"} />
        <InfoCard desc={"Заполняемость помещений"} info={"18 из 18"} />
      </Row>

      <Row>
        <AnimatedImage image={yanino1} />
      </Row>
      <Row>
        <InfoCard
          desc={"Локация"}
          info={"Поселок Янино"}
          link={"Открыть на карте "}
          url={"https://yandex.com/maps/-/CCU9YDfwGA"}
        />
      </Row>

      <Row>
        <AnimatedImage
          image={yanino3}
          desc={"Пока залили на сайт рендеры ТЦ, но скоро заменим на фотографии"}
        />
      </Row>
      <Row>
        <AnimatedImage
          image={yanino4}
          desc={
            "Янино Маркет проектировался в те славные времена, когда твоим якорным арендатором мог быть Макдоналс :)"
          }
        />
      </Row>
      <Row>
        <AnimatedImage image={yanino5} />
      </Row>
      {/* <FAQ setSection={() => {}} /> */}
      <Contact setSection={() => {}} />
      <Footer />
    </div>
  )
}
