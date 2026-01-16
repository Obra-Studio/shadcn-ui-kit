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
	import testimonialAvatar from '$lib/assets/avatar.png';
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
			text: 'Very helpfull! Thanks for making it free.',
		},
		{
			name: 'Alexandre Shyjada',
			role: '@username',
			text: 'Very helpfull, thank you for help me in my Figma Make projects!',
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
				'Obra shadcn/ui is made by Obra Studio. We are a small design and development studio with roots in Belgium and Mexico. We have a team of maintainers and freelancers helping to keep the kit in good shape and watch the shadcn/ui world.',
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
				'We are currently trying to find a good model to get paid and spend more time on the kit. We provide this kit for free because it helps people find our design and development agency. So far the kit has brought in a sizable amount of project revenue and has been an excellent lead magnet for Obra Studio.',
		},
		{
			title: 'I am new to Figma. Will a kit like this help me?',
			content:
				"If you're new to Figma, the shadcn/ui kit is a great example of a well-structured kit that you can use to learn from. Since it's completely free, you can just duplicate the file and start poking around!",
		},
		{
			title: 'Can I use Obra shadcn/ui in commercial projects?',
			content:
				"Yes, absolutely. Our MIT license puts no restrictions on what you can do with the kit. We're just never responsible for anything. There is no warranty on liability. On Figma Community, all files are distributed via a CCBY 4.0 license. This is similar to MIT but adds a crediting layer. You don't need to credit us when you use the kit, but if you're going to be nitpicky about licensing, be aware that parts of the Lucide Icons are derived from Feather Icons which was initially released under an ISC license - which requires people to credit the original creators, in this case Cole Bemis. Thanks Cole.",
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
		<Card>
			<CardContent class="p-8">
				<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<li class="flex gap-3 items-center">
						<Check class="w-5 h-5 text-green-600 shrink-0" />
						<span
							class="font-normal leading-6 text-base text-foreground"
						>
							Open-source and free to use
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
			</CardContent>
		</Card>
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
								<!-- <div
										class="relative rounded-full w-[46px] h-[46px]"
									>
										<img
											src={testimonialAvatar}
											alt={testimonial.name}
											class="rounded-full w-full h-full object-cover"
										/>
									</div> -->
								<div
									class="flex flex-col items-start leading-6 text-lg text-foreground"
								>
									<p class="font-bold">
										&mdash; {testimonial.name}
									</p>
									<!-- <p class="font-normal">
											{testimonial.role}
										</p> -->
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
								<!-- <div
										class="relative rounded-full w-[46px] h-[46px]"
									>
										<img
											src={testimonialAvatar}
											alt={testimonial.name}
											class="rounded-full w-full h-full object-cover"
										/>
									</div> -->
								<div
									class="flex flex-col items-start leading-6 text-lg text-foreground"
								>
									<p class="font-bold">
										&mdash; {testimonial.name}
									</p>
									<!-- <p class="font-normal">
											{testimonial.role}
										</p> -->
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
		<p
			class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
		>
			Community
		</p>
		<h2 class="heading-2">Stay updated</h2>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 w-full"
	>
		<!-- Latest Blog Posts -->
		<Card>
			<CardContent class="p-6">
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-3">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-10 h-10"
						>
							<Newspaper class="w-5 h-5 text-secondary" />
						</div>
						<h3 class="text-lg font-semibold">Latest blog posts</h3>
					</div>
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
			</CardContent>
		</Card>

		<!-- Latest Videos -->
		<Card>
			<CardContent class="p-6">
				<div class="flex flex-col gap-4">
					<div class="flex items-center gap-3">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-10 h-10"
						>
							<Video class="w-5 h-5 text-secondary" />
						</div>
						<h3 class="text-lg font-semibold">Latest videos</h3>
					</div>
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
					<a href="/documentation/videos" class="text-sm font-medium hover:underline mt-2">View all videos &rarr;</a>
				</div>
			</CardContent>
		</Card>

		<!-- Newsletter -->
		<Card>
			<CardContent class="p-6">
				<div class="flex flex-col gap-4 h-full">
					<div class="flex items-center gap-3">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-10 h-10"
						>
							<Mail class="w-5 h-5 text-secondary" />
						</div>
						<h3 class="text-lg font-semibold">Newsletter</h3>
					</div>
					<p class="text-muted-foreground flex-grow">
						Subscribe to receive new blog posts directly in your inbox when they're published.
					</p>
					<a href="https://buttondown.com/obra-shadcn" target="_blank">
						<Button variant="outline" size="sm" class="w-full">Subscribe</Button>
					</a>
				</div>
			</CardContent>
		</Card>

		<!-- GitHub -->
		<Card>
			<CardContent class="p-6">
				<div class="flex flex-col gap-4 h-full">
					<div class="flex items-center gap-3">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-10 h-10"
						>
							<Github class="w-5 h-5 text-secondary" />
						</div>
						<h3 class="text-lg font-semibold">GitHub</h3>
					</div>
					<p class="text-muted-foreground flex-grow">
						Join the conversation, ask questions, or report issues on GitHub.
					</p>
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
						<a href="https://github.com/Obra-Studio/shadcn-ui-kit/discussions" target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="sm" class="w-full">Discussions</Button>
						</a>
						<a href="https://github.com/Obra-Studio/shadcn-ui-kit/issues" target="_blank" rel="noopener noreferrer">
							<Button variant="outline" size="sm" class="w-full">Report an issue</Button>
						</a>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</section>

<!-- Customization Section -->
<section class="section bg-muted/50">
	<div class="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
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
				<a href="/customization-services">
					<Button>Learn more</Button>
				</a>
			</div>
		</div>
		<div class="flex items-center justify-center">
			<div class="bg-primary flex items-center justify-center rounded-full w-32 h-32">
				<Palette class="w-16 h-16 text-secondary" />
			</div>
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
								As part of our agency context, we give new designers and budding design system designers a chance to figure out potential changes in copies of the kit, after the team evaluates what they should bring to the public release. But the actual releasing is only done by someone who truly controls the kit.
							</p>
						{:else if index === 6}
							<p class="text-foreground break-words">
								We are currently trying to find a good model to get paid and spend more time on the kit. We provide this kit for free because it helps people find our design and development agency.
							</p>
							<p class="text-foreground break-words mt-4">
								So far the kit has brought in a sizable amount of project revenue and has been an excellent lead magnet for Obra Studio.
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
								Yes, absolutely. Our MIT license puts no restrictions on what you can do with the kit. We're just never responsible for anything. There is no warranty on liability.
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
