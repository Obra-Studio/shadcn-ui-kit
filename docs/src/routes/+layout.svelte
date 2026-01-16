<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let { children } = $props();
	
	// Determine container width based on route
	// To add more container widths:
	// 1. Add a new variant in layout.css (e.g., .page-container--custom { --container-width: 800px; })
	// 2. Add a condition here to return the class name for that route
	const containerClass = derived(page, ($page) => {
		const pathname = $page.url.pathname;
		
		// Blog routes use narrow container (700px)
		if (pathname.startsWith('/blog')) {
			return 'page-container--narrow';
		}
		
		// Changelog and authors also use narrow container
		if (pathname.startsWith('/changelog') || pathname.startsWith('/authors')) {
			return 'page-container--narrow';
		}
		
		// Add more route-specific container widths here as needed:
		// if (pathname.startsWith('/some-route')) {
		//   return 'page-container--medium';  // 1000px
		// }
		
		// Default to wide container (1440px)
		return '';
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<ModeWatcher />

<div class="bg-background flex flex-col items-start w-full min-h-screen">
	<Header />
	<div class="page-container {$containerClass}">
		{@render children()}
	</div>
	<Footer />
</div>
