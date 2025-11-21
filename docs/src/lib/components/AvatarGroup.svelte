<script>
	import Avatar from './Avatar.svelte';

	let {
		avatars = [],
		size = "md"
	} = $props();
</script>

<div class="flex items-center justify-center -space-x-2">
	{#each avatars as avatar}
		<Avatar src={avatar.src} alt={avatar.alt} {size} />
	{/each}
</div>
