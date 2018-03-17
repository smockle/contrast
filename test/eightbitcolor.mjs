// @ts-check
import { EightBit, EightBitColor } from "../dist/lib.mjs";
import { THRESHOLD } from "./common.mjs";
import test from "tape";
import util from "util";

test("EightBitColor", t => {
  t.plan(6);
  t.equal(
    EightBitColor(0, 128, 255).G.valueOf(),
    128,
    "constructor, with Number"
  );
  t.equal(
    EightBitColor(EightBit(0), EightBit(128), EightBit(255)).G.valueOf(),
    128,
    "constructor, with EightBit"
  );
  t.deepEqual(
    EightBitColor(0, 128, 255).valueOf(),
    { R: 0, G: 128, B: 255 },
    "valueOf"
  );
  t.equal(
    util.inspect(EightBitColor(0, 128, 255)),
    "rgb(0, 128, 255)",
    "inspect"
  );
  t.ok(
    Math.abs(EightBitColor(0, 128, 255).luminosity() - 0.22658342968146072) <
      THRESHOLD,
    "luminosity"
  );
  t.equal(
    util.inspect(EightBitColor(0, 128, 255).toHexColor()),
    "#0080FF",
    "toHexColor"
  );
});
