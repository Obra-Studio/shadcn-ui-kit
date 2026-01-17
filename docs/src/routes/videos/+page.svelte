<script>
    import Video from './Video.svelte'
    import HeadingWithBadge from './HeadingWithBadge.svelte';
    import { videos } from './videos.js';
</script>

<svelte:head>
    <title>Videos - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="container container--narrow py-8">
    <div class="prose">
        <h1>Videos</h1>
        <p>Here's the available videos about our Obra shadcn/ui Figma library project.</p>
        <p>Have a video request? Question? <a href="https://github.com/Obra-Studio/shadcn-ui-kit/issues">Log a Github issue</a>!</p>
    </div>

    <div class="py-4">
        {#each videos as video}
            <div class="pb-12">
                <HeadingWithBadge date={video.date}>{video.title}</HeadingWithBadge>
                <div class="pb-4">
                    <Video id={video.id} />
                </div>
                <p>{video.description}</p>
            </div>
        {/each}
    </div>
</div>
