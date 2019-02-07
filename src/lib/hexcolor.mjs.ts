import { Hex } from "./hex.mjs";
import { EightBitColor } from "./eightbitcolor.mjs";

export class HexColor {
  /** The string representation of a hexadecimal value between 0 ("00") and 255 ("FF"). */
  value: string | null;
  /** The current red value, e.g. "#FF". */
  R: Hex | null;
  /** The current green value, e.g. "#FF". */
  G: Hex | null;
  /** The current blue value, e.g. "#FF". */
  B: Hex | null;

  constructor(value?: string | null) {
    this.value = (() => {
      if (!value) {
        return null;
      }
      const _value = (() => {
        switch (true) {
          // Special case for 'black'
          case String(value).toLowerCase() === "black":
            return "000000";
          // Special case for 'white'
          case String(value).toLowerCase() === "white":
            return "FFFFFF";
          default:
            return String(value).replace("#", "");
        }
      })();
      switch (_value.length) {
        // Special case for '#AB'
        case 2:
          return `${_value}${_value}${_value}`;
        // Special case for '#ABC'
        case 3:
          return `${_value[0]}${_value[0]}${_value[1]}${_value[1]}${_value[2]}${
            _value[2]
          }`;
        default:
          return _value;
      }
    })();
    this.R = this.value ? new Hex(this.value.substr(0, 2)) : null;
    this.G = this.value ? new Hex(this.value.substr(2, 2)) : null;
    this.B = this.value ? new Hex(this.value.substr(4, 2)) : null;
  }
  /** Returns the current value, e.g. "FF". */
  valueOf(): string | null {
    return this.value;
  }
  /** Returns a formatted representation of the current value, e.g. "#FF". */
  inspect(): string {
    return `#${this.value}`;
  }
  /** Returns an EightBit with the current value, e.g. { R: 255, G: 255, B: 255 }. */
  toEightBitColor(): EightBitColor {
    const R: number | null = this.R ? this.R.toEightBit().valueOf() : null;
    const G: number | null = this.G ? this.G.toEightBit().valueOf() : null;
    const B: number | null = this.B ? this.B.toEightBit().valueOf() : null;
    return new EightBitColor(R, G, B);
  }
}
