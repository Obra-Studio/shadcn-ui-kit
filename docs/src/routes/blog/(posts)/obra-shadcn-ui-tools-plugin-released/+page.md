<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Obra shadcn/ui tools plugin released',
        date: '2025-09-03',
        author: 'Johan Ronsse'
    }
</script>

We created a plugin called Obra shadcn/ui tools that aims to provide tools that makes it easier to work with the shadcn/ui kit.

As a first functionality for this plugin, we provided utilities to make it easier to work with the kit in combination with the [Propstar](https://www.figma.com/community/plugin/1116018586739867857/propstar) plugin.

In the [latest version of the Obra shadcn/ui kit](https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui) we added Propstar based docs for all components.

This tooling helps you to rework components in an easier way when using the kit. With the “de-propstar” command you can remove propstart docs; and with the “post-propstar treatment” command you can automatically position your core component in the right position in the docs. 

Watch the video to learn how it works:

<iframe width="560" height="315" src="https://www.youtube.com/embed/5KZFwtLvZ6Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Curious to try it out? [You can view the plugin page here](https://www.figma.com/community/plugin/1544866255228781486/obra-shadcn-ui-tools).


