<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'Feedback wanted - Retire add-on kits?',
        date: '2025-07-27',
        author: 'Johan Ronsse'
    }
</script>

After some consideration, I am thinking to retire the add-ons and add all the [Tailwind colors](https://www.figma.com/community/file/1514809184957991954/obra-shadcn-ui-tailwind-colors-add-on) as well as the [full kit of Lucide Icons](https://www.figma.com/community/file/1514808850292602897/obra-shadcn-ui-lucide-icons-add-on) straight in the kit file.

I initially thought I would make the kit as lean as possible, but I find myself always adding the colors and the icons for most projects, and it's a bit of an annoying process. I know exactly how to do it as the kit creator, but I can imagine for others it might be a dealbreaker.

This decision would make the kit heavier on initial publish — the icon components lead to a slow initial publish time — but also easier to start designing with.

Any thoughts from the community? [Please give your opinion here](https://github.com/Obra-Studio/shadcn-ui-kit/discussions/45).
