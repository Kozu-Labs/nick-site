#!/bin/bash
# on-stop-deploy.sh — runs on Claude Code "Stop" event for nick-site.
# Workflow: pull → commit source → push → deploy → update NS.md
# Rules: Never deploy before pushing. Never commit build output (public/blog/).
# Note: ~/NS.md is a symlink to Nick Lawfirm AI/NS.md (iCloud workspace).
# We resolve the symlink so file edits work.

set -e
INPUT=$(cat)
PROJECT_DIR="/Users/alanli/Library/Mobile Documents/com~apple~CloudDocs/Nick Lawfirm AI/nick-site"
NSMD_LINK="$HOME/NS.md"
NSMD=$(/usr/bin/python3 -c "import os; print(os.path.realpath('$NSMD_LINK'))" 2>/dev/null || echo "$NSMD_LINK")

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

# 10. Append a deploy record to NS.md (in § 4 Session log).
COMMIT_SHA=$(git rev-parse --short HEAD)
COMMIT_MSG=$(git log -1 --pretty=format:'%s' | head -1)
TS=$(date '+%Y-%m-%d %H:%M')

if [ -f "$NSMD" ]; then
  # Use Python for symlink-safe edit. Insert right after the
  # "## 4. Session log" heading so newest entries stay at top of that section.
  /usr/bin/python3 - <<PYEOF
import os, re
p = "$NSMD"
content = open(p).read()
entry = """### Auto-deploy: $TS — \`$COMMIT_SHA\`
- Commit message: $COMMIT_MSG
- Triggered by: Stop hook (no Claude narrative captured — for richer context, use /deploy)
"""
# Insert immediately after the "## 4. Session log" heading line
new = re.sub(
    r"(## 4\. Session log[^\n]*\n[^\n]*\n)",  # heading + the "newest first" caption
    r"\1\n" + entry + "\n",
    content,
    count=1,
)
if new == content:
    # Fallback: section header not found, prepend at very top
    new = entry + "\n" + content
open(p, "w").write(new)
PYEOF
fi

exit 0
