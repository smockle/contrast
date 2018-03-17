#!/usr/bin/env bash

# Abort if any command exits with error.
set -e

# By default, Bash takes the error status of the last item in pipeline.
# Instead, exit when any item in the pipeline fails.
set -o pipefail

# Recursively rename '.js.ts' files in the 'dist' folder to '.js'.
find dist -name "*.js.js" -exec bash -c 'mv "${0}" $(echo "${0}" | perl -p -e "s/\.js\.js/\.js/g")' '{}' \;

# Recursively rename '.mjs.ts' files in the 'dist' folder to '.mjs'.
find dist -name "*.mjs.js" -exec bash -c 'mv "${0}" $(echo "${0}" | perl -p -e "s/\.mjs\.js/\.mjs/g")' '{}' \;

# Recursively rename '.mjs.d.ts' files
find dist -name "*.mjs.d.ts" -exec bash -c 'mv "${0}" $(echo "${0}" | perl -p -e "s/\.mjs\.d\.ts/\.d\.ts/g")' '{}' \;

# Recursively remove '.js.d.ts' files
find dist -name "*.js.d.ts" -exec bash -c 'rm "${0}"' '{}' \;
