import bp from "@/styles/breakpoints"
import { absoluteFill, relative } from "@/styles/mixins"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import Logo from "@/components/Logo"

import Tags from "@/components/Tags"
import dynamic from "next/dynamic"
import { cover, sections } from "@/content/homepage"
import { first, throttle } from "underscore"

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
    animate={{ opacity: index - 2 == step ? 1 : 1 }}
    viewport={{ amount: 0.4 }}
    // onViewportEnter={() => {
    //   setStep(index - 2)
    // }}
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

export default function IndexPage2(params) {
  const [step, setStep] = useState(0)
  const [showStatic, setShowStatic] = useState(false)
  const staticImageRef = useRef()
  const firstImageRef = useRef()
  const lastImageRef = useRef()

  const currentImage = [kron1, kron2, kron3, kron4, kron5][step]

  const onScroll = throttle(e => {
    const center = (window.innerHeight / 5) * 3
    const elems = document.getElementsByClassName("scroll-flag")
    let minDiff = -9999
    let section = 0
    for (let i = 0; i < elems.length; i++) {
      const element = elems[i]
      const diff = element.getBoundingClientRect().top - center
      if (diff > minDiff && diff <= 0) {
        minDiff = diff
        section = i
      }
    }
    // console.log(center - elems[0].getBoundingClientRect().top)
    const firstToStatic =
      staticImageRef.current.getBoundingClientRect().top -
      firstImageRef.current.getBoundingClientRect().top

    const lastToStatic =
      staticImageRef.current.getBoundingClientRect().top -
      lastImageRef.current.getBoundingClientRect().top

    // console.log(firstToStatic)
    if (firstToStatic >= -1 && lastToStatic <= -1) {
      setShowStatic(true)
    } else {
      setShowStatic(false)
    }

    setStep(section - 1)
  }, 0)

  useEffect(() => {
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  return (
    <>
      <Logo fullwidth />
      <Container css={bp({ marginTop: 88 })}>
        <CoverRow
          css={bp({
            fontSize: 15,
            lineHeight: "1.7em",
            textAlign: "justify",
            backgroundColor: "#F7F8F7",
          })}>
          <Column css={bp({ marginTop: 26 })}>{cover.left}</Column>
          <Column css={bp({ marginTop: 26 })}>{cover.right}</Column>
        </CoverRow>
        <CoverRow css={bp({ backgroundColor: "#F7F8F7" })}>
          <Column css={bp({ marginBottom: 0 })}>
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
              <Image src={cover.image} style={{ width: "100%", height: "auto" }} alt=""></Image>
            </motion.div>
          </Column>
        </CoverRow>
      </Container>

      {sections.map((section, index) => (
        <div key={index}>
          <div className="scroll-flag" css={bp({ height: 1, __backgroundColor: "red" })}></div>
          <Row key={index}>
            <Section step={step} setStep={setStep} title={section.title} index={index + 1}>
              {section.blocks.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Section>
            {section.image && (
              <div css={bp({ ...relative, height: "100%" })}>
                <Image
                  ref={
                    index == 0 ? firstImageRef : index == sections.length - 1 ? lastImageRef : null
                  }
                  alt=""
                  src={section.image}
                  css={bp({
                    width: "100%",
                    height: "auto",
                    position: ["relative", "absolute"],
                    bottom: [0, index == 0 ? 0 : 100],
                    opacity: showStatic ? 0 : 1,
                  })}
                />
              </div>
            )}
          </Row>
        </div>
      ))}
      {/* <Cards /> */}
      <div
        css={bp({
          position: "fixed",
          bottom: 0,
          width: "100%",
          opacity: showStatic ? 1 : 0,
        })}>
        <Row>
          <div></div>
          <div ref={staticImageRef} css={bp({ ...relative })}>
            <Image
              alt=""
              src={currentImage ? currentImage : kron1}
              css={bp({
                width: "100%",
                height: "auto",
                marginBottom: 22,
              })}
            />
          </div>
        </Row>
      </div>
      <img css={bp({ width: "100%" })} src="/tail.jpg"></img>
    </>
  )
}
