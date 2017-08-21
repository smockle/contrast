import HexColor from './hexcolor'

function Contrast (foreground, background) {
  const contrast = Object.create(Contrast.prototype)
  contrast.foreground = HexColor(foreground)
  contrast.background = HexColor(background)
  contrast.value = (() => {
    const foreground = contrast.foreground.toEightBitColor().luminosity()
    const background = contrast.background.toEightBitColor().luminosity()
    const L1 = Math.max(foreground, background)
    const L2 = Math.min(foreground, background)
    const OFFSET = 0.05
    return (L1 + OFFSET) / (L2 + OFFSET)
  })()
  return contrast
}

Contrast.prototype.valueOf = function () {
  return this.value
}

Contrast.prototype.inspect = function () {
  return `${this.value}:1`
}

export default Contrast
