<script>
    import Video from './Video.svelte'
    import HeadingWithBadge from './HeadingWithBadge.svelte';

    let videos = [
        {
            id: "5vzBZj3vck4",
            title: "Release video",
            date: "June 12",
            description: "Introducing the kit & the public beta."
        },
        {
            id: "bVqYV1G6IOA",
            title: "Getting started with your design system in Figma using the Obra shadcn/ui kit",
            date: "June 12",
            description: "A video that shows how easy it is to customize the kit."
        }
    ];
</script>

<svelte:head>
    <title>Videos - Obra shadcn/ui docs</title>
</svelte:head>

<h1>Videos</h1>

<p>Here's the available videos about our Obra shadcn/ui Figma library project. We're hoping to release some more videos soon.</p>

<p>Have a video request? Question? <a href="https://github.com/Obra-Studio/shadcn-ui-kit/issues">Log a Github issue</a>!</p>

{#each videos as video}
    <HeadingWithBadge date={video.date}>{video.title}</HeadingWithBadge>
    <Video id={video.id} />
    <p>{video.description}</p>
{/each}
