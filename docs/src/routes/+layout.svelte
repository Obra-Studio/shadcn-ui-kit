<script>

	import '$lib/screen.css'
	import Header from "$lib/components/Header.svelte";
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="main-flex-container">

	<Header />
	<div class="container">

		<Nav/>

		<main>
			{@render children?.()}
		</main>

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
        background: #FFF;
	}

    @media (min-width: 960px) {

        main {
            flex-grow: 1;
            padding: 1.5rem 4rem 4rem;
        }
    }

</style>