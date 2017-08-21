#!/usr/bin/env node --harmony -r @std/esm
import { Contrast } from '../lib/index'
import fs from 'fs'
import path from 'path'

const foreground = process.argv.slice(2)[0]
const background = process.argv.slice(2)[1]

function getVersion () {
  const filename = path.resolve('./package.json')
  const raw = fs.readFileSync(filename, 'utf8')
  if (!raw) {
    return
  }
  const packageInfo = JSON.parse(raw)
  return packageInfo.version
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
  $ contrast black white`)
} else {
  const contrast = Contrast(foreground, background)
  console.log(contrast)
}
