import facepaint from "facepaint"

const breakpoints = [640, 1024, 1200, 1440]
// const breakpoints = [1024, 1200, 1440, 1920]
const bp = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`))

export default bp

const verticalBreakpoints = [400, 500, 600, 700]
export const vbp = facepaint(verticalBreakpoints.map(bp => `@media (min-height: ${bp}px)`))
