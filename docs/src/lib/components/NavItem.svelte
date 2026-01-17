<script lang="ts">
	import { page } from '$app/stores';

	interface Props {
		href: string;
		exact?: boolean;
		variant?: 'desktop' | 'mobile';
		onclick?: () => void;
		children: import('svelte').Snippet;
	}

	let { href, exact = false, variant = 'desktop', onclick, children }: Props = $props();

	const isActive = $derived(exact ? $page.url.pathname === href : $page.url.pathname.startsWith(href));
</script>

<a
	{href}
	{onclick}
	class="font-medium text-foreground hover:bg-accent transition-colors {isActive ? 'bg-accent dark:text-white' : ''}"
	class:rounded-full={variant === 'desktop'}
	class:px-3={variant === 'desktop'}
	class:py-2={variant === 'desktop'}
	class:tracking-normal={variant === 'desktop'}
	class:rounded-lg={variant === 'mobile'}
	class:px-4={variant === 'mobile'}
	class:py-3={variant === 'mobile'}
>
	{@render children()}
</a>
