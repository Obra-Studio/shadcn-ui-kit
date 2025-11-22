<script>
    import {Button} from "$lib/components/ui/button/index.js";
    import {ButtonGroup} from "$lib/components/ui/button-group/index.js";
    import HeaderNavItem from './HeaderNavItem.svelte';
    import { page } from '$app/stores';

    function isActive(href) {
        if (href === '/') {
            return $page.url.pathname === '/';
        }
        return $page.url.pathname.startsWith(href);
    }
</script>

<header class="flex justify-between items-center mx-auto p-4 md:p-8 w-full bg-white border-0 border-b border-gray-300">

    <div class="flex items-center gap-4 md:gap-8">
        <a href="/" class="text-2xl no-underline inline-flex items-center font-semibold gap-3 text-black" aria-label="Obra Shadcn/ui">
            <span class="gap-0.5 flex">
                <img src="/logo-obra.svg" alt="" width="50" />
                <img src="/logo-shadcn.svg" alt="" width="36" />
            </span>
        </a>

        <nav class="flex">
            <HeaderNavItem hiddenUntilMd href="/" active={isActive('/')}>Home</HeaderNavItem>
            <HeaderNavItem href="/documentation" active={isActive('/documentation')}>
                <span class="md:hidden">Docs</span>
                <span class="hidden md:inline">Documentation</span>
            </HeaderNavItem>
            <HeaderNavItem href="/blog" active={isActive('/blog')}>Blog</HeaderNavItem>
            <HeaderNavItem href="/changelog" active={isActive('/changelog')}>Changelog</HeaderNavItem>
        </nav>
    </div>
    <div class="hidden md:block">
        <ButtonGroup>
            <Button icon="figma" variant="outline" href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui">Get design file</Button>
        </ButtonGroup>
    </div>

</header>

