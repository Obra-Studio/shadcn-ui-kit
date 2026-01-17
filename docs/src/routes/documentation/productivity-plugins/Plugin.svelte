<script>
    let { name, icon, url, children } = $props();
</script>

<div class="mt-8">
    <h2 class="text-xl font-semibold mb-4">{name}</h2>
    <div class="flex flex-col sm:flex-row gap-4 sm:gap-5">
        <img
            src={icon}
            alt={name}
            class="w-16 h-16 rounded-xl shrink-0"
        />
        <div>
            <a href={url} class="underline underline-offset-3 decoration-muted-foreground hover:decoration-foreground transition-colors">{name}</a>
            {@render children()}
        </div>
    </div>
</div>
