#!/usr/bin/env bash
set -eo pipefail

setup_npm() {
  echo "//npm.pkg.github.com/:_authToken=${GITHUB_ACCESS_TOKEN}" >> ~/.npmrc
  echo "@smockle:registry=https://npm.pkg.github.com/" > .npmrc
}

publish_package() {
  npm publish --access public
}

setup_npm && publish_package

unset -f setup_npm
unset -f publish_package
