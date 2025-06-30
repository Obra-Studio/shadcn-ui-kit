<script>
    import { IconMenu } from 'obra-icons-svelte'
</script>

<header class="flex justify-between items-center mx-auto p-4 md:p-8 w-full bg-white border-0 border-b border-gray-300">
    <a href="/" class="text-2xl no-underline inline-flex items-center font-semibold gap-3 text-black">
        <span class="gap-0.5 flex">
            <img src="/logo-obra.svg" alt="" width="50" />
            <img src="/logo-shadcn.svg" alt="" width="36" />
        </span>
        <span>Obra shadcn/ui docs</span>
    </a>

    <!-- @todo sort out the custom breakpoint or use standard breakpoints -->
    <a href="#nav" class="md:hidden">
        <IconMenu />
    </a>
</header>

