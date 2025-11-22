<script>
	let {
		href,
		active = false,
		hiddenUntilMd = false,
		children
	} = $props();
</script>

<a
	{href}
	class="px-3 py-1.5 rounded-full text-base transition-colors no-underline"
	class:hidden={hiddenUntilMd}
	class:md:block={hiddenUntilMd}
	class:bg-white={!active}
	class:bg-gray-100={active}
	class:font-semibold={active}
>
	{@render children()}
</a>
