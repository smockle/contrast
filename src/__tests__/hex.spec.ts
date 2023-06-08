import { Hex } from "../lib/index.js";
import { inspect } from "util";

describe("Hex", () => {
  test("constructor, with #", () => {
    expect(new Hex("#FF").value).toEqual("FF");
  });
  test("constructor, without #", () => {
    expect(new Hex("FF").value).toEqual("FF");
  });
  test("constructor, lowercase", () => {
    expect(new Hex("ff").value).toEqual("FF");
  });
  test("constructor, no args", () => {
    expect(new Hex().value).toEqual(null);
  });
  test("valueOf", () => {
    expect(new Hex("#80").valueOf()).toEqual("80");
  });
  test("inspect", () => {
    expect(inspect(new Hex("#80"))).toEqual("#80");
  });
  test("toEightBit", () => {
    expect(new Hex("#80").toEightBit().valueOf()).toEqual(128);
  });
  test("toEightBit", () => {
    expect(new Hex(null).toEightBit().valueOf()).toEqual(0);
  });
});
