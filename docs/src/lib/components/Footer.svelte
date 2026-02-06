<script>
	import { Button } from '$lib/components/ui/button';
	import { Figma } from '@lucide/svelte';
	import GetDesignFileDialog from '$lib/components/GetDesignFileDialog.svelte';
	import { page } from '$app/stores';

	const hideCta = $derived($page.url.pathname === '/customization-services');
</script>

<footer class="bg-muted w-full">
	<div class="container py-20">
		<div class="flex flex-col gap-10 items-center">
			{#if !hideCta}
				<div class="w-full flex flex-col items-center gap-6">
					<h2 class="heading-2 text-center">Start designing with shadcn/ui today</h2>
					<GetDesignFileDialog>
						{#snippet children({ props })}
							<Button variant="default" {...props}>
								<Figma />
								Get design file
							</Button>
						{/snippet}
					</GetDesignFileDialog>
				</div>
			{/if}
			<p class="leading-9 text-lg text-foreground text-center w-full">
				Made with ❤️ by <a href="https://obra.studio/" class="underline"
					>Obra Studio</a
				>
			</p>
		</div>
	</div>
</footer>
