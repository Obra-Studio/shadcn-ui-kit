<script>
	import NavItem from '$lib/components/NavItem.svelte';

	const navItems = [
		{ href: '/documentation', label: 'Intro' },
		{ href: '/documentation/how-to-use', label: 'How to use this kit' },
		{ href: '/documentation/colors', label: 'Colors' },
		{ href: '/documentation/typography', label: 'Typography' },
		{ href: '/documentation/icons', label: 'Icons' },
		{ href: '/documentation/components', label: 'Components' },
		{ href: '/documentation/productivity-plugins', label: 'Productivity plugins' },
		{
			href: '/documentation/technical-comments',
			label: 'Technical comments',
		},
	];
</script>

<nav id="nav" class="pb-8 md:pb-0 lg:w-auto lg:flex-shrink-0 lg:basis-64">
	<ul class="p-0 m-0 flex md:block overflow-x-auto list-none gap-1">
		{#each navItems as { href, label } (href)}
			<li>
				<NavItem {href} exact={href === '/documentation'}>
					{label}
				</NavItem>
			</li>
		{/each}
	</ul>
</nav>
