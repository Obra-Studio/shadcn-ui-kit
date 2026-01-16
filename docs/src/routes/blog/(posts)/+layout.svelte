<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';
	import H1 from "$lib/components/H1.svelte";
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Mail } from '@lucide/svelte';

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

<div class="container container--narrow py-8">
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

	<!-- Newsletter CTA -->
	<Card class="mt-12">
		<CardContent class="p-6">
			<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
				<div class="bg-primary flex items-center justify-center rounded-full w-10 h-10 shrink-0">
					<Mail class="w-5 h-5 text-secondary" />
				</div>
				<div class="flex-grow">
					<h3 class="text-lg font-semibold">Enjoyed this post?</h3>
					<p class="text-muted-foreground">Subscribe to receive new blog posts directly in your inbox when they're published.</p>
				</div>
				<a href="https://buttondown.com/obra-shadcn" target="_blank" class="shrink-0 w-full sm:w-auto">
					<Button variant="default" class="w-full sm:w-auto">Subscribe</Button>
				</a>
			</div>
		</CardContent>
	</Card>
</div>
