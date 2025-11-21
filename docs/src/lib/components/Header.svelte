<script>
    import { IconMenu } from 'obra-icons-svelte'
    import {Button} from "$lib/components/ui/button/index.js";
    import {ButtonGroup} from "$lib/components/ui/button-group/index.js";
    import { page } from '$app/stores';

    function isActive(href) {
        if (href === '/') {
            return $page.url.pathname === '/';
        }
        return $page.url.pathname.startsWith(href);
    }
</script>

<header class="flex justify-between items-center mx-auto p-4 md:p-8 w-full bg-white border-0 border-b border-gray-300">
    <a href="/" class="text-2xl no-underline inline-flex items-center font-semibold gap-3 text-black" aria-label="Obra Shadcn/ui">
        <span class="gap-0.5 flex">
            <img src="/logo-obra.svg" alt="" width="50" />
            <img src="/logo-shadcn.svg" alt="" width="36" />
        </span>
    </a>

    <nav class="gap-4 hidden md:flex">
        <a href="/" class:font-semibold={isActive('/')} class:underline={isActive('/')}>Home</a>
        <a href="/documentation" class:font-semibold={isActive('/documentation')} class:underline={isActive('/documentation')}>Documentation</a>
        <a href="/blog" class:font-semibold={isActive('/blog')} class:underline={isActive('/blog')}>Blog</a>
        <a href="/changelog" class:font-semibold={isActive('/changelog')} class:underline={isActive('/changelog')}>Changelog</a>
    </nav>

    <div class="hidden md:block">
        <ButtonGroup>
            <Button icon="figma" variant="outline" href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui">Get design file</Button>
        </ButtonGroup>
    </div>

    <!-- @todo sort out the custom breakpoint or use standard breakpoints -->
    <a href="#nav" class="md:hidden">
        <IconMenu />
    </a>
</header>

