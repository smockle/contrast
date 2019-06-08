#!/usr/bin/env bash
set -eo pipefail

setup_npm() {
  echo "//npm.pkg.github.com/:_authToken=${GITHUB_ACCESS_TOKEN}" >> .npmrc
}

publish_package() {
  npm publish
}

setup_npm && publish_package

unset -f setup_npm
unset -f publish_package
