<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'New plugin: Obra Autodocs',
        date: '2026-02-12',
        author: 'Johan Ronsse'
    }
</script>

Here's a demo of a new workflow plugin called Obra Autodocs.

<iframe width="560" height="315" src="https://www.youtube.com/embed/eafe2GulJlc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

It's a fast way to generate minimal looking component variant documentation generation.

We built this plugin because we were unhappy with existing option - specifically our idea was to "control the stack" when it came to documenting our design system.

This meant taking control over this aspect of the workflow.

Here's the plugin's features:

* Performance-driven: 🔥 Component documentation generation in seconds. No slow grid generation. Retain ability to actually edit your components.
* Turn documentation on or off with a simple toggle. Plugin detects existing documentation and offers a way to turn it on or off. Toggle grid lines on and off as well depending on what you are working on.
* Set custom colors: for those components on darker backgrounds, where the default purple doesn't work.

There's a few others that are a bit experimental:

* Align to X or Y grid (Beta)
* Document boolean show/hide properties (Beta)

And some things we still have to do, like supporting nested components.

The plugin is currently being reviewed by the Figma Community team, but should be online soon.

We will be defaulting to using this plugin for component tables in the upcoming 1.6.0 version of our kit. 

P.S. The plugin also contains a hidden feature to switch [Propstar](https://www.figma.com/community/plugin/1116018586739867857/propstar) tables to Obra Autodocs tables for an easy switch.