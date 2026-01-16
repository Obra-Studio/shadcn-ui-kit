<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
	} from '$lib/components/ui/dialog';
	import { Figma, Menu, X } from '@lucide/svelte';
	import logoFrame from '$lib/assets/logo.svg';
	import { page } from '$app/stores';

	const figmaUrl = 'https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui';
	const servicesUrl = 'https://obra.studio/shadcn-ui-kit-customization/';

	let mobileMenuOpen = $state(false);

	function isActive(path: string): boolean {
		return $page.url.pathname.startsWith(path);
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header
	class="border-b border-border flex items-center justify-between px-4 md:px-7 py-2 md:py-4 w-full"
>
	<div class="flex items-center gap-3">
		<a href="/">
			<img
				src={logoFrame}
				alt="Obra logo"
				class="min-w-[40px] h-[40px]"
			/>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden lg:flex items-center pl-8 gap-0 text-base">
			<a
				href="/"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-normal hover:bg-accent transition-colors {$page.url.pathname === '/' ? 'bg-accent dark:text-white' : ''}"
			>
				Home
			</a>
			<a
				href="/documentation"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-normal hover:bg-accent transition-colors {isActive('/documentation') ? 'bg-accent dark:text-white' : ''}"
			>
				Documentation
			</a>
			<a
				href="/blog"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-normal hover:bg-accent transition-colors {isActive('/blog') ? 'bg-accent dark:text-white' : ''}"
			>
				Blog
			</a>
			<a
				href="/changelog"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-normal hover:bg-accent transition-colors {isActive('/changelog') ? 'bg-accent dark:text-white' : ''}"
			>
				Changelog
			</a>
			<a
				href="/customization-services"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-normal hover:bg-accent transition-colors {isActive('/customization-services') ? 'bg-accent dark:text-white' : ''}"
			>
				Customization services
			</a>
		</nav>
	</div>

	<div class="flex items-center gap-2">
		<Dialog>
			<DialogTrigger>
				{#snippet child({ props })}
					<Button size="sm" variant="secondary" class="hidden sm:flex" {...props}>
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

		<!-- Mobile Menu Button -->
		<Button
			variant="ghost"
			size="icon"
			class="lg:hidden"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<X class="h-5 w-5" />
			{:else}
				<Menu class="h-5 w-5" />
			{/if}
		</Button>
	</div>
</header>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<button
		class="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
		onclick={closeMobileMenu}
		aria-label="Close menu"
	></button>
{/if}

<!-- Mobile Menu -->
<div
	class="fixed top-0 right-0 h-full w-72 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out lg:hidden {mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
>
	<div class="flex items-center justify-between p-4 border-b border-border">
		<span class="font-semibold">Menu</span>
		<Button
			variant="ghost"
			size="icon"
			onclick={closeMobileMenu}
			aria-label="Close menu"
		>
			<X class="h-5 w-5" />
		</Button>
	</div>

	<nav class="flex flex-col p-4 gap-1">
		<a
			href="/"
			onclick={closeMobileMenu}
			class="rounded-lg px-4 py-3 font-medium text-foreground hover:bg-accent transition-colors {$page.url.pathname === '/' ? 'bg-accent dark:text-white' : ''}"
		>
			Home
		</a>
		<a
			href="/documentation"
			onclick={closeMobileMenu}
			class="rounded-lg px-4 py-3 font-medium text-foreground hover:bg-accent transition-colors {isActive('/documentation') ? 'bg-accent dark:text-white' : ''}"
		>
			Documentation
		</a>
		<a
			href="/blog"
			onclick={closeMobileMenu}
			class="rounded-lg px-4 py-3 font-medium text-foreground hover:bg-accent transition-colors {isActive('/blog') ? 'bg-accent dark:text-white' : ''}"
		>
			Blog
		</a>
		<a
			href="/changelog"
			onclick={closeMobileMenu}
			class="rounded-lg px-4 py-3 font-medium text-foreground hover:bg-accent transition-colors {isActive('/changelog') ? 'bg-accent dark:text-white' : ''}"
		>
			Changelog
		</a>
		<a
			href="/customization-services"
			onclick={closeMobileMenu}
			class="rounded-lg px-4 py-3 font-medium text-foreground hover:bg-accent transition-colors {isActive('/customization-services') ? 'bg-accent dark:text-white' : ''}"
		>
			Customization services
		</a>
	</nav>

	<div class="p-4 border-t border-border mt-auto">
		<Button href={figmaUrl} target="_blank" class="w-full">
			<Figma />
			Get design file
		</Button>
	</div>
</div>
