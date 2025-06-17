<script>
    import { page } from '$app/stores';
    import NavItem from './NavItem.svelte';
</script>

<nav class="p-6 border-l border-gray-300 bg-white lg:sticky lg:top-4 lg:w-auto lg:flex-shrink-0 lg:basis-64">
    <h2 class="text-base font-medium my-4">Basics</h2>
    <ul class="p-0 m-0">
        <NavItem href="/" selected={$page.url.pathname === '/'}>Intro</NavItem>
        <NavItem href="/changelog" selected={$page.url.pathname === '/changelog'}>Changelog</NavItem>
        <NavItem href="/videos" selected={$page.url.pathname === '/videos'}>Videos</NavItem>
        <NavItem href="/components" selected={$page.url.pathname === '/components'}>Components</NavItem>
    </ul>

    <h2 class="text-base font-medium my-4">Getting started</h2>
    <ul class="p-0 m-0">
        <NavItem href="/colors" selected={$page.url.pathname === '/colors'}>Colors</NavItem>
        <NavItem href="/typography" selected={$page.url.pathname === '/typography'}>Typography</NavItem>
        <NavItem href="/icons" selected={$page.url.pathname === '/icons'}>Icons</NavItem>
    </ul>

    <h2 class="text-base font-medium my-4">Other</h2>
    <ul class="p-0 m-0">
        <NavItem href="/technical-comments" selected={$page.url.pathname === '/technical-comments'}>Technical comments</NavItem>
        <NavItem href="/license" selected={$page.url.pathname === '/license'}>License</NavItem>
    </ul>
</nav>