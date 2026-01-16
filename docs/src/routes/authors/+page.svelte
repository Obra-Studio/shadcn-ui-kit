<script>
	import { Card, CardContent } from '$lib/components/ui/card';

	const authors = [
		{
			name: 'Johan Ronsse',
			role: 'Creator and maintainer of the Obra shadcn/ui Figma kit.',
			link: '/authors/johan-ronsse'
		},
		{
			name: 'Marina Rizo Digon',
			role: 'Visual advice & pixel perfection'
		},
		{
			name: 'Robert Winters',
			role: 'Business advisor & startup lover'
		},
		{
			name: 'Jorre Vandenbussche',
			role: 'Resident tester & helps with component perfection'
		},
		{
			name: 'Jovi Verheyen',
			role: 'Component perfectionist'
		}
	];
</script>

<svelte:head>
	<title>Authors - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="container py-8">
	<div class="flex flex-col gap-6 mb-8">
		<h1 class="heading-2">Authors</h1>
		<p class="text-lg text-muted-foreground">Learn more about the people behind the Obra shadcn/ui Figma kit.</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each authors as author}
			<Card>
				<CardContent class="p-6">
					<div class="flex flex-col gap-2">
						{#if author.link}
							<h2 class="text-lg font-bold"><a href={author.link} class="hover:underline">{author.name}</a></h2>
						{:else}
							<h2 class="text-lg font-bold">{author.name}</h2>
						{/if}
						<p class="text-muted-foreground">{author.role}</p>
					</div>
				</CardContent>
			</Card>
		{/each}
	</div>

	<p class="text-lg text-muted-foreground mt-8">
		Find out more about Obra on our website at <a href="https://obra.studio/" class="underline">obra.studio</a>.
	</p>
</div>
