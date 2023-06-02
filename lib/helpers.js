export function withSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

const preps = [
  "и",
  "в",
  "на",
  "по",
  "о",
  "по",
  "про",
  "мы",
  "вы",
  "из",
  "с",
  // Eng
  "a",
  "is",
]

export function addNbsp(str) {
  return str.replace(/(\S+?)( )/g, (_, p) => p + (preps.includes(p.toLowerCase()) ? " " : " "))
}
