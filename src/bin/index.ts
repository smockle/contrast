#!/usr/bin/env node --experimental-modules --es-module-specifier-resolution=node --no-warnings
import { Contrast } from '../lib/index';
import { existsSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { inspect } from 'util';

const foreground: string = process.argv.slice(2)[0];
const background: string = process.argv.slice(2)[1];

function getVersion(): string | void {
  const path = resolve(process.cwd(), 'package.json');
  if (!existsSync(path)) {
    return;
  }
  const raw: string = readFileSync(path, { encoding: 'utf-8' });
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
