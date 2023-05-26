import { Html, Head, Main, NextScript } from "next/document"
import { useRef } from "react"

export default function Document() {
  const bodyRef = useRef()
  return (
    <Html lang="ru">
      <Head>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-WQE941JXWM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-WQE941JXWM');          
          `,
          }}></script> */}
      </Head>
      <body style={{ backgroundColor: "#fff" }}>
        <Main bodyRef={bodyRef} />
        <NextScript />
      </body>
    </Html>
  )
}
