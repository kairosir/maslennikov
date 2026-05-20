#!/usr/bin/env sh
set -eu

message="${1:-Update site}"

if [ -z "$(git status --porcelain)" ]; then
  echo "No local changes to push."
  exit 0
fi

git add -A
git commit -m "$message"

echo "Committed changes. The post-commit hook will push to GitHub automatically when GitHub auth is configured."
