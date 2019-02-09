#!/usr/bin/env bash
set -eo pipefail

# Recursively rename '.js.ts' files in the 'dist' folder to '.js'.
find dist -name "*.js.js" -exec bash -c 'mv "${0}" $(echo "${0}" | perl -p -e "s/\.js\.js/\.js/g")' '{}' \;

# Recursively rename '.mjs.ts' files in the 'dist' folder to '.mjs'.
find dist -name "*.mjs.js" -exec bash -c 'mv "${0}" $(echo "${0}" | perl -p -e "s/\.mjs\.js/\.mjs/g")' '{}' \;

# Recursively rename '.js.d.ts' files in the 'dist' folder to '.d.ts'
find dist -name "*.js.d.ts" -exec bash -c 'mv "${0}" $(echo "${0}" | perl -p -e "s/\.js\.d\.ts/\.d\.ts/g")' '{}' \;
