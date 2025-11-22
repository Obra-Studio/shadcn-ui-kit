<script>
	let {
		columns = false
	} = $props();
</script>

<ul class="list-none p-0 space-y-2" class:md:columns-2={columns}>
	<slot />
</ul>
