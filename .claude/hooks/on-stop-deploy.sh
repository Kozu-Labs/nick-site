#!/bin/bash
# on-stop-deploy.sh — runs on Claude Code "Stop" event for nick-site.
# Workflow: pull → commit source → push → deploy → update ~/NS.md
# Rules: Never deploy before pushing. Never commit build output (public/blog/).

set -e
INPUT=$(cat)
PROJECT_DIR="/Users/alanli/Library/Mobile Documents/com~apple~CloudDocs/Nick Lawfirm AI/nick-site"
NSMD="$HOME/NS.md"

# 1. Loop prevention: if the hook already fired this stop cycle, let Claude stop.
if [ "$(echo "$INPUT" | jq -r '.stop_hook_active' 2>/dev/null)" = "true" ]; then
  exit 0
fi

cd "$PROJECT_DIR"

# 2. Bail early if nothing changed (no commit, no deploy, no waste).
if git diff --quiet \
   && git diff --cached --quiet \
   && [ -z "$(git ls-files --others --exclude-standard -- ':!public/blog/' ':!functions/node_modules/')" ]; then
  exit 0
fi

# 3. Stash → pull rebase → pop. Cleanest way to integrate any remote work.
git stash --include-untracked -q 2>/dev/null || true
if ! git pull --rebase origin main; then
  git stash pop -q 2>/dev/null || true
  echo "stop-hook: pull --rebase failed (likely a conflict). Resolve manually." >&2
  exit 1
fi
git stash pop -q 2>/dev/null || true

# 4. Mirror ~/NS.md → MEMORY/NS.md so the repo carries the latest memory.
mkdir -p "$PROJECT_DIR/MEMORY"
if [ -f "$NSMD" ]; then
  cp "$NSMD" "$PROJECT_DIR/MEMORY/NS.md"
fi

# 5. Stage source files. Exclude build output + node_modules.
git add --all -- \
  ':!public/blog/' \
  ':!public/blog/**' \
  ':!functions/node_modules/' \
  ':!functions/node_modules/**'

# 6. Skip if nothing actually got staged (no source changes).
if git diff --cached --quiet; then
  exit 0
fi

# 7. Commit with timestamped message + Claude co-author.
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
git commit -m "session update $TIMESTAMP

Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>" >&2

# 8. Push BEFORE deploy. Source of truth must be GitHub.
git push origin main >&2

# 9. Deploy hosting. (Functions deploy is heavier; trigger via /deploy explicitly when needed.)
firebase deploy --only hosting >&2

# 10. Append a deploy record to ~/NS.md.
COMMIT_SHA=$(git rev-parse --short HEAD)
COMMIT_MSG=$(git log -1 --pretty=format:'%s' | head -1)

if [ -f "$NSMD" ]; then
  # Insert a new "Auto-deploy" entry right after the title (line 1).
  /usr/bin/sed -i '' "2a\\
\\
## Auto-deploy: $(date '+%Y-%m-%d %H:%M')\\
- Commit: \`$COMMIT_SHA\` — $COMMIT_MSG\\
- Triggered by: Stop hook
" "$NSMD"
fi

exit 0
