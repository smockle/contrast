// @ts-check
import { EightBit } from "../dist/lib";
import { THRESHOLD } from "./common.mjs";
import test from "tape";
import util from "util";

test("EightBit", t => {
  t.plan(5);
  t.equal(EightBit(128).value, 128, "constructor");
  t.equal(EightBit(128).valueOf(), 128, "valueOf");
  t.equal(util.inspect(EightBit(128)), "EightBit(128)", "inspect");
  t.ok(
    Math.abs(EightBit(128).linearize() - 0.21586050011389926) < THRESHOLD,
    "linearize"
  );
  t.equal(util.inspect(EightBit(128).toHex()), "#80", "toHex");
});
