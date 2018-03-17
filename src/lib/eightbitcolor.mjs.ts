import { EightBit } from "./eightbit.mjs";
import { HexColor } from "./hexcolor.mjs";

export interface EightBitColor {
  /** The current red value, e.g. EightBit(255). */
  R: EightBit;
  /** The current green value, e.g. EightBit(255). */
  G: EightBit;
  /** The current blue value, e.g. EightBit(255). */
  B: EightBit;
  /** Returns the current red, green and blue values, e.g. { R: 255, G: 255, B: 255 }. */
  valueOf(this: EightBitColor): { R: number; G: number; B: number };
  /** Returns a formatted representation of the current rgb value, e.g. "rgb(255, 255, 255)". */
  inspect(this: EightBitColor): string;
  /** Returns the luminosity. */
  luminosity(this: EightBitColor): number;
  /** Returns a HexColor with the current value, e.g. Hex("#FFFFFF"). */
  toHexColor(this: EightBitColor): HexColor;
}

export function EightBitColor(
  R: number | null,
  G: number | null,
  B: number | null
): EightBitColor {
  const eightbitcolor: EightBitColor = Object.create(EightBitColor.prototype);
  eightbitcolor.R = EightBit(R);
  eightbitcolor.G = EightBit(G);
  eightbitcolor.B = EightBit(B);
  return eightbitcolor;
}

(EightBitColor.prototype as EightBitColor).valueOf = function(
  this: EightBitColor
): { R: number; G: number; B: number } {
  const R: number = this.R.valueOf();
  const G: number = this.G.valueOf();
  const B: number = this.B.valueOf();
  return { R, G, B };
};

(EightBitColor.prototype as EightBitColor).inspect = function(
  this: EightBitColor
): string {
  const R: number = this.R.valueOf();
  const G: number = this.G.valueOf();
  const B: number = this.B.valueOf();
  return `rgb(${R}, ${G}, ${B})`;
};

(EightBitColor.prototype as EightBitColor).luminosity = function(
  this: EightBitColor
): number {
  const R_COEFFICIENT: number = 0.2126;
  const G_COEFFICIENT: number = 0.7152;
  const B_COEFFICIENT: number = 0.0722;
  const R: number = this.R.linearize();
  const G: number = this.G.linearize();
  const B: number = this.B.linearize();
  return R_COEFFICIENT * R + G_COEFFICIENT * G + B_COEFFICIENT * B;
};

(EightBitColor.prototype as EightBitColor).toHexColor = function(
  this: EightBitColor
): HexColor {
  const R: string | null = this.R.toHex().valueOf();
  const G: string | null = this.G.toHex().valueOf();
  const B: string | null = this.B.toHex().valueOf();
  return HexColor(`#${R}${G}${B}`);
};
