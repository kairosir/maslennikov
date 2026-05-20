#!/usr/bin/env sh
set -eu

hook_path=".git/hooks/post-commit"

if [ ! -d ".git" ]; then
  echo "Run this script from the repository root."
  exit 1
fi

cat > "$hook_path" <<'HOOK'
#!/usr/bin/env sh
set -eu

branch="$(git branch --show-current)"

if [ "$branch" != "main" ]; then
  echo "Auto-push skipped: current branch is '$branch', not 'main'."
  exit 0
fi

echo "Auto-pushing commit to origin/main..."
git push origin main
HOOK

chmod +x "$hook_path"
echo "Installed post-commit auto-push hook at $hook_path"
