# 10K Ledger

Earnings and spending tracker. USD, EUR, RSD and BAM. No installation or build step.

## Publish as a separate GitHub Pages website

1. Sign in at https://github.com/new and create a **new public repository**, for example `ten-k-tracker-nov-2026`. If that name exists, choose another unused name. Do not use or edit your existing `USERNAME.github.io` repository.
2. Extract the ZIP. In the new repository, choose **uploading an existing file** (or **Add file → Upload files**).
3. Upload `index.html`, `style.css`, `app.js`, and `.nojekyll` directly into the repository's top level. Do not upload the enclosing folder or the ZIP itself. The README is optional. Commit the upload to `main`.
4. Open that new repository's **Settings → Pages**.
5. Choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**. Leave the custom domain field empty.
6. Wait for GitHub to finish publishing. The Pages settings show the live address, normally `https://USERNAME.github.io/ten-k-tracker-nov-2026/`.

These steps only configure the new repository. They do not replace your existing repositories, profile website, or domain settings.

GitHub instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Your data

Entries are stored in this browser, not in the repository. GitHub Pages publishes the website publicly; this app does not upload your entries to GitHub or the exchange-rate provider.

Before moving from another address, use **Export** on the old tracker. Open the GitHub Pages tracker and use **Import** to restore that file. Browser storage does not move between website addresses or devices automatically. Keep the backup JSON private; do not upload it to your repository.

The display currency is independent of the stored USD totals. Rates refresh through Frankfurter; if a refresh fails, the app shows the saved rate date. Entries retain their conversion rate when saved. Earnings and spending remain separate; only the secondary Total view subtracts spending from earnings.
