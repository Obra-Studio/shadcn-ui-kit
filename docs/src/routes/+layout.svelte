<script>
	import '../app.css';
	import '$lib/screen.css';
	import Header from '$lib/components/Header.svelte';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<div class="main-flex-container">
	<Header />
	<div class="container">
		<main>
			<div class="prose">
				{@render children()}
			</div>
		</main>

		<Nav />
	</div>

	<Footer />
</div>

<style>
	.container {
		max-width: 1280px;
		margin: 0 auto;
		width: 100%;
		flex-grow: 1;
	}

	@media (min-width: 960px) {
		.container {
			display: flex;
		}
	}

	main {
		padding: 1.5rem;
	}

	@media (min-width: 960px) {
		main {
			flex-grow: 1;
			padding: 1.5rem 4rem 4rem;
		}
	}
</style>
