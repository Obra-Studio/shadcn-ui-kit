<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Calendar, ArrowRight, Palette, Zap, Code, Link, RefreshCw, Paintbrush, Sparkles } from '@lucide/svelte';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

	function getAcceptingQuarter(): string {
		const now = new Date();
		const month = now.getMonth(); // 0-11
		const year = now.getFullYear();

		// Q1: Jan-Mar (0-2), Q2: Apr-Jun (3-5), Q3: Jul-Sep (6-8), Q4: Oct-Dec (9-11)
		const currentQuarter = Math.floor(month / 3) + 1;
		const monthInQuarter = month % 3; // 0 = first month, 1 = second month, 2 = third month

		// Show current quarter if in 1st or 2nd month, next quarter if in 3rd month
		if (monthInQuarter < 2) {
			return `Q${currentQuarter} ${year}`;
		} else {
			let nextQuarter = currentQuarter + 1;
			let nextYear = year;

			if (nextQuarter > 4) {
				nextQuarter = 1;
				nextYear = year + 1;
			}

			return `Q${nextQuarter} ${nextYear}`;
		}
	}

	const acceptingQuarter = getAcceptingQuarter();
</script>

<svelte:head>
	<title>Customization services - Obra shadcn/ui Figma kit</title>
</svelte:head>

<!-- Hero Section -->
<section class="section relative overflow-hidden">
	<!-- Orbit ring effect -->
	<div class="orbit-container">
		<div class="orbit-ring orbit-ring-1"></div>
		<div class="orbit-ring orbit-ring-2"></div>
		<div class="orbit-ring orbit-ring-3"></div>
		<div class="orbit-ring orbit-ring-4"></div>
	</div>
	<div class="mx-auto max-w-4xl text-center relative z-10">
		<div class="mb-8 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
			<span class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
			<span class="text-muted-foreground">Now accepting {acceptingQuarter} projects</span>
		</div>

		<h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
			The shadcn design agency for serious product teams.
		</h1>

		<p class="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
			We turn our shadcn/ui Figma kit into a custom, production-ready design system so your product team can ship real screens in weeks.
		</p>

		<div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
			<Button class="h-12 px-6 text-base font-medium group" href="https://cal.com/team/obra-studio/shadcn" target="_blank" rel="noopener noreferrer">
					<Calendar class="mr-2 h-4 w-4" />
					Book an intro call
					<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
				</Button>
			<Button variant="outline" class="h-12 px-6 text-base font-medium border-border/50 bg-card/30 backdrop-blur-sm hover:bg-card/50" href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui" target="_blank" rel="noopener noreferrer">
					Explore our kit
				</Button>
		</div>

		<div class="mt-16 flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-6">
			<div class="flex -space-x-2">
				<img src="/team/johan.webp" alt="" class="h-8 w-8 rounded-full border-2 border-background object-cover" />
				<img src="/team/marina.webp" alt="" class="h-8 w-8 rounded-full border-2 border-background object-cover" />
				<img src="/team/nele.webp" alt="" class="h-8 w-8 rounded-full border-2 border-background object-cover" />
				<img src="/team/robert.webp" alt="" class="h-8 w-8 rounded-full border-2 border-background object-cover" />
			</div>
			<div class="flex flex-col items-center gap-0.5 sm:items-start">
				<span>30,000+ designers rely on our kit worldwide.</span>
				<span>
					<a href="https://obra.studio/about/" target="_blank" rel="noopener noreferrer" class="underline hover:text-foreground transition-colors">Our experts</a> are ready to support you.
				</span>
			</div>
		</div>
	</div>
</section>

<!-- Why Hire Us Section -->
<section class="section border-t border-border/50">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
			Why hire us?
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
			Many teams wish to use shadcn as a starting point.<br />
			We turn it into a scalable product foundation.
		</p>
	</div>

	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
		<div class="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Zap class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">From prototype to production-ready</h3>
			<p class="text-muted-foreground">
				You've rapidly built a working prototype with AI tools like Claude, Lovable, or Figma Make. Now you need a consistent, scalable shadcn/ui-based design system that can grow with your product.
			</p>
		</div>

		<div class="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Palette class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Post-rebrand acceleration</h3>
			<p class="text-muted-foreground">
				Your company or product just rebranded. Rather than rebuilding everything from scratch, we deliver an on-brand shadcn/ui kit that gets both design and development moving immediately.
			</p>
		</div>

		<div class="rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Sparkles class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Foundation for AI-powered development</h3>
			<p class="text-muted-foreground">
				You're iterating fast with AI coding tools but need a solid design system as your foundation. We provide an expansive component library that keeps your AI-generated output consistent and on-brand.
			</p>
		</div>
	</div>
</section>

<!-- Services Section -->
<section class="section border-t border-border/50">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
			Our services
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
			Kickstart your design system by customizing a shadcn/ui kit to your brand.
		</p>
	</div>

	<div class="mt-12 flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
		<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Paintbrush class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Kit customization</h3>
			<p class="text-muted-foreground">
				We apply best-in-class design system practices to adapt the kit to your brand. For a fixed price, we customize colors, typography and icons.
			</p>
		</div>

		<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Palette class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Screen design</h3>
			<p class="text-muted-foreground">
				We design production-ready screens using your customized kit. Every screen is built with real components, proper states, and responsive layouts — ready for engineering handoff.
			</p>
		</div>

		<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Sparkles class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Custom components</h3>
			<p class="text-muted-foreground">
				We extend shadcn/ui with custom components tailored to your project needs. From complex data tables to specialized inputs — designed and built to feel native to the system.
			</p>
		</div>

		<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Link class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Link to development</h3>
			<p class="text-muted-foreground">
				Automate design token flows to efficiently bring design tokens to development.
			</p>
		</div>

		<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<Code class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Front-end templates</h3>
			<p class="text-muted-foreground">
				We deliver coded page templates built with shadcn/ui components, matching your customized kit pixel-for-pixel. Ready to drop into your codebase and start building on.
			</p>
		</div>

		<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm">
			<RefreshCw class="h-6 w-6 text-foreground mb-4" strokeWidth={1.5} />
			<h3 class="mb-2 text-lg font-semibold">Upgrading your kit</h3>
			<p class="text-muted-foreground">
				If you're using an older version of our kit, we can help you modernize it so you can enjoy the latest and greatest changes.
			</p>
		</div>

		</div>
</section>

<!-- What Makes Us Different Section -->
<section id="different" class="section border-t border-border/50">
	<div class="grid gap-12 lg:grid-cols-2 lg:gap-16 max-w-5xl mx-auto w-full">
		<div class="lg:sticky lg:top-32 lg:self-start">
			<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">What makes us different?</h2>
			<p class="mt-4 text-lg text-muted-foreground">We're not a traditional design agency. We're a product-focused team that happens to be obsessed with shadcn/ui.</p>
		</div>
		<div class="space-y-10">
			<div class="relative flex gap-6">
				<div class="shrink-0 text-5xl font-bold tracking-tighter text-muted-foreground/30">01</div>
				<div>
					<h3 class="text-lg font-semibold">We think like a product team, not an agency</h3>
					<p class="mt-2 text-muted-foreground leading-relaxed">You get a partner who cares about outcomes. We optimize for shipping speed, technical sustainability, and long-term quality. Flashy one-off deliverables don't move products forward; reliable systems do.</p>
				</div>
			</div>
			<div class="relative flex gap-6">
				<div class="shrink-0 text-5xl font-bold tracking-tighter text-muted-foreground/30">02</div>
				<div>
					<h3 class="text-lg font-semibold">Senior designers, every time</h3>
					<p class="mt-2 text-muted-foreground leading-relaxed">Every project is executed by senior designers who've built and scaled shadcn-based design systems for multiple product teams. No juniors, no handoffs between people — you work directly with the experts.</p>
				</div>
			</div>
			<div class="relative flex gap-6">
				<div class="shrink-0 text-5xl font-bold tracking-tighter text-muted-foreground/30">03</div>
				<div>
					<h3 class="text-lg font-semibold">Scale up or down when you need to</h3>
					<p class="mt-2 text-muted-foreground leading-relaxed">Our bi-weekly sprint model gives you flexibility. Increase scope when priorities shift. Pull back when things stabilize. No long-term contracts. No surprise costs.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Pricing Section -->
<section class="section border-t border-border/50">
	<div class="mx-auto max-w-4xl text-center">
		<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
			How it works
		</h2>
		<p class="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
			A simple, flexible model: start with a customized kit, then add screen sprints as needed.
		</p>
	</div>

	<Tabs value="design" class="mt-12 max-w-5xl mx-auto">
		<div class="flex justify-center">
			<TabsList class="bg-transparent h-auto gap-0 rounded-full border border-border/50 p-1">
				<TabsTrigger value="design" class="rounded-full border-0 bg-transparent px-5 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background">Design</TabsTrigger>
				<TabsTrigger value="design-frontend" class="rounded-full border-0 bg-transparent px-5 py-2 data-[state=active]:bg-foreground data-[state=active]:text-background">Design + Front-end</TabsTrigger>
			</TabsList>
		</div>

		<TabsContent value="design">
			<div class="mt-8 grid gap-8 lg:grid-cols-2">
				<!-- Kit Customization -->
				<div class="rounded-xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
					<div class="mb-6">
						<h3 class="text-xl font-semibold">Kit customization</h3>
						<span class="text-sm text-muted-foreground">~1 week with solid brand guide in place</span>
					</div>
					<p class="text-muted-foreground mb-6">
						We customize the entire shadcn/ui kit to match your brand identity. This becomes your team's foundation for all future design work.
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Colors, typography, and icons adapted to your brand guide</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Figma variables that translate directly to code</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Published as a Figma library your team can use</span>
						</li>
					</ul>
				</div>

				<!-- Screen Sprint -->
				<div class="rounded-xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
					<div class="mb-6">
						<h3 class="text-xl font-semibold">Screen sprint</h3>
						<span class="text-sm text-muted-foreground">2 weeks per sprint</span>
					</div>
					<p class="text-muted-foreground mb-6">
						Each sprint delivers 10–20 engineering-ready screens, including all underlying UI states and custom components needed.
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Components with properties that map to React/code</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Responsive layouts (desktop & tablet)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">UX audit included — we flag friction as we design</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Multiple Sprints -->
			<div class="mt-8">
				<div class="rounded-xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
					<div class="flex flex-col md:flex-row md:items-center gap-6">
						<div class="flex-grow">
							<h3 class="text-xl font-semibold mb-2">Need more screens?</h3>
							<p class="text-muted-foreground">
								Purchase multiple screen sprints to cover your entire product. Most teams start with kit customization + 1 sprint, then add more as needed. No long-term commitment required.
							</p>
						</div>
						<div class="shrink-0">
							<a
								href="https://cal.com/team/obra-studio/shadcn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="outline" class="whitespace-nowrap">
									Get a quote
									<ArrowRight class="ml-2 h-4 w-4" />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</TabsContent>

		<TabsContent value="design-frontend">
			<div class="mt-8 grid gap-8 lg:grid-cols-3">
				<!-- Kit Customization -->
				<div class="rounded-xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
					<div class="mb-6">
						<h3 class="text-xl font-semibold">Kit customization</h3>
						<span class="text-sm text-muted-foreground">~1 week</span>
					</div>
					<p class="text-muted-foreground mb-6">
						We customize the shadcn/ui kit to your brand — colors, typography, icons — and deliver both Figma and coded components in sync.
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Branded Figma library + coded theme config</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Design tokens synced between Figma and code</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Ready-to-use shadcn/ui component library</span>
						</li>
					</ul>
				</div>

				<!-- Screen Sprint -->
				<div class="rounded-xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
					<div class="mb-6">
						<h3 class="text-xl font-semibold">Screen sprint</h3>
						<span class="text-sm text-muted-foreground">2 weeks per sprint</span>
					</div>
					<p class="text-muted-foreground mb-6">
						Each sprint delivers 10–20 screens designed in Figma, plus coded page templates that match pixel-for-pixel.
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Figma screens + coded page templates</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Responsive layouts (desktop & tablet)</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">UX audit included — we flag friction as we design</span>
						</li>
					</ul>
				</div>

				<!-- Front-end Delivery -->
				<div class="rounded-xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
					<div class="mb-6">
						<h3 class="text-xl font-semibold">Front-end delivery</h3>
						<span class="text-sm text-muted-foreground">Included with each sprint</span>
					</div>
					<p class="text-muted-foreground mb-6">
						Every screen we design is also delivered as a coded template, built with shadcn/ui and ready to integrate into your codebase.
					</p>
					<ul class="space-y-3">
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Clean, production-ready React/Next.js code</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">shadcn/ui components with your custom theme</span>
						</li>
						<li class="flex items-start gap-2">
							<span class="text-foreground">•</span>
							<span class="text-muted-foreground">Drop into your project and start building</span>
						</li>
					</ul>
				</div>
			</div>

			<!-- Multiple Sprints -->
			<div class="mt-8">
				<div class="rounded-xl border border-border/50 bg-card/30 p-8 backdrop-blur-sm">
					<div class="flex flex-col md:flex-row md:items-center gap-6">
						<div class="flex-grow">
							<h3 class="text-xl font-semibold mb-2">Need more screens?</h3>
							<p class="text-muted-foreground">
								Purchase multiple screen sprints to cover your entire product. Each sprint includes both Figma designs and coded templates. No long-term commitment required.
							</p>
						</div>
						<div class="shrink-0">
							<a
								href="https://cal.com/team/obra-studio/shadcn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Button variant="outline" class="whitespace-nowrap">
									Get a quote
									<ArrowRight class="ml-2 h-4 w-4" />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</TabsContent>
	</Tabs>

</section>

<!-- CTA Section -->
<section class="section bg-muted">
	<div class="mx-auto max-w-3xl text-center">
		<h2 class="text-3xl font-semibold tracking-tight sm:text-4xl">Let us take your design system to the next level</h2>
		<p class="mt-4 text-lg text-muted-foreground">Book a free 45-minute shadcn audit and discover how we can help your team ship faster.</p>
		<a
			href="https://cal.com/team/obra-studio/shadcn"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Button class="mt-8 h-12 px-8 text-base font-medium group">
				Book a call
				<ArrowRight class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
			</Button>
		</a>
	</div>
</section>
