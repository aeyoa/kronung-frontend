import Image from "next/image"

import bp from "@/styles/breakpoints"
import { boxPadding } from "@/styles/mixins"

export default function AnimatedImage({ image }) {
  return (
    <div css={bp({ ...boxPadding })}>
      <Image src={image} css={bp({ width: "100%", height: "auto", display: "block" })} />
    </div>
  )
}
