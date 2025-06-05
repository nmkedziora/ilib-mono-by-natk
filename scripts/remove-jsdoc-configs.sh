#!/bin/bash

# Find and remove all jsdoc.json files in packages directory
find packages -name "jsdoc.json" -type f -exec rm {} \;

echo "Removed all individual jsdoc.json files from packages." 