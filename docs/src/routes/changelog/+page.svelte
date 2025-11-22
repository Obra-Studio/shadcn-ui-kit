<script>
    import Content from './content.md'
</script>

<svelte:head>
    <title>Changelog - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="prose">
    <div class="container container--small container--centered">
        <Content />
    </div>
</div>

<style>
    .prose h2 + p {
        color: var(--color-muted-foreground);
        font-size: 0.875rem;
    }

</style>