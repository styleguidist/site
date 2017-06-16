#!/usr/bin/env bash

# Deploy to Netlify

REPO_TAR_GZ="https://codeload.github.com/styleguidist/react-styleguidist/tar.gz/master"
REPO_DIR="react-styleguidist-master"

# Download and unpack master branch
echo
echo "Downloading react-styleguidist..."
curl "$REPO_TAR_GZ" | tar xz || exit 1

# Build a basic example
echo
echo "Building a basic example..."
cd $REPO_DIR
npm install || exit 1
npm run build || exit 1
cd -

# Copy to the public folder
echo
echo "Copying a basic example..."
mkdir -p public/examples/basic
cp -R $REPO_DIR/examples/basic/styleguide/* public/examples/basic

# Update docs
echo
echo "Copying docs..."
mkdir -p docs
cp $REPO_DIR/docs/* docs

# Build the site
echo
echo "Building the site..."
npm run build || exit 1
npm run bundle || exit 1
