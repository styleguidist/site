#!/usr/bin/env bash

set -e

# Deploy to Netlify

REPO_TAR_GZ="https://codeload.github.com/styleguidist/react-styleguidist/tar.gz/master"
REPO_DIR="react-styleguidist-master"
EXAMPLE_DIR="$REPO_DIR/examples/basic"

echo "Node $(node -v)"
echo "npm $(npm -v)"

# Download and unpack master branch
echo
echo "Downloading react-styleguidist..."
curl "$REPO_TAR_GZ" | tar xz

# Build a basic example
echo
echo "Building the basic example..."
cd $EXAMPLE_DIR
npm install
npm run styleguide:build
cd -

# Copy to the public folder
echo
echo "Copying the basic example..."
mkdir -p public/examples/basic
cp -R $EXAMPLE_DIR/styleguide/* public/examples/basic

# Build the site
echo
echo "Building the site..."
npm run build
npm run bundle

# Smoke test
echo
echo "Testing the deployment..."
curl --silent https://react-styleguidist.js.org | grep --silent "Development environment" || (echo "Smoke test failed" && exit 1)
