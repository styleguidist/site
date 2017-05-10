#!/usr/bin/env bash

# Deploy to Netlify

STYLEGUIDIST_TAR_GZ="https://codeload.github.com/styleguidist/react-styleguidist/tar.gz/master"

# Build the site
yarn run build
yarn run bundle

# A new commit in Styleguidist repo?
if [ "$WEBHOOK_TITLE" == "react-styleguidist-commit" ]; then
	# Download and unpack master branch
	curl "$STYLEGUIDIST_TAR_GZ" | tar xz

	cd "react-styleguidist-master"
	yarn

	# Build a basic example
	yarn run build

	# Copy to the public folder
	mkdir -p ../public/examples/basic
	cp -R examples/basic/styleguide/* ../public/examples/basic/

	cd -
fi
