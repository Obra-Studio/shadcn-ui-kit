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
		Github,
		Plus,
		Figma,
		Zap,
		Palette,
		Code,
		Layers,
		Sparkles,
		Check,
	} from '@lucide/svelte';
	import testimonialAvatar from '$lib/assets/avatar.png';

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
			name: 'Jonathan Cheney',
			role: '@username',
			text: "Hey team Obra, just wanted to say thank you for creating this file. It's an awesome foundation and It brings me hope seeing more open source projects surface to the top! ",
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
			title: 'How often is the Obra shadcn/ui kit updated?',
			content:
				'Figma allows you to publish libraries for use in Figma Make. If you customize your library and then publish it to work with make, Make can read your shadcn/ui customizations. Since Make uses shadcn/ui under the hood for most UI generation logic at the moment of writing (November 2025) you can use a customization of the Obra shadcn/ui kit to feed your custom design logic to make.',
		},
		{
			title: 'How do you ensure updates?',
			content:
				'Obra shadcn/ui is made by Obra Studio. We are a small design and development studio with roots in Belgium and Mexico. We have team of maintainers and freelancers helping to keep the kit in good shape and watch the shadcn/ui world.',
		},
		{
			title: 'What does it mean to be open source, but not open contribution?',
			content:
				'This is an open source (not open contribution) project with no guarantee of updates. However, you can see our current track record from June 2025 up until now in the changelog. That being said, the kit is used in commercial work, and lessons from that commercial work (or bugs found!) are backported to the public work.',
		},
		{
			title: 'Can I sponsor this project?',
			content:
				'We are currently trying to find a good model to get paid and spend more time on the kit. We provide this kit for free because it helps people find our design and development agency. So far the kit has brought in a sizable amount of project revenue and has been an excellent lead magnet for Obra Studio. ',
		},
		{
			title: 'Can I use Obra shadcn/ui in commercial projects?',
			content:
				'Yes, absolutely. Our MIT license puts no restrictions on what you can do with the kit. We’re just never responsible for anything. There is no warrantly on liability. On Figma Community, all files are distributed via a CCBY 4.0 license. This is similar to MIT but adds a crediting layer. You don’t need to credit us when you use the kit, but if you’re going to be nitpicky about licensing, be aware that parts of the Lucide Icons are derived from Feather Icons which was initially released unser an ISC license - which requires people to credit the original creators, in this case Cole Bemis. Thanks Cole.',
		},
	];

	let mobileMenuOpen = $state(false);
</script>

<svelte:head>
	<title>Home - Obra shadcn/ui Figma kit</title>
</svelte:head>

<div class="page-container">
	<!-- Hero Section -->
	<section class="section">
		<div
			class="flex flex-col gap-8 items-center justify-center text-center"
		>
			<p class="font-normal leading-6 text-md text-muted-foreground">
				Duplicated over 25,000 times on Figma Community
			</p>
			<h1 class="heading-1">
				A free, high quality Figma library<br class="hidden md:block" />
				to design and theme shadcn/ui projects
			</h1>
		</div>
		<div
			class="flex flex-col md:flex-row gap-6 items-center [&>*]:w-full md:[&>*]:w-auto w-[240px] items-center justify-center"
		>
			<Button
				variant="default"
				href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui"
			>
				<Figma />
				Get design file
			</Button>
			<Button
				variant="secondary"
				href="https://github.com/obra-studio/shadcn-ui-kit"
			>
				<Github />
				Discuss on GitHub
			</Button>
		</div>
		<div class="pt-4 w-full">
			<div
				class="bg-muted border border-border aspect-[946/593] rounded-2xl w-full max-w-[946px] mx-auto flex justify-center items-center"
			>
				<p class="text-center text-muted-foreground">
					Screenshot placeholder
				</p>
			</div>
			<p class="text-center text-sm text-muted-foreground pt-4">
				Recreation of the October '25 drop. All new components available
				in Figma.
			</p>
		</div>
		<div class="pt-4 w-full max-w-[946px]">
			<Card>
				<CardContent class="p-8">
					<ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<li class="flex gap-3 items-center">
							<Check class="w-5 h-5 text-primary shrink-0" />
							<span
								class="font-normal leading-6 text-base text-foreground"
							>
								Open-source and free to use
							</span>
						</li>
						<li class="flex gap-3 items-center">
							<Check class="w-5 h-5 text-primary shrink-0" />
							<span
								class="font-normal leading-6 text-base text-foreground"
							>
								Recreates all 56 shadcn/ui components accurately
							</span>
						</li>
						<li class="flex gap-3 items-center">
							<Check class="w-5 h-5 text-primary shrink-0" />
							<span
								class="font-normal leading-6 text-base text-foreground"
							>
								Meticulously crafted by Figma experts
							</span>
						</li>
						<li class="flex gap-3 items-center">
							<Check class="w-5 h-5 text-primary shrink-0" />
							<span
								class="font-normal leading-6 text-base text-foreground"
							>
								All Tailwind 4 colors and 1500+ Lucide Icons
							</span>
						</li>
						<li class="flex gap-3 items-center">
							<Check class="w-5 h-5 text-primary shrink-0" />
							<span
								class="font-normal leading-6 text-base text-foreground"
							>
								Light & dark mode with theming support
							</span>
						</li>
						<li class="flex gap-3 items-center">
							<Check class="w-5 h-5 text-primary shrink-0" />
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
		<div
			class="flex flex-col gap-6 items-center justify-center text-center"
		>
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
			<div
				class="flex flex-col md:flex-row gap-[33px] items-center w-full"
			>
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

	<!-- Plugins Section -->
	<section class="section">
		<div
			class="flex flex-col gap-6 items-center justify-center text-center"
		>
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
		<div
			class="flex flex-col gap-8 items-center justify-center pt-4 w-full"
		>
			<div
				class="bg-muted border border-border aspect-[946/593] rounded-2xl w-full max-w-[1200px] mx-auto flex justify-center items-center"
			>
				<p class="text-center text-muted-foreground">
					Video placeholder
				</p>
			</div>
		</div>
	</section>

	<!-- Customization & Newsletter Section -->
	<section class="section">
		<div
			class="flex flex-col gap-6 items-center justify-center text-center"
		>
			<p
				class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
			>
				Services
			</p>
			<h2 class="heading-2">Work with us</h2>
		</div>
		<div
			class="flex flex-col md:flex-row gap-8 justify-center items-center pt-4 w-full"
		>
			<!-- Kit Customization Card -->
			<Card class="w-full md:flex-1 md:max-w-md">
				<CardContent class="p-6">
					<div class="flex flex-col gap-6 items-start h-full">
						<div class="flex flex-col gap-4 items-start w-full">
							<div
								class="bg-primary flex items-center justify-center rounded-full w-14 h-14"
							>
								<Palette class="w-7 h-7 text-secondary" />
							</div>
							<h3 class="heading-3">Let's work together</h3>
						</div>
						<div class="flex flex-col gap-4 items-start flex-grow">
							<p
								class="font-normal leading-7 text-lg text-muted-foreground"
							>
								Reach out for questions, partnerships, or
								collaborations. Whether you need help
								customizing your kit, want to explore working
								together, or have ideas to share, we'd love to
								hear from you.
							</p>
						</div>
						<a
							href="https://obra.studio/shadcn-ui-kit-customization/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline" size="sm"
								>Get in touch</Button
							>
						</a>
					</div>
				</CardContent>
			</Card>

			<!-- Newsletter Card -->
			<Card class="w-full md:flex-1 md:max-w-md">
				<CardContent class="p-6">
					<div class="flex flex-col gap-6 items-start h-full">
						<div class="flex flex-col gap-4 items-start w-full">
							<div
								class="bg-primary flex items-center justify-center rounded-full w-14 h-14"
							>
								<Sparkles class="w-7 h-7 text-secondary" />
							</div>
							<h3 class="heading-3">Stay updated</h3>
						</div>
						<div class="flex flex-col gap-4 items-start flex-grow">
							<p
								class="font-normal leading-7 text-lg text-muted-foreground"
							>
								Get the latest updates, new component releases,
								design tips, and insights delivered straight to
								your inbox. Join our community of designers and
								developers building with shadcn/ui.
							</p>
						</div>
						<a href="/newsletter">
							<Button variant="outline" size="sm"
								>Subscribe to newsletter</Button
							>
						</a>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>

	<!-- Case Studies Section -->
	<!-- <section
		  class="flex flex-col gap-10 items-center px-20 py-24 w-full max-w-[1440px] mx-auto"
	  >
		  <div
			  class="flex flex-col gap-6 items-center justify-center text-center"
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
							<div
								class="flex gap-4 items-center min-w-0 max-w-full"
							>
								<div
									class="bg-primary flex items-center justify-center rounded-full w-8 h-8 shrink-0"
								>
									<Plus
										class="w-6 h-6 text-secondary transition-transform duration-200 [button[data-state=open]_&]:rotate-45"
									/>
								</div>
								<p class="heading-faq min-w-0">
									{item.title}
								</p>
							</div>
						</AccordionTrigger>
						<AccordionContent class="px-6 pb-6">
							<p class="text-muted-foreground break-words">
								{item.content}
							</p>
						</AccordionContent>
					</AccordionItem>
				{/each}
			</Accordion>
		</div>
	</section>

	<!-- Install/CTA Section -->
	<section class="section bg-background">
		<div class="flex flex-col gap-6 items-center justify-center">
			<p
				class="font-medium leading-6 text-sm text-muted-foreground text-center tracking-[1px] uppercase"
			>
				Install
			</p>
			<h2 class="heading-2 text-center">Get started today</h2>
			<Button
				variant="default"
				href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui"
				><Figma /> Get design file</Button
			>
		</div>
	</section>
</div>
