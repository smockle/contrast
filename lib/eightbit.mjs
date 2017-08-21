import Hex from './hex'

function EightBit (value) {
  const eightbit = Object.create(EightBit.prototype)
  eightbit.value = Number(value)
  return eightbit
}

EightBit.prototype.valueOf = function () {
  return this.value
}

EightBit.prototype.inspect = function () {
  return `EightBit(${this.value})`
}

// convert from sRGB to linear RGB
EightBit.prototype.linearize = function () {
  // convert to a 0 to 1 range
  const SCALE = 255
  const value = this.value / SCALE
  return value <= 0.03928
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4)
}

EightBit.prototype.toHex = function () {
  const value = this.value.toString(16).toUpperCase()
  return Hex(`#${value}`)
}

export default EightBit
