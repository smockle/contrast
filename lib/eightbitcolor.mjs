import EightBit from "./eightbit";
import HexColor from "./hexcolor";

function EightBitColor(R, G, B) {
  const eightbitcolor = Object.create(EightBitColor.prototype);
  eightbitcolor.R = EightBit(R);
  eightbitcolor.G = EightBit(G);
  eightbitcolor.B = EightBit(B);
  return eightbitcolor;
}

EightBitColor.prototype.valueOf = function() {
  const R = this.R.valueOf();
  const G = this.G.valueOf();
  const B = this.B.valueOf();
  return { R, G, B };
};

EightBitColor.prototype.inspect = function() {
  const R = this.R.valueOf();
  const G = this.G.valueOf();
  const B = this.B.valueOf();
  return `rgb(${R}, ${G}, ${B})`;
};

EightBitColor.prototype.luminosity = function() {
  const R_COEFFICIENT = 0.2126;
  const G_COEFFICIENT = 0.7152;
  const B_COEFFICIENT = 0.0722;
  const R = this.R.linearize();
  const G = this.G.linearize();
  const B = this.B.linearize();
  return R_COEFFICIENT * R + G_COEFFICIENT * G + B_COEFFICIENT * B;
};

EightBitColor.prototype.toHexColor = function() {
  const R = this.R.toHex().valueOf();
  const G = this.G.toHex().valueOf();
  const B = this.B.toHex().valueOf();
  return HexColor(`#${R}${G}${B}`);
};

export default EightBitColor;
