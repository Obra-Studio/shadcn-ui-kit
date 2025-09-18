<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: '1.0 released!',
        date: '2025-09-18',
        author: 'Johan Ronsse'
    }
</script>

We just released the formal 1.0 version of our kit 🎉! After three months of being in public beta and several changes along the way, we hit 1.0.

We take that number seriously as a stable point: since we adhere to [semantic versioning](http://semver.org/) (as much as that's possible for a design file) we will not be releasing any breaking changes.

The file will stay stable with the variables that we have now, the components that exist. If shadcn/ui itself releases further changes, we will check their nature (addition, deletion, change...) and see how we will update the kit. As always we will ask for your community feedback before making any major changes.

Today we hit 11,000 duplicates for our kit. We are excited that design teams are trusting our kit to build their foundations on. We've heard that teams from Belgium, Mexico, South Korea, the US and Brazil have been using the kit for their app designs. Awesome. If you use our kit, make sure to [let us know](https://obra.studio/contact)!

When we designed this kit, we initially had a philosophy of “do more with less”: we only shipped the colors that were used, we only had 20 or so icons in the kit (the ones actually used) and no dark mode on purpose.

Based on the feedback of the community, we realised that it’s better to be more feature complete. Over the public beta releases we gradually added features:

* August 18, 2025 - 0.2.0 - We learned from the community that they would like all Lucide icons and all Tailwind colors straight-up in the library file instead of dealing with the add-ons.
* September 2, 2025 - 0.3.0 - Added [Propstar](https://www.figma.com/community/plugin/1116018586739867857/propstar)-based docs for all components.
* September 4, 2025 - 0.4.0 - We added variables for border radii and spacing.
* September 8, 2025 - 0.5.0 - The Obra shadcn/ui kit now supports dark mode and theming. We've added variables for light/dark mode (and subsequently, themes) to all components.
* September 15, 2025 - 0.6.0 - We linked to the official [shadcn/ui](https://ui.shadcn.com/) docs in every component

As we added more features, but in a way still like a simpler kit, we’d love to hear your thoughts. Perhaps different versions of the kit can be offered for different needs. If you have any thoughts on this, please [contribute in this discussion](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/68).