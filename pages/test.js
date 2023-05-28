import Logo from "@/components/Logo"
import Sticky from "@/components/Sticky"
import { cover } from "@/content/homepage"
import { sections } from "@/content/homepage"
import bp from "@/styles/breakpoints"
import { absoluteFill, relative } from "@/styles/mixins"
import { useMediaQuery, useViewportSize } from "@mantine/hooks"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function test(params) {
  // const sticky = useRef()
  // const [sticked, setSticked] = useState(false)
  const { width, height } = useViewportSize()
  const [stickyBottom, setStickyBottom] = useState(999)
  const [shrink, setShrink] = useState(false)
  const notMobile = useMediaQuery("(min-width: 640px)")
  const stickyBackgroundTop = 150 + width * 0.64 - stickyBottom
  const onScroll = () => {
    if (window.innerWidth >= 640) {
      setShrink(window.scrollY > 855)
    } else {
      setShrink(false)
    }
  }
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
      <div css={bp({ ...relative })}>
        <div css={bp({ ...absoluteFill })}>
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
            <div
              css={bp({
                backgroundColor: "#F7F8F7",
                backgroundColor: "#F0F0F0",
                position: "absolute",
                top: 0,
                left: 22,
                bottom: 22,
                right: 22,
              })}></div>
          </div>
        </div>
        <div css={bp({ ...relative, zIndex: 6 })}>
          <div css={bp({ display: "flex" })}>
            <div css={bp({ padding: 44 })}>{cover.left}</div>
            <div css={bp({ padding: 44 })}>{cover.right}</div>
          </div>
          <Image src={cover.image} style={{ width: "100%", height: "auto" }} alt=""></Image>
        </div>
        <div css={bp({ display: ["block", "flex"], flexDirection: "row-reverse", ...relative })}>
          <div
            css={bp({
              flexBasis: "70%",
              position: ["absolute", "relative"],
              width: ["100%", "auto"],
              height: ["100%", "auto"],
              marginBottom: [0, 44],
            })}>
            <Sticky setStickyBottom={setStickyBottom} />
          </div>
          <div css={bp({ flexBasis: "30%", paddingTop: 0, zIndex: 10 })}>
            {sections.map((section, index) => {
              return (
                <div
                  key={index}
                  css={bp({
                    ...relative,
                    zIndex: index == 0 ? 6 : 0,
                    display: "flex",
                    padding: 44,
                    marginBottom: notMobile ? 0 : index == 0 ? "64%" : 0,
                  })}>
                  <div css={bp({})}>
                    <div>{index}</div>
                    {section.blocks.map((block, index) => (
                      <p key={index}>{block}</p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div css={bp({ height: 1000, backgroundColor: "beige" })}></div>
    </div>
  )
}
