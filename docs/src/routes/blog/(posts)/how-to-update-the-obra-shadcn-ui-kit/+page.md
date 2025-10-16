<script context="module" lang="ts">
    import type { BlogFrontmatter } from '$lib/blog/types';

    export const metadata: BlogFrontmatter = {
        title: 'How to update the Obra shadcn/ui kit?',
        date: '2025-10-15',
        author: 'Johan Ronsse'
    }
</script>

We've recently gotten the question how to update a design file made with our shadcn/ui kit.

Arjun, who posted the question on our [Figma community file](https://www.figma.com/community/file/1514746685758799870) duplicated our kit when it was at 0.2.2 and is now wondering how to update to 1.1.

The biggest differences between those two versions are theming, the introduction of variables for border radii and spacing and several bug fixes. In 1.1 several new components were introduced as well.

The answer isn't so clear-cut. Figma doesn't provide a clear upgrade path for UI kits. A lot depends on how much you customized in the previous version.

We recommend loading in both libraries, and manually swapping old components for new components. Any customizations to components would have to be re-applied (possibly using the new theming variables).

We like to mark the components of the old library version as deprecated — we like to do this with a colored background on the components to make it visually clear — and use Figma's swap library function to swap out the newer versions.

We've made a small video that shows how we would do it.

<iframe width="560" height="315" src="https://www.youtube.com/embed/R2sW2iKpCxY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>




