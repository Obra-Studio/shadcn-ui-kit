<script>
    import Video from './Video.svelte'
    import HeadingWithBadge from './HeadingWithBadge.svelte';
    import { videos } from './videos.js';
    import HeaderWithBack from "$lib/components/HeaderWithBack.svelte";
    let title = 'Videos'
</script>

<svelte:head>
    <title>{title} - Documentation - Obra shadcn/ui kit</title>
</svelte:head>

<HeaderWithBack {title} />

<div class="prose">
    <p>Here's the available videos about our Obra shadcn/ui Figma library project.</p>
    <p>Have a video request? Question? <a href="https://github.com/Obra-Studio/shadcn-ui-kit/issues">Log a Github issue</a>!</p>
</div>

<div class="py-4">
    {#each videos as video}
        <div class="pb-4">
            <HeadingWithBadge date={video.date}>{video.title}</HeadingWithBadge>
            <div class="pb-4">
                <Video id={video.id} />
            </div>
            <p>{video.description}</p>
        </div>
    {/each}
</div>
