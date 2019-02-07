import { HexColor } from "./hexcolor.mjs";

export class Contrast {
  /** The foreground color, e.g. "#FFFFFF". */
  foreground: HexColor;
  /** The background color, e.g. "#FFFFFF". */
  background: HexColor;
  /** The luminosity contrast ratio, e.g. 4.5. */
  value: number;

  constructor(foreground: string, background: string) {
    this.foreground = new HexColor(foreground);
    this.background = new HexColor(background);
    this.value = (() => {
      const foreground: number = this.foreground.toEightBitColor().luminosity();
      const background: number = this.background.toEightBitColor().luminosity();
      const L1: number = Math.max(foreground, background);
      const L2: number = Math.min(foreground, background);
      const OFFSET: number = 0.05;
      return (L1 + OFFSET) / (L2 + OFFSET);
    })();
  }
  /** Returns the luminosity contrast ratio. */
  valueOf(): number {
    return this.value;
  }
  /** Returns a formatted representation of the luminosity contrast ratio, e.g. "4.5:1". */
  inspect(): string {
    return `${this.value}:1`;
  }
}
