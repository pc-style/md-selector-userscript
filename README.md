# Markdown Selector+Readability Userscript

A Tampermonkey userscript that lets you select DOM elements, navigate with arrow keys, and convert them to Markdown (with optional GitHub Flavored Markdown and Mozilla Readability extraction). Includes a floating toolbar and a settings modal.

## Features

- **Visual element selection** with pleasant overlay highlighting
- **Keyboard navigation**: Up/Down (parent/child), Left/Right (previous/next sibling)
- **Convert to Markdown** via Turndown (with optional GFM plugin)
- **Readability mode** to extract main article content before conversion
- **Floating toolbar** with quick actions
- **Settings modal** to customize hotkey, highlight color, GFM, toolbar, and Readability visibility
- **Auto-update** via GitHub raw URL

## Install

1. Install [Tampermonkey](https://www.tampermonkey.net/) in your browser.
2. Open `md-selector.user.js` from this repo or use the raw link:
   - https://raw.githubusercontent.com/pc-style/md-selector-userscript/main/md-selector.user.js
3. Tampermonkey should prompt to install; confirm.

## Usage

- **Toggle selection mode**: Default hotkey `Alt+M` (configurable in settings)
- **Navigate**: Arrow keys (Up/Down/Left/Right)
- **Copy Markdown**: Enter
- **Readability → Markdown**: R
- **Exit selection**: Esc
- **Toolbar**: Click Select, Copy MD, Readability, or Settings

## Settings

Open Settings to configure:
- Toggle hotkey (e.g., `Alt+M`, `Ctrl+Shift+X`)
- Highlight color
- Use GitHub Flavored Markdown (tables/strikethrough)
- Show/hide toolbar
- Show/hide Readability button

## Development

- Edit `md-selector.user.js`; increment `@version` in the header if needed.
- Push to `main`; the userscript will auto-update for users.

## License

MIT
