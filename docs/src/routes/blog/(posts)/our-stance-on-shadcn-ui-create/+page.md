<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Our stance on shadcn/ui create',
        date: '2026-02-06',
        author: 'Johan Ronsse'
    }
</script>

_Some community members have asked us what our stance is on [“create”](https://ui.shadcn.com/create). In this blog post, we discuss our opinion and how it affects our kit._

In December, the shadcn/ui website was updated with a feature to “create your own shadcn/ui theme” called [Create](https://ui.shadcn.com/create).

<figure>
<img src="/create.png" alt="Shadcn/ui create" />
<figcaption>Creating a theme.</figcaption>
</figure>


Create essentially allows you to customize aspects of shadcn/ui on the shadcn/ui website itself to generate a theme.

When you start creating a theme, you’d select any of the 5 styles: Vega, Nova, Maia, Lyra and Mira.

Vega is the classic shadcn look, and the one that, in our opinion, works best for most use cases.

Right now, Nova is the style that shows up by default when browsing components on [ui.shadcn.com](https://ui.shadcn.com/).

Vega is what we use in our kit.

Choosing a style affect multiple things at once:

1. Spacing - How much spacing is used
2. Border radii - How generous border radii are
3. Whether a box or table-view style is used for lists (Works in Maia and Mira)
4. Whether a pill-shaped input control is used for inputs yes or no (Maia only)

To continue customizing, you would choose any of 4 base colors (neutral, stone, zinc and gray) and then use a theme color.

You are also able to choose a font with 13 default choices.

There are more features, like customizing the icon set. You can choose between Lucide, Phospor Icons, Tabler Icons, Remix icons and HugeIcons.

In our customization work we have found the “old” default of Lucide Icons to sometimes not be the best choice. Mostly because Lucide Icons does not include filled icons. We really like Tabler and Phosphor icons and of course, our very own [Obra Icons](https://icons.obra.studio/). 

We think it’s great that anyone can create a shadcn/ui theme — and that with little effort, any shadcn/ui-powered UI can look better.

But of course, with our team mostly being a team of designers, we find these customizations a bit basic. We [customize shadcn/ui as a service](/customization-services) so naturally we have opinions about this.

## How does “create” affect the Obra shadcn/ui kit?

Before “create” there was 1 shadcn/ui look, and we could promise pixel parity with the shadcn/ui docs.

One of the advantages we listed was “Recreates all shadcn/ui components accurately”. Now we have to add a little asterisk note: accurately - Vega style.

Things are not so clear cut anymore:

1. The Nova look is the default in shadcn/ui documentation
2. We built our kit on the Vega look
3. You can reach the Nova look via customizing our variables
4. Yet, we think the Vega look is a better default for most teams.

We've discussed the change within our internal team, and what to do about it.

There is no 1:1 relationship between a change to a development framework and what should happen in the UI kit.

We've seen some competing kits rush to create plugins to cover this use case, but we think this is the wrong approach. The approach of swapping styles will only ever work on a fresh copy of a kit and is bound to break fast in the real world.

It looks good in a demo, but it won't work.

We've thought long and hard about this, and the thing is that all of the customizations you can make in shadcn/ui create, you can also recreate in our Figma kit.

1. Changing the font: go to typography variables and make the change. See [typography](/documentation/typography).
2. Colors: go to the color variables and make the change. Remap to any of the Tailwind colors or choose your own. See [colors](/documentation/colors).
3. Changing the icon set: check out our [icon sets](https://www.figma.com/community/file/1598567387671026948/obra-shadcn-ui-icon-sets-add-on-2026) community file. Replace all icons after the blank icon and work [from there](/documentation/icons).
4. Changing the spacing: every spacing value in our kit (even the weird ones) is tied to a variable. You can make the kit appear more or less spacious by changing the overall scale in the top-level variable group for this.
5. Changing the border radii: every border radius value in our kit is tied to a variable as well. You can make a squared look in seconds by changing every value (except infinity, better not touch that one). Or change the overall values of border radii by tweaking the values in the variable panel.

For stylistic changes on the component level, we don't think it makes sense to have to choose between one style or the other.

We simply have both available in the kit. This then allows designers to experiment with what is right for their project.

Consider an accordion;

<figure>
<img src="/panel-nova.png" alt="Panels in the Nova style" />
<figcaption>Accordion “panels” in the Nova style. </figcaption>
</figure>

<figure>
<img src="/panel-maia.png" alt="Accordion in the Maia style" />
<figcaption>Accordion in the Maia style; more of a "table view" component.</figcaption>
</figure>

In our kit, we provide both variants for accordions: bordered and unbordered (and bordered with no middle borders as an option)

<figure>
<img src="/acc.png" class="no-shade" alt="Variants" />
</figure>

Consider inputs. We provide both variants for inputs: regular and round.

<figure>
<img src="/round-input.png" class="no-shade" alt="Both regular and round inputs" />
<figcaption></figcaption>
</figure>

There is no reason why you would have to choose between one or the other. Consider this little user interface, where we have 2 styles used, in a way that makes sense: the search input has distinct round styling, and the main form has regular corners.

<figure>
<img src="/input-style-example.png" style="max-width: 80%; margin: 0 auto;" alt="Both regular and round inputs" />
<figcaption></figcaption>
</figure>

All in all, our approach when to having to choose between 2 options is like the meme with the little girl: “why not both”?

Design is about exploring options, not being locked into a choice from the start.
