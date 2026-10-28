# StudyNest — Class 11 Study Hub

A lightweight, responsive static website for Class 11 study resources. Built with plain HTML, CSS and JavaScript; no build command or backend is required.

## Website features
- Search resource titles, chapters, subjects and descriptions
- Filter by subject and resource type
- Responsive layout for phones, tablets and desktops
- Starter listings for Physics, Chemistry, Mathematics, Biology and English
- No paid services or API keys required for the starter site

## Deploy on Cloudflare Pages
1. Sign in at https://dash.cloudflare.com/
2. Open **Workers & Pages** (the label may vary slightly).
3. Choose **Create** / **Create application**, then **Pages**.
4. Choose **Connect to Git** and connect your GitHub account if prompted.
5. Select the `class11-study-hub` repository.
6. Use these settings:
   - Production branch: `main`
   - Framework preset: `None` (or `Static HTML` if offered)
   - Build command: leave blank
   - Build output directory: `/` or the root directory (Cloudflare may ask for `.`)
7. Click **Save and Deploy**. After deployment, Cloudflare will show the public `pages.dev` address.

## Add real PDFs
Create a folder named `resources` in this repository and upload only documents you created or have permission to distribute. Then edit `app.js` to add a PDF path to each resource entry and change its **Open resource** button to link to that path. For a large collection of PDFs, consider storing them in a separate storage service instead of the Git repository.

## Updating the site
Edit a file in GitHub and commit the change to `main`. Cloudflare Pages will automatically deploy the update after the repository is connected.

## Important
This is the starter website. The example resource cards are catalogue placeholders, not downloadable PDFs yet. Do not upload copyrighted textbooks or paid materials without permission.
