<script lang="ts">
  export let href: string;
  export let selected: boolean = false;
</script>

<li class="list-none">
  <a
    href={href}
    class="block radius p-2.5 text-black hover:bg-gray-100 focus:bg-gray-100 no-underline"
    class:bg-gray-200={selected}
    class:text-black={selected}
  >
    <slot />
  </a>
</li> 