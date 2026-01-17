<script>
    import HeaderWithBack from "$lib/components/HeaderWithBack.svelte";
    import Plugin from "./Plugin.svelte";
    import Button from "$lib/components/ui/button/button.svelte";

    let title = 'Productivity plugins'
</script>

<svelte:head>
    <title>{title} - Documentation - Obra shadcn/ui kit</title>
</svelte:head>

<HeaderWithBack {title} />

<div class="prose">
    <p>
        <a href="https://www.figma.com/@obrastudio">Follow us on Figma community</a> to stay updated on new plugins and releases!
    </p>
    <p>
        We have created several plugins to help you work more efficiently with the Obra shadcn/ui kit. All plugins can be found at <a href="https://www.figma.com/@obrastudio">figma.com/@obrastudio</a>.
    </p>
</div>

<Plugin
    name="Obra shadcn/ui kit CSS export"
    icon="/plugin-icons/obra-shadcn-ui-kit-css-export.png"
    url="https://www.figma.com/community/plugin/1577756373687684979/obra-shadcn-ui-kit-css-export"
>
    {#snippet children()}
        exports Obra shadcn/ui kit variables to Tailwind CSS code to power the look of your shadcn/ui components. Copy or download the generated source code.
        <ul class="mt-3 ml-6 list-disc">
            <li><strong>Inline preview</strong>: Designers can use the plugin to preview your theme inline and hand off the right version to your developer.</li>
            <li><strong>Dark mode support</strong>: Supports themes with both light and dark colors.</li>
            <li><strong>Export customizations</strong>: Modify the code exported: reorder collections or only export partial themes/theme code.</li>
            <li><strong>Customize the code</strong>: We provide the plugin source on Github with a permissive MIT license: fork away to cover your own needs. Or hire us for your custom version.</li>
        </ul>
        <p class="mt-4">This plugin is available as open source.</p>
        <Button variant="outline" size="sm" href="https://github.com/Obra-Studio/shadcn-ui-kit/tree/main/plugins/obra-shadcn-ui-kit-tailwind-css-export" class="mt-3">View on GitHub</Button>
    {/snippet}
</Plugin>

<Plugin
    name="Obra shadcn/ui tools"
    icon="/plugin-icons/obra-shadcn-ui-tools.png"
    url="https://www.figma.com/community/plugin/1544866255228781486/obra-shadcn-ui-tools"
>
    {#snippet children()}
        helps you work with the Obra shadcn/ui kit more efficiently.
        <ul class="mt-3 ml-6 list-disc">
            <li>Efficiently remove Propstar docs with a command</li>
            <li>Efficiently move component into Propstar docs after generation</li>
            <li>Reset Component Set Style</li>
            <li>Efficiently move through Propstar documentation with a specific navigation pad (to be released)</li>
        </ul>
        <p class="mt-4">This plugin is available as open source.</p>
        <Button variant="outline" size="sm" href="https://github.com/Obra-Studio/shadcn-ui-kit/tree/main/plugins/obra-shadcn-ui-tools" class="mt-3">View on GitHub</Button>
    {/snippet}
</Plugin>

<Plugin
    name="Obra Remote Library Scanner"
    icon="/plugin-icons/obra-remote-library-scanner.png"
    url="https://www.figma.com/community/plugin/1578201349063449764/obra-remote-library-scanner"
>
    {#snippet children()}
        scans your selection or page for remote library usage and attempts to relink to known variables. We used it to scan our entire shadcn/ui library (55k+ elements) for remote uses.
    {/snippet}
</Plugin>

<Plugin
    name="Obra Batch Mode Switcher"
    icon="/plugin-icons/obra-batch-mode-switcher.png"
    url="https://www.figma.com/community/plugin/1577759675602026369/obra-batch-mode-switcher"
>
    {#snippet children()}
        applies same-named modes across all collections at once. Apply to selection or to page level.
    {/snippet}
</Plugin>

<Plugin
    name="Obra Border Radius Variable Fixer"
    icon="/plugin-icons/obra-border-radius-variable-fixer.png"
    url="https://www.figma.com/community/plugin/1545127635062919814/obra-border-radius-variable-fixer"
>
    {#snippet children()}
        detects the available border radius variables in your file.
        <p class="mt-3">Make sure you have variables of the type "number" that are ideally scoped to the "Corner Radius" property.</p>
    {/snippet}
</Plugin>

<Plugin
    name="Obra Spacing Variable Fixer"
    icon="/plugin-icons/obra-spacing-variable-fixer.png"
    url="https://www.figma.com/community/plugin/1545126955319474817/obra-spacing-variable-fixer"
>
    {#snippet children()}
        detects the available spacing variables in your file.
        <p class="mt-3">These are Figma variables tied to spacing values (vertical gap, horizontal gap, horizontal padding, vertical padding or individual paddings).</p>
        <p class="mt-3">Make sure you have variables of the type "number" that are ideally scoped to the "Width and height" and "Gap (Auto layout)" property.</p>
    {/snippet}
</Plugin>

<Plugin
    name="Obra Variable Find & Replace"
    icon="/plugin-icons/obra-variable-find-and-replace.png"
    url="https://www.figma.com/community/plugin/1547024766353782832/obra-variable-find-replace"
>
    {#snippet children()}
        allows you to find and replace variables within a selection.
    {/snippet}
</Plugin>

<Plugin
    name="Obra Screenshot to Layout"
    icon="/plugin-icons/screenshot-to-layout.png"
    url="https://www.figma.com/community/plugin/1307079868274782972/screenshot-to-layout"
>
    {#snippet children()}
        generates editable text from a screenshot. Select an image in Figma, then click the button "Process image" inside the plugin, then see a Figma frame appear with editable text.
        <p class="mt-3">Useful to quickly start working on a new design based on a screenshot.</p>
    {/snippet}
</Plugin>

<Plugin
    name="Obra Variable Collection Manager"
    icon="/plugin-icons/obra-variable-collection-manager.png"
    url="https://www.figma.com/community/plugin/1577745671557491526/obra-variable-collection-manager"
>
    {#snippet children()}
        makes it easy to move groups around and work with collections in Figma. Once something is in a collection, it can be difficult to take it out. This plugin solves that. You can combine, split and move collections and groups around with ease.
        <ul class="mt-3 ml-6 list-disc">
            <li><strong>Merge</strong>: Select one target collection to merge into, and multiple source collections.</li>
            <li><strong>Split</strong>: Extract groups into new collection.</li>
            <li><strong>Move</strong>: Move single group into a new collection.</li>
        </ul>
    {/snippet}
</Plugin>

<Plugin
    name="TextCutter"
    icon="/plugin-icons/textcutter.png"
    url="https://www.figma.com/community/plugin/739131137116544548/textcutter"
>
    {#snippet children()}
        is a lightweight plugin for Figma to split or join text layers. There is no UI, and it's focused on speed of interaction.
        <p class="mt-3">There are four commands in the plugin, the core command "Split text", and three additional commands: Join text, Split words and Remove bullets.</p>
    {/snippet}
</Plugin>
