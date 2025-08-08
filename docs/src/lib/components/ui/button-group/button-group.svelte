<script>
	let {
		children
	} = $props();
</script>

<div class="flex flex-wrap gap-2 pb-4 items-center">
	{@render children()}
</div>