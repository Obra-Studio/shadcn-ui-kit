<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Figma } from '@lucide/svelte';
	import logoFrame from '$lib/assets/logo.svg';
</script>

<header
	class="border-b border-border flex items-center justify-between px-4 md:px-7 py-2 md:py-4 w-full"
>
	<div class="flex items-center gap-3">
		<div class="flex items-center gap-3">
			<a href="/">
				<img
					src={logoFrame}
					alt="Obra logo"
					class="min-w-[40px] h-[40px]"
				/>
			</a>
		</div>
		<!-- Desktop Navigation -->
		<nav class="flex items-center md:pl-8 gap-0 text-sm md:text-base">
			<a
				href="/documentation"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-[-0.32px] hover:bg-accent transition-colors"
			>
				Documentation
			</a>
			<a
				href="/blog"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-[-0.32px] hover:bg-accent transition-colors"
			>
				Blog
			</a>
			<a
				href="/changelog"
				class="rounded-full px-3 py-2 font-medium text-foreground tracking-[-0.32px] hover:bg-accent transition-colors"
			>
				Changelog
			</a>
		</nav>
	</div>
	<div class="flex items-center gap-2">
		<!-- <Button
	  onclick={toggleMode}
	  variant="outline"
	  size="icon"
	  class="relative"
	>
	  <SunIcon
		class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 !transition-all dark:scale-0 dark:-rotate-90"
	  />
	  <MoonIcon
		class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 !transition-all dark:scale-100 dark:rotate-0"
	  />
	  <span class="sr-only">Toggle theme</span>
	</Button> -->
		<Button
			size="sm"
			variant="secondary"
			href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui"
			class="hidden sm:flex"
		>
			<Figma />
			Get design file
		</Button>
	</div>
</header>
