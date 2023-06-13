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
        <title>Солнечный город | проект Kronung</title>
        <meta property="og:title" content="Солнечный город | проект Kronung" key="title" />
        <meta
          property="og:description"
          content={
            "Небольшой одноэтажный торговый центр площадью 5000 м² в новом, стремительно растущем районе Петербурга. Практически идеальная планировка. Якорный арендатор — «Перекресток» площадью 1700 м²."
          }
          key="description"
        />
        <meta property="og:image" content={"/img/soln-1.jpg"} key="og:image" />
        <meta name="twitter:card" key="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" key="twitter:image" content={"/img/soln-1.jpg"} />
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
              Небольшой одноэтажный торговый центр площадью 5000 м² в новом, стремительно растущем
              районе Петербурга. Практически идеальная планировка. Якорный арендатор — «Перекресток»
              площадью 1700 м².{" "}
            </p>
          </div>
        </div>
      </Row>
      <Row>
        <AnimatedImage image={soln1} />
      </Row>
      <Row>
        <InfoCard
          desc={"Статус"}
          info={"Проекти\u00ADруется"}
          more="Плановая дата открытия разрешения на строительство — сентябрь 2023"
        />
        <InfoCard desc={"Год запуска"} info={"2024"} />
      </Row>
      <Row>
        <InfoCard desc={"Площадь"} info={"5000 м²"} />
        <InfoCard desc={"Помещений доступно к покупке"} info={"16 из 31"} />
      </Row>
      <Floorplan />
      <Row>
        <AnimatedImage image={soln2} />
      </Row>
      <Row>
        <InfoCard
          desc={"Локация"}
          info={"Проспект Ветеранов"}
          toggle
          onClick={() => {
            setShowDetails(!showDetails)
          }}
          opened={showDetails}
        />
      </Row>

      {showDetails && (
        <>
          <Row>
            <div css={bp({ display: "flex", width: "100%" })}>
              <AnimatedImage
                image={solnDetails1}
                link="Открыть на Яндекс.Картах"
                url="https://yandex.com/maps/-/CCU1fVFdPB"
              />
              <AnimatedImage
                image={solnDetails2}
                link="Открыть на Яндекс.Картах"
                url="https://yandex.com/maps/-/CCU1fVFdPB"
              />
            </div>
          </Row>
          <Row>
            <div css={bp({ display: "flex", width: "100%" })}>
              <AnimatedImage
                image={solnDetails3}
                desc={
                  "ТЦ расположен на пересечении двух ключевых для юга города проспектов: Ветеранов и Буденного"
                }
              />
              <AnimatedImage
                image={solnDetails4}
                desc={"Вид 1, с проспекта Ветеранов"}
                link="Посмотреть панораму"
                url="https://yandex.com/maps/-/CCU9IGtixB"
              />
            </div>
          </Row>
          <Row>
            <div css={bp({ display: "flex", width: "100%" })}>
              <AnimatedImage
                image={solnDetails5}
                desc={"Вид 2, с проспекта Буденного. На фоне видно новую застройку"}
                link="Посмотреть панораму"
                url="https://yandex.com/maps/-/CCU9I0cadD"
              />
              <AnimatedImage
                image={solnDetails6}
                desc={
                  "Вид 3, с перекрестка пр. Буденного и пр. Ветеранов. С обоих проспектов планируются заезды к ТЦ"
                }
                link="Посмотреть панораму"
                url="https://yandex.com/maps/-/CCU9I0DGhD"
              />
            </div>
          </Row>
          <Row>
            <AnimatedImage
              image={solnDetails7}
              desc="В этом микрорайоне сейчас строится несколько ЖК суммарно на 6000 человек"
            />
          </Row>
          <Row>
            <div css={bp({ display: "flex", width: "100%" })}>
              <AnimatedImage
                image={solnDetails8}
                desc="SetlGroup строит в этом районе большой жилой квартал"
              />
              <AnimatedImage
                image={solnDetails9}
                desc="Многие дома уже сданы, еще больше планируется на 2023 и 2024 годы"
              />
            </div>
          </Row>
          <Row>
            <div css={bp({ display: "flex", width: "100%" })}>
              <AnimatedImage image={solnDetails10} />
              <AnimatedImage image={solnDetails11} />
            </div>
          </Row>
        </>
      )}
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
