import assert from "node:assert/strict";
import { inspect } from "node:util";
import { describe, test } from "node:test";
import { EightBit } from "../src/lib/index.js";

describe("EightBit", () => {
  test("constructor", () => {
    assert.equal(new EightBit(128).value, 128);
  });
  test("valueOf", () => {
    assert.equal(new EightBit(128).valueOf(), 128);
  });
  test("inspect", () => {
    assert.equal(inspect(new EightBit(128)), "EightBit(128)");
  });
  test("linearize", () => {
    assert.ok(
      Math.abs(new EightBit(128).linearize() - 0.21586050011389926) <
        Number.EPSILON
    );
  });
  test("toHex", () => {
    assert.equal(inspect(new EightBit(128).toHex()), "#80");
  });
});
