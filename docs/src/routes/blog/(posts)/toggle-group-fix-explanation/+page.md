<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: '1.1.2: Toggle Group fix explanation',
        date: '2025-11-12',
        author: 'Johan Ronsse'
    }
</script>

<iframe width="560" height="315" src="https://www.youtube.com/embed/EHGBt6N0iE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Kit user Josh Rubinstein reported an issue with the Toggle Group in our [shadcn/ui kit](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui).

We believe this was due to a bug in Figma, where layers with a known size would end up with mixed values, even when making a single layer selection. We will report this bug to Figma.
    
In 1.1.2, the latest version of the kit, we recreated the component icon behavior in a new component with the exact same name in the exact same place, but technically a new component (with a new component ID).

If you are encountering this issue, and have already duplicated our kit, we recommend deleting the Toggle Group component from your components and copy pasting the new version of the component (from a freshly duplicated Obra shadncn/ui file) into your existing file.

This issue is only relevant for versions from 1.1 on, since the Toggle Group component is new since that version.