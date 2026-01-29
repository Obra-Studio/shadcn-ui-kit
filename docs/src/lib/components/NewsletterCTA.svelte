<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Mail } from '@lucide/svelte';

	interface Props {
		title?: string;
		description?: string;
		class?: string;
	}

	let {
		title = "Enjoyed this post?",
		description = "Subscribe to receive new blog posts directly in your inbox when they're published.",
		class: className
	}: Props = $props();
</script>

<Card class={cn(className)}>
	<CardContent class="p-6">
		<div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
			<div class="bg-primary flex items-center justify-center rounded-full w-10 h-10 shrink-0">
				<Mail class="w-5 h-5 text-secondary" />
			</div>
			<div class="flex-grow">
				<h3 class="text-lg font-semibold">{title}</h3>
				<p class="text-muted-foreground">{description}</p>
			</div>
			<Button variant="default" class="w-full sm:w-auto shrink-0" href="https://buttondown.com/obra-shadcn" target="_blank">Subscribe</Button>
		</div>
	</CardContent>
</Card>
