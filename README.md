# contrast

[![npm](https://img.shields.io/npm/v/@smockle/contrast.svg)](https://www.npmjs.com/package/@smockle/contrast)
[![Publish Workflow](https://github.com/smockle/contrast/workflows/Publish/badge.svg)](https://github.com/smockle/contrast/actions)
[![codecov](https://codecov.io/gh/smockle/contrast/branch/master/graph/badge.svg)](https://codecov.io/gh/smockle/contrast)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=smockle/contrast)](https://dependabot.com)

Analyse luminosity contrast ratio

## Installation

Run `npm install --save @smockle/contrast` to add `contrast` to your project.

## Usage

### Shell

```sh
# Hexadecimal colors
$ npx @smockle/contrast "#000000" "#FFFFFF"

# Shorthand hexadecimal colors
$ npx @smockle/contrast "#000" "#FC0"
  # equivalent to `$ contrast "#000000" "#FFCC00"`
$ npx @smockle/contrast "#000" "#F8"
  # equivalent to `$ contrast "#000000" "#F8F8F8"`

# Named colors
$ npx @smockle/contrast black white
```

### JavaScript & TypeScript

```TypeScript
import { Contrast } from "@smockle/contrast";

// Hexadecimal colors
new Contrast("#000000", "#FFFFFF");

// Shorthand hexadecimal colors
new Contrast("#000", "#FC0");
  // equivalent to `new Contrast("#000000", "#FFCC00")`
new Contrast("#000", "#F8");
  // equivalent to `new Contrast("#000000", "#F8F8F8")`

// Named colors
new Contrast("black", "white");
```

## Testing

`contrast` includes several unit tests. After cloning the `contrast` repo locally, run `npm install` in the project folder to install dependencies. Run `npm test` to execute the tests.

## References

- http://juicystudio.com/article/luminositycontrastratioalgorithm.php
- https://www.w3.org/TR/WCAG20/#contrast-ratiodef
- https://www.w3.org/TR/WCAG20/#relativeluminancedef
- https://www.w3.org/Graphics/Color/sRGB.html
- https://stackoverflow.com/a/12894053/1923134
