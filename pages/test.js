import Logo from "@/components/Logo"
import { cover } from "@/content/homepage"
import { sections } from "@/content/homepage"
import bp from "@/styles/breakpoints"
import { absoluteFill, relative } from "@/styles/mixins"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export default function test(params) {
  const sticky = useRef()
  const [sticked, setSticked] = useState(false)
  const [shrink, setShrink] = useState(false)
  const onScroll = () => {
    console.log(window.scrollY)
    setShrink(window.scrollY > 855)
  }
  useEffect(_ => {
    const observer = new IntersectionObserver(
      ([e]) => {
        setSticked(e.intersectionRatio == 1)
      },
      {
        threshold: [1],
      }
    )
    observer.observe(sticky.current)
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
  return (
    <div>
      <Logo fullwidth={!shrink}></Logo>
      <div css={bp({ ...relative })}>
        <div css={bp({ ...absoluteFill })}>
          <div
            css={bp({
              position: "sticky",
              width: shrink ? "70%" : "100%",
              marginLeft: "auto",
              height: "100vh",
              top: 0,
              transition: "width 200ms ease",
            })}>
            <div
              css={bp({
                backgroundColor: "#F7F8F7",
                position: "absolute",
                top: 0,
                left: 22,
                bottom: 22,
                right: 22,
              })}></div>
          </div>
        </div>
        <div css={bp({ ...relative })}>
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
            })}>
            <div
              ref={sticky}
              css={bp({
                height: "calc(100vw * 0.7 * 0.64)",
                marginTop: 200,
                // backgroundColor: "#def",
                border: "1px solid pink",
                position: "sticky",
                top: [250, "calc(100vh - (100vw * 0.7 * 0.64))"],
              })}>
              <Image
                src={sections[0].image}
                style={{ width: "100%", height: "100%", position: "absolute", bottom: 0 }}
              />
            </div>
          </div>
          <div css={bp({ flexBasis: "30%", paddingTop: [250, 0], zIndex: 10 })}>
            {sections.map((section, index) => {
              return (
                <div key={index} css={bp({ display: "flex", padding: 44 })}>
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
