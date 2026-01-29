<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	import { IconRss } from 'obra-icons-svelte'
	import H1 from "$lib/components/H1.svelte";
	import H2 from "$lib/components/H2.svelte";
	import NewsletterCTA from "$lib/components/NewsletterCTA.svelte";
	let { data } = $props();
</script>

<svelte:head>
	<link
		href="/rss.xml"
		rel="alternate"
		title="RSS Feed for Obra shadcn/ui blog"
		type="application/rss+xml"
	/>
	<title>Blog - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="container container--narrow py-8">
	<div class="flex justify-between mb-8">
		<H1>Blog</H1>
		<a aria-label="RSS Feed" class="flex gap-1" href="/rss.xml">
			<IconRss size={20}/>
			RSS feed
		</a>
	</div>

	<NewsletterCTA
		title="Want to be kept up to date whenever there is a new blog post?"
		description="Subscribe to our newsletter."
	/>

	<ul class="mt-12">
		{#each data.posts as post (post.slug)}
			<li class="mb-8 pb-8 border-b-border last:mb-0 last:pb-0 last:border-0 border-b-1">
				<article>
					<header class="mb-4">
						<H2>
							<a href="/blog/{post.slug}">{post.title}</a>
						</H2>
						<ul class="flex gap-2 pt-2">
							<li class="text-muted-foreground">{formatDate(post.date)} by <a href="/authors/johan-ronsse">{post.author}</a></li>
							{#if post.tags}
								<li>
									<ul>
										{#each post.tags as tag (tag)}
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
						{@html post.content}
					</div>
				</article>
			</li>
		{/each}
	</ul>
</div>

