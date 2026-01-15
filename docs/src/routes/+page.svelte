<script>
	import {ButtonGroup} from "$lib/components/ui/button-group/index.js";
	import {Button} from "$lib/components/ui/button/index.js";
	import AdvantageList from '$lib/components/AdvantageList.svelte';
	import AdvantageListItem from '$lib/components/AdvantageListItem.svelte';
	import H1 from '$lib/components/H1.svelte';
	import H3 from '$lib/components/H3.svelte';
	import HeroImage from '$lib/components/HeroImage.svelte';
	import TestimonialSlider from '$lib/components/TestimonialSlider.svelte';

	export let data;

	const testimonials = [
		{
			quote: "Hey team Obra, just wanted to say thank you for creating this file. It's an awesome foundation and It brings me hope seeing more open source projects surface to the top!",
			author: "Jonathan Cheney"
		},
		{
			quote: "This is an awesome work! Thank you so much",
			author: "조세영"
		},
		{
			quote: "Amazing kit, has been super helpful in various projects over the summer already!",
			author: "Robert Winters"
		}
	];
</script>

<svelte:head>
	<title>Home - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="gap gap-y-4 flex flex-col text-center py-12">
	<div class="max-w-4xl mx-auto mb-4 flex flex-col gap-6">
		<p>Duplicated over 29,000 times on Figma Community • 1500+ ❤️</p>
		<H1>Obra Shadn/ui kit: A free, high quality Figma library to design and theme shadcn/ui projects</H1>
		<HeroImage />
		<AdvantageList columns>
			<AdvantageListItem>Completely free to use</AdvantageListItem>
			<AdvantageListItem>Recreates all 56 shadcn/ui components accurately</AdvantageListItem>
			<AdvantageListItem>Meticulously crafted by Figma experts</AdvantageListItem>
			<AdvantageListItem>All Tailwind 4 colors and 1500+ Lucide Icons</AdvantageListItem>
			<AdvantageListItem>Light & dark mode with theming support</AdvantageListItem>
			<AdvantageListItem>No complex licensing: MIT Licensed</AdvantageListItem>
		</AdvantageList>
		<ButtonGroup center>
			<Button icon="figma" href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui" size="lg">Get design file</Button>
			<Button icon="github" href="https://github.com/Obra-Studio/shadcn-ui-kit/discussions" variant="outline" size="lg">Discuss on GitHub</Button>
		</ButtonGroup>
	</div>
</div>

<div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
	<div>
		<H3>What the community says</H3>

		<div class="prose mb-4">
			<p>With over 1500 likes on Figma Community, here are some kind words from our community members:</p>
		</div>

		<TestimonialSlider {testimonials} />


	</div>

	<div>
		<H3>Recent blog posts</H3>
		<ul class="list-none p-0">
			{#each data.recentPosts as post}
				<li class="border-b border-gray-300 pb-4 list-none mb-4 last:border-b-0 last:pb-0 last:mb-0">
					<a href="/blog/{post.slug}" class="block no-underline text-foreground hover:text-primary transition-colors">
						<div class="font-medium">{post.title}</div>
						<div class="text-muted-foreground text-sm mt-1">
							{post.date.toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'long',
								day: 'numeric'
							})}
						</div>
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

	<div>
		<H3>Recent videos</H3>
		<ul class="list-none p-0">
			{#each data.recentVideos as video}
				<li class="border-b border-gray-300 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
					<a href="/documentation/videos" class="block no-underline text-foreground hover:text-primary transition-colors">
						<div class="font-medium">{video.title}</div>
						<div class="text-muted-foreground text-sm mt-1">
							{video.date}
						</div>
					</a>
				</li>
			{/each}
		</ul>
		<div class="mt-4">
			<ButtonGroup>
				<Button href="/documentation/videos" variant="outline">View all videos</Button>
			</ButtonGroup>
		</div>
	</div>
</div>
