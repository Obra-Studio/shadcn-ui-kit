<script>
	export let date;
	import { Badge } from "$lib/components/ui/badge/index.js";
</script>

<div class="flex items-center gap-2 pb-4">
	<h2 class="m-0 p-0 text-2xl font-bold"><slot /></h2>
	<Badge variant="secondary">{date}</Badge>
</div>