import { HexColor } from "../lib/index.js";
import { inspect } from "util";

describe("HexColor", () => {
  test("constructor", () => {
    expect((new HexColor("#0080FF").G || {}).valueOf()).toEqual("80");
  });
  test("constructor, two-length", () => {
    expect(new HexColor("#80").value).toEqual("808080");
  });
  test("constructor, three-length", () => {
    expect(new HexColor("#FC0").value).toEqual("FFCC00");
  });
  test("constructor, six-length", () => {
    expect(new HexColor("#0080FF").value).toEqual("0080FF");
  });
  test("constructor, black", () => {
    expect(new HexColor("black").value).toEqual("000000");
  });
  test("constructor, white", () => {
    expect(new HexColor("white").value).toEqual("FFFFFF");
  });
  test("constructor, no args", () => {
    expect(new HexColor().value).toEqual(null);
  });
  test("valueOf, inherited", () => {
    expect(new HexColor("#0080FF").valueOf()).toEqual("0080FF");
  });
  test("inspect, inherited", () => {
    expect(inspect(new HexColor("#0080FF"))).toEqual("#0080FF");
  });
  test("toEightBit, removed", () => {
    expect(Object.getPrototypeOf(new HexColor("#0080FF"))).not.toHaveProperty(
      "toEightBit"
    );
  });
  test("toEightBitColor", () => {
    expect(new HexColor("#0080FF").toEightBitColor().valueOf()).toEqual({
      R: 0,
      G: 128,
      B: 255,
    });
  });
  test("toEightBitColor", () => {
    expect(new HexColor(null).toEightBitColor().valueOf()).toEqual({
      R: 0,
      G: 0,
      B: 0,
    });
  });
});
