<script>
    import Nav from './Nav.svelte';
</script>

<div class="docs-container">
    <div>
        <slot />
    </div>
    <Nav />
</div>

<style>

    .docs-container {
        display: flex;
        gap: 2rem;
    }

</style>
