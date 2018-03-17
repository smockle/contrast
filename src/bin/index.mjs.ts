#!/usr/bin/env node
import { Contrast } from "../lib/index.mjs";
import { readFileSync } from "fs";
import { resolve } from "path";

// TODO: Replace this when `import.meta` is accepted: https://github.com/tc39/proposal-import-meta
// See also: https://github.com/standard-things/esm/issues/52
const dirname: string = __dirname;

const foreground: string = process.argv.slice(2)[0];
const background: string = process.argv.slice(2)[1];

function getVersion(): string | undefined {
  const filename: string = resolve(dirname, "../../package.json");
  const raw: string = readFileSync(filename, "utf8");
  if (!raw) {
    return;
  }
  const packageInfo: { version: string } = JSON.parse(raw);
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
