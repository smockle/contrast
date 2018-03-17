import { EightBit, EightBitColor } from "../src/lib/index.mjs";
import { THRESHOLD } from "./util.mjs";
import { inspect } from "util";

describe("EightBitColor", () => {
  test("constructor, with Number", () => {
    expect(EightBitColor(0, 128, 255).G.valueOf()).toEqual(128);
  });
  test("constructor, with EightBit", () => {
    expect(
      EightBitColor(EightBit(0), EightBit(128), EightBit(255)).G.valueOf()
    ).toEqual(128);
  });
  test("valueOf", () => {
    expect(EightBitColor(0, 128, 255).valueOf()).toEqual({
      R: 0,
      G: 128,
      B: 255
    });
  });
  test("inspect", () => {
    expect(inspect(EightBitColor(0, 128, 255))).toEqual("rgb(0, 128, 255)");
  });
  test("luminosity", () => {
    expect(
      Math.abs(EightBitColor(0, 128, 255).luminosity() - 0.22658342968146072)
    ).toBeLessThan(THRESHOLD);
  });
  test("toHexColor", () => {
    expect(inspect(EightBitColor(0, 128, 255).toHexColor())).toEqual("#0080FF");
  });
});
