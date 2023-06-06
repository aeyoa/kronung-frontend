import Cards from "@/components/Cards"
import Cover from "@/components/Cover"
import FAQ from "@/components/FAQ"
import Logo from "@/components/Logo"
import Projects from "@/components/Projects"
import Section from "@/components/Section"
import Sensor from "@/components/Sensor"
import Sticky from "@/components/Sticky"
import Tags from "@/components/Tags"
import { cover } from "@/content/homepage"
import { sections } from "@/content/homepage"
import bp from "@/styles/breakpoints"
import { absoluteFill, relative } from "@/styles/mixins"
import { useMediaQuery, useViewportSize } from "@mantine/hooks"
import { useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function test(params) {
  const { width, height } = useViewportSize()
  const notMobile = useMediaQuery("(min-width: 640px)")
  const [hits, setHits] = useState(false)
  const contentRef = useRef()
  const observer = useRef()
  const [showFirstTags, setShowFirstTags] = useState(false)
  const secondTags = useRef()
  const secondTagsInView = useInView(secondTags, { margin: "-40% 0% 0% 0%" })
  const [section, setSection] = useState(0)

  const [showTagsOnDesktop, setShowTagsOnDesktop] = useState(false)
  const [showTagsOnMobile, setShowTagsOnMobile] = useState(false)

  useEffect(
    _ => {
      setShowFirstTags(!secondTagsInView)
    },
    [secondTagsInView]
  )
  useEffect(() => {
    if (height > 0) {
      if (observer.current) observer.current.unobserve(contentRef.current)
      observer.current = new IntersectionObserver(
        ([e]) => {
          setHits(e.isIntersecting)
          setShowFirstTags(e.isIntersecting)
        },
        { rootMargin: `0px 0px -${Math.round((1 - (88 + 75) / height) * 100)}% 0px` }
      )
      observer.current.observe(contentRef.current)
    }
  }, [height])

  const [stickyBottom, setStickyBottom] = useState(999)
  const shrink = hits && notMobile
  // const shrink = false
  // const [showTags, setShowTags] = useState(false)
  // useEffect(() => {
  //   if (hits) {
  //     setShowTags(true)
  //   }
  // }, [hits])

  let showTags = false
  if (notMobile) {
    showTags = showTagsOnDesktop
  } else {
    showTags = showTagsOnMobile
  }
  // if (secondTagsInView) showTags = false

  const stickyBackgroundTop = 200 + width * 0.64 - stickyBottom

  const onScroll = () => {}

  useEffect(_ => {
    // const observer = new IntersectionObserver(
    //   ([e]) => {
    //     setSticked(e.intersectionRatio == 1)
    //   },
    //   {
    //     threshold: [1],
    //   }
    // )
    // observer.observe(sticky.current)
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div css={bp({})}>
      <Logo fullwidth={!shrink}></Logo>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
        css={bp({ ...relative })}>
        {/* Background */}
        <div css={bp({ ...absoluteFill, bottom: 0, pointerEvents: "none" })}>
          <div
            css={bp({
              position: "sticky",
              width: shrink ? "70%" : "100%",
              marginLeft: "auto",
              height: [stickyBottom - 88, "100vh"],
              top: [stickyBackgroundTop + 88, 0],
              transition: "width 200ms ease",
              zIndex: 5,
            })}>
            <motion.div
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.1 } }}
              css={bp({
                backgroundColor: "#F7F8F7",
                position: "absolute",
                top: 0,
                left: [11, 22],
                bottom: 22,
                right: [11, 22],
                opacity: 1,
              })}></motion.div>
          </div>
        </div>
        <Cover
          setShowTagsOnDesktop={setShowTagsOnDesktop}
          setShowTagsOnMobile={setShowTagsOnMobile}
        />
        {/* Content Scroller */}
        <div css={bp({ display: ["block", "flex"], flexDirection: "row-reverse", ...relative })}>
          {/* Sticky */}
          <div
            css={bp({
              pointerEvents: "none",
              flexBasis: "70%",
              position: ["absolute", "relative"],
              width: ["100%", "auto"],
              height: ["100%", "auto"],
              marginBottom: [0, 44],
            })}>
            <Sticky setStickyBottom={setStickyBottom} section={section} />
          </div>
          {/* Content */}
          <div
            css={bp({
              flexBasis: "30%",
              paddingTop: 0,
              zIndex: 10,
              paddingBottom: [0, 300],
              paddingTop: ["75%", 0],
            })}>
            <div ref={contentRef}>
              {sections.map((elem, index) => (
                <Section
                  key={index}
                  index={index}
                  notMobile={notMobile}
                  section={elem}
                  setSection={setSection}
                  active={index == section}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      <div
        css={bp({
          position: "fixed",
          top: 68,
          left: shrink ? "30%" : 0,
          transition: "left 200ms ease",
          zIndex: 7,
          width: ["100%", "70%"],
          padding: ["33px 22px", 44],
        })}>
        {true && (
          <Tags
            section={section}
            // show={(shrink && !secondTagsInView) || !shrink}
            show={showTags}
            hide={secondTagsInView}
            // onlyLast={!shrink}
          />
        )}
      </div>
      <div
        ref={secondTags}
        css={bp({
          width: shrink ? "70%" : "100%",
          transition: "width 200ms ease",
          position: "sticky",
          top: 87,
          marginTop: -22,
          marginLeft: "auto",
          zIndex: 5,
          paddingBottom: [11, 22],
          backgroundColor: "#fff",
        })}>
        <div
          css={bp({
            padding: [11, 22],
            backgroundColor: "#F7F8F7",
            // boxShadow: "0 1px 5px 0 rgba(0,0,0,0.16)",
            margin: ["0 11px", "0 22px"],
          })}>
          <div css={bp({ opacity: 0 })}>
            {/* Fake tags */}
            <Tags section={7} show />
          </div>
        </div>
      </div>
      <div css={bp({})}>
        <Cards setSection={() => setSection(6)} id="section-cards" />
      </div>
      <Projects setSection={() => setSection(7)} id="section-projects" notMobile={notMobile} />
      <FAQ setSection={() => setSection(8)} id="section-faq" />
      <Contact setSection={() => setSection(9)} id="section-contact" />
      <Footer />
    </div>
  )
}
