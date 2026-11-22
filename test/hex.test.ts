import assert from "node:assert/strict";
import { inspect } from "node:util";
import { describe, test } from "node:test";
import { Hex } from "../src/lib/index.js";

describe("Hex", () => {
  test("constructor, with #", () => {
    assert.equal(new Hex("#FF").value, "FF");
  });
  test("constructor, without #", () => {
    assert.equal(new Hex("FF").value, "FF");
  });
  test("constructor, lowercase", () => {
    assert.equal(new Hex("ff").value, "FF");
  });
  test("constructor, no args", () => {
    assert.equal(new Hex().value, null);
  });
  test("valueOf", () => {
    assert.equal(new Hex("#80").valueOf(), "80");
  });
  test("inspect", () => {
    assert.equal(inspect(new Hex("#80")), "#80");
  });
  test("toEightBit", () => {
    assert.equal(new Hex("#80").toEightBit().valueOf(), 128);
  });
  test("toEightBit", () => {
    assert.equal(new Hex(null).toEightBit().valueOf(), 0);
  });
});
