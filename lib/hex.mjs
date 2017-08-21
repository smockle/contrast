import EightBit from './eightbit'

function Hex (value) {
  const hex = Object.create(Hex.prototype)
  hex.value = value
    ? String(value).replace('#', '').padStart(2, '0').toUpperCase()
    : null
  return hex
}

Hex.prototype.valueOf = function () {
  return this.value
}

Hex.prototype.inspect = function () {
  return `#${this.value}`
}

Hex.prototype.toEightBit = function () {
  const value = parseInt(this.value, 16)
  return EightBit(value)
}

export default Hex
