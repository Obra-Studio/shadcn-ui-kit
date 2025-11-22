<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';
	import H1 from "$lib/components/H1.svelte";

	let { data, children } = $props();
</script>

<svelte:head>
	<link
		href="/rss.xml"
		rel="alternate"
		title="RSS Feed for Obra shadcn/ui blog"
		type="application/rss+xml"
	/>
	<title>{data.title} - Blog - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="container container--small container--centered">
	<p class="mb-4">
		<a href="/blog">&larr; Back to overview</a>
	</p>

	<article>
		<header class="mb-4">
			<H1>
				{data.title}
			</H1>
			<ul class="flex gap-2 pt-4">
				<li class="text-muted-foreground">{formatDate(data.date)} by <a href="/authors/johan-ronsse">{data.author}</a></li>
				{#if data.tags.length}
					<li>
						<ul>
							{#each data.tags as tag (tag)}
								<li>
									<span>{tag}</span>
								</li>
							{/each}
						</ul>
					</li>
				{/if}
			</ul>
		</header>
		<div class="prose">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html data.content}
		</div>
	</article>
</div>
