import { inspect } from "node:util";
import { describe, test, expect } from "@jest/globals";
import { Contrast } from "../lib/index.js";

describe("Contrast", () => {
  test("constructor", () => {
    expect(new Contrast("#0080FF", "#FFFFFF").foreground.valueOf()).toEqual(
      "0080FF"
    );
  });
  test("constructor, value", () => {
    expect(Math.abs(new Contrast("#0080FF", "#FFFFFF").value)).toBeCloseTo(
      3.796322871580839
    );
  });
  test("valueOf", () => {
    expect(Math.abs(new Contrast("#0080FF", "#FFFFFF").valueOf())).toBeCloseTo(
      3.796322871580839
    );
  });
  test("inspect", () => {
    expect(inspect(new Contrast("#0080FF", "#FFFFFF"))).toEqual(
      "3.796322871580839:1"
    );
  });
});
