<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'A simpler kit?',
        date: '2025-10-10',
        author: 'Johan Ronsse'
    }
</script>

I am sure if you've used our shadcn/ui kit, you've seen that it got more complex over time.

What started out as a simple, opinionated kit that was fast to get started with evolved to a bigger kit that houses the complexity of the whole of shadcn/ui.

Now, this is not a problem per se. Some teams need that power. 

However, we realize some users of our kit do not have advanced Figma expertise or do not want to go as deep in their projects as the kit currently does.

We're planning to release a shadcn/ui “light” kit as a companion kit alongside the real kit. This would be a stripped-down version that would be easier to use and understand for most Figma users.

However, what do we delete? What do we keep in and what should be left out? If you have an opinion, I would like to know it! We're collecting community input on this topic via this [GitHub discussion](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/68). 

