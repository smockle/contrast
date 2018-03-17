import { Hex } from "./hex.mjs";

export interface EightBit {
  /** A number between 0 and 255. */
  value: number;
  /** Returns the current value, e.g. 255. */
  valueOf(this: EightBit): number;
  /** Returns a formatted representation of the current value, e.g. "EightBit(255)". */
  inspect(this: EightBit): string;
  /** Convert from sRGB to linear RGB. */
  linearize(this: EightBit): number;
  /** Returns a Hex with the current value, e.g. Hex("#FF"). */
  toHex(this: EightBit): Hex;
}

export function EightBit(value: EightBit | number | null): EightBit {
  const eightbit: EightBit = Object.create(EightBit.prototype);
  eightbit.value = Number(value);
  return eightbit;
}

(EightBit.prototype as EightBit).valueOf = function(this: EightBit): number {
  return this.value;
};

(EightBit.prototype as EightBit).inspect = function(this: EightBit): string {
  return `EightBit(${this.value})`;
};

(EightBit.prototype as EightBit).linearize = function(this: EightBit): number {
  /** The upper limit of the original range. */
  const SCALE: number = 255;
  /** The current value mapped to a 0 to 1 range, so 255 becomes 1. */
  const value: number = this.value / SCALE;
  return value <= 0.03928
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
};

(EightBit.prototype as EightBit).toHex = function(this: EightBit): Hex {
  const value = this.value.toString(16).toUpperCase();
  return Hex(`#${value}`);
};
