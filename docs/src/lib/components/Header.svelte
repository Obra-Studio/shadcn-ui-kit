<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import GetDesignFileDialog from '$lib/components/GetDesignFileDialog.svelte';
	import { Figma, Menu, X } from '@lucide/svelte';
	import logoFrame from '$lib/assets/logo.svg';
	import { page } from '$app/stores';

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
	class="border-b border-border w-full px-4 md:px-7"
>
	<div class="flex items-center justify-between py-2 md:py-4 w-full max-w-[1440px] mx-auto">
	<div class="flex items-center gap-3">
		<a href="/">
			<img
				src={logoFrame}
				alt="Obra logo"
				class="min-w-[40px] h-[40px]"
			/>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden min-[960px]:flex items-center pl-8 gap-0 text-base">
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
				Docs
			</a>
			<a
				href="/blog"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-normal hover:bg-accent transition-colors {isActive('/blog') ? 'bg-accent dark:text-white' : ''}"
			>
				Blog
			</a>
			<a
				href="/videos"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-normal hover:bg-accent transition-colors {isActive('/videos') ? 'bg-accent dark:text-white' : ''}"
			>
				Videos
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
		<GetDesignFileDialog>
			{#snippet children({ props })}
				<Button size="sm" variant="secondary" class="hidden sm:flex" {...props}>
					<Figma />
					Get design file
				</Button>
			{/snippet}
		</GetDesignFileDialog>

		<!-- Mobile Menu Button -->
		<Button
			variant="ghost"
			size="icon"
			class="min-[960px]:hidden"
			onclick={toggleMobileMenu}
			aria-label="Toggle menu"
		>
			{#if mobileMenuOpen}
				<X class="h-6 w-6" />
			{:else}
				<Menu class="h-6 w-6" />
			{/if}
		</Button>
	</div>
	</div>
</header>

<!-- Mobile Menu Overlay -->
{#if mobileMenuOpen}
	<button
		class="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 min-[960px]:hidden"
		onclick={closeMobileMenu}
		aria-label="Close menu"
	></button>
{/if}

<!-- Mobile Menu -->
<div
	class="fixed top-0 right-0 h-full w-72 bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out min-[960px]:hidden {mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}"
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
			Docs
		</a>
		<a
			href="/blog"
			onclick={closeMobileMenu}
			class="rounded-lg px-4 py-3 font-medium text-foreground hover:bg-accent transition-colors {isActive('/blog') ? 'bg-accent dark:text-white' : ''}"
		>
			Blog
		</a>
		<a
			href="/videos"
			onclick={closeMobileMenu}
			class="rounded-lg px-4 py-3 font-medium text-foreground hover:bg-accent transition-colors {isActive('/videos') ? 'bg-accent dark:text-white' : ''}"
		>
			Videos
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
		<GetDesignFileDialog onNavigate={closeMobileMenu}>
			{#snippet children({ props })}
				<Button class="w-full" {...props}>
					<Figma />
					Get design file
				</Button>
			{/snippet}
		</GetDesignFileDialog>
	</div>
</div>
