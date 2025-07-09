<script>
    import Video from './Video.svelte'
    import HeadingWithBadge from './HeadingWithBadge.svelte';

    let videos = [
        {
            id: "j5nzQ5YONd4",
            title: "Obra shadcn/ui - Pick and choose components, then customize",
            date: "July 9, 2025",
            description: "We show you a design, where we picked two components from our shadcn/ui kit and customized one of them. The kit is just handy to nearby, to quickly drop a component in when you're designing and stay in your flow."
        },
        {
            id: "yQ3BbcF0rWg",
            title: "The Obra shadcn/ui kit in practice: making a start in our planner project",
            date: "July 8, 2025",
            description: "In this video, we create a team member management screen using the Obra shadcn/ui kit in Figma. This video serves as an example of how to use our Figma community kit in practice."
        },
        {
            id: "ticGL4n1uMs",
            title: "Friday update",
            date: "June 20, 2025",
            description: "Just a small update"
        },
        {
            id: "5vzBZj3vck4",
            title: "Release video",
            date: "June 12, 2025",
            description: "Introducing the kit & the public beta."
        },
        {
            id: "bVqYV1G6IOA",
            title: "Getting started with your design system in Figma using the Obra shadcn/ui kit",
            date: "June 12, 2025",
            description: "A video that shows how easy it is to customize the kit."
        }
    ];
</script>

<svelte:head>
    <title>Videos - Obra shadcn/ui docs</title>
</svelte:head>

<div class="prose">
<h1>Videos</h1>

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
