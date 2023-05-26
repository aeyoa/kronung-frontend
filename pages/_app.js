import MyHead from "@/components/MyHead"
import "@/styles/globals.css"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <div id="__app">
      <MyHead />
      <AnimatePresence mode="wait" initial={true}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  )
}

export default App
