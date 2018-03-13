import Hex from "./hex";
import EightBitColor from "./eightbitcolor";

function HexColor(value) {
  const hexcolor = Object.create(HexColor.prototype);
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

HexColor.prototype = Object.create(Hex.prototype);
HexColor.prototype.constructor = HexColor;
delete HexColor.prototype.toEightBit;

HexColor.prototype.toEightBitColor = function() {
  const R = this.R.toEightBit();
  const G = this.G.toEightBit();
  const B = this.B.toEightBit();
  return EightBitColor(R, G, B);
};

export default HexColor;
