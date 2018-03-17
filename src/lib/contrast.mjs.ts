import { HexColor } from "./hexcolor.mjs";

export interface Contrast {
  /** The foreground color, e.g. "#FFFFFF". */
  foreground: HexColor;
  /** The background color, e.g. "#FFFFFF". */
  background: HexColor;
  /** The luminosity contrast ratio, e.g. 4.5. */
  value: number;
  /** Returns the luminosity contrast ratio. */
  valueOf(this: Contrast): number;
  /** Returns a formatted representation of the luminosity contrast ratio, e.g. "4.5:1". */
  inspect(this: Contrast): string;
}

export function Contrast(foreground: string, background: string) {
  const contrast: Contrast = Object.create(Contrast.prototype);
  contrast.foreground = HexColor(foreground);
  contrast.background = HexColor(background);
  contrast.value = (() => {
    const foreground: number = contrast.foreground
      .toEightBitColor()
      .luminosity();
    const background: number = contrast.background
      .toEightBitColor()
      .luminosity();
    const L1: number = Math.max(foreground, background);
    const L2: number = Math.min(foreground, background);
    const OFFSET: number = 0.05;
    return (L1 + OFFSET) / (L2 + OFFSET);
  })();
  return contrast;
}

(Contrast.prototype as Contrast).valueOf = function(this: Contrast) {
  return this.value;
};

(Contrast.prototype as Contrast).inspect = function(this: Contrast) {
  return `${this.value}:1`;
};
