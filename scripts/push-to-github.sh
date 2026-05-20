#!/usr/bin/env sh
set -eu

message="${1:-Update site}"

if [ -z "$(git status --porcelain)" ]; then
  echo "No local changes to push."
  exit 0
fi

git add -A
git commit -m "$message"
git push origin main

echo "Pushed to GitHub. Vercel will deploy automatically if the project is connected to this repository."
