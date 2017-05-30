const { Contrast } = require('./lib/')

const foreground = process.argv.slice(2)[0]
const background = process.argv.slice(2)[1]

if (!foreground || !background) {
  console.log(`contrast
v${process.env.npm_package_version}
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
