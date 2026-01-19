## Upgrading libraries in general

Updating Figma libraries in general is notoriously difficult.

Figma does not provide an overarching upgrade mechanism to library authors. We keep a [changelog](//changelog) where we explain the changes to our kit.

In general, if you did not make many design changes to the kit, we recommend starting over with a fresh duplicate of the kit.

However, you might be knee-deep in design system work and in a situation where the above is simply not possible. If you are in that situation, this page is for you.

## Updating the Figma Obra shadcn/ui kit

The exact ways to update your Obra shadcn/ui library are rather difficult to explain, but in this part of the docs we will give some pointers to the adventurous.

We hope to improve this section over time, and strike a balance between improving the kit and introducing breaking changes. Any comments are welcome. Please [file an issue](https://github.com/Obra-Studio/shadcn-ui-kit/issues)!

In general, instead of trying to upgrade the kit _exactly_ to what the latest version is, it might be worthwhile to understand *where the library is moving* rather than doing the exact changes in your copy of the file. You can then decide on a case-by-case basis whether you want to perform an upgrade or not.

We have several [plugins](/documentation/productivity-plugins) to help you on your way, but do note that these are vibe-coded and tended to work for specific situations, and are not thoroughly battle-tested.

We do welcome bug reports about specific situations where these do not work to improve them.

With this second disclaimer out of the way, here's our upgrade guide.

## Upgrading from 1.1.5 to 1.2.0

* All components were moved to separate pages.
    * To fix this:
        * Create a page per component
        * Move every component to its corresponding page

Difficulty level: easy

* Theme collection was renamed to Semantic colors
    * To fix this: rename the relevant collection
    * Why you might want this: the [CSS export plugin](https://www.figma.com/community/plugin/1577756373687684979/obra-shadcn-ui-kit-css-export?comment=1595050166988170962) relies on exact collection names for its output

Difficulty level: very easy

* The way border radii and spacing was treated, was changed
    * To fix this
        * 1. Split up the Border radii collection in 2 collections: 1. Border Radii and 2. Border radii (absolute).
            * Note that, in your file, variables are bound to corners already. As such, a non-destructive variable move has to be made to make this happen.
                * What you would do is first re-name the absolute values (e.g. "rounded-4" tied to "4" to the t-shirt sizing logic; in this case rename rounded-4 to rounded-sm. Reference the 1.4.0 variables to do so.
                * Then, create the absolute values as a standalone collection. Reference the 1.4.0 variables to do so.
                * Set up the Border radii (absolute) collection variables to not be published.
                * Now attach the Border radii (t-shirt sized e.g. xs, sm…) to your newly created absolute variables
            * Optional: Go through the file with the [Obra Border Radius Variable Fixer](https://www.figma.com/community/plugin/1545127635062919814/obra-border-radius-variable-fixer) to re-attach to components.

    * ! Important: We provide a plugin called [Obra Variable Collection Manager](https://www.figma.com/community/plugin/1577745671557491526/obra-variable-collection-manager) which allows to merge, split and move collections. Do not use use "move" in the Obra Variable Collection Manager plugin, do the move yourself manually; otherwise, you might end up with a file full of unbound variables.

Difficulty level: hard

## Upgrading from 1.2.0 to 1.3.0

Difficulty level: moderate

* Improvements to typography mostly
    * Interesting to understand the underlying pattern: we provided more options for paragraphs. Do you need them or not in your own system?
* Use a similar logic as for border radius above (1.1.5 to 1.2.0), but for spacing.
    * Optional: Go through the file with the [Obra Spacing Variable Fixer](https://www.figma.com/community/plugin/1545126955319474817/obra-spacing-variable-fixer) plugin to re-attach to components.

## Upgrading from 1.3.0/1.3.1 to 1.4.0

Difficulty level: hard

### Icon hack treatment

* The icon hack was removed
    * To solve this: take the icons from 1.5.0
    * Remove the icon hack from all components
    * Re-link all icons in all components
    * Interesting to understand the underlying problem
        * We removed the hack because it was difficult for some users to understand
        * We also had several discussions about the scalability of icons
        * We landed on a simpler solution where icons are outlined and the hacks are removed; but, is this where you want to take your own icon strategy?

### Notable variable changes

Difficulty level: easy

* Bugs have been fixed in the shadow collection
* The treatment of the destructive foreground is different

### Components v2

Difficulty level: moderate

* Some components got an update
    * Item
    * Empty
    * Breadcrumb
* We recommend flagging already used components with a red background color
* Then, publishing the system so you can see components that should receive an update

[//]: # (Use [Obra shadcn/ui tools - Newest version]&#40;https://www.figma.com/community/plugin/1544866255228781486/obra-shadcn-ui-tools&#41;)

### Re-linking libraries

* When you copy paste a new component into your existing library, it won't be linked with your library
* You will have to re-link it to your library: this manual process is annoying
* We have tools for this: [Obra Remote Library Scanner](https://www.figma.com/community/plugin/1578201349063449764/obra-remote-library-scanner)
