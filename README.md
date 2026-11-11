# TechED – What Does AI Do?

A small, beginner-friendly web app that explains what artificial intelligence is and what it does.

## Features

- **What is AI** – a plain-language definition
- **How AI learns** – the four-step learning process (data → training → predictions → improvement)
- **What AI can do** – clickable cards with real-world examples
- **Limits of AI** – what AI can't do (yet)
- **Quick quiz** – three questions to check understanding

## Run it

No build step or dependencies: it's plain HTML, CSS, and JavaScript.

- Open `index.html` in any browser, **or**
- Serve the folder locally, e.g. `python -m http.server 8000`, then visit http://localhost:8000

## Host it free on GitHub Pages

1. Push these files to the `main` branch.
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
4. Your site will be live at `https://<your-username>.github.io/TechED/`.

## Files

| File         | Purpose                               |
|--------------|---------------------------------------|
| `index.html` | Page structure and content            |
| `styles.css` | Layout, colors, light/dark theme      |
| `script.js`  | Interactive cards and the quiz        |
