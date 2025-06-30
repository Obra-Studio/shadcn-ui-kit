<script>
	import IntroContent1 from './intro-content-1.svx'
	import IntroContent2 from './intro-content-2.svx'
	import {ButtonGroup} from "$lib/components/ui/button-group/index.js";
	import {Button} from "$lib/components/ui/button/index.js";
</script>

<svelte:head>
	<title>Obra shadcn/ui Figma kit docs - Home</title>
</svelte:head>

<div class="prose">
	<IntroContent1 />
</div>

<ButtonGroup>
	<Button icon="figma" href="https://www.figma.com/community/file/1514746685758799870/obra-shadcn-ui">Duplicate on Figma community</Button>
	<Button icon="github" variant="secondary" href="https://github.com/Obra-Studio/shadcn-ui-kit/issues">Discuss on Github</Button>
</ButtonGroup>

<div class="prose">
	<IntroContent2 />
</div>
