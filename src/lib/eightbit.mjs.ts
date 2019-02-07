import { Hex } from "./hex.mjs";

export class EightBit implements EightBit {
  /** A number between 0 and 255. */
  value: number;

  constructor(value: EightBit | number | null) {
    this.value = Number(value);
  }
  /** Returns the current value, e.g. 255. */
  valueOf(): number {
    return this.value;
  }
  /** Returns a formatted representation of the current value, e.g. "EightBit(255)". */
  inspect(): string {
    return `EightBit(${this.value})`;
  }
  /** Convert from sRGB to linear RGB. */
  linearize(): number {
    /** The upper limit of the original range. */
    const SCALE: number = 255;
    /** The current value mapped to a 0 to 1 range, so 255 becomes 1. */
    const value: number = this.value / SCALE;
    return value <= 0.03928
      ? value / 12.92
      : Math.pow((value + 0.055) / 1.055, 2.4);
  }
  /** Returns a Hex with the current value, e.g. Hex("#FF"). */
  toHex(): Hex {
    const value = this.value.toString(16).toUpperCase();
    return new Hex(`#${value}`);
  }
}
