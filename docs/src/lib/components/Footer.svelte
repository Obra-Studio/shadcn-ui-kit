<script>
	import { Button } from '$lib/components/ui/button';
	import { Figma } from '@lucide/svelte';
</script>

<footer class="bg-muted w-full">
	<div class="container py-20">
		<div class="flex flex-col gap-10 items-center">
			<div class="w-full flex flex-col items-center gap-6">
				<p class="leading-9 mb-0 text-lg text-foreground text-center">
					Obra shadcn/ui is a completely free, high quality UI kit for Figma
					loved by over 30,000 creators.
				</p>
				<Button href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui" target="_blank">
					<Figma />
					Get the design file
				</Button>
			</div>
			<p class="leading-9 text-lg text-foreground text-center w-full">
				Made with ❤️ by <a href="https://obra.studio/" class="underline"
					>Obra Studio</a
				>
			</p>
		</div>
	</div>
</footer>
