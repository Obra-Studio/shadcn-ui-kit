<script>
	import {ButtonGroup} from "$lib/components/ui/button-group/index.js";
	import {Button} from "$lib/components/ui/button/index.js";
	import AdvantageList from '$lib/components/AdvantageList.svelte';
	import AdvantageListItem from '$lib/components/AdvantageListItem.svelte';
	import H1 from '$lib/components/H1.svelte';
	import H3 from '$lib/components/H3.svelte';
	import AvatarGroup from '$lib/components/AvatarGroup.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';

	export let data;
</script>

<svelte:head>
	<title>Obra shadcn/ui Figma kit - Home</title>
</svelte:head>


<div class="gap gap-y-4 flex flex-col text-center py-12">
	<div class="max-w-4xl mx-auto mb-4 flex flex-col gap-6">
		<p>Loved by Shadcn and over 20,000 creators and teams</p>
		<HeroImage />
		<H1>Obra Shadn/ui kit: A free, high quality Figma library to design and theme shadcn/ui projects</H1>
		<AdvantageList>
			<AdvantageListItem>Completely free to use</AdvantageListItem>
			<AdvantageListItem>Recreates all 56 shadcn/ui components accurately</AdvantageListItem>
			<AdvantageListItem>Meticulously crafted by Figma experts</AdvantageListItem>
			<AdvantageListItem>All Tailwind 4 colors and 1500+ Lucide Icons</AdvantageListItem>
			<AdvantageListItem>Light & dark mode with theming support</AdvantageListItem>
			<AdvantageListItem>No complex licensing: MIT Licensed</AdvantageListItem>
		</AdvantageList>
		<ButtonGroup center>
			<Button icon="figma" href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui" size="lg">Get design file</Button>
		</ButtonGroup>
	</div>
</div>

<H3>What the community says</H3>

<AdvantageList>
	<AdvantageListItem>Already used by 20,000+ designers</AdvantageListItem>
	<AdvantageListItem>1200+ likes on Figma Community</AdvantageListItem>
</AdvantageList>

<div class="mt-8">
	<H3>Recent blog posts</H3>
	<ul class="list-none p-0">
		{#each data.recentPosts as post}
			<li class="border-b border-gray-300 pb-4 list-none mb-4 last:border-b-0 last:pb-0 last:mb-0">
				<a href="/blog/{post.slug}" class="block no-underline text-foreground hover:text-primary transition-colors">
					{post.title}
					<span class="text-muted-foreground ml-2">
						{post.date.toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</span>
				</a>
			</li>
		{/each}
	</ul>
	<div class="mt-4">
		<ButtonGroup>
			<Button href="/blog" variant="outline">View all blog posts</Button>
		</ButtonGroup>
	</div>
</div>

<div class="mt-8">
	<H3>Recent videos</H3>
	<ul class="list-none p-0">
		{#each data.recentVideos as video}
			<li class="border-b border-gray-300 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
				<a href="/videos" class="block no-underline text-foreground hover:text-primary transition-colors">
					{video.title}
					<span class="text-muted-foreground ml-2">
						{video.date}
					</span>
				</a>
			</li>
		{/each}
	</ul>
	<div class="mt-4">
		<ButtonGroup>
			<Button href="/videos" variant="outline">View all videos</Button>
		</ButtonGroup>
	</div>
</div>
