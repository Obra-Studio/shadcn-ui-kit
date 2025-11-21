<script>
	let {
		children,
		center = false
	} = $props();
</script>

<div class="flex flex-wrap gap-2 items-center" class:justify-center={center}>
	{@render children()}
</div>