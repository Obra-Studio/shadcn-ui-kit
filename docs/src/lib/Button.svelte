<script>
	import { IconArrowRight } from 'obra-icons-svelte';
	let { href, children } = $props();
</script>


	<a class="button" {href}>
		{@render children?.()}
		<IconArrowRight />
	</a>

<style>

    .button {
		display: inline-flex;
		align-items: center;
		gap: .5rem;
		text-decoration: none;
		background: #DDD;
		padding: .75rem 1rem;
		border-radius: 4px;
		color: #000;
    }

	.button:hover {
		background: #EEE;
	}

</style>
