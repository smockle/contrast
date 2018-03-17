import { Hex } from "../src/lib/index.mjs";
import { inspect } from "util";

describe("Hex", () => {
  test("constructor, with #", () => {
    expect(Hex("#FF").value).toEqual("FF");
  });
  test("constructor, without #", () => {
    expect(Hex("FF").value).toEqual("FF");
  });
  test("constructor, lowercase", () => {
    expect(Hex("ff").value).toEqual("FF");
  });
  test("constructor, no args", () => {
    expect(Hex().value).toEqual(null);
  });
  test("valueOf", () => {
    expect(Hex("#80").valueOf()).toEqual("80");
  });
  test("inspect", () => {
    expect(inspect(Hex("#80"))).toEqual("#80");
  });
  test("toEightBit", () => {
    expect(
      Hex("#80")
        .toEightBit()
        .valueOf()
    ).toEqual(128);
  });
});
