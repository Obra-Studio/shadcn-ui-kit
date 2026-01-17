<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import {
		Accordion,
		AccordionContent,
		AccordionItem,
		AccordionTrigger,
	} from '$lib/components/ui/accordion';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
	} from '$lib/components/ui/dialog';
	import {
		Github,
		Plus,
		Figma,
		Zap,
		Palette,
		Code,
		Layers,
		Sparkles,
		Check,
		Newspaper,
		Video,
		Mail,
	} from '@lucide/svelte';
	import { formatDate } from '$lib/blog/utils';

	let { data } = $props();

	const figmaUrl = 'https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui';
	const servicesUrl = 'https://obra.studio/shadcn-ui-kit-customization/';

	// Note: These image URLs are from Figma's localhost server
	// In production, these should be replaced with actual asset paths

	type Plugin = {
		id: string;
		name: string;
		icon: typeof Palette;
		description: string;
		image: string;
	};

	const testimonials = [
		{
			name: 'Jonathan Cheney',
			role: '@username',
			text: "Hey team Obra, just wanted to say thank you for creating this file. It's an awesome foundation and It brings me hope seeing more open source projects surface to the top!",
		},
		{
			name: '조세영',
			role: '@username',
			text: 'This is an awesome work! Thank you so much.',
		},
		{
			name: 'Robert Winters',
			role: '@username',
			text: 'Amazing kit, has been super helpful in various projects over the summer already!',
		},
		{
			name: 'Soumajit Ghosh',
			role: '@username',
			text: 'Very helpful! Thanks for making it free.',
		},
		{
			name: 'Alexandre Shyjada',
			role: '@username',
			text: 'Very helpful, thank you for help me in my Figma Make projects!',
		},
	];

	const plugins: Plugin[] = [
		{
			id: 'theming',
			name: 'Variable Collection Manager',
			icon: Palette,
			description:
				'Customize colors, typography, and design tokens to match your brand identity.',
			image: 'http://localhost:3845/assets/theming-placeholder.svg',
		},
		{
			id: 'components',
			name: 'Spacing Variable Fixer',
			icon: Layers,
			description:
				'Access a comprehensive library of pre-built, customizable UI components.',
			image: 'http://localhost:3845/assets/components-placeholder.svg',
		},
		{
			id: 'codegen',
			name: 'Variable Find and Replace',
			icon: Code,
			description:
				'Generate production-ready code directly from your Figma designs.',
			image: 'http://localhost:3845/assets/codegen-placeholder.svg',
		},
		{
			id: 'automation',
			name: 'Automation',
			icon: Zap,
			description:
				'Streamline your workflow with automated design-to-code pipelines.',
			image: 'http://localhost:3845/assets/automation-placeholder.svg',
		},
	];

	const faqItems = [
		{
			title: 'How do you use the kit?',
			content:
				'This kit is intended to be published as a library, after which the tokens and components would be used in another file. It can be used to create a UI design that is based on shadcn/ui.',
		},
		{
			title: 'How do I publish the Obra shadcn/ui kit as a library?',
			content:
				'Go to the assets panel and click the book icon to open the Manage Libraries dialog. From there, select Publish to make the file available to add as a library in other files. In the consuming file, go to Manage Libraries as well, but now visit the Teams section. Find the published library and click add to file.',
		},
		{
			title: 'Does the Obra shadcn/ui kit work with Figma Make?',
			content:
				'Figma allows you to publish libraries for use in Figma Make. If you customize your library and then publish it to work with Make, Make can read your shadcn/ui customizations. Since Make uses shadcn/ui under the hood for most UI generation logic, you can use a customization of the Obra shadcn/ui kit to feed your custom design logic to Make.',
		},
		{
			title: 'How often is the Obra shadcn/ui kit updated?',
			content:
				'Obra shadcn/ui is made by Obra Studio. We are a small design and development studio with roots in Belgium and Mexico. We have a team of maintainers and freelancers helping to keep the kit in good shape and watch the shadcn/ui world. Because we use this kit ourselves in commercial projects, any relevant updates that are applicable to the general public get added to the public version.',
		},
		{
			title: 'How do you ensure updates?',
			content:
				'This is an open source (not open contribution) project with no guarantee of updates. However, you can see our current track record from June 2025 up until now in the changelog. That being said, the kit is used in commercial work, and lessons from that commercial work (or bugs found!) are backported to the public work. We use the kit in commercial projects. Just like a coding projects, fixes we make in general for our clients land in the "upstream" version for everyone to enjoy.',
		},
		{
			title: 'What does it mean to be open source, but not open contribution?',
			content:
				'Because the kit is fragile and people depend on it, we only have the kit edited by skilled design system designers. As part of our agency context, we give new designers and budding design system designers a chance to figure out potential changes in copies of the kit, after the team evaluates what they should bring to the public release. But the actual releasing is only done by someone who truly controls the kit.',
		},
		{
			title: 'Can I sponsor this project?',
			content:
				'We provide this kit for free because it helps people find our design and development agency <a href="https://obra.studio/" class="underline">Obra</a>. We provide <a href="/customization-services" class="underline">customization services</a> where we help teams get started with the kit. So far the kit has brought in a sizable amount of project revenue and has been an excellent lead magnet for Obra Studio. For any commercial questions, please reach out via our <a href="https://obra.studio/contact/" class="underline">contact form</a>.',
		},
		{
			title: 'I am new to Figma. Will a kit like this help me?',
			content:
				"If you're new to Figma, the shadcn/ui kit is a great example of a well-structured kit that you can use to learn from. Since it's completely free, you can just duplicate the file and start poking around!",
		},
		{
			title: 'Can I use Obra shadcn/ui in commercial projects?',
			content:
				"Yes, absolutely. Our MIT license puts no restrictions on what you can do with the kit. We're just never responsible for anything. There is no warranty or liability. On Figma Community, all files are distributed via a CCBY 4.0 license. This is similar to MIT but adds a crediting layer. You don't need to credit us when you use the kit, but if you're going to be nitpicky about licensing, be aware that parts of the Lucide Icons are derived from Feather Icons which was initially released under an ISC license - which requires people to credit the original creators, in this case Cole Bemis. Thanks Cole.",
		},
	];

	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<title>Home - Obra shadcn/ui Figma kit</title>
</svelte:head>

<!-- Hero Section -->
<section class="section">
	<div class="flex flex-col gap-8 items-center justify-center text-center">
		<p class="font-normal leading-6 text-md text-muted-foreground">
			Duplicated over 30,000 times on Figma Community · Open source (MIT)
		</p>
		<h1 class="heading-1">
			A free, high quality Figma library<br class="hidden md:block" />
			to design and theme shadcn/ui projects
		</h1>
	</div>
	<div
		class="flex flex-col md:flex-row gap-6 items-center [&>*]:w-full md:[&>*]:w-auto w-[240px] items-center justify-center"
	>
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<Button variant="default" {...props}>
						<Figma />
						Get design file
					</Button>
				{/snippet}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Before you duplicate...</DialogTitle>
					<DialogDescription>
						Check out Obra's design services for custom theming, component development, and design system consultation.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter class="flex-col sm:flex-row gap-2">
					<Button variant="outline" href={servicesUrl} target="_blank">
						View design services
					</Button>
					<Button href={figmaUrl} target="_blank">
						<Figma />
						Continue to Figma
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
		<Button
			variant="secondary"
			href="https://github.com/obra-studio/shadcn-ui-kit"
		>
			<Github />
			Discuss on GitHub
		</Button>
	</div>
	<figure class="pt-4 w-full max-w-[946px] mx-auto">
		<img
			src="/ui-drop-october.png"
			alt="UI drop october"
			class="w-full h-auto rounded-2xl"
		/>
		<figcaption class="text-center text-sm text-muted-foreground pt-4">
			Recreation of the October '25 drop. All new components available in
			Figma.
		</figcaption>
	</figure>
	<div class="pt-4 w-full max-w-[946px]">
				<ul class="grid grid-cols-1 md:grid-cols-2 gap-2">
					<li class="flex gap-3 items-center">
						<Check class="w-5 h-5 text-green-600 shrink-0" />
						<span
							class="font-normal leading-6 text-base text-foreground"
						>
							Open-source & free to use
						</span>
					</li>
					<li class="flex gap-3 items-center">
						<Check class="w-5 h-5 text-green-600 shrink-0" />
						<span
							class="font-normal leading-6 text-base text-foreground"
						>
							Recreates all shadcn/ui components accurately
						</span>
					</li>
					<li class="flex gap-3 items-center">
						<Check class="w-5 h-5 text-green-600 shrink-0" />
						<span
							class="font-normal leading-6 text-base text-foreground"
						>
							Meticulously crafted by Figma experts
						</span>
					</li>
					<li class="flex gap-3 items-center">
						<Check class="w-5 h-5 text-green-600 shrink-0" />
						<span
							class="font-normal leading-6 text-base text-foreground"
						>
							All Tailwind 4 colors and 1500+ Lucide Icons
						</span>
					</li>
					<li class="flex gap-3 items-center">
						<Check class="w-5 h-5 text-green-600 shrink-0" />
						<span
							class="font-normal leading-6 text-base text-foreground"
						>
							Light & dark mode with deep theming support
						</span>
					</li>
					<li class="flex gap-3 items-center">
						<Check class="w-5 h-5 text-green-600 shrink-0" />
						<span
							class="font-normal leading-6 text-base text-foreground"
						>
							No complex licensing: MIT Licensed
						</span>
					</li>
				</ul>
	</div>
</section>

<!-- Testimonials Section -->
<section class="section">
	<div class="flex flex-col gap-2 items-center justify-center text-center">
		<p
			class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
		>
			Testimonials
		</p>
		<h2 class="heading-2">What the community is saying</h2>
	</div>
	<div class="flex flex-col gap-8 items-start justify-center pt-4 w-full">
		<div
			class="flex flex-col md:flex-row gap-8 items-center w-full
  "
		>
			{#each testimonials.slice(0, 3) as testimonial}
				<Card class="basis-1/2">
					<CardContent class="p-6">
						<div class="flex flex-col gap-4 items-start py-2">
							<p
								class="font-normal leading-6 text-lg text-muted-foreground w-full"
							>
								{testimonial.text}
							</p>
							<div class="flex gap-3 items-center">
								<div
									class="flex flex-col items-start leading-6 text-lg text-foreground"
								>
									<p class="font-medium">
										&mdash;{testimonial.name}
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
		<div class="flex flex-col md:flex-row gap-[33px] items-center justify-center w-full">
			{#each testimonials.slice(3, 6) as testimonial}
				<Card class="basis-1/3">
					<CardContent class="p-6">
						<div class="flex flex-col gap-4 items-start py-2">
							<p
								class="font-normal leading-6 text-lg text-muted-foreground w-full"
							>
								{testimonial.text}
							</p>
							<div class="flex gap-3 items-center">
								<div
									class="flex flex-col items-start leading-6 text-lg text-foreground"
								>
									<p class="font-medium">
										&mdash;{testimonial.name}
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Plugins Section (commented out for now)
<section class="section">
	<div class="flex flex-col gap-2 items-center justify-center text-center">
		<p
			class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
		>
			Build
		</p>
		<h2 class="heading-2">Design to dev</h2>
		<p
			class="font-normal leading-6 text-lg text-muted-foreground max-w-[660px]"
		>
			Export CSS directly from Figma and skip the handoff. Our plugin
			transforms your shadcn/ui designs into ready-to-use code,
			eliminating the gap between design and development.
		</p>
	</div>
	<div class="flex flex-col gap-8 items-center justify-center pt-4 w-full">
		<div
			class="bg-muted border border-border aspect-[946/593] rounded-2xl w-full max-w-[1200px] mx-auto flex justify-center items-center"
		>
			<p class="text-center text-muted-foreground">Video placeholder</p>
		</div>
	</div>
</section>
-->

<!-- Stay Updated Section -->
<section class="section">
	<div class="flex flex-col gap-2 items-center justify-center text-center">
		<h2 class="heading-2">Stay up to date</h2>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-12 pt-4 w-full">
		<!-- Latest Blog Posts -->
		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-semibold">Latest blog posts</h3>
			<ul class="flex flex-col">
				{#each data.recentPosts as post, i}
					<li class="py-3 {i !== data.recentPosts.length - 1 ? 'border-b border-border' : ''}">
						<a href="/blog/{post.slug}" class="group">
							<p class="font-medium group-hover:underline">{post.title}</p>
							<p class="text-sm text-muted-foreground">{formatDate(post.date)}</p>
						</a>
					</li>
				{/each}
			</ul>
			<a href="/blog" class="text-sm font-medium hover:underline mt-2">View all posts &rarr;</a>
		</div>

		<!-- Latest Videos -->
		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-semibold">Latest videos</h3>
			<ul class="flex flex-col">
				{#each data.recentVideos as video, i}
					<li class="py-3 {i !== data.recentVideos.length - 1 ? 'border-b border-border' : ''}">
						<a href="https://www.youtube.com/watch?v={video.id}" target="_blank" rel="noopener noreferrer" class="group">
							<p class="font-medium group-hover:underline line-clamp-2">{video.title}</p>
							<p class="text-sm text-muted-foreground">{video.date}</p>
						</a>
					</li>
				{/each}
			</ul>
			<a href="/videos" class="text-sm font-medium hover:underline mt-2">View all videos &rarr;</a>
		</div>

		<!-- Newsletter -->
		<div class="flex flex-col gap-4">
			<h3 class="text-xl font-semibold">Newsletter</h3>
			<p class="text-foreground">
				Subscribe to receive new blog posts directly in your inbox when they're published.
			</p>
			<Button variant="outline" size="sm" href="https://buttondown.com/obra-shadcn" target="_blank">Subscribe now</Button>
		</div>
	</div>
</section>

<!-- Community Section -->
<section class="section">
	<div class="flex flex-col gap-2 items-center justify-center text-center">
		<p
			class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
		>
			Community
		</p>
		<h2 class="heading-2">Join the conversation</h2>
	</div>
	<div class="w-full max-w-lg pt-4">
		<Card>
			<CardContent class="p-6">
				<div class="flex flex-col gap-4 h-full">
					<p class="text-muted-foreground flex-grow">
						Our roadmap is community-driven. Join the conversation, ask questions, suggest features, or report issues.
					</p>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
						<Button variant="outline" size="sm" class="w-full" href="https://github.com/Obra-Studio/shadcn-ui-kit/discussions" target="_blank" rel="noopener noreferrer"><Github class="w-4 h-4" />Discussions</Button>
						<Button variant="outline" size="sm" class="w-full" href="https://github.com/Obra-Studio/shadcn-ui-kit/issues" target="_blank" rel="noopener noreferrer"><Github class="w-4 h-4" />Report an issue</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Customization Section -->
<section class="section">
	<div class="flex flex-col md:flex-row gap-8 items-center justify-between w-full bg-muted/50 rounded-2xl p-8 md:p-12">
		<div class="flex flex-col gap-4 md:max-w-lg">
			<p
				class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
			>
				Services by Obra Studio
			</p>
			<h2 class="heading-2">Shadcn/ui kit customization</h2>
			<p class="text-lg text-muted-foreground">
				Kickstart your design system with help from <a href="https://obra.studio" target="_blank" rel="noopener noreferrer" class="underline">Obra Studio</a>, a design agency specialized in shadcn/ui. We can craft a fully customized version of the Obra shadcn/ui kit that matches your brand.
			</p>
			<div class="pt-2">
				<Button href="/customization-services">Learn more</Button>
			</div>
		</div>
		<div class="hidden md:flex flex-1 items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" viewBox="0 0 96 96" fill="none" class="invert dark:invert-0"><rect width="96" height="96" fill="#FFF" rx="10.313"></rect><path fill="#000" fill-rule="evenodd" d="M63.402 50.744 48.329 80.868h9.164l2.053-4.06h15.41l2.063 4.06h9.335L71.368 50.744h-7.965Zm5.117 13.384.493.99 2.723 5.356h-8.986l2.709-5.356c.314-.632.6-1.234.856-1.808a28.423 28.423 0 0 0 .954-2.127l.117.32c.2.544.428 1.118.685 1.72.142.288.292.59.45.905ZM14.254 80.868V50.744h17.302c2.855 0 5.196.387 7.023 1.162 1.856.746 3.226 1.865 4.111 3.357.914 1.463 1.37 3.256 1.37 5.379 0 2.037-.513 3.844-1.54 5.422-1.029 1.55-2.442 2.769-4.24 3.658l-.594.29 8.174 10.856H35.367l-7.34-9.793-5.122-.019v9.812h-8.651Zm16.788-16.267h-8.137V58.06h8.008c.714 0 1.37.115 1.97.344.6.23 1.07.588 1.414 1.076.37.459.556 1.076.556 1.85 0 .746-.185 1.363-.556 1.85-.343.488-.8.847-1.37 1.077-.572.23-1.2.344-1.885.344ZM52.28 46.052V15.928h17.614c2.737 0 5.046.301 6.927.904 1.881.602 3.306 1.449 4.275 2.539.97 1.09 1.454 2.367 1.454 3.83 0 1.75-.484 3.228-1.454 4.433-.88.895-2.37 1.73-3.005 2.035.79.266 1.55.606 2.279 1.02a7.56 7.56 0 0 1 2.693 2.41c.713.976 1.07 2.195 1.07 3.658 0 1.894-.414 3.443-1.24 4.648a8.68 8.68 0 0 1-3.25 2.84 15.963 15.963 0 0 1-4.276 1.42c-1.51.258-2.964.387-4.36.387H52.278Zm18.897-7.316H60.83v-5.034h10.133c.513 0 1.098.071 1.754.215.655.114 1.225.344 1.71.688.484.345.726.875.726 1.593 0 .602-.185 1.09-.556 1.463-.341.373-.812.645-1.41.817a7.266 7.266 0 0 1-2.01.258Zm-1.753-11.274H60.83v-4.218h8.509c1.197 0 2.195.158 2.993.474.798.286 1.197.803 1.197 1.549 0 .516-.171.932-.513 1.248-.314.315-.784.56-1.411.731-.599.144-1.326.216-2.18.216Z" clip-rule="evenodd"></path><path fill="#000" d="M29.236 46.3c-2.921 0-5.585-.384-7.99-1.151-2.405-.796-4.481-1.89-6.228-3.282-1.747-1.42-3.093-3.069-4.038-4.944-.945-1.903-1.418-3.963-1.418-6.18 0-2.216.473-4.261 1.418-6.137.974-1.903 2.334-3.551 4.08-4.944 1.748-1.42 3.81-2.514 6.186-3.281 2.405-.796 5.054-1.194 7.947-1.194 2.892 0 5.526.398 7.903 1.194 2.406.767 4.482 1.86 6.229 3.282 1.746 1.392 3.092 3.04 4.037 4.943.974 1.875 1.46 3.907 1.46 6.095 0 2.244-.486 4.319-1.46 6.222-.945 1.875-2.29 3.523-4.037 4.944-1.747 1.392-3.823 2.486-6.229 3.282-2.377.767-4.997 1.15-7.86 1.15Zm-.043-8.524c1.489 0 2.849-.17 4.08-.512 1.26-.37 2.334-.866 3.222-1.492.916-.653 1.618-1.406 2.105-2.258a5.257 5.257 0 0 0 .773-2.77c0-.995-.258-1.918-.773-2.77-.487-.853-1.189-1.592-2.105-2.217-.888-.653-1.962-1.15-3.222-1.492-1.231-.369-2.591-.554-4.08-.554-1.49 0-2.864.185-4.124.554-1.231.341-2.305.839-3.222 1.492-.916.625-1.617 1.364-2.104 2.216a5.492 5.492 0 0 0-.73 2.77c0 .995.243 1.918.73 2.77.487.853 1.188 1.606 2.104 2.26.917.625 1.99 1.122 3.222 1.491 1.26.341 2.634.512 4.124.512Z"></path></svg>
		</div>
	</div>
</section>

<!-- Case Studies Section -->
<!-- <section
		  class="flex flex-col gap-10 items-center px-20 py-24 w-full max-w-[1440px] mx-auto"
	  >
		  <div
			  class="flex flex-col gap-2 items-center justify-center text-center"
		  >
			  <p
				  class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase w-[530px]"
			  >
				  CASE STUDIES
			  </p>
			  <h2
				  class="font-semibold leading-normal text-4xl text-foreground tracking-[-0.44px]"
			  >
				  In practice
			  </h2>
		  </div>
	  </section> -->

<!-- Get in Touch Section -->

<!-- FAQ Section -->
<section class="section gap-[58px]">
	<h2 class="heading-2 text-center w-full">FAQ</h2>
	<div
		class="flex flex-col gap-5 items-start self-center max-w-[660px] w-full"
	>
		<Accordion type="single" class="w-full">
			{#each faqItems as item, index}
				<AccordionItem
					value={`item-${index}`}
					class="border border-border rounded-lg hover:bg-secondary/50"
				>
					<AccordionTrigger class="px-6 py-6 [&>svg]:hidden">
						<div class="flex gap-3 items-center min-w-0 max-w-full">
							<div
								class="bg-primary flex items-center justify-center rounded-full w-6 h-6 shrink-0"
							>
								<Plus
									class="w-4 h-4 text-secondary transition-transform duration-200 [button[data-state=open]_&]:rotate-45"
								/>
							</div>
							<p class="heading-faq min-w-0 dark:text-white">
								{item.title}
							</p>
						</div>
					</AccordionTrigger>
					<AccordionContent class="px-6 pb-6">
						{#if index === 0}
							<p class="text-foreground break-words">
								This kit is intended to be published as a library, after which the tokens and components would be used in another file. It can be used to create a UI design that is based on shadcn/ui.
							</p>
							<p class="text-foreground break-words mt-4">
								<Dialog>
									<DialogTrigger>
										{#snippet child({ props })}
											<button class="underline text-foreground" {...props}>Get the design file on Figma Community</button>
										{/snippet}
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>Before you duplicate...</DialogTitle>
											<DialogDescription>
												Check out Obra's design services for custom theming, component development, and design system consultation.
											</DialogDescription>
										</DialogHeader>
										<DialogFooter class="flex-col sm:flex-row gap-2">
											<Button variant="outline" href={servicesUrl} target="_blank">
												View design services
											</Button>
											<Button href={figmaUrl} target="_blank">
												<Figma />
												Continue to Figma
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</p>
						{:else if index === 1}
							<p class="text-foreground break-words">
								Go to the assets panel and click the book icon to open the Manage Libraries dialog. From there, select Publish to make the file available to add as a library in other files.
							</p>
							<p class="text-foreground break-words mt-4">
								In the consuming file, go to Manage Libraries as well, but now visit the Teams section. Find the published library and click add to file.
							</p>
						{:else if index === 2}
							<p class="text-foreground break-words">
								Figma allows you to publish libraries for use in Figma Make. If you customize your library and then publish it to work with Make, Make can read your shadcn/ui customizations.
							</p>
							<p class="text-foreground break-words mt-4">
								Since Make uses shadcn/ui under the hood for most UI generation logic, you can use a customization of the Obra shadcn/ui kit to feed your custom design logic to Make.
							</p>
						{:else if index === 3}
							<p class="text-foreground break-words">
								Obra shadcn/ui is made by Obra Studio. We are a small design and development studio with roots in Belgium and Mexico.
							</p>
							<p class="text-foreground break-words mt-4">
								We have a team of maintainers and freelancers helping to keep the kit in good shape and watch the shadcn/ui world.
							</p>
						{:else if index === 4}
							<p class="text-foreground break-words">
								This is an open source (not open contribution) project with no guarantee of updates. However, you can see our current track record from June 2025 up until now in the changelog.
							</p>
							<p class="text-foreground break-words mt-4">
								That being said, the kit is used in commercial work, and lessons from that commercial work (or bugs found!) are backported to the public work. We use the kit in commercial projects. Just like coding projects, fixes we make in general for our clients land in the "upstream" version for everyone to enjoy.
							</p>
						{:else if index === 5}
							<p class="text-foreground break-words">
								Because the kit is fragile and people depend on it, we only have the kit edited by skilled design system designers.
							</p>
							<p class="text-foreground break-words mt-4">
								As part of our agency context, we give new designers and budding design system designers a chance to figure out potential changes in copies of the kit, after the team evaluates what they should bring to the public release.
							</p>
							<p class="text-foreground break-words mt-4">
								But the actual releasing is only done by someone who truly controls the kit.
							</p>
						{:else if index === 6}
							<p class="text-foreground break-words">
								We provide this kit for free because it helps people find our design and development agency <a href="https://obra.studio/" class="underline">Obra</a>.
							</p>
							<p class="text-foreground break-words mt-4">
								We provide <a href="/customization-services" class="underline">customization services</a> where we help teams get started with the kit.
							</p>
							<p class="text-foreground break-words mt-4">
								So far the kit has brought in a sizable amount of project revenue and has been an excellent lead magnet for Obra Studio.
							</p>
							<p class="text-foreground break-words mt-4">
								For any commercial questions, please reach out via our <a href="https://obra.studio/contact/" class="underline">contact form</a>.
							</p>
						{:else if index === 7}
							<p class="text-foreground break-words">
								If you're new to Figma, the shadcn/ui kit is a great example of a well-structured kit that you can use to learn from.
							</p>
							<p class="text-foreground break-words mt-4">
								Since it's completely free, you can just duplicate the file and start poking around!
							</p>
						{:else if index === 8}
							<p class="text-foreground break-words">
								Yes, absolutely. Our MIT license puts no restrictions on what you can do with the kit. We're just never responsible for anything. There is no warranty or liability.
							</p>
							<p class="text-foreground break-words mt-4">
								On Figma Community, all files are distributed via a CCBY 4.0 license. This is similar to MIT but adds a crediting layer. You don't need to credit us when you use the kit, but if you're going to be nitpicky about licensing, be aware that parts of the Lucide Icons are derived from Feather Icons which was initially released under an ISC license - which requires people to credit the original creators, in this case Cole Bemis. Thanks Cole.
							</p>
						{:else}
							<p class="text-foreground break-words">
								{item.content}
							</p>
						{/if}
					</AccordionContent>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</section>

<!-- CTA Section -->
<section class="section bg-background">
	<div class="flex flex-col gap-6 items-center justify-center">
		<p
			class="font-medium leading-6 text-sm text-muted-foreground text-center tracking-[1px] uppercase"
		>
			Get the kit
		</p>
		<h2 class="heading-2 text-center">Start designing with shadcn/ui today</h2>
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<Button variant="default" {...props}>
						<Figma />
						Get design file
					</Button>
				{/snippet}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Before you duplicate...</DialogTitle>
					<DialogDescription>
						Check out Obra's design services for custom theming, component development, and design system consultation.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter class="flex-col sm:flex-row gap-2">
					<Button variant="outline" href={servicesUrl} target="_blank">
						View design services
					</Button>
					<Button href={figmaUrl} target="_blank">
						<Figma />
						Continue to Figma
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>
</section>
