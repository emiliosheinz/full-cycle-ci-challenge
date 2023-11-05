function sum(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function mult(a, b) {
  return a * b
}

function div(a, b) {
  if (b === 0) throw new Error('Division by zero is not allowed')
  return a / b
}

function mod(a, b) {
  return a % b
}

function pow(a, b) {
  return a ** b
}

function sqrt(a) {
  return Math.sqrt(a)
}

function cbrt(a) {
  return Math.cbrt(a)
}

function log(a) {
  return Math.log(a)
}

function log10(a) {
  return Math.log10(a)
}

module.exports = {
  sum,
  sub,
  mult,
  div,
  mod,
  pow,
  sqrt,
  cbrt,
  log,
  log10,
}
