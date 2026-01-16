<script lang="ts">
  import { Accordion as AccordionPrimitive } from "bits-ui";
  import { cn, type WithoutChild } from "$lib/utils.js";

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithoutChild<AccordionPrimitive.ContentProps> = $props();
</script>

<AccordionPrimitive.Content
  bind:ref
  data-slot="accordion-content"
  class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-lg min-w-0 max-w-full"
  {...restProps}
>
  <div class={cn("pt-0 pb-4 min-w-0 max-w-full", className)}>
    {@render children?.()}
  </div>
</AccordionPrimitive.Content>
