import { EightBit } from "../src/lib/index.mjs";
import { THRESHOLD } from "./util.mjs";
import { inspect } from "util";

describe("EightBit", () => {
  test("constructor", () => {
    expect(EightBit(128).value).toEqual(128);
  });
  test("valueOf", () => {
    expect(EightBit(128).valueOf()).toEqual(128);
  });
  test("inspect", () => {
    expect(inspect(EightBit(128))).toEqual("EightBit(128)");
  });
  test("linearize", () => {
    expect(
      Math.abs(EightBit(128).linearize() - 0.21586050011389926)
    ).toBeLessThan(THRESHOLD);
  });
  test("toHex", () => {
    expect(inspect(EightBit(128).toHex())).toEqual("#80");
  });
});
