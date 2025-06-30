<script>
    import { IconMenu } from 'obra-icons-svelte'
</script>

<header class="flex justify-between items-center mx-auto p-4 md:p-8 w-full bg-white border-0 border-b border-gray-300">
    <a href="/" class="text-2xl no-underline inline-flex items-center font-semibold gap-2 text-black">
        <img src="/logo-shadcn.svg" alt="shadcn/ui" width="32" />
        <img src="/logo-obra.svg" alt="Obra" width="50" />
        <span>shadcn/ui docs</span>
    </a>

    <!-- @todo sort out the custom breakpoint or use standard breakpoints -->
    <a href="#nav" class="md:hidden">
        <IconMenu />
    </a>
</header>

