# Changelog

Find the latest changes in our kit here. This changelog is repeated [inside of the file](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui) on the changelog page, so you know which version is in use. We use [semantic versioning](https://semver.org/).

## 1.4.0

January 16, 2025

* **Improve variable organisation for better development export** New: the variables in this file are organized in a way that works with our [Figma shadcn/ui kit CSS export plugin](https://www.figma.com/community/plugin/1577756373687684979/obra-shadcn-ui-kit-css-export). Having separated collections was already the case in 1.3.0, but now we are doubling down on this. We moved absolute definitions for border radii and spacing to separated collections that do not get published. Users have the ability to set up different modes (check out our [batch mode switcher](https://www.figma.com/community/plugin/1577759675602026369/obra-batch-mode-switcher) plugin) and use those modes to help with theming for multi-brand and white-labelling situations.
* **Improve typography to better serve theming and white-labelled contexts**
  * Provide medium and bold versions of all paragraph styles by default
  * Headings (h1, h2, h3, h4) now have their own variable references and can be individually styled via the variables. They default to font-family-headings which defaults to font-family-sans.
* Shadows
  * Tweaked blur value of xl/shadow 2 from -6 to 6 so shadow shows up correctly
* Colors
  * Adjust all foreground variable scopes to also support strokes, since these are used for icon colors
  * Bugfixes destructive foreground
    * Moved destructive foreground to semantic colors/general (as it's an official variable)
    * Bugfix: changed destructive foreground to white, it was red, erroneously.
    * Correct scope of destructive foreground to shape and text
    * Add unofficial destructive-text variable (to serve as the variable for red text in general)
    * Apply destructive text to alert error component
* **Reworked several components to be more flexible and feature-complete: Item, Breadcrumb, Input Group**. Thanks, Jovi Verheyen for your great contributions.
  * Added the Item component with support for itemMedia, itemContent and itemActions as per shadcn specifications.
  * Improved the Empty component
  * Added more examples to Input Group (under Input) component
  * Removed the Ghost Muted button variant from the default and icon button since it's not part of the official shadcn button component
  * Breadcrumb component optimized for ease of use
  * Rename Input page to Input & Input group
    * Added more Input Group examples to Input. We decided to leave this component alone for now, hoping to provide more flexibility when Figma releases slots. We don't like to write this, but for some variations of the input group component we recommend to detach your component to tweak the layout.
* **Added extra examples**
  * Added the Authentication example page (based on official shadcn example)
  * Added the Tasks example page (based on official shadcn example)
* **Added prototype links**: Added prototype links to the button and icon button component so the hover state actually shows in your prototypes
* **Improve charts component to reflect real-world usage of charts**
  * Removed chart/area and chart/static color ranges. We only retained the blue variant of the chart/area colors, now called chart/shades in blue. This generic approach will allow users to set up the shades as modes, which aligns nicely with how the plugin works. Ask us about our experimental plugin to quickly change the chart colors!
  * Moved chart/legacy to chart colors/categorical
  * Renamed "legacy colors" to "categorical".
  * Marked examples like the non-blue area charts and the static colors pie chart as deprecated while we decide what to do with the charts (see [#93](https://github.com/Obra-Studio/shadcn-ui-kit/issues/93))
  * Organize colors in a slightly cleaner way
  * Remove mention that one of the blues is used once, this is not the case anymore
* **Bugfixes** on existing components
  * Fixed incorrect avatar size
  * kbd component update
    * Allow 3 keys
    * Replaced hardcoded values with variables
  * Corrected the line-height for small paragraph from 21 to 20
  * Bugfix: fix visual issue with progress bar rounded corners ([#88](https://github.com/Obra-Studio/shadcn-ui-kit/issues/88))
  * Fix: Rebuild round avatar construction in Avatar component ([#87](https://github.com/Obra-Studio/shadcn-ui-kit/issues/87))
  * Renamed Date Picker component to Date Picker & Calendar
    * Changed names of components inside of Date picker components: the input element is the date picker, and the resulting popup content is the calendar

## 1.3.0

November 27, 2025

* Bugfixes around incomplete theming features
  * Create a subgroup for each of the paragraph variables
  * Simplify paragraph variable names
  * Add monospaced variables
* Default type styles
  * Add differentiation between medium and bold
* Bugfix: remove extraneous frame in Alert component (removed double pixel override hack frame)
* Adjusted dialog border radius to semantic variable rounded-xl - related [#95](https://github.com/Obra-Studio/shadcn-ui-kit/issues/95)
* Theming scoping changes (related [#96](https://github.com/Obra-Studio/shadcn-ui-kit/issues/96))
  * Scope typography variables to their appropriate properties
  * Scope semantic color variables to their appropriate properties
  * Scope shadow variables to their appropriate properties
* Add semantic layer to spacing collection: it’s possible to customize spacings in the kit much more easily
* Apply semantic spacing layer to all components (related [#90](https://github.com/Obra-Studio/shadcn-ui-kit/issues/90))
* Adjust checkboxes, radio buttons, sliders and switches to use the primary (background) variable. If you change your primary variable color for example to blue, these elements will change color as well.
* Renamed shadcn-light color mode to shadcn, so the mode name for shadcn is the same across all 5 customizable collections (semantic colors, border radii, typography, spacing and shadows). This will help with grouping when automatically processing the tokens from export files.

## 1.2.0

November 22, 2025

* File organisation
  * Moved components and styles to separate pages as per popular request. We reorganized the file to show 1 frame per page..
  * Added version number to title
* General marketing
  * Adjusted thumbnail - renamed project Obra shadcn/ui kit
  * Adjusted description to "A meticulously crafted Figma component library based on shadcn/ui to provide the start of your design system."
  * Added an example thumbnail and instructions to customize
* Documentation
  * Remove guideline to “remove the blue frames” as it’s less relevant because of the new pages organisation
  * Remove “the philosophy” section from Figma documentation - As we grow, the kit is less about personal opinion from initial creator but more about a starting point that works for most teams
  * Collapse design changes to shadcn docs into the basic docs and rename “the basics” to “about this kit”
* Marked Card, Drawer, Dialog, Empty, Hover Card and Sheet components to be changed to slot components soon when Figma releases the slots feature for components.
* Theming changes
  * Renamed collection “theme” to “semantic color”
  * Reordered collections (4 first collections are meant to be customized, then there is a divider, the other sections are meant to be left alone for most users)
  * Reordered modes - first mode is the mode meant to be customized, second mode is the way shadcn is styled as a reference
  * Introduced a semantic layer for border radius variables
  * Applied semantic layer for border radii to all components, in order to be able to create modes (like a square mode) that changes overall roundness of elements
  * Introduced typographic variables, and applied these to the existing type styles (h1-h4, monospaced text, body regular/small/mini) so typography can be changed (insofar Figma supports it) with modes, giving users a starting point to maintain multiple brands within the same design library
* Components
  * Alert - Bugfix: fixed pixel override hack not being present in Alert component. Thanks for the report, Josh Rubinstein!
  * Checkbox: fix visual clipping issue with indeterminate checkbox
  * Drawer - Bugfix - Fix issue in Drawer component where drawer had a set bottom left and bottom right corner radius
  * Dialog: Rename Dialog variant Mobile Scrollable to Mobile Full Screen Scrollable to denote use case, and set border radius to 0
  * Progress - Bugfix: correct 25% not showing up correctly
  * Progress - Bugfix: add more intermediate values to have more progress options by default (0, 33, 66, 90)
  * Label: adjust autolayout construction for block variant. Outer width is 320, inner is determined by the label contents (hugs contents).
  * Table: Renamed Basic Table to Table to accord to shadcn
  * Table: adjust styling to accord to latest version of shadcn
  * Toggle & Toggle Group: make it clearer that these components, that are separated in shadcn/ui, are bundled together for usability reasons in the kit.
  * Sidebar: localized sidebar (counter) badge so it works together with sidebar themes instead of depending on the badge component
  * Spinner: added similar example recreating shadcn/ui docs
  * Sonner: add more examples recreating shadcn/ui docs

## 1.1.5

November 13, 2025

* Fixed a bug with the “Icon Muted” property in Menu item not reacting when overriding the default icon.

## 1.1.4

November 12, 2025

* Change loading button to use the outlined button style, since the shadcn/ui documentation also uses this style.
* Marked “mid” color variable as deprecated. This variable will (likely) be removed in the future to make skinning easier.
* Move some stray chart colors (meant for skinning charts in similar colors like in the [shadcn/ui chart docs](https://ui.shadcn.com/charts/)) that lived at the top level of variables accidentally to charts/static
* Apply pixel override hack to sidebar mini button (Fixes #75)
* Update Input OTP component to not rely on background layer but have styles attached to parent layer

## 1.1.3

November 12, 2025

* Fix issue with Menu Item: the large menu items Left and Right decoration defaulted to a large icon, but this caused visual issues.

## 1.1.2

November 12, 2025

* Fix issue with Toggle Group icons not working correctly. Find a breakdown of the issue and a fix on our [blog](https://shadcn.obra.studio/blog/toggle-group-fix-explanation).

## 1.1.1

October 27, 2025

* Fix issue with sidebar icons jumping due to not having wrapper frames. Thanks for the catch, Alex.

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

## 0.1.0 (Public beta)

June 11, 2025

* Initial release!
* Kit stability: This is a public beta kit. We will listen to the community and make appropriate changes but intend for this kit to be upgradeable.
