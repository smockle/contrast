# contrast

[![npm](https://img.shields.io/npm/v/@smockle/contrast.svg)](https://www.npmjs.com/package/@smockle/contrast)
[![Build Status](https://travis-ci.com/smockle/contrast.svg?branch=master)](https://travis-ci.com/smockle/contrast)
[![Build Status](https://smockle.visualstudio.com/contrast/_apis/build/status/smockle.contrast)](https://smockle.visualstudio.com/contrast/_build/latest?definitionId=1)
[![codecov](https://codecov.io/gh/smockle/contrast/branch/master/graph/badge.svg)](https://codecov.io/gh/smockle/contrast)
[![Known Vulnerabilities](https://snyk.io/test/github/smockle/contrast/badge.svg)](https://snyk.io/test/github/smockle/contrast)
[![Greenkeeper badge](https://badges.greenkeeper.io/smockle/contrast.svg)](https://greenkeeper.io/)

Analyse luminosity contrast ratio

## Installation

Run `npm install --save @smockle/contrast` to add `contrast` to your project.

## Usage

### Shell

```Bash
# Hexadecimal colors
$ contrast "#000000" "#FFFFFF"

# Shorthand hexadecimal colors
$ contrast "#000" "#FC0"
  # equivalent to `$ contrast "#000000" "#FFCC00"`
$ contrast "#000" "#F8"
  # equivalent to `$ contrast "#000000" "#F8F8F8"`

# Named colors
$ contrast black white
```

### JavaScript & TypeScript

```JavaScript
const { Contrast } = require('@smockle/contrast')

// Hexadecimal colors
new Contrast('#000000', '#FFFFFF')

// Shorthand hexadecimal colors
new Contrast('#000', '#FC0')
  // equivalent to `new Contrast('#000000', '#FFCC00')`
new Contrast('#000', '#F8')
  // equivalent to `new Contrast('#000000', '#F8F8F8')`

// Named colors
new Contrast('black', 'white')
```

## Testing

`contrast` includes several unit tests. After cloning the `contrast` repo locally, run `npm install` in the project folder to install dependencies. Run `npm test` to execute the tests.

## References

- http://juicystudio.com/article/luminositycontrastratioalgorithm.php
- https://www.w3.org/TR/WCAG20/#contrast-ratiodef
- https://www.w3.org/TR/WCAG20/#relativeluminancedef
- https://www.w3.org/Graphics/Color/sRGB.html
- https://stackoverflow.com/a/12894053/1923134
