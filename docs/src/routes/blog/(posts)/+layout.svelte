<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	let { data, children } = $props();
</script>

<svelte:head>
	<link
		href="/rss.xml"
		rel="alternate"
		title="RSS Feed for Obra shadcn/ui blog"
		type="application/rss+xml"
	/>
	<title>{data.title} - Blog - Obra shadcn/ui</title>
</svelte:head>

<div>
	<p class="mb-4">
		<a href="/blog">&larr; Back to overview</a>
	</p>

	<article>
		<header class="mb-4">
			<h1 class="text-2xl font-semibold">
				{data.title}
			</h1>
			<ul class="flex gap-2">
				<li class="text-muted-foreground">{formatDate(data.date)} by {data.author}</li>
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
