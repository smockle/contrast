import { EightBit } from "./eightbit.mjs";

export interface Hex {
  /** The string representation of a hexadecimal value between 0 ("00") and 255 ("FF"). */
  value: string | null;
  /** Returns the current value, e.g. "FF". */
  valueOf(this: Hex): string | null;
  /** Returns a formatted representation of the current value, e.g. "#FF". */
  inspect(this: Hex): string;
  /** Returns an EightBit with the current value, e.g. EightBit(255). */
  toEightBit(this: Hex): EightBit;
}

/**
 * Pads the provided string with another string (repeated, if needed) so that the resulting string reaches the given length. The padding is applied from the start (left) of the provided string.
 * @param string The provided string.
 * @param targetLength The length of the resulting string once the provided string has been padded. If the value is lower than the provided string's length, the provided string will be returned as is.
 * @param padString The string to pad the provided string with. The default value for this parameter is " " (U+0020).
 */
function padStart(
  string: string,
  targetLength: number,
  padString: string = " "
): string {
  if (string.toString().length >= targetLength) {
    return string;
  }
  return padStart(padString.concat(string), targetLength, padString);
}

export function Hex(value?: string | null): Hex {
  const hex: Hex = Object.create(Hex.prototype);
  hex.value = value
    ? padStart(
        String(value)
          .replace("#", "")
          .toUpperCase(),
        2,
        "0"
      )
    : null;
  return hex;
}

(Hex.prototype as Hex).valueOf = function(this: Hex): string | null {
  return this.value;
};

(Hex.prototype as Hex).inspect = function(this: Hex): string {
  return `#${this.value}`;
};

(Hex.prototype as Hex).toEightBit = function(this: Hex): EightBit {
  const value: number | null =
    typeof this.value === "string" ? parseInt(this.value, 16) : null;
  return EightBit(value);
};
