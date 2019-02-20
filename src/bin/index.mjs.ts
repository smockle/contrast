#!/usr/bin/env node
declare global {
  interface ImportMeta {
    url: string;
  }
}

import { Contrast } from "../lib/index.mjs";
import { existsSync, readFileSync } from "fs";
import { inspect } from "util";
import * as url from "url";
const { URL } = url;

const foreground: string = process.argv.slice(2)[0];
const background: string = process.argv.slice(2)[1];

function getVersion(): string | void {
  const path: url.URL = new URL("package.json", import.meta.url);
  if (!existsSync(path)) {
    return;
  }
  const raw: string = readFileSync(path, { encoding: "utf-8" });
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
  const contrast = new Contrast(foreground, background);
  console.log(inspect(contrast));
}
