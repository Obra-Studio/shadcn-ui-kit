<script lang="ts">
	import { formatDate } from '$lib/blog/utils.js';

	import { IconRss } from 'obra-icons-svelte'
	let { data } = $props();
</script>

<svelte:head>
	<link
		href="/rss.xml"
		rel="alternate"
		title="RSS Feed for Obra shadcn/ui blog"
		type="application/rss+xml"
	/>
	<title>Blog - Obra shadcn/ui</title>
</svelte:head>


<div class="flex justify-between mb-8">
	<h1 class="text-2xl font-semibold">Blog</h1>
	<a aria-label="RSS Feed" class="flex gap-1" href="/rss.xml">
		<IconRss size={20} />
		RSS feed
	</a>
</div>

<ul>
	{#each data.posts as post (post.slug)}
		<li class="mb-8">
			<article>
				<header class="mb-4">
					<h2 class="text-2xl font-semibold">
						<a href="/blog/{post.slug}">{post.title}</a>
					</h2>
					<ul class="flex gap-2">
						<li class="text-muted-foreground">{formatDate(post.date)}</li>
						<li class="text-muted-foreground">By {post.author}</li>
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
