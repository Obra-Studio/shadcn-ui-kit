# Technical comments

## Guidelines on components

* Prefer composability.
* Use the raw tailwind colours, do not introduce a semantic layer (e.g. “primary-foreground”) in this file.
* Prefer showing examples of what you can do with a component as documentation rather than showing off what the component can do via a complex matrix of variants.
* Prefer not to use the “text override” feature in variant properties as not to make the variant properties panel overcomplicated; people can override via the text itself.
* Use a generic text like “Label” or “Value” in components.
* Use straight up Tailwind spacing numbers for components (1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 36, 40). Using variables for numbers is cumbersome when editing them later. The same counts for border radii.

## Wrapper components

* Wrapper components such as cards, dialogs, sheets etc. present an interesting problem: we want to be consistent in our styling, but we also want to customise the content.
* We are not a big fan of slot components, but also not a big fan of detaching. We’re hoping Figma takes note and finds some form of solution for this in the future, some kind of “native” slots?
* To promote consistency, we went for slot components but this might take some time to wrap your head around. This video can help you to understand the concept.
  
## Spacing and number variables

The user interface for setting up number variables in Figma leads to too much clicking.

Setting up number variables then later leads to a situation where they are hard to change.

We are purposefully not setting up any variables related to spacing. We know the numbers: they are 1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 36, 40 etc.

Spacings in this file will be linted with an external tool to be consistent and use the values; but we purposefully avoid setting them up with variables.

(Todo: we did not get to actually lint everything - does anyone know a good tool? See [#12](https://github.com/Obra-Studio/shadcn-ui-kit/issues/12))

## Notes on multi-tiered systems

shadcn contains a semantic layer that contains, for example, a default background and foreground for cards, text etc.

Different teams have different needs; on purpose, this kit doesn’t provide any semantic layer. Rather, every layer maps to a straight raw colour.

This enables teams to be flexible. This enables some options without destroying the kit:

* Start their own semantic layer on top of the raw colours.
* Implement the shadcn semantic layer as a start (We have a private fork of the shadcn kit where we tried to do this, but decided not to ship)
* Map the tailwind variables to their own color system (ideally working with a 1000-scale as well).

![illu-3-tiers.png](/illu-3-tiers.png)

What some kits do.

![illu-2-tiers.png](/illu-2-tiers.png)

What some other kits do

![illu-1-tier.png](/illu-1-tier.png)

What we do (feel free to create a semantic layer on top if it helps you).