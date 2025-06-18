<script>
	let {
		children
	} = $props();
</script>

<div class="flex gap-2 items-center">
	{@render children()}
</div>