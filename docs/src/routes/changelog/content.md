# Changelog

We use [semantic versioning](https://semver.org/).

## 0.5.0

* Corrected Neutral 950 color value
* Added theming layer, with default logic having a light and dark mode
* Added several variables on top of shadcn for full control over skins in Figma (see theming docs)
* Applied variables to all layers of the components
* Add documentation for theming layer (replacing earlier docs about being opinionated to not have theming layer)
* Bugfix: Improve counter in tabs add-ons to support larger numbers
* Bugfix: Apply correct focus style to accordion with focus
* Consistency correction: Changed font weight in select to regular to accord to how it’s now in shadcn/ui
* Change in select & combobox component: provide placeholder type, provide easy way to change right side decoration to either look like combobox (with icon chevrons-up-down) or select (with single icon chevron-down)
* Change in switch component: remove blue-colored switch in favor of new shadcn logic that shows a white switch in dark mode
* Added more themed charts examples.
  * Added examples of area charts and variables for orange, blue, green, rose, teal, purple and amber charts
  * Added variables for newer chart themes (called “static” chart in variable names)
* Added screen examples page, showing several examples (subject to change or removal from the library, these are mostly there to test out specific situations)
  * a products table
  * a web app example
  * a controls size test
  * another app example
  * an example of a mobile screen with a drawer in use
  * an example dialog

## 0.4.0

* Added spacing variable collection
* Apply spacing where appropriate matches exist (see technical comments)
* Added border radius variable collection
* Apply border radius variables where appropriate matches exist
* Removed documentation guideline telling not to use spacing variables in favor of documentation telling to use spacing variables (same for border radii)
* Fixed inconsistency with shadcn for dialog and alert dialog: roundness is only 10, not 16
* Fixed inconsistency with shadcn for rich radio groups and rich checkbox groups: roundness is 10, not 9
* Fixed inconsistency with shadcn for tabs: outer tabs have 10px roundness, not 11
* Fixed inconsistency in border radius for roundrect avatar
* Fixed inconsistent layer names in Colors frame
* Fixed inconsistency vs shadcn in border radius for checkboxes: changed from 3px to 4px
* Treat autolayout of component sections more consistently by filling out all the container

## 0.3.0

* Automate all component documentation using the [Propstar](https://www.figma.com/community/plugin/1116018586739867857/propstar) plugin.
* Fix rotation related bug in Resizable component 

## 0.2.2

* Fixed a bug related to duplicate color variables

## 0.2.1

* Update Avatar, Alert, Badge, Button to have docs created with Propstar (see [plugin](https://www.figma.com/community/plugin/1116018586739867857/propstar) page)

## 0.2.0

### August 18, 2025

* Add all Lucide Icons to set, and remove note about more focused design system. Decision as per community discussion: see [this Github discussion](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/45).
* Add all Tailwind colors as per community decision. See [the same Github discussion](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/45) for more info.
* Hide hidden Navigation Menu example component for users

## 0.1.9

### August 14, 2025

* Remove white background in separator component

## 0.1.8

### July 28, 2025

* Fix constraints in Progress component

## 0.1.7

### July 27, 2025

* Added slight commercial message
* Improved constraints in graphs

## 0.1.6

### July 10, 2025

* Bugfix: improve auto layout in sheet
* Add slot component override in Drawer

## 0.1.5

### July 2, 2025

* Bugfix: Decoration left and Decoration right did not provide an overridable icon. This component is used inside of Inputs, Select and Comboboxes to provide a way to set up an icon on the left or right side.

## 0.1.4

### June 20, 2025

* Component properties fixed inside the Select Field. The decoration did not have the right variance, this got changed inadvertently during the cleanup phase of our kit. . Thanks Jorre Vandenbusche for the report.
* Added more date- and time picker examples from the ShadCN calendar drop. Thanks for designing these, Jorre Vandenbusche.

## 0.1.3

### June 19, 2025

* Rename a missing component property name in Field > Horizontal Field (Slider)
* Fix auto layout for vertical variant of separator component

## 0.1.2

### June 17, 2025

- Added link to the docs website to the main description in the Figma community file as well as in “The basics”
- Rename “skin” component property to “variant” to accord to shadcn codebase

## 0.1.1

### June 16, 2025

- Correction on Typography: we ended up using Geist, not inter. Thanks Jorre Vandenbusche for the report.
- Added more context to hover card accessibility issue by linking to Github issue

### 0.1.0 (Public beta)

### June 11, 2025

- Initial release!
- Kit stability: This is a public beta kit. We will listen to the community and make appropriate changes but intend for this kit to be upgradeable.
