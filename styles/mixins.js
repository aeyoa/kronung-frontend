export const absoluteFill = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
}

export const centerChild = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}

export const mediumBottomMargin = {
  marginBottom: [40, 80, 100],
}

export const relative = {
  position: "relative",
}

export const pointer = {
  cursor: "pointer",
}

export const maxWidth = {
  maxWidth: 1200,
  margin: "auto",
}

export const noSelect = {
  userSelect: "none",
}

export const centerWithAbsolute = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}

export const inlineSvg = {
  ...relative,
  marginRight: [5, 10],
  height: [25, "auto"],
  width: ["auto"],
}

export const bgc = colorOrArray => ({ backgroundColor: colorOrArray })
