import { Contrast } from "../lib/index";
import { THRESHOLD } from "./util";
import { inspect } from "util";

describe("Contrast", () => {
  test("constructor", () => {
    expect(new Contrast("#0080FF", "#FFFFFF").foreground.valueOf()).toEqual(
      "0080FF"
    );
  });
  test("constructor, value", () => {
    expect(
      Math.abs(new Contrast("#0080FF", "#FFFFFF").value - 3.796322871580839)
    ).toBeLessThan(THRESHOLD);
  });
  test("valueOf", () => {
    expect(
      Math.abs(new Contrast("#0080FF", "#FFFFFF").valueOf() - 3.796322871580839)
    ).toBeLessThan(THRESHOLD);
  });
  test("inspect", () => {
    expect(inspect(new Contrast("#0080FF", "#FFFFFF"))).toEqual(
      "3.796322871580839:1"
    );
  });
});
