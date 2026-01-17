<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import GetDesignFileDialog from '$lib/components/GetDesignFileDialog.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import NavItem from '$lib/components/NavItem.svelte';
	import { Figma, Menu, X } from '@lucide/svelte';

	let mobileMenuOpen = $state(false);

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
		<a href="/" aria-label="Obra home">
			<Logo />
		</a>


		<nav class="hidden min-[960px]:flex items-center pl-8 gap-0 text-base">
			<NavItem href="/" exact>Home</NavItem>
			<NavItem href="/documentation">Docs</NavItem>
			<NavItem href="/blog">Blog</NavItem>
			<NavItem href="/videos">Videos</NavItem>
			<NavItem href="/changelog">Changelog</NavItem>
			<NavItem href="/customization-services">Customization services</NavItem>
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
		<NavItem href="/" exact variant="mobile" onclick={closeMobileMenu}>Home</NavItem>
		<NavItem href="/documentation" variant="mobile" onclick={closeMobileMenu}>Docs</NavItem>
		<NavItem href="/blog" variant="mobile" onclick={closeMobileMenu}>Blog</NavItem>
		<NavItem href="/videos" variant="mobile" onclick={closeMobileMenu}>Videos</NavItem>
		<NavItem href="/changelog" variant="mobile" onclick={closeMobileMenu}>Changelog</NavItem>
		<NavItem href="/customization-services" variant="mobile" onclick={closeMobileMenu}>Customization services</NavItem>
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
