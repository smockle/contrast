// @ts-check
import { Contrast } from "../dist/lib";
import { THRESHOLD } from "./common.mjs";
import test from "tape";
import util from "util";

test("Contrast", t => {
  t.plan(4);
  t.equal(
    Contrast("#0080FF", "#FFFFFF").foreground.valueOf(),
    "0080FF",
    "constructor"
  );
  t.ok(
    Math.abs(Contrast("#0080FF", "#FFFFFF").value - 3.796322871580839) <
      THRESHOLD,
    "constructor, value"
  );
  t.ok(
    Math.abs(Contrast("#0080FF", "#FFFFFF").valueOf() - 3.796322871580839) <
      THRESHOLD,
    "valueOf"
  );
  t.equal(
    util.inspect(Contrast("#0080FF", "#FFFFFF")),
    "3.796322871580839:1",
    "inspect"
  );
});
