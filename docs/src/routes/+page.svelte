<script>
	import IntroContent1 from './intro-content-1.svx'
	import IntroContent2 from './intro-content-2.svx'
	import {ButtonGroup} from "$lib/components/ui/button-group/index.js";
	import {Button} from "$lib/components/ui/button/index.js";

	export let data;
</script>

<svelte:head>
	<title>Obra shadcn/ui Figma kit docs - Home</title>
</svelte:head>

<div class="prose">
	<IntroContent1 />
</div>

<div class="mb-6">
	<ul class="list-none p-0 space-y-2 md:columns-2">
		<li class="flex items-center">
			<span class="text-green-600 mr-2">✓</span>
			Completely free to use
		</li>
		<li class="flex items-center">
			<span class="text-green-600 mr-2">✓</span>
			Recreates 50+ shadcn/ui v4 components accurately
		</li>
		<li class="flex items-center">
			<span class="text-green-600 mr-2">✓</span>
			Light & dark mode with theming support
		</li>
		<li class="flex items-center">
			<span class="text-green-600 mr-2">✓</span>
			No complex licensing: MIT Licensed
		</li>
		<li class="flex items-center">
			<span class="text-green-600 mr-2">✓</span>
			Already used by 17 500+ designers
		</li>
		<li class="flex items-center">
			<span class="text-green-600 mr-2">✓</span>
			1000+ likes on Figma Community
		</li>
	</ul>
</div>

<div class="pb-4">
	<ButtonGroup>
		<Button icon="figma" href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui">Get design file</Button>
		<Button icon="github" variant="secondary" href="https://github.com/Obra-Studio/shadcn-ui-kit/issues">Discuss on Github</Button>
	</ButtonGroup>
</div>

<div class="prose">
	<IntroContent2 />
</div>

<div class="prose mt-8">
	<h2>Recent Blog Posts</h2>
	<ul>
		{#each data.recentPosts as post}
			<li>
				<a href="/blog/{post.slug}" class="text-foreground hover:text-primary transition-colors">
					{post.title}
				</a>
				<span class="text-muted-foreground ml-2">
					({post.date.toLocaleDateString('en-US', { 
						year: 'numeric', 
						month: 'short', 
						day: 'numeric' 
					})})
				</span>
			</li>
		{/each}
	</ul>
	<div class="mt-4">
		<a href="/blog" class="text-primary hover:underline">View all blog posts →</a>
	</div>
</div>

<div class="prose mt-8">
	<h2>Recent Videos</h2>
	<ul>
		{#each data.recentVideos as video}
			<li>
				<a href="/videos" class="text-foreground hover:text-primary transition-colors">
					{video.title}
				</a>
				<span class="text-muted-foreground ml-2">
					({video.date})
				</span>
			</li>
		{/each}
	</ul>
	<div class="mt-4">
		<a href="/videos" class="text-primary hover:underline">View all videos →</a>
	</div>
</div>
