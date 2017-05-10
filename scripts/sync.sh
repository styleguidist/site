#!/usr/bin/env bash

# Get docs from Styleguidist repo

REPO_TAR_GZ="https://codeload.github.com/styleguidist/react-styleguidist/tar.gz/master"
REPO_DIR="react-styleguidist-master"

# Clean up
rm -rf $REPO_DIR

# Download and unpack master branch
echo
echo "Downloading react-styleguidist..."
curl "$REPO_TAR_GZ" | tar xz

# Update docs
echo
echo "Copying docs..."
mkdir -p docs
cp $REPO_DIR/docs/* docs
