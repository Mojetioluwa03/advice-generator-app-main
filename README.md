# Advice Generator App

![Design preview for the Advice generator app coding challenge](preview.jpg)

## Project overview

A simple responsive advice generator built with HTML, CSS, and JavaScript.

- Uses the Advice Slip API to fetch random advice.
- Includes a styled advice card layout with a dice button to request new advice.
- Organized assets into `css/` and `js/` folders for clearer structure.

## Files and structure

- `index.html` — main page markup
- `css/style.css` — app styling
- `js/script.js` — API logic and interactivity
- `style-guide.md` — design reference for colors, typography, and layout
- `images/` — project assets used in the UI

## How to run

Open `index.html` in a browser, or serve the project from a local web server for the best experience.

### Option 1: Open directly

1. Double-click `index.html`
2. The page should display the advice card
3. Click the dice button to load a new advice slip

### Option 2: Run a local server

If you have Python installed:

```bash
cd /c/Users/davee/Downloads/advice-generator-app-main
python -m http.server 8000
```

Then visit `http://localhost:8000` in a browser.

## Notes

- The app fetches from `https://api.adviceslip.com/advice` and avoids caching with a timestamp query.
- The dice button is styled for hover/focus states and works on mobile and desktop layouts.
- `style-guide.md` contains the color palette and typography information used to match the design.

## Improvements made

- Moved `style.css` into `css/`
- Moved `script.js` into `js/`
- Removed redundant helper markdown files
- Increased top padding so the card sits lower on the page

## Author

Built by the project owner using a modern folder structure and a lightweight API-driven UI.
