import Image from "next/image"

import bp from "@/styles/breakpoints"
import { boxPadding, noSelect, pointer } from "@/styles/mixins"

export default function AnimatedImage({ image, link, url, desc }) {
  return (
    <div
      css={bp({
        ...boxPadding,
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column",
        ...noSelect,
      })}>
      <div css={bp({ backgroundColor: "#F7F8F7", flex: 1 })}>
        <Image src={image} css={bp({ width: "100%", height: "auto", display: "block" })} alt="*" />

        {(desc || link) && (
          <div
            css={bp({
              paddingTop: [9, 14],
              paddingBottom: [9, 14],
              paddingLeft: [8, 16],
              paddingRight: [8, 16],
              fontSize: [13, 15],
              opacity: 0.8,
            })}>
            {desc && <div>{desc}</div>}
            {link && (
              <a href={url} target="_blank">
                <div
                  css={bp({
                    ...pointer,
                    ...noSelect,
                    color: "#277998",
                  })}>
                  {link}
                </div>
              </a>
            )}
          </div>
        )}
        {/* {link && (
          <a href={url} target="_blank">
            <div
              css={bp({
                paddingTop: [9, 14],
                paddingBottom: [9, 14],
                paddingLeft: [8, 16],
                paddingRight: [8, 16],
                fontSize: [13, 15],
                opacity: 0.8,
                ...pointer,
                ...noSelect,
                color: "#277998",
              })}>
              {link}
            </div>
          </a>
        )} */}
      </div>
    </div>
  )
}
