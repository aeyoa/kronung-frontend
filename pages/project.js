import bp from "@/styles/breakpoints"

export default function project(params) {
  return (
    <div>
      <img css={bp({ width: "100%" })} src="/project.jpg"></img>
    </div>
  )
}
