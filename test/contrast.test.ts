import assert from "node:assert/strict";
import { inspect } from "node:util";
import { describe, test } from "node:test";
import { Contrast } from "../src/lib/index.js";

describe("Contrast", () => {
  test("constructor", () => {
    assert.equal(
      new Contrast("#0080FF", "#FFFFFF").foreground.valueOf(),
      "0080FF"
    );
  });
  test("constructor, value", () => {
    assert.ok(
      Math.abs(
        new Contrast("#0080FF", "#FFFFFF").value - 3.796322871580839
      ) < Number.EPSILON
    );
  });
  test("valueOf", () => {
    assert.ok(
      Math.abs(
        new Contrast("#0080FF", "#FFFFFF").valueOf() - 3.796322871580839
      ) < Number.EPSILON
    );
  });
  test("inspect", () => {
    assert.equal(
      inspect(new Contrast("#0080FF", "#FFFFFF")),
      "3.796322871580839:1"
    );
  });
});
