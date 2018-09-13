import { Contrast } from "../src/lib/index.mjs";
import { THRESHOLD } from "./util.mjs";
import { inspect } from "util";

describe("Contrast", () => {
  test("constructor", () => {
    expect(Contrast("#0080FF", "#FFFFFF").foreground.valueOf()).toEqual(
      "0080FF"
    );
  });
  test("constructor, value", () => {
    expect(
      Math.abs(Contrast("#0080FF", "#FFFFFF").value - 3.796322871580839)
    ).toBeLessThan(THRESHOLD);
  });
  test("valueOf", () => {
    expect(
      Math.abs(Contrast("#0080FF", "#FFFFFF").valueOf() - 3.796322871580839)
    ).toBeLessThan(THRESHOLD);
  });
  test("inspect", () => {
    expect(inspect(Contrast("#0080FF", "#FFFFFF"))).toEqual(
      "3.796322871580839:1"
    );
  });
});