#!/usr/bin/env bash
set -eo pipefail

# Clean 'dist' directory
rm -Rf dist/*

# Compile TypeScript using config in 'tsconfig.json'
tsc -d

# Rename files in 'dist' to support ES modules with '.mjs'
bash scripts/rename.sh
