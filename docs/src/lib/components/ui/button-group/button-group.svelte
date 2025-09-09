<script>
	let {
		children
	} = $props();
</script>

<div class="flex flex-wrap gap-2 items-center">
	{@render children()}
</div>