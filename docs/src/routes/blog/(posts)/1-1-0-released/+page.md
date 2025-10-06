<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: '1.1.0 released',
        date: '2025-10-05',
        author: 'Johan Ronsse'
    }
</script>

We've released the 1.1.0 version of our kit this Sunday evening. You can find the kit [via this Figma community link](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui).

This release focuses on adding the new components from shadcn/ui's [October drop](https://ui.shadcn.com/docs/changelog) and on fixing some bugs. It also adds a round variant to many components such as inputs and buttons.

We track the visual look of [shadcn/ui](https://ui.shadcn.com/). Whenever they make a change, we also make a change to the kit.

We're not completely done yet with every new component added, and we'll be working on more updates the coming time. Specifically the way you can customize inputs needs some more work; we don't have a round variant for the new button group yet; colors need to be double checked for ghost and outlined buttons in both light and dark modes, and more. An extra pair of helping hands would definitely be welcome, so if you would be enthusiastic to help out improve out kit, drop a note via our [contact form](https://obra.studio/contact).

As always, find all the release info in [our own changelog](/changelog).






