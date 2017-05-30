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
