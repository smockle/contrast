require = require("esm")(module);

const { Contrast } = require("./contrast.mjs");
const { EightBit } = require("./eightbit.mjs");
const { EightBitColor } = require("./eightbitcolor.mjs");
const { Hex } = require("./hex.mjs");
const { HexColor } = require("./hexcolor.mjs");

module.exports = {
  Contrast,
  EightBit,
  EightBitColor,
  Hex,
  HexColor
};
