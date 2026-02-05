<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'What happened to the CSS export plugin?',
        date: '2026-02-05',
        author: 'Johan Ronsse'
    }
</script>

With the 1.4.0 release, we announced a design to development plugin that took the shadcn/ui kit variables and generated CSS code.

We are currently thinking about where to take the Obra shadcn/ui kit commercially. The design to development plugin is deemed too valuable to simply open source and fits straight into our [commercial customization offering](/customization-services/).

Currently, the offering is a design-only offering. We will be adding front-end services to our offering soon, and the design to development component of this is critical for the workflows.

For anyone depending on the plugin, it is available in the [git history](https://github.com/Obra-Studio/shadcn-ui-kit/commits/main/) of our repo. The code can still be used by anyone - something is released under MIT, is is essentially out there. However, we want to make it clear we will not be offering this plugin in the free, open source offering in the future.

Since the plugin was only duplicated 100-ish times, it seemed like a good moment to do this before more people depended on it for their workflow.
