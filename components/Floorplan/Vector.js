import bp from "@/styles/breakpoints"
import Background from "./Background"
import { motion } from "framer-motion"
import { useState } from "react"
import { pointer, relative } from "@/styles/mixins"
import { findWhere } from "underscore"
import { data } from "./data"

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
    animate: { fill: id == myId ? (myFill == "#e9cfb3" ? "#DEB88E" : "#8DA5B2") : myFill },
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
      viewBox="0 0 1289 493"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g id="floorplan">
        <Background />
        <g id="active">
          <motion.rect
            {...props("Rectangle 1", "#A7C0CD")}
            id="Rectangle 1"
            width="94"
            height="186"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 9", "#A7C0CD")}
            id="Rectangle 9"
            y="259"
            width="94"
            height="75"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 11", "#A7C0CD")}
            id="Rectangle 11"
            x="133"
            y="259"
            width="56"
            height="120"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 12", "#A7C0CD")}
            id="Rectangle 12"
            x="194"
            y="259"
            width="90"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 14", "#A7C0CD")}
            id="Rectangle 14"
            x="289"
            y="259"
            width="44"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 29", "#A7C0CD")}
            id="Rectangle 29"
            x="338"
            y="259"
            width="43"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 16", "#e9cfb3")}
            id="Rectangle 16"
            x="386"
            y="259"
            width="77"
            height="120"
            rx="2"
            fill="#e9cfb3"
          />
          <motion.rect
            {...props("Rectangle 17", "#e9cfb3")}
            id="Rectangle 17"
            x="597"
            y="259"
            width="77"
            height="120"
            rx="2"
            fill="#e9cfb3"
          />
          <motion.rect
            {...props("Rectangle 18", "#A7C0CD")}
            id="Rectangle 18"
            x="679"
            y="259"
            width="45"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 20", "#A7C0CD")}
            id="Rectangle 20"
            x="729"
            y="259"
            width="43"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 22", "#A7C0CD")}
            id="Rectangle 22"
            x="777"
            y="259"
            width="43"
            height="55"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 19", "#A7C0CD")}
            id="Rectangle 19"
            x="679"
            y="319"
            width="45"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 21", "#A7C0CD")}
            id="Rectangle 21"
            x="729"
            y="319"
            width="43"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 23", "#A7C0CD")}
            id="Rectangle 23"
            x="777"
            y="319"
            width="43"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 31", "#A7C0CD")}
            id="Rectangle 31"
            x="777"
            y="440"
            width="98"
            height="53"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 15", "#A7C0CD")}
            id="Rectangle 15"
            x="289"
            y="319"
            width="44"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 30", "#A7C0CD")}
            id="Rectangle 30"
            x="338"
            y="319"
            width="43"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 13", "#A7C0CD")}
            id="Rectangle 13"
            x="194"
            y="319"
            width="90"
            height="60"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 10", "#A7C0CD")}
            id="Rectangle 10"
            y="339"
            width="94"
            height="40"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 24", "#A7C0CD")}
            id="Rectangle 24"
            y="413"
            width="284"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 25", "#A7C0CD")}
            id="Rectangle 25"
            x="289"
            y="413"
            width="44"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 26", "#A7C0CD")}
            id="Rectangle 26"
            x="338"
            y="413"
            width="43"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 27", "#A7C0CD")}
            id="Rectangle 27"
            x="386"
            y="413"
            width="211"
            height="80"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.path
            {...props("Rectangle 28", "#A7C0CD")}
            id="Rectangle 28"
            d="M880 2C880 0.89543 880.896 0 882 0H1287C1288.1 0 1289 0.89543 1289 2V491C1289 492.105 1288.1 493 1287 493H882C880.896 493 880 492.105 880 491V188C880 186.895 879.105 186 878 186H776C774.895 186 774 185.105 774 184V107C774 105.895 774.895 105 776 105H878C879.105 105 880 104.105 880 103V2Z"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 2", "#A7C0CD")}
            id="Rectangle 2"
            x="99"
            width="90"
            height="186"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 3", "#A7C0CD")}
            id="Rectangle 3"
            x="194"
            width="92"
            height="186"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 4", "#A7C0CD")}
            id="Rectangle 4"
            x="291"
            y="105"
            width="89"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 5", "#A7C0CD")}
            id="Rectangle 5"
            x="385"
            y="105"
            width="45"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 6", "#A7C0CD")}
            id="Rectangle 6"
            x="435"
            y="105"
            width="48"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 7", "#A7C0CD")}
            id="Rectangle 7"
            x="579"
            y="105"
            width="95"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
          <motion.rect
            {...props("Rectangle 8", "#A7C0CD")}
            id="Rectangle 8"
            x="679"
            y="105"
            width="90"
            height="81"
            rx="2"
            fill="#A7C0CD"
          />
        </g>
      </g>
    </svg>
  )
}
