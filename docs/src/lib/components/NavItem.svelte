<script lang="ts">
  export let href: string;
  export let selected: boolean = false;
</script>

<li class="list-none flex md:block">
  <a
    href={href}
    class="block whitespace-nowrap p-2.5 text-black rounded-xl hover:bg-gray-100 focus:bg-gray-100 no-underline"
    class:bg-gray-200={selected}
    class:text-black={selected}
  >
    <slot />
  </a>
</li> 