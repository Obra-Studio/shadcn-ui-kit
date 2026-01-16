<script>
    import Content from './content.md'
</script>

<svelte:head>
    <title>Changelog - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="prose">
    <Content />
</div>

<style>
    .prose :global(h2 + p) {
        color: var(--color-muted-foreground);
        font-size: 0.875rem;
    }

</style>