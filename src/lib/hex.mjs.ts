import { EightBit } from "./eightbit.mjs";
const inspect = Symbol.for("nodejs.util.inspect.custom");

/**
 * Pads the provided string with another string (repeated, if needed) so that the resulting string reaches the given length. The padding is applied from the start (left) of the provided string.
 * @param string The provided string.
 * @param targetLength The length of the resulting string once the provided string has been padded. If the value is lower than the provided string's length, the provided string will be returned as is.
 * @param padString The string to pad the provided string with. The default value for this parameter is " " (U+0020).
 */
function padStart(
  string: string,
  targetLength: number,
  padString: string
): string {
  if (string.toString().length >= targetLength) {
    return string;
  }
  return padStart(padString.concat(string), targetLength, padString);
}

export class Hex {
  /** The string representation of a hexadecimal value between 0 ("00") and 255 ("FF"). */
  value: string | null;

  constructor(value?: string | null) {
    this.value = value
      ? padStart(
          String(value)
            .replace("#", "")
            .toUpperCase(),
          2,
          "0"
        )
      : null;
  }
  /** Returns the current value, e.g. "FF". */
  valueOf(): string | null {
    return this.value;
  }
  /** Returns a formatted representation of the current value, e.g. "#FF". */
  inspect(): string {
    return `#${this.value}`;
  }
  /** Returns a formatted representation of the current value, e.g. "#FF". */
  [inspect](): string {
    return `#${this.value}`;
  }
  /** Returns an EightBit with the current value, e.g. EightBit(255). */
  toEightBit(): EightBit {
    const value: number | null =
      typeof this.value === "string" ? parseInt(this.value, 16) : null;
    return new EightBit(value);
  }
}
