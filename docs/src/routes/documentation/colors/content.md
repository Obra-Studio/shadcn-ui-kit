## Raw colors

We include all [Tailwind 4 colors](https://tailwindcss.com/docs/colors) as Figma variables inside the “Raw colors” collection.

<img src="/colors.png" alt="Tailwind 4 colors included in the Obra shadcn/ui kit" />

_Tailwind colors_

We tagged the colors in use visually on the colors page.

If you don't need them, you can safely delete the colors not in use. All neutral values are used, as well as 5 red values.

Note: Figma does not support OKCLH, so we are using hex-based variables.

## Theming

The theming variables are based on the [shadcn/ui theming](https://ui.shadcn.com/docs/theming) docs.

By default, we use the light theme. We ship a dark theme as well.

Change the theme globally by changing the variable mode of the page to dark.

To create your own theme, we recommend adding a new mode in Figma and start customizing the colors.

Need help creating your own theme? We offer design services around this. [Check out this page for more details](https://obra.studio/shadcn-ui-kit-customization/).

We added several variables on top of shadcn/ui’s theming to allow designers to have more control in Figma.

* Within shadcn’s code, the color mix CSS function is often used to mix a variable (or rather CSS custom property) with a color, often white or black with a specific opacity percentage. To replicate this, use the alpha variables.
* Within other parts of the code, color variables are hardcoded instead of using a theming layer. This forced us to come up with new variables for these cases. You will see many more border and background variants than exist in the official CSS, because of combinations made in shadcn docs code that need to be translated to Figma’s variable modes.

The variables that are unofficial are marked as “unofficial”.

## Custom color palettes (Applies since 1.5.0)

If you inspect the kit's variable system with a kit version from 1.5.0 on, you will see that we introduced a "brand colors" collection that includes "brand-neutrals" and "brand-shades".

* The "brand-neutrals" collection is tied to the "semantic colors" collection automatically. You can use this to quickly chgange the kit to use a default Tailwind shade like slate or stone; or use it to tint your UI to your own brand's "shades". 
* The variables in the "brand-shades" collection are unused by default on purpose, in order to make a conscious choice on which elements you would like to appear branded

We recommend, when creating custom color palettes, to first add your custom palette to "raw colors" as a group with a name (e.g. "brand-turquoise").

You can decide to keep the Tailwind colors around in that group or remove the ones you don't need.

Now reference the custom color palette in the brand colors collection in the "brand-neutrals" or "brand-shades" collection.

Tip: You can use a tool like [Supa Pallete](https://www.supa-palette.com/) to generate a color palette based on your brand.

## Blessed way to create component colors (Applies since 1.3.0)

If you go into the kit and customize the "primary" shadcn/ui variable, you'll see that your color choice propagates across a number of components. If you make your primary button red, you will also see that primary badges, checkboxes and radio buttons become red.

Depending on your brand's color and design aesthetic, you might want to customize the colors on the component level. For example, you'd maybe prefer to have a dark primary button with the 800 shade of your bramd while having a slightly lighter badge with the 700 shade.

Maybe you have a red or orange main brand color and you'd like to not propagate that choice to form controls.

In all of these cases, it's a good idea to start a component layer where you customize the components' colors on a case-by-case basis.

In this section, we'd like to document the "blessed" way to customize component colors. 

Add a collection called "components". Then create a group for each component. You can use subgroups for the component states. 

Generally the structure would look like something like this:

* components
  * alert
    * success
      * background
      * foreground
    * error
      * background
      * foreground

## Blessed way to deal with non-palette brand color (Experimental)

Not every brand color has a palette. Sometimes a brand color is distinct, and it doesn't necessarily have a full palette with 11 Tailwind-like shades.

In this case, create a new group inside of brand colors called "brand-combinations". Now create the following color variables:

* brand 1
* brand 1 foreground
* brand 2
* brand 2 foreground
* brand 3
* brand 3 foreground
* brand 4
* brand 4 foreground
* brand 5
* brand 5 foreground

Use this place to store specific color combinations. Consider "brand 1" to be a background color.

For Starbucks as a brand, you'd add Starbucks green in "brand 1" and the white foreground color in brand 1 foreground.

As a convention, shadcn/ui omits the word background from variable names.

The reason we don't use specifically named variables (e.g. name the variable "Starbucks green") is to be able to programatically access the variants, specifically in a multi-brand context. What we recommend when working with named colors is to first add these to a collection that sits "below the line" (below the `---` separator). The collections below the line are not meant to be published or used programatically.


## Variable tips

### Foreground

In general, use _foreground_ for text and icons.

We prefer to use _foreground alt_ (Unofficial) for body text. This is not part of the shadcn/ui official variables but highly recommended design-wise (shadcn does the same in their docs, just not with an “official” variable)

Use _foreground muted_ for muted text.

## Backgrounds

A shadcn convention is to _not_ mention that something is a background. So for example “Primary” is actually “Primary background”. We follow this convention.

Accents map to darkness levels where 1 = 100, 2 = 200 etc, with the exception of Accent 0 which maps to neutral-50 in light mode by default.

* Accent 0 - Unofficial - Maps to neutral-50
* Accent (1): maps to 100
* Accent 2: maps to 200
* Accent 3: maps to 300

You might encounter some backgrounds set to very light colors such as 0.01%. What's up with that?0 The underlying reason is that without a fill, the shadow (usually used for focus styles) doesn’t render.

## Borders

Borders maps to darkness levels: 1 maps to 100, 2 maps 200 etc.

* Border 1: maps to 100 (unofficial)
* Border (2): maps to 200
* Border 3: maps to 300 (unofficial)
* Border 4: maps to 400 (unofficial)
* Border 5: maps to 500 (unofficial)

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