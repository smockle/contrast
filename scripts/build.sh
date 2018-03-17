#!/usr/bin/env bash

# Abort if any command exits with error.
set -e

# By default, Bash takes the error status of the last item in pipeline.
# Instead, exit when any item in the pipeline fails.
set -o pipefail

# Clean 'dist' directory
rm -Rf dist/*

# Compile TypeScript using config in 'tsconfig.json'
tsc -d

# Rename files in 'dist' to support ES modules with '.mjs'
bash scripts/rename.sh
