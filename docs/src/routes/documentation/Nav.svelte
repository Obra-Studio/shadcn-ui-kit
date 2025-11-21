<script>
    import { page } from '$app/stores';
    import NavItem from '$lib/components/NavItem.svelte';

    const navItems = [
        { href: '/documentation/how-to-use', label: 'How to use this kit' },
        { href: '/documentation/colors', label: 'Colors' },
        { href: '/documentation/typography', label: 'Typography' },
        { href: '/documentation/icons', label: 'Icons' },
        { href: '/documentation/videos', label: 'Videos' },
        { href: '/documentation/components', label: 'Components' },
        { href: '/documentation/technical-comments', label: 'Technical comments' }
    ];
</script>

<nav id="nav" class="p-6 border-l border-gray-300 bg-white lg:sticky lg:top-4 lg:w-auto lg:flex-shrink-0 lg:basis-64">
    <ul class="p-0 m-0">
        {#each navItems as {href, label}}
            <NavItem {href} selected={$page.url.pathname === href}>
                {label}
            </NavItem>
        {/each}
    </ul>
</nav>