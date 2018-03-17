import { Hex } from "./hex.mjs";
import { EightBit } from "./eightbit.mjs";
import { EightBitColor } from "./eightbitcolor.mjs";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type HexColor = Omit<Hex, "toEightBit"> & {
  /** The current red value, e.g. "#FF". */
  R: Hex | null;
  /** The current green value, e.g. "#FF". */
  G: Hex | null;
  /** The current blue value, e.g. "#FF". */
  B: Hex | null;
  /** Returns an EightBit with the current value, e.g. { R: 255, G: 255, B: 255 }. */
  toEightBitColor(this: HexColor): EightBitColor;
};

export function HexColor(value: string | null): HexColor {
  const hexcolor: HexColor = Object.create(HexColor.prototype);
  hexcolor.value = (() => {
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
  hexcolor.R = hexcolor.value ? Hex(hexcolor.value.substr(0, 2)) : null;
  hexcolor.G = hexcolor.value ? Hex(hexcolor.value.substr(2, 2)) : null;
  hexcolor.B = hexcolor.value ? Hex(hexcolor.value.substr(4, 2)) : null;
  return hexcolor;
}

HexColor.prototype = Object.create(Hex.prototype) as Hex;
(HexColor.prototype as Hex).constructor = HexColor;
delete (HexColor.prototype as Hex).toEightBit;

(HexColor.prototype as HexColor).toEightBitColor = function(
  this: HexColor
): EightBitColor {
  const R: number | null = this.R ? this.R.toEightBit().valueOf() : null;
  const G: number | null = this.G ? this.G.toEightBit().valueOf() : null;
  const B: number | null = this.B ? this.B.toEightBit().valueOf() : null;
  return EightBitColor(R, G, B);
};
