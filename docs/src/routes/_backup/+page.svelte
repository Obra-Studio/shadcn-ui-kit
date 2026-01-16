<script lang="ts">
	import {
		Tabs,
		TabsContent,
		TabsList,
		TabsTrigger,
	} from '$lib/components/ui/tabs';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import {
		Zap,
		Palette,
		Code,
		Layers,
		Gift,
		CheckCircle2,
		Award,
		Package,
		Contrast,
		FileText,
		Mail,
		Github,
	} from '@lucide/svelte';

	// Note: These image URLs are from Figma's localhost server
	// In production, these should be replaced with actual asset paths

	type Plugin = {
		id: string;
		name: string;
		icon: typeof Palette;
		description: string;
		image: string;
	};

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
</script>

<div class="bg-background flex flex-col items-start w-full min-h-screen">
	<!-- Plugins Section -->
	<section
		class="flex flex-col gap-10 items-center px-10 py-24 w-full max-w-[1440px] mx-auto"
	>
		<div
			class="flex flex-col gap-6 items-center justify-center text-center"
		>
			<p
				class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
			>
				PLUGINS
			</p>
			<h2
				class="font-semibold leading-normal text-4xl text-foreground tracking-[-0.44px]"
			>
				design to dev
			</h2>
			<p
				class="font-normal leading-6 text-lg text-muted-foreground max-w-[660px]"
			>
				Discover plugins and integrations that enhance the kit's
				capabilities and streamline your design process.
			</p>
		</div>
		<div
			class="flex flex-col lg:flex-row gap-8 items-start justify-center pt-4 w-full"
		>
			<Tabs
				value={plugins[0].id}
				class="flex flex-col lg:flex-row gap-8 w-full"
			>
				<TabsList
					class="flex flex-col h-auto w-full lg:w-[420px] bg-transparent p-0 gap-4"
				>
					{#each plugins as plugin}
						<TabsTrigger
							value={plugin.id}
							class="group w-full justify-start items-start gap-3 p-5 h-auto border whitespace-normal rounded-xl relative overflow-hidden"
						>
							<div
								class="bg-accent w-2 h-full absolute top-0 left-0 hidden group-data-[state=active]:block"
							></div>
							<div
								class="bg-primary flex items-center justify-center rounded-full w-12 h-12 shrink-0"
							>
								<plugin.icon
									style="width: 24px; height: 24px"
									class="text-secondary"
								/>
							</div>
							<div class="flex flex-col items-start gap-1">
								<span
									class="font-semibold text-base text-foreground"
								>
									{plugin.name}
								</span>
								<p
									class="font-normal text-base text-muted-foreground text-left"
								>
									{plugin.description}
								</p>
							</div>
						</TabsTrigger>
					{/each}
				</TabsList>
				<div class="flex-1 w-full lg:w-auto">
					{#each plugins as plugin}
						<TabsContent value={plugin.id} class="mt-0">
							<div
								class="bg-muted border border-border aspect-[4/3] rounded-2xl w-full overflow-hidden"
							>
								<!-- Image placeholder - replace with actual images when available -->
								<div
									class="w-full h-full flex items-center justify-center"
								>
									<div
										class="text-muted-foreground text-center px-4"
									>
										<p>{plugin.description}</p>
									</div>
								</div>
							</div>
						</TabsContent>
					{/each}
				</div>
			</Tabs>
		</div>
	</section>

	<!-- Benefits Section -->
	<section
		class="flex flex-col gap-10 items-center px-10 py-24 w-full max-w-[1440px] mx-auto"
	>
		<div
			class="flex flex-col gap-6 items-center justify-center text-center"
		>
			<p
				class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
			>
				BENEFITS
			</p>
			<h2
				class="font-semibold leading-normal text-4xl text-foreground tracking-[-0.44px]"
			>
				Everything you need, nothing you don't
			</h2>
			<p
				class="font-normal leading-6 text-lg text-muted-foreground max-w-[660px]"
			>
				A comprehensive Figma library that brings shadcn/ui to your
				design workflow with professional quality and zero barriers.
			</p>
		</div>
		<div
			class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start pt-4 w-full"
		>
			<Card class="h-full">
				<CardContent class="p-6">
					<div class="flex flex-col gap-4 items-start">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
						>
							<Gift class="w-6 h-6 text-secondary" />
						</div>
						<h3
							class="font-semibold leading-7 text-xl text-foreground tracking-[-0.4px]"
						>
							Completely free to use
						</h3>
						<p
							class="font-normal leading-6 text-base text-muted-foreground"
						>
							No hidden costs, no premium tiers. Access the full
							library completely free, forever.
						</p>
					</div>
				</CardContent>
			</Card>

			<Card class="h-full">
				<CardContent class="p-6">
					<div class="flex flex-col gap-4 items-start">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
						>
							<CheckCircle2 class="w-6 h-6 text-secondary" />
						</div>
						<h3
							class="font-semibold leading-7 text-xl text-foreground tracking-[-0.4px]"
						>
							All 56 components recreated
						</h3>
						<p
							class="font-normal leading-6 text-base text-muted-foreground"
						>
							Every shadcn/ui component accurately recreated with
							pixel-perfect precision and attention to detail.
						</p>
					</div>
				</CardContent>
			</Card>

			<Card class="h-full">
				<CardContent class="p-6">
					<div class="flex flex-col gap-4 items-start">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
						>
							<Award class="w-6 h-6 text-secondary" />
						</div>
						<h3
							class="font-semibold leading-7 text-xl text-foreground tracking-[-0.4px]"
						>
							Crafted by Figma experts
						</h3>
						<p
							class="font-normal leading-6 text-base text-muted-foreground"
						>
							Meticulously designed by experienced Figma
							professionals who understand design systems and
							component architecture.
						</p>
					</div>
				</CardContent>
			</Card>

			<Card class="h-full">
				<CardContent class="p-6">
					<div class="flex flex-col gap-4 items-start">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
						>
							<Package class="w-6 h-6 text-secondary" />
						</div>
						<h3
							class="font-semibold leading-7 text-xl text-foreground tracking-[-0.4px]"
						>
							Complete design system
						</h3>
						<p
							class="font-normal leading-6 text-base text-muted-foreground"
						>
							Includes all Tailwind 4 colors and 1500+ Lucide
							icons, giving you everything you need for modern UI
							design.
						</p>
					</div>
				</CardContent>
			</Card>

			<Card class="h-full">
				<CardContent class="p-6">
					<div class="flex flex-col gap-4 items-start">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
						>
							<Contrast class="w-6 h-6 text-secondary" />
						</div>
						<h3
							class="font-semibold leading-7 text-xl text-foreground tracking-[-0.4px]"
						>
							Light & dark mode support
						</h3>
						<p
							class="font-normal leading-6 text-base text-muted-foreground"
						>
							Built-in theming support with light and dark modes,
							making it easy to design for both preferences.
						</p>
					</div>
				</CardContent>
			</Card>

			<Card class="h-full">
				<CardContent class="p-6">
					<div class="flex flex-col gap-4 items-start">
						<div
							class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
						>
							<FileText class="w-6 h-6 text-secondary" />
						</div>
						<h3
							class="font-semibold leading-7 text-xl text-foreground tracking-[-0.4px]"
						>
							MIT Licensed
						</h3>
						<p
							class="font-normal leading-6 text-base text-muted-foreground"
						>
							No complex licensing restrictions. Use it freely in
							any project, commercial or personal, with full
							confidence.
						</p>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>

	<section
		class="flex flex-col gap-10 items-center px-10 py-24 w-full max-w-[1440px] mx-auto"
	>
		<div
			class="flex flex-col gap-6 items-center justify-center text-center"
		>
			<p
				class="font-medium leading-6 text-sm text-muted-foreground tracking-[1px] uppercase"
			>
				CONTACT
			</p>
			<h2
				class="font-semibold leading-normal text-4xl text-foreground tracking-[-0.44px]"
			>
				Get in touch
			</h2>
		</div>
		<div
			class="flex flex-col md:flex-row gap-8 items-center justify-center pt-4 w-full"
		>
			<Card class="basis-1/3">
				<CardContent class="p-6">
					<div
						class="flex flex-col gap-6 items-center text-center py-2"
					>
						<div class="flex flex-col gap-3 items-center w-full">
							<div
								class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
							>
								<Mail class="w-6 h-6 text-secondary" />
							</div>
							<h3
								class="font-semibold leading-6 text-lg text-foreground w-full"
							>
								Email
							</h3>
						</div>
						<div class="flex flex-col gap-4 items-center w-full">
							<p
								class="font-normal leading-6 text-base text-muted-foreground"
							>
								Reach out for questions, partnerships, or
								collaborations.
							</p>
							<Button variant="default">Email</Button>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card class="basis-1/3">
				<CardContent class="p-6">
					<div
						class="flex flex-col gap-6 items-center text-center py-2"
					>
						<div class="flex flex-col gap-3 items-center w-full">
							<div
								class="bg-primary flex items-center justify-center rounded-full w-12 h-12"
							>
								<Github class="w-6 h-6 text-secondary" />
							</div>
							<h3
								class="font-semibold leading-6 text-lg text-foreground w-full"
							>
								Newsletter
							</h3>
						</div>
						<div class="flex flex-col gap-4 items-center w-full">
							<p
								class="font-normal leading-6 text-base text-muted-foreground"
							>
								Subscribe to our newsletter to get the latest
								updates and news.
							</p>
							<Button variant="default">Subscribe</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	</section>
</div>
