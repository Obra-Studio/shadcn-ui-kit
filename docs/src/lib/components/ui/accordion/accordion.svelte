<script lang="ts">
	import { Accordion as AccordionPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		value = $bindable(),
		...restProps
	}: AccordionPrimitive.RootProps = $props();
</script>

<AccordionPrimitive.Root
	bind:ref
	bind:value={value as never}
	data-slot="accordion"
	class="w-full min-w-0 max-w-full"
	{...restProps}
/>
