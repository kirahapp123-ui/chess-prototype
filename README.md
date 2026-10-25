# 🐼 Panda Gang Website

A responsive, dark-themed community landing page for a school-friends group. Built with plain HTML, CSS, and JavaScript — no framework or build tools required.

## Files

- `index.html` — page structure and application form
- `style.css` — colors, layout, responsive styling, panda illustration, and animations
- `script.js` — mobile navigation, scroll reveals, form validation, and application preview/copy
- `README.md` — this guide

## Run it locally

1. Put all four files in the same folder.
2. Open `index.html` in a browser.
3. For a better development workflow, open the folder in VS Code and use the **Live Server** extension.

The Google Fonts import needs an internet connection; the page still works if the fonts are unavailable.

## Important: how the application form works

The current form **does not send or store applications**. It validates the form, opens a preview, and lets the student copy the application text to send to a trusted group admin. This is intentional so the demo does not pretend to collect data.

To receive applications online, connect a form backend/service (for example, Formspree or a school-approved alternative). Read its privacy policy, configure its endpoint, and test it before publishing. Don't collect passwords, home addresses, phone numbers, or other sensitive details from students. Ask a teacher/parent/guardian to review the form and privacy approach if needed.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, e.g. `panda-gang`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository's root.
3. Open the repository's **Settings → Pages**.
4. Under the build/deployment section, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish the site and open the URL shown in the Pages settings.

## Customize it

- Change the name and copy in `index.html`.
- Adjust colors near the top of `style.css` inside `:root`.
- Update the grade options and interests in the form.
- Replace the CSS panda illustration with an image you have permission to use if you'd prefer a custom mascot.

## Before sharing it

- Test the layout on a phone and desktop.
- Check every navigation link and form field.
- Remember: GitHub Pages hosts static files; it does not process form submissions by itself.
- Only publish community contact details or student information with permission.
