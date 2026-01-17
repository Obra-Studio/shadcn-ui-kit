<script lang="ts">
	export let href: string;
	export let selected: boolean = false;
</script>

<li class="list-none flex md:block">
	<a
		{href}
		class="block whitespace-nowrap px-4 py-2.5 text-foreground rounded-xl no-underline transition-colors"
		class:hover:bg-accent={!selected}
		class:hover:text-accent-foreground={!selected}
		class:focus:bg-accent={!selected}
		class:focus:text-accent-foreground={!selected}
		class:bg-primary={selected}
		class:text-primary-foreground={selected}
	>
		<slot />
	</a>
</li>
