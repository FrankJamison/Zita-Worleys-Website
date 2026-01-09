# 2006-ZitaWorley (Static Site Archive)

This repository is a static HTML/CSS/JavaScript website (originally built in the mid‑2000s style) and preserved here as an archival/portfolio snapshot.

It is **not** a Node/React/etc. application—there is no build step and no package manager configuration. The pages can be opened directly in a browser or served by any simple static web server.

## What’s in this project

- **Static HTML pages** for course information and general site content.
- **CSS stylesheets** providing the site’s layout and print styles.
- **JavaScript** for menus, page footer injection, and course schedule content.
- **Assets** (images and downloadable files).

## Project structure

Top-level pages (examples):

- `index.html` — Home page.
- `philosophy.html` — Philosophy content page.
- `favsites.html` — Favorites/resources page.
- `hist103.html`, `hist104.html`, `hist111.html`, `hist112.html` — Course pages.
- `hist103syllabus.html`, `hist104syllabus.html`, `hist111syllabus.html`, `hist112syllabus.html` — Syllabus pages.

Assets and supporting files:

- `resources/`
  - `downloads/` — Downloadable documents.
- `resources/images/` — Site images.
- `resources/scripts/` — JavaScript used by pages.
  - `jamExpressMenu.js` — Navigation/menu behavior.
  - `footer.js` — Footer injection/behavior.
  - `HIST103Schedule.js`, `HIST104Schedule.js`, `HIST111Schedule.js`, `HIST112Schedule.js` — Course schedule content.
  - `printIE.js` — Legacy print/IE support.
- `stylesheets/`
  - `worley.css` — Primary site styling.
  - `jamExpressMenu.css` — Menu styling.
  - `syllabusPrint.css` — Print stylesheet for syllabi.
  - `syllabusPrintIE.css` — Legacy print/IE support.

Notes folders (e.g. `_notes/dwsync.xml`) are editor metadata and can be ignored for most development tasks.

## How to view the site

Because this is a static site, you have two straightforward options.

### Option A: Open the files directly

1. Open `index.html` in your browser.
2. Navigate using the site’s links.

This is the fastest approach, but be aware that some browsers apply stricter rules to JavaScript when opening files via `file://`.

### Option B: Serve with a simple static web server (recommended)

Running a local static server avoids most `file://` restrictions.

Any static server will work; here are a few common choices:

- **Python** (if installed):
  - From the project folder, run: `python -m http.server 8000`
  - Then visit: `http://localhost:8000/`

- **Node** (if installed):
  - Use any static server tool (for example, `npx serve .`) and open the URL it prints.

- **Editor/IDE live server extensions** also work fine.

## Editing notes

- Pages are plain HTML and can be edited directly.
- Styling is primarily controlled by `stylesheets/worley.css`.
- Menus and shared behaviors are under `resources/scripts/`.
- Print layout for syllabus pages is handled by `stylesheets/syllabusPrint.css` (plus legacy overrides).

## Browser compatibility

This site contains legacy patterns (including older JavaScript and IE-related print support). Modern browsers should still render it, but layout/print behavior may differ slightly from the original environment.