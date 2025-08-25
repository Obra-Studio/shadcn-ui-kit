<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Road to 1.0',
        date: '2025-08-24',
        author: 'Johan Ronsse'
    }
</script>

Hi all, we're aiming to release the 1.0 version of the shadcn UI kit on September 12, 2025.

In order to finalize this version, we would like to have the community input on whether we should include:

1. border radius and spacing variables (see [discussion #51](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/51))
2. semantic/theming layer from shadcn (see [shadcn theming docs](https://ui.shadcn.com/docs/theming) ) - no thread around this yet 
3. light/dark mode

When we first created this kit, we used a light approach where we didn't include all the features so it would be easier to make this kit your own.

However, from the feedback we've noticed that in general, our audience prefers feature completeness over customizability. 

Your input is super welcome on Github to shape the final 1.0 version.
