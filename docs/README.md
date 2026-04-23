# AIF-C01 Study Web App

This is a lightweight browser app for reviewing the AWS Certified AI Practitioner
study content in this repository. It includes the 40 AIF-C01 practice questions
from `practice-tests/aif-c01-practice-*.org` plus 35 deduplicated expanded
review questions.

It also includes a quick exam crack sheet for last-minute review.

The Flashcards tab includes 52 cards across 10 focused decks.

The Hard Questions tab is reserved for final-boss mock questions. Add future
hard-question JSON batches to `docs/hard-questions.js` or another
`hard-questions-*.js` file loaded by `docs/index.html`; the app deduplicates
that session by question text when it renders.

## Run

Open `docs/index.html` in a browser.

No package install, build step, Clojure runtime, or Python runtime is required.

## Optional Local Server

If you have Python installed, you can also serve it locally:

```powershell
cd C:\Users\Advina\Desktop\aif-c01-main\aif-c01-main
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/docs/
```

## GitHub Pages

This app can be hosted with GitHub Pages because it is static HTML, CSS, and
JavaScript.

Recommended setup:

1. Commit the `docs/` folder.
2. Push the repository to GitHub.
3. In GitHub, open Settings > Pages.
4. Set the source to the main branch and the `/docs` folder.
