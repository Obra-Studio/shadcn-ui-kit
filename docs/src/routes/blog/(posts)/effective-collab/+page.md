<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Effective collab',
        date: '2025-07-02',
        author: 'Johan Ronsse'
    }
</script>

There's been some talk on Github issues and in our private Slack about doing effective collaboration.

The first phase of building the shadcn/UI kit (roughly the first 50 hours of the project) I did the work myself.

Then I involved pixel perfectionist Marina to improve it, just inviting her as an editor on our Obra account.

Gradually we also got feedback from different people - thank you Robert, Jovi, Gavin and Jorre.

Jorre specifically copied the kit, added some missing calendar-related features, and then linked to a public file with his improvements. This posed me with a problem: how to get his improvements into the original file?

We idenfitied some different solutions:

1. Use the Figma swap libraries function - which I've been playing with today
2. Invite everyone who wants to contribute to the the project as a classic Figma Editor and pay for their seat, then work non-destructively
3. Use a custom script (see this [comment](https://github.com/Obra-Studio/shadcn-ui-kit/issues/29#issuecomment-3007875565)) 

There were some side ideas as well:

1. See if we can leverage the Figma master plugin
2. Use Figma branching (but that's reserved for more expensive Figma tiers).

If anybody from the open source community has some ideas, please chime in on the [Github issue](https://github.com/Obra-Studio/shadcn-ui-kit/issues/29)!
