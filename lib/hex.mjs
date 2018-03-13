import EightBit from "./eightbit";

function padStart(string, targetLength, padString) {
  if (string.toString().length >= targetLength) {
    return string;
  }
  return padStart((padString || " ").concat(string), targetLength, padString);
}

function Hex(value) {
  const hex = Object.create(Hex.prototype);
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

Hex.prototype.valueOf = function() {
  return this.value;
};

Hex.prototype.inspect = function() {
  return `#${this.value}`;
};

Hex.prototype.toEightBit = function() {
  const value = parseInt(this.value, 16);
  return EightBit(value);
};

export default Hex;
