# Changelog

We use [semantic versioning](https://semver.org/).

## 1.1.0

October 5, 2025

* Features (related to shadcn October drop)
  * Promote Spinner from a hidden component to an actual component, now that’s in an official shadcn/ui component in the October release
  * Added kbd (keyboard) component
  * Added Empty component for empty states
  * Added button group component
  * Removed note that Field is a convenience component that exists in the Figma version only, since this landed in shadcn
  * Round variants
    * Added round variant for several button-like components: Icon Button, Button, Toggle Group, Link Button, Loading Button
    * Added round variant for several input-like components: Input, Input file, Textarea
    * Added round variant for Badge component
* Other features
  * Add example of narrow and wide to multi range slider
  * Added boolean switch to show resizable control in Textarea component
  * Added Ghost Muted variant for Icon Button component
  * Add missing right positioned variants to Data Table component
  * Improve rich radio, rich checkbox and rich switch by adding a boolean property for the 2nd line that is off by default
  * Improve rich radio, rich checkbox and rich switch by adding a flipped variant (which would help with RTL languages)
  * Added mirrored spinner to loading button
* Bug fixes
  * Fix missing variants in Datepicker day component and fix some missing references in the examples
  * Fix bug with icon overrides: icon overrides in combination with the pixel override hack led to unpredictable sizes or icon alignments when using certain icons. We solved this by adding a wrapper frame around every icon using the pixel override hack
  * Added pixel override hack to Toggle Group (both to Toggle Group Button and Single Toggle)
  * Fixed wrong values in the border radii of focus and error focus states of the Input OTP component
  * Bugfix: changed a wrong theme color on the foreground of Buttons inside one of the buttons - thanks for the bug report, Jorre Vandenbussche
  * Shadcn sonner component: fix issue that icon can’t be changed - thanks for the bug report, Jorre Vandenbussche
  * Fix auto layout fill bugs in Data Table > Text (1 Line)
* Theme changes
  * Set muted foreground to neutral 400 in dark mode
  * Change hover colors for light mode ghost and outline buttons
  * Added rounded-infinite variable for border radius
* General changes
  * Reordered collections to prioritize Raw Colors in search results
* Visual improvements
  * Added tiny and extra tiny variant for Avatar component
  * Improve look of avatars in select (people) dropdown example

## 1.0.0

Sept 18, 2025

* Released 1.0.0! Thanks to the team for your contributions, and thanks to all the users of our kit for your enthusiasm about our project.

## 0.6.0

Sept 15, 2025

* Added links to the shadcn/ui docs in every applicable component
* Fix some minor color-related bugs that crept in the 0.5.0 release (colors on checkbox, colors on resizable)
* Removed “mode” color variable as it only had a single use

## 0.5.1

Sept 9, 2025

* Reworded several docs in the file that were outdated because of the theming change in 0.5.0
* Lowercased the two default modes light/dark (just like the variables, everything is lowercased)

## 0.5.0

Sept 8, 2025

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

Sept 4, 2025

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

Sept 2, 2025

* Automate all component documentation using the [Propstar](https://www.figma.com/community/plugin/1116018586739867857/propstar) plugin.
* Fix rotation related bug in Resizable component 

## 0.2.2

August 26, 2025

* Fixed a bug related to duplicate color variables

## 0.2.1

August 19, 2025

* Update Avatar, Alert, Badge, Button to have docs created with Propstar (see [plugin](https://www.figma.com/community/plugin/1116018586739867857/propstar) page)

## 0.2.0

August 18, 2025

* Add all Lucide Icons to set, and remove note about more focused design system. Decision as per community discussion: see [this Github discussion](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/45).
* Add all Tailwind colors as per community decision. See [the same Github discussion](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/45) for more info.
* Hide hidden Navigation Menu example component for users

## 0.1.9

August 14, 2025

* Remove white background in separator component

## 0.1.8

July 28, 2025

* Fix constraints in Progress component

## 0.1.7

July 27, 2025

* Added slight commercial message
* Improved constraints in graphs

## 0.1.6

July 10, 2025

* Bugfix: improve auto layout in sheet
* Add slot component override in Drawer

## 0.1.5

July 2, 2025

* Bugfix: Decoration left and Decoration right did not provide an overridable icon. This component is used inside of Inputs, Select and Comboboxes to provide a way to set up an icon on the left or right side.

## 0.1.4

June 20, 2025

* Component properties fixed inside the Select Field. The decoration did not have the right variance, this got changed inadvertently during the cleanup phase of our kit. . Thanks Jorre Vandenbusche for the report.
* Added more date- and time picker examples from the ShadCN calendar drop. Thanks for designing these, Jorre Vandenbusche.

## 0.1.3

June 19, 2025

* Rename a missing component property name in Field > Horizontal Field (Slider)
* Fix auto layout for vertical variant of separator component

## 0.1.2

June 17, 2025

* Added link to the docs website to the main description in the Figma community file as well as in “The basics”
* Rename “skin” component property to “variant” to accord to shadcn codebase

## 0.1.1

June 16, 2025

* Correction on Typography: we ended up using Geist, not inter. Thanks Jorre Vandenbusche for the report.
* Added more context to hover card accessibility issue by linking to Github issue

### 0.1.0 (Public beta)

June 11, 2025

* Initial release!
* Kit stability: This is a public beta kit. We will listen to the community and make appropriate changes but intend for this kit to be upgradeable.
