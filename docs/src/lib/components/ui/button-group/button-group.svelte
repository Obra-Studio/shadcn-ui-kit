<script>
	let {
		children
	} = $props();
</script>

<div class="flex gap-2 pb-4 items-center">
	{@render children()}
</div>