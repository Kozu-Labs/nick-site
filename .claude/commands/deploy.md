Deploy the nick-site project. Follow these steps in order:

1. **Pull latest with rebase**: Run `git pull --rebase origin main` to get the latest changes.

2. **Build**: If there is a build step configured (e.g. package.json build script), run it. If no build step exists (plain static site), skip this.

3. **Commit and push source files only**: Stage and commit ONLY source files. **NEVER commit build output — the `public/` folder must be in .gitignore and must never be committed.** Use a descriptive commit message. Push to origin main.

4. **Deploy to Firebase**: Run `firebase deploy --only hosting:nick-site`. **NEVER deploy before pushing** — the push in step 3 must succeed first.

5. **Update memory file**: Update the session log and current state in `CLAUDE.md` with what was deployed and when.

## Rules
- Never deploy before pushing to GitHub.
- Never commit the `public/` folder or any build output.
- If any step fails, stop and report the error — do not continue to later steps.
- Always rebase, never merge.
