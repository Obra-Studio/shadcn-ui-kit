<script>
    import Content from './content.md'
</script>

<svelte:head>
    <title>Changelog - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="container container--narrow py-8">
    <div class="prose">
        <Content />
    </div>
</div>

<style>
    .prose :global(h2 + p) {
        color: var(--color-muted-foreground);
    }
</style>