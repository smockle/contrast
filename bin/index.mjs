#!/usr/bin/env node
import { Contrast } from "../lib/index";
import fs from "fs";
import path from "path";

// TODO: Replace this when `import.meta` is accepted: https://github.com/tc39/proposal-import-meta
// See also: https://github.com/standard-things/esm/issues/52
const dirname = __dirname;

const foreground = process.argv.slice(2)[0];
const background = process.argv.slice(2)[1];

function getVersion() {
  const filename = path.resolve(dirname, "../package.json");
  const raw = fs.readFileSync(filename, "utf8");
  if (!raw) {
    return;
  }
  const packageInfo = JSON.parse(raw);
  return packageInfo.version;
}

if (!foreground || !background) {
  console.log(`contrast
v${getVersion()}
Analyse luminosity contrast ratio

Usage:
  $ contrast foreground_color background_color

Examples:
  $ contrast "#000000" "#FFFFFF"
  $ contrast "#000" "#FFF"
  $ contrast "#333" "#F8"
  $ contrast black white`);
} else {
  const contrast = Contrast(foreground, background);
  console.log(contrast);
}
