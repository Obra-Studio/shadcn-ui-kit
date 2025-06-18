<script>
    import { page } from '$app/stores';
    import NavItem from './NavItem.svelte';

    const navItems = {
        'Basics': [
            { href: '/', label: 'Intro' },
            { href: '/changelog', label: 'Changelog' },
            { href: '/videos', label: 'Videos' },
            { href: '/components', label: 'Components' }
        ],
        'Getting started': [
            { href: '/colors', label: 'Colors' },
            { href: '/typography', label: 'Typography' },
            { href: '/icons', label: 'Icons' }
        ],
        'Other': [
            { href: '/technical-comments', label: 'Technical comments' },
            { href: '/license', label: 'License' }
        ]
    };
</script>

<nav class="p-6 border-l border-gray-300 bg-white lg:sticky lg:top-4 lg:w-auto lg:flex-shrink-0 lg:basis-64">
    {#each Object.entries(navItems) as [category, items]}
        <h2 class="text-base font-medium my-4">{category}</h2>
        <ul class="p-0 m-0">
            {#each items as {href, label}}
                <NavItem {href} selected={$page.url.pathname === href}>
                    {label}
                </NavItem>
            {/each}
        </ul>
    {/each}
</nav>