[![npm](https://img.shields.io/npm/v/@smockle/contrast.svg)](https://www.npmjs.com/package/@smockle/contrast)
[![Build Status](https://travis-ci.org/smockle/contrast.svg?branch=master)](https://travis-ci.org/smockle/contrast)
[![Coverage Status](https://coveralls.io/repos/github/smockle/contrast/badge.svg?branch=master)](https://coveralls.io/github/smockle/contrast?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/smockle/contrast/badge.svg)](https://snyk.io/test/github/smockle/contrast)
[![Greenkeeper badge](https://badges.greenkeeper.io/smockle/contrast.svg)](https://greenkeeper.io/)

# contrast

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

### JavaScript
```JavaScript
const { Contrast } = require('@smockle/contrast')

// Hexadecimal colors
Contrast('#000000', '#FFFFFF')

// Shorthand hexadecimal colors
Contrast('#000', '#FC0')
  // equivalent to `Contrast('#000000', '#FFCC00')`
Contrast('#000', '#F8')
  // equivalent to `Contrast('#000000', '#F8F8F8')`

// Named colors
Contrast('black', 'white')
```

## Testing

`contrast` includes several unit tests. After cloning the `contrast` repo locally, run `npm install` in the project folder to install dependencies. Run `npm test` to execute the tests.

## References

- http://juicystudio.com/article/luminositycontrastratioalgorithm.php
- https://www.w3.org/TR/WCAG20/#contrast-ratiodef
- https://www.w3.org/TR/WCAG20/#relativeluminancedef
- https://www.w3.org/Graphics/Color/sRGB.html
- https://stackoverflow.com/a/12894053/1923134
