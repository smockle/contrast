// See http://juicystudio.com/article/luminositycontrastratioalgorithm.php
const FULL_SCALE_VALUE = 255
const OFFSET = 0.05
const R_COEFFICIENT = 0.2126
const G_COEFFICIENT = 0.7152
const B_COEFFICIENT = 0.0722

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
EightBit.prototype.linearize = function () {
  return Math.pow(this.value / FULL_SCALE_VALUE, 2.2)
}
EightBit.prototype.toHex = function () {
  const value = this.value.toString(16).toUpperCase()
  return Hex(`#${value}`)
}

function EightBitColor (R, G, B) {
  const eightbitcolor = Object.create(EightBitColor.prototype)
  eightbitcolor.R = EightBit(R)
  eightbitcolor.G = EightBit(G)
  eightbitcolor.B = EightBit(B)
  return eightbitcolor
}
EightBitColor.prototype.valueOf = function () {
  const R = this.R.valueOf()
  const G = this.G.valueOf()
  const B = this.B.valueOf()
  return { R, G, B }
}
EightBitColor.prototype.inspect = function () {
  const R = this.R.valueOf()
  const G = this.G.valueOf()
  const B = this.B.valueOf()
  return `rgb(${R}, ${G}, ${B})`
}
EightBitColor.prototype.luminosity = function () {
  const R = this.R.linearize()
  const G = this.G.linearize()
  const B = this.B.linearize()
  return R_COEFFICIENT * R + G_COEFFICIENT * G + B_COEFFICIENT * B
}
EightBitColor.prototype.toHexColor = function () {
  const R = this.R.toHex().valueOf()
  const G = this.G.toHex().valueOf()
  const B = this.B.toHex().valueOf()
  return HexColor(`#${R}${G}${B}`)
}

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

function HexColor (value) {
  const hexcolor = Object.create(HexColor.prototype)
  hexcolor.value = (() => {
    if (!value) {
      return null
    }
    const _value = (() => {
      switch (true) {
        // Special case for 'black'
        case String(value).toLowerCase() === 'black':
          return '000000'
        // Special case for 'white'
        case String(value).toLowerCase() === 'white':
          return 'FFFFFF'
        default:
          return String(value).replace('#', '')
      }
    })()
    switch (_value.length) {
      // Special case for '#AB'
      case 2:
        return `${_value}${_value}${_value}`
      // Special case for '#ABC'
      case 3:
        return `${_value[0]}${_value[0]}${_value[1]}${_value[1]}${_value[2]}${_value[2]}`
      default:
        return _value
    }
  })()
  hexcolor.R = hexcolor.value ? Hex(hexcolor.value.substr(0, 2)) : null
  hexcolor.G = hexcolor.value ? Hex(hexcolor.value.substr(2, 2)) : null
  hexcolor.B = hexcolor.value ? Hex(hexcolor.value.substr(4, 2)) : null
  return hexcolor
}
HexColor.prototype = Object.create(Hex.prototype)
HexColor.prototype.constructor = HexColor
delete HexColor.prototype.toEightBit
HexColor.prototype.toEightBitColor = function () {
  const R = this.R.toEightBit()
  const G = this.G.toEightBit()
  const B = this.B.toEightBit()
  return EightBitColor(R, G, B)
}

function Contrast (foreground, background) {
  const contrast = Object.create(Contrast.prototype)
  contrast.foreground = HexColor(foreground)
  contrast.background = HexColor(background)
  contrast.value = (() => {
    const foreground = contrast.foreground.toEightBitColor().luminosity()
    const background = contrast.background.toEightBitColor().luminosity()
    const L1 = Math.max(foreground, background)
    const L2 = Math.min(foreground, background)
    return (L1 + OFFSET) / (L2 + OFFSET)
  })()
  return contrast
}
Contrast.prototype.valueOf = function () {
  return this.value
}
Contrast.prototype.inspect = function () {
  return `Contrast(${this.value})`
}

module.exports = {
  FULL_SCALE_VALUE,
  OFFSET,
  R_COEFFICIENT,
  G_COEFFICIENT,
  B_COEFFICIENT,
  EightBit,
  EightBitColor,
  Hex,
  HexColor,
  Contrast
}
