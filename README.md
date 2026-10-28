# StudyNest — Class 11 Physics Study Hub

A lightweight, responsive static website for Class 11 Physics revision. The site uses plain HTML, CSS and JavaScript, so it does not require a build command, backend, account, or API key.

## What's included

- All 14 Class 11 Physics chapters listed in the library.
- Search across chapter names and topic/subtopic titles.
- Chapter notes with core explanations, formulas, and worked examples.
- One original 40-mark practice paper for each chapter, with 20 questions and a section-wise mark distribution.
- A matching model-answer and suggested marking-scheme PDF for each paper.
- Direct, pre-generated PDF downloads in `resources/pdfs/`; the PDF links do not depend on the browser's print dialog.
- Responsive layout for desktop, tablet and mobile screens.

## Downloaded PDFs

For each chapter number `N` from 1 to 14:

- Question paper: `resources/pdfs/physics-chapter-N-question-paper.pdf`
- Model answers and marking guide: `resources/pdfs/physics-chapter-N-marking-scheme.pdf`

The HTML practice papers are also available in `resources/`. They include an on-page answer section and browser print options.

## Deploy on Cloudflare Pages

Use the `main` branch, select **None** / **Static HTML** as the framework, leave the build command blank, and set the build output directory to the repository root (`/` or `.`, depending on the dashboard UI). After connecting the repository, commits to `main` should trigger deployments automatically.

## Updating the content

Edit the corresponding chapter HTML file in `resources/`, and keep its matching paper and marking scheme consistent. The PDF copies in `resources/pdfs/` are separate static files, so replacing a paper's HTML does not automatically regenerate its PDFs. Check both versions when changing questions or answers.

## Learning-use note

StudyNest's papers are original practice material, not official examination papers. The marking guide gives suggested allocations; follow your teacher's or school's conventions where they differ. Use the notes alongside your prescribed textbook and class teaching.
