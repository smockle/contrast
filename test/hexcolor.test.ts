import assert from "node:assert/strict";
import { inspect } from "node:util";
import { describe, test } from "node:test";
import { HexColor } from "../src/lib/index.js";

describe("HexColor", () => {
  test("constructor", () => {
    assert.equal((new HexColor("#0080FF").G || {}).valueOf(), "80");
  });
  test("constructor, two-length", () => {
    assert.equal(new HexColor("#80").value, "808080");
  });
  test("constructor, three-length", () => {
    assert.equal(new HexColor("#FC0").value, "FFCC00");
  });
  test("constructor, six-length", () => {
    assert.equal(new HexColor("#0080FF").value, "0080FF");
  });
  test("constructor, black", () => {
    assert.equal(new HexColor("black").value, "000000");
  });
  test("constructor, white", () => {
    assert.equal(new HexColor("white").value, "FFFFFF");
  });
  test("constructor, no args", () => {
    assert.equal(new HexColor().value, null);
  });
  test("valueOf, inherited", () => {
    assert.equal(new HexColor("#0080FF").valueOf(), "0080FF");
  });
  test("inspect, inherited", () => {
    assert.equal(inspect(new HexColor("#0080FF")), "#0080FF");
  });
  test("toEightBit, removed", () => {
    assert.equal(
      Object.hasOwn(
        Object.getPrototypeOf(new HexColor("#0080FF")),
        "toEightBit"
      ),
      false
    );
  });
  test("toEightBitColor", () => {
    assert.deepEqual(new HexColor("#0080FF").toEightBitColor().valueOf(), {
      R: 0,
      G: 128,
      B: 255,
    });
  });
  test("toEightBitColor", () => {
    assert.deepEqual(new HexColor(null).toEightBitColor().valueOf(), {
      R: 0,
      G: 0,
      B: 0,
    });
  });
});
