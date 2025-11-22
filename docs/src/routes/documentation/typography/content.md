## Note about type styles

![typography.png](/typography.png)
_Figure: the typographic styles we included_

On purpose, we only provide you with the bare minimum of styles. We built it this way to that you can customise it to your liking.

We stopped where we stopped because the next steps highly depend on:

* Your (custom) fonts
* How far you want to go with type variables.
* The need for using variable fonts (Figma supports them but not fully in variable systems)

Type styles tend to expand quickly if you are not careful.

If we were to include type styles for Geist and all its variants, we'd easily have over 300 styles.

Some other shadcn/ui kits do this to replicate the full extent of Tailwind in shadcn, but we think adding all these options doesn't work in practice.

The reality of a UI design project is that at most, you will you use 10-20 type styles.

## Why we chose to keep font styles in “styles” and not implement variables

Some other shadcn/ui kit provide a variable for the font-family which can be changed globally.

We think this is a bad idea. There generally are big disadvantages to mapping type to variables.

The biggest disadvantage is that variable fonts do not work correctly with variables, so you lose out on being able to use these. It's not possible to map the variable axes of a font to Figma variables.

Another disadvantage is that you now have to maintain your type styles within the variables area. In our experience, type styles don't always cleanly map to a table.

We recommend sticking with styles for type, not with variables.

The only exception we think where variables for type are extremely useful is in implementing responsive font sizing e.g. a mobile and desktop breakpoint with different sizes per breakpoint. We don't provide this by default, since shadcn/ui doesn't provide this, but this is something we will often implement in a customized version of shadcn/ui.

## Changing the font across the kit

If you want to change the Geist font family quickly, we recommend using a plugin like [Style Studio](https://figma.com/community/plugin/1292924330904373989).
