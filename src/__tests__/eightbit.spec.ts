import { EightBit } from "../lib/index";
import { inspect } from "util";

/** Tolerance for comparing floating point numbers. */
export const THRESHOLD: number = 0.000001;

describe("EightBit", () => {
  test("constructor", () => {
    expect(new EightBit(128).value).toEqual(128);
  });
  test("valueOf", () => {
    expect(new EightBit(128).valueOf()).toEqual(128);
  });
  test("inspect", () => {
    expect(inspect(new EightBit(128))).toEqual("EightBit(128)");
  });
  test("linearize", () => {
    expect(
      Math.abs(new EightBit(128).linearize() - 0.21586050011389926)
    ).toBeLessThan(THRESHOLD);
  });
  test("toHex", () => {
    expect(inspect(new EightBit(128).toHex())).toEqual("#80");
  });
});
