import { inspect } from "node:util";
import { describe, test, expect } from "@jest/globals";
import { EightBit } from "../lib/index.js";

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
    expect(Math.abs(new EightBit(128).linearize())).toBeCloseTo(
      0.21586050011389926
    );
  });
  test("toHex", () => {
    expect(inspect(new EightBit(128).toHex())).toEqual("#80");
  });
});
