import assert from "node:assert/strict";
import { inspect } from "node:util";
import { describe, test } from "node:test";
import { EightBit, EightBitColor } from "../src/lib/index.js";

describe("EightBitColor", () => {
  test("constructor, with Number", () => {
    assert.equal(new EightBitColor(0, 128, 255).G.valueOf(), 128);
  });
  test("constructor, with EightBit", () => {
    assert.equal(
      new EightBitColor(
        new EightBit(0),
        new EightBit(128),
        new EightBit(255)
      ).G.valueOf(),
      128
    );
  });
  test("valueOf", () => {
    assert.deepEqual(new EightBitColor(0, 128, 255).valueOf(), {
      R: 0,
      G: 128,
      B: 255,
    });
  });
  test("inspect", () => {
    assert.equal(
      inspect(new EightBitColor(0, 128, 255)),
      "rgb(0, 128, 255)"
    );
  });
  test("luminosity", () => {
    assert.ok(
      Math.abs(
        new EightBitColor(0, 128, 255).luminosity() -
          0.22658342968146072
      ) < Number.EPSILON
    );
  });
  test("toHexColor", () => {
    assert.equal(
      inspect(new EightBitColor(0, 128, 255).toHexColor()),
      "#0080FF"
    );
  });
});
