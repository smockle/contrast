// @ts-check
import { HexColor } from "../dist/lib/index.mjs";
import test from "tape";
import util from "util";

test("HexColor", t => {
  t.plan(11);
  t.equal(HexColor("#0080FF").G.valueOf(), "80", "constructor");
  t.equal(HexColor("#80").value, "808080", "constructor, two-length");
  t.equal(HexColor("#FC0").value, "FFCC00", "constructor, three-length");
  t.equal(HexColor("#0080FF").value, "0080FF", "constructor, six-length");
  t.equal(HexColor("black").value, "000000", "constructor, black");
  t.equal(HexColor("white").value, "FFFFFF", "constructor, white");
  t.equal(HexColor().value, null, "constructor, no args");
  t.equal(HexColor("#0080FF").valueOf(), "0080FF", "valueOf, inherited");
  t.equal(util.inspect(HexColor("#0080FF")), "#0080FF", "inspect, inherited");
  t.ok(
    !Object.getPrototypeOf(HexColor("#0080FF")).hasOwnProperty("toEightBit"),
    "toEightBit, removed"
  );
  t.deepEqual(
    HexColor("#0080FF")
      .toEightBitColor()
      .valueOf(),
    { R: 0, G: 128, B: 255 },
    "toEightBitColor"
  );
});
