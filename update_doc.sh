#!/bin/sh

set -o errexit -o nounset

rev=$(git rev-parse --short HEAD)

git config --global user.name "Paho Lurie-Gregg (via Travis)"
git config --global user.email "paho@paholg.com"

git clone "https://$GH_TOKEN@github.com/paholg/paholg.github.io.git" site/

rm -rf site/doc/peano site/doc/src/peano site/doc/implementors/peano

rsync -a target/doc site/

cd site

git add -A .
git commit -m "Update doc at ${rev} of peano"
git push
