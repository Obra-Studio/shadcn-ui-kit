Pl<script>
	let {
		src,
		alt = "",
		size = "md"
	} = $props();

	const sizes = {
		sm: "w-8 h-8",
		md: "w-10 h-10",
		lg: "w-12 h-12"
	};
</script>

<img
	{src}
	{alt}
	class="rounded-full border-2 border-white {sizes[size]}"
/>
