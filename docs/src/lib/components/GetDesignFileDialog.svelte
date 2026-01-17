<script>
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
	import { Figma } from '@lucide/svelte';

	const figmaUrl = 'https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui';

	let { children } = $props();
</script>

<Dialog>
	<DialogTrigger>
		{#snippet child({ props })}
			{@render children?.({ props })}
		{/snippet}
	</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle class="text-2xl">Before you duplicate...</DialogTitle>
			<DialogDescription class="text-base">
				Did you know that the creators of this kit, Obra Studio, provide customization services to customize the kit to your branding?
			</DialogDescription>
		</DialogHeader>
		<DialogFooter class="!flex-col gap-2 sm:!flex-col">
			<Button size="sm" href="/customization-services" class="w-full">
				View customization services
			</Button>
			<Button size="sm" variant="outline" href={figmaUrl} target="_blank" class="w-full">
				<Figma />
				Continue to Figma Community
			</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
