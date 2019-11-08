import { EightBit, EightBitColor } from "../lib/index";
import { THRESHOLD } from "./util";
import { inspect } from "util";

describe("EightBitColor", () => {
  test("constructor, with Number", () => {
    expect(new EightBitColor(0, 128, 255).G.valueOf()).toEqual(128);
  });
  test("constructor, with EightBit", () => {
    expect(
      new EightBitColor(
        new EightBit(0),
        new EightBit(128),
        new EightBit(255)
      ).G.valueOf()
    ).toEqual(128);
  });
  test("valueOf", () => {
    expect(new EightBitColor(0, 128, 255).valueOf()).toEqual({
      R: 0,
      G: 128,
      B: 255
    });
  });
  test("inspect", () => {
    expect(inspect(new EightBitColor(0, 128, 255))).toEqual("rgb(0, 128, 255)");
  });
  test("luminosity", () => {
    expect(
      Math.abs(
        new EightBitColor(0, 128, 255).luminosity() - 0.22658342968146072
      )
    ).toBeLessThan(THRESHOLD);
  });
  test("toHexColor", () => {
    expect(inspect(new EightBitColor(0, 128, 255).toHexColor())).toEqual(
      "#0080FF"
    );
  });
});
