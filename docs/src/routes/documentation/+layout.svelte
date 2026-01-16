<script>
	import DocsNav from './Nav.svelte';
</script>

<div class="md:flex md:flex-row gap-8">
	<DocsNav />
	<div class="flex-1">
		<slot />
	</div>
</div>
