# Obra shadcn/ui kit CSS export

A Figma plugin that exports the [Obra shadcn/ui](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui) variable collections to Tailwind CSS v4 / shadcn/ui compatible stylesheets.

## Features

- **Read Figma Variables**: Automatically detect relevant local variable collections in your Figma file
- **Mode Selection**: Choose which modes to export: create a combination of modes in a file that contains multiple modes
- **Dark mode**: For semantic colors and chart colors, modes suffixed with `-dark` are picked up as dark-compatible themes 
- **shadcn/ui compatible**: Generates CSS that works directly with shadcn/ui components
- **Tailwind v4 Ready**: Includes `@theme inline` block for Tailwind CSS v4 compatibility
- **Copy or Download**: Easily copy the generated CSS or download as a file

## Installation

### Option 1: Import from manifest (Recommended for development)

1. Open Figma Desktop
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**
3. Select the `manifest.json` file from this folder
4. The plugin will appear in your Plugins menu

### Option 2: Run directly

1. Right-click in your Figma canvas
2. Go to **Plugins** → **Development** → **Import plugin from manifest...**
3. Navigate to this folder and select `manifest.json`

## Usage

1. Open a Figma file that contains variable collections
2. Run the plugin from **Plugins** → **Variables to Tailwind/shadcn CSS**
3. Select a **Variable Collection** from the dropdown
4. Select a **Mode/Theme** (e.g., "light", "dark", "brand")
5. Check **"Generate as dark mode"** if this is a dark theme variant
6. Click **Generate Stylesheet**
7. **Copy** the CSS to clipboard or **Download** as a file

## Variable Naming Convention

The plugin automatically maps Figma variable names to shadcn CSS variables:

| Figma Variable Path | CSS Variable |
|---------------------|--------------|
| `semantic colors/general/background` | `--background` |
| `semantic colors/general/foreground` | `--foreground` |
| `semantic colors/primary/background` | `--primary` |
| `semantic colors/primary/foreground` | `--primary-foreground` |
| `semantic colors/card/background` | `--card` |
| `semantic colors/destructive/background` | `--destructive` |
| `chart/chart 1` | `--chart-1` |
| `sidebar/background` | `--sidebar` |
| ... | ... |

## Output Format

The plugin generates CSS in the following format:

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  /* ... more variables ... */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... Tailwind v4 theme mappings ... */
}
```

For dark mode, add a theme suffixed with `-dark` to generate:

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... */
}
```

## Requirements

- Figma Desktop or Browser
- A design file based on [Obra shadcn/ui](https://www.figma.com/community/file/1514746685758799870) (from version 1.4.0 on) with variable Collections defined

## Files

- `manifest.json` - Plugin configuration
- `code.js` - Main plugin logic
- `ui.html` - Plugin user interface

## License

MIT
