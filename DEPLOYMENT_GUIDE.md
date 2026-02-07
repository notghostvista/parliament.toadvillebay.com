# Parliament Website - GitHub Push Instructions

## Repository Connected ✅

```
Repository: https://github.com/notghostvista/parliament.toadvillebay.com
Branch: main
Remote: origin
```

## Next Step: Authenticate & Push

You have two authentication options:

### Option 1: GitHub Personal Access Token (Recommended)

1. Go to https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Name it: "parliament-site"
4. Select scopes: `repo`, `workflow`
5. Generate and copy the token
6. Run this command and paste token when prompted for password:

```powershell
cd "c:\Users\Gabriel\Downloads\parliament-site\parliament-site"
git push -u origin main
# When prompted for password, paste your token
```

### Option 2: GitHub CLI (Easiest)

1. Install: https://cli.github.com/
2. Run: `gh auth login`
3. Follow the prompts
4. Then: `git push -u origin main`

### Option 3: SSH Key

1. Setup guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

## After Pushing

Once pushed, configure GitHub Pages:

1. Go to: https://github.com/notghostvista/parliament.toadvillebay.com/settings/pages
2. Select: "Deploy from a branch"
3. Branch: `main` / Root directory
4. Save
5. Your site will deploy automatically!

## First Time Only

After authentication is set up, future pushes are simple:

```powershell
git add .
git commit -m "Your message"
git push
```

That's it! Enjoy your parliament website! 🎉
