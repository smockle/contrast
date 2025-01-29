import { EightBit } from "./eightbit.js";
import { HexColor } from "./hexcolor.js";

export class EightBitColor {
  /** The current red value, e.g. EightBit(255). */
  R: EightBit;
  /** The current green value, e.g. EightBit(255). */
  G: EightBit;
  /** The current blue value, e.g. EightBit(255). */
  B: EightBit;

  constructor(
    R: EightBit | number | null,
    G: EightBit | number | null,
    B: EightBit | number | null
  ) {
    this.R = new EightBit(R);
    this.G = new EightBit(G);
    this.B = new EightBit(B);
  }
  /** Returns the current red, green and blue values, e.g. { R: 255, G: 255, B: 255 }. */
  valueOf(): { R: number; G: number; B: number } {
    const R: number = this.R.valueOf();
    const G: number = this.G.valueOf();
    const B: number = this.B.valueOf();
    return { R, G, B };
  }
  /** Returns a formatted representation of the current rgb value, e.g. "rgb(255, 255, 255)". */
  [Symbol.for("nodejs.util.inspect.custom")](): string {
    const R: number = this.R.valueOf();
    const G: number = this.G.valueOf();
    const B: number = this.B.valueOf();
    return `rgb(${R}, ${G}, ${B})`;
  }
  /** Returns the luminosity. */
  luminosity(): number {
    const R_COEFFICIENT: number = 0.2126;
    const G_COEFFICIENT: number = 0.7152;
    const B_COEFFICIENT: number = 0.0722;
    const R: number = this.R.linearize();
    const G: number = this.G.linearize();
    const B: number = this.B.linearize();
    return R_COEFFICIENT * R + G_COEFFICIENT * G + B_COEFFICIENT * B;
  }
  /** Returns a HexColor with the current value, e.g. Hex("#FFFFFF"). */
  toHexColor(): HexColor {
    const R: string | null = this.R.toHex().valueOf();
    const G: string | null = this.G.toHex().valueOf();
    const B: string | null = this.B.toHex().valueOf();
    return new HexColor(`#${R}${G}${B}`);
  }
}
