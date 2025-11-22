<script>
    import Content from './content.md'
    import HeaderWithBack from "$lib/components/HeaderWithBack.svelte";
    let title = 'Icons'
</script>

<svelte:head>
    <title>{title} - Documentation - Obra shadcn/ui kit</title>
</svelte:head>

<HeaderWithBack {title} />

<div class="prose">
    <Content />
</div>