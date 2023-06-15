import bp from "@/styles/breakpoints"
import Background from "./Background"
import { motion } from "framer-motion"
import { useState } from "react"
import { pointer, relative } from "@/styles/mixins"
import { findWhere } from "underscore"
import { data } from "./data"
import Foreground from "./Foreground"

export default function Vector({ id, setId }) {
  const props = (myId, myFill) => ({
    // whileHover: { opacity: 0.8 },
    transition: { duration: 0.05 },
    onMouseEnter: e => {
      setId(e.target.id)
    },
    onClick: e => {
      e.preventDefault()
      setId(e.target.id)
    },
    initial: { opacity: findWhere(data, { id: myId }).available ? 1 : 0.2 },
    animate: { fill: id == myId ? (myFill == "#E9CFB3" ? "#DEB88E" : "#8DA5B2") : myFill },
    css: {
      ...pointer,
      ...relative,
      // "::after": {
      //   content: `"99"`,
      //   position: "absolute",
      //   bottom: 5,
      //   left: 5,
      //   fontSize: 13,
      // },
    },
  })
  return (
    <svg
      css={bp({
        width: "100%",
        height: "auto",
      })}
      viewBox="0 0 1309 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="floorplan">
        <Background />
        <g id="active">
          <motion.rect
            {...props("Rectangle 1", "#A7C0CD")}
            id="Rectangle 1"
            x="10"
            y="10"
            width="94"
            height="186"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 2", "#A7C0CD")}
            id="Rectangle 2"
            x="109"
            y="10"
            width="90"
            height="186"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 3", "#A7C0CD")}
            id="Rectangle 3"
            x="204"
            y="10"
            width="92"
            height="186"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 4", "#A7C0CD")}
            id="Rectangle 4"
            x="301"
            y="115"
            width="89"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 5", "#A7C0CD")}
            id="Rectangle 5"
            x="395"
            y="115"
            width="45"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 6", "#A7C0CD")}
            id="Rectangle 6"
            x="445"
            y="115"
            width="48"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 7", "#A7C0CD")}
            id="Rectangle 7"
            x="589"
            y="115"
            width="95"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 8", "#A7C0CD")}
            id="Rectangle 8"
            x="689"
            y="115"
            width="90"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 9", "#A7C0CD")}
            id="Rectangle 9"
            x="10"
            y="269"
            width="94"
            height="75"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 10", "#A7C0CD")}
            id="Rectangle 10"
            x="10"
            y="349"
            width="94"
            height="40"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 11", "#A7C0CD")}
            id="Rectangle 11"
            x="143"
            y="269"
            width="56"
            height="120"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 12", "#A7C0CD")}
            id="Rectangle 12"
            x="204"
            y="269"
            width="90"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 13", "#A7C0CD")}
            id="Rectangle 13"
            x="204"
            y="329"
            width="90"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 14", "#A7C0CD")}
            id="Rectangle 14"
            x="299"
            y="269"
            width="44"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 15", "#A7C0CD")}
            id="Rectangle 15"
            x="299"
            y="329"
            width="44"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 29", "#A7C0CD")}
            id="Rectangle 29"
            x="348"
            y="269"
            width="43"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 30", "#A7C0CD")}
            id="Rectangle 30"
            x="348"
            y="329"
            width="43"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 16", "#E9CFB3")}
            id="Rectangle 16"
            x="396"
            y="269"
            width="77"
            height="120"
            rx="2"
            fill="#E9CFB3"
          />
          <motion.rect
            {...props("Rectangle 17", "#E9CFB3")}
            id="Rectangle 17"
            x="607"
            y="269"
            width="77"
            height="120"
            rx="2"
            fill="#E9CFB3"
          />
          <motion.rect
            {...props("Rectangle 18", "#A7C0CD")}
            id="Rectangle 18"
            x="689"
            y="269"
            width="45"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 19", "#A7C0CD")}
            id="Rectangle 19"
            x="689"
            y="329"
            width="45"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 20", "#A7C0CD")}
            id="Rectangle 20"
            x="739"
            y="269"
            width="43"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 21", "#A7C0CD")}
            id="Rectangle 21"
            x="739"
            y="329"
            width="43"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 22", "#A7C0CD")}
            id="Rectangle 22"
            x="787"
            y="269"
            width="43"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 23", "#A7C0CD")}
            id="Rectangle 23"
            x="787"
            y="329"
            width="43"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 24", "#A7C0CD")}
            id="Rectangle 24"
            x="10"
            y="423"
            width="284"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 25", "#A7C0CD")}
            id="Rectangle 25"
            x="299"
            y="423"
            width="44"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 26", "#A7C0CD")}
            id="Rectangle 26"
            x="348"
            y="423"
            width="43"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 27", "#A7C0CD")}
            id="Rectangle 27"
            x="396"
            y="423"
            width="211"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 31", "#A7C0CD")}
            id="Rectangle 31"
            x="787"
            y="450"
            width="98"
            height="53"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.path
            {...props("Rectangle 28", "#A7C0CD")}
            id="Rectangle 28"
            d="M890 12C890 10.8954 890.896 10 892 10H1297C1298.1 10 1299 10.8954 1299 12V501C1299 502.105 1298.1 503 1297 503H892C890.896 503 890 502.105 890 501V198C890 196.895 889.105 196 888 196H786C784.895 196 784 195.105 784 194V117C784 115.895 784.895 115 786 115H888C889.105 115 890 114.105 890 113V12Z"
            fill="#A7C0CD"
          />
        </g>
        <Foreground />
      </g>
    </svg>
  )
}
