<script>
    import Video from './Video.svelte'
    import HeadingWithBadge from './HeadingWithBadge.svelte';
    import Content from '../changelog/content.md';

    let videos = [
        {
            id: "ticGL4n1uMs",
            title: "Friday update",
            date: "June 20",
            description: "Just a small update"
        },
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

<div class="prose">
<h1>Videos</h1>

    <p>Here's the available videos about our Obra shadcn/ui Figma library project. We're hoping to release some more videos soon.</p>

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
