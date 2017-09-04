require = require('@std/esm')(module)
module.exports = {
  Contrast: require('./contrast.mjs').default,
  EightBit: require('./eightbit.mjs').default,
  EightBitColor: require('./eightbitcolor.mjs').default,
  Hex: require('./hex.mjs').default,
  HexColor: require('./hexcolor.mjs').default
}
