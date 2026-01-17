<script lang="ts">
	let { class: className = '' } = $props();
</script>

<img
	src="/logos/obra-shadcn-light.svg"
	alt="Obra logo"
	class="{className} block dark:hidden"
/>
<img
	src="/logos/obra-shadcn-dark.svg"
	alt="Obra logo"
	class="{className} hidden dark:block"
/>
