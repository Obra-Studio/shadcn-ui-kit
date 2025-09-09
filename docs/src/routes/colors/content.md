# Colors

## Raw colors

We include all [Tailwind 4 colors](https://tailwindcss.com/docs/colors) as Figma variables inside the “Raw colors” collection.

<img src="/colors.png" />

_Tailwind colors_

We specifically tagged the colors in use.

If you don't need them, you can safely delete the colors not in use. All neutral values are used, as well as 5 red values.

Note: Figma does not support OKCLH, so we are using hex variables.

## Theming

The theming variables are based on the [shadcn/ui theming](https://ui.shadcn.com/docs/theming) docs.

By default, we use the light theme. We ship a dark theme as well. Change the theme globally by changing the variable mode of the page to dark.

We added several variables on top of shadcn/ui’s theming to allow designers to have more control in Figma.

* Within shadcn’s code, the color mix CSS function is often used to mix a variable (or rather CSS custom property) with a color. This is not possible to replicate in Figma.
* Within other parts of the code, color variables are hardcoded instead of using a theming layer. This forces us to invent new variables for these cases (You will see many more border and background variants than exist in the official CSS, because of combinations made in shadcn docs code that need to be translated to Figma’s variable modes)

The variables that are unofficial are marked as “unofficial”.

## Variable tips

### Foreground

In general, use _foreground_ for text and icons.

We prefer to use _foreground alt_ (Unofficial) for body text. This is not part of the shadcn/ui official variables but highly recommended design-wise (shadcn does the same in their docs, just not with an “official” variable)

Use _foreground muted_ for muted text.

## Backgrounds

Accents maps darkness levels except 1 = 100, 2 = 200 etc. with exception of Accent 0 which maps to neutral-50 in light mode by default.

* Accent --> Accent background
  * If there is no foreground in the name, it means background
* Accent = 100 (maps to 100)
* Border = 200 (maps to 200)
* So:
  * Accent 0 = 50 (Use this for a very light background change)
  * Accent (1) --> Official
  * Accent 2 = 200
  * Accent 3 = 300

Why a .01% #FFF style for the Ghost style? Because without a fill, the shadow doesn’t render.

## Borders

Maps to darkness levels: 1 = 100, 2 = 200 etc.

* Border 1 = 100
* Border (2)  = 200 --> Official
* Border 3 = 300
* Border 4 = 400
* Border 5 = 500

## Mapping

This mapping is useful when checking against the official docs: https://ui.shadcn.com/docs

| Hex | OKLCH value | Color name |
|---|---|---|
| #0a0a0a | oklch(.145 0 0) | Neutral 950 |
| #171717 | oklch(.205 0 0) | Neutral 900 |
| #262626 | oklch(0.269 0 0) | Neutral 800 |
| #FFFFFF | oklch(1 0 0) | White |
| #fafafa | oklch(.985 0 0) | Neutral 50 |
| #f5f5f5 | oklch(.97 0 0) | Neutral 100 |
| #e5e5e5 | oklch(0.922 0 0) | Neutral 200 |
| #d4d4d4 | oklch(0.708 0 0) | Neutral 300 |

To help convert OKLCH colors, you can use [oklch.com](https://oklch.com/).