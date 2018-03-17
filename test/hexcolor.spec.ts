import { HexColor } from "../src/lib/index.mjs";
import { inspect } from "util";

describe("HexColor", () => {
  test("constructor", () => {
    expect(HexColor("#0080FF").G.valueOf()).toEqual("80");
  });
  test("constructor, two-length", () => {
    expect(HexColor("#80").value).toEqual("808080");
  });
  test("constructor, three-length", () => {
    expect(HexColor("#FC0").value).toEqual("FFCC00");
  });
  test("constructor, six-length", () => {
    expect(HexColor("#0080FF").value).toEqual("0080FF");
  });
  test("constructor, black", () => {
    expect(HexColor("black").value).toEqual("000000");
  });
  test("constructor, white", () => {
    expect(HexColor("white").value).toEqual("FFFFFF");
  });
  test("constructor, no args", () => {
    expect(HexColor().value).toEqual(null);
  });
  test("valueOf, inherited", () => {
    expect(HexColor("#0080FF").valueOf()).toEqual("0080FF");
  });
  test("inspect, inherited", () => {
    expect(inspect(HexColor("#0080FF"))).toEqual("#0080FF");
  });
  test("toEightBit, removed", () => {
    expect(Object.getPrototypeOf(HexColor("#0080FF"))).not.toHaveProperty(
      "toEightBit"
    );
  });
  test("toEightBitColor", () => {
    expect(
      HexColor("#0080FF")
        .toEightBitColor()
        .valueOf()
    ).toEqual({ R: 0, G: 128, B: 255 });
  });
});
