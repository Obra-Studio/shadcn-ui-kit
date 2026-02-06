<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: '1.5.0 released',
        date: '2026-02-06',
        author: 'Johan Ronsse'
    }
</script>

<iframe width="560" height="315" src="https://www.youtube.com/embed/oz-HOJTkHns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Today, we released the 1.5.0 version of the kit. Watch the above video for the full explanation about what changed.

This version continues improving our [Obra shadcn/ui kit](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui) with several improvements. As always you can [find the latest version of our kit on Figma Community](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui).  

In general, improvements are related to two topics

1. Improving the process of implementing your brand in shadcn/ui kit.  When we customize the kit for our clients — see [customization services](https://shadcn.obra.studio/customization-services) — we are using a workflow that necesitates having the right variables. Please see the updated [color docs](/documentation/colors)  to find out about how to use the new changes.
2. More available styles to use the shadcn/ui kit for marketing / landing page purposes. You will find that there is now a larger button as well as a larger paragraph and a “caption” style available by default. While we didn't originally intend to use shadcn/ui for marketing-style pages, and thought of shadcn/ui as the app layer, there are some definite marketing use cases.

On Wednesday, we explained [what happened to the CSS export plugin](/blog/what-happened-to-the-css-export-plugin). We are currently preparing a commercial offering to move the kit to a freemium model. The core of the kit will always remain free, but specific layers on top will become part of a paid offering.