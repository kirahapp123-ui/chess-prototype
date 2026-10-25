# KIRA CHESS AI — upgraded edition

A responsive dark black-and-purple chess site for desktop and mobile. It runs on GitHub Pages and needs no backend or API key.

## Files
- `index.html` — page structure, clocks, profile and analysis panels
- `style.css` — responsive styling
- `script.js` — chess rules, lightweight bot, time controls, sound effects, rating/profile storage and heuristic game review
- `README.md` — setup guide

## Run locally
Keep all four files in one folder and open `index.html` in a modern browser. The game itself works without a server. Google Fonts may need internet access.

## Publish on GitHub Pages
1. Create a repository such as `kira-chess-ai`.
2. Upload all four files into the repository root.
3. Open **Settings → Pages**.
4. Select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Open the Pages URL GitHub provides after deployment.

## Added features
- **Chess clock:** Bullet (1 minute), Blitz (5 minutes), Rapid (10 minutes). A player's clock runs while it is their turn; flag fall ends the game.
- **Sound effects:** browser-generated tones for moves, captures, checks and game endings. Audio starts after interaction and can be toggled off.
- **Estimated rating:** a simple local rating estimate changes after wins, losses and draws. It is not an official Elo rating.
- **Local profile:** games, wins, losses, draws, streaks and achievements are stored with `localStorage` in the current browser/device.
- **Game review:** summarizes captures, checks and material changes from the played moves. It is a basic heuristic, not Stockfish analysis and may miss tactical mistakes.

## Important limitations
- The included opponent is a lightweight JavaScript search bot, **not the official Stockfish engine**.
- The bot's difficulty settings are approximate; the search is intentionally limited to keep the site responsive.
- This version does not include online accounts or cloud sync. Local stats do not automatically transfer between devices or browsers.
- The chess implementation covers common legal moves, castling, en passant and promotion. It is a learning/demo project, not a tournament-certified chess platform.
