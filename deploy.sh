#!/usr/bin/sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:andrsrz/pokefind-app.git master:gh-pages
cd -
