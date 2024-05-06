<script>
    import ColorsPalette from "./ColorsPalette.svelte";
    import DrawingGrid from "./DrawingGrid.svelte";
    import IconsActions from "./IconsActions.svelte";
</script>

<div class="size-full flex justify-center">
    <main class="flex size-full max-w-xs flex-col gap-2 xss:gap-8">
        <IconsActions />
        <DrawingGrid />
        <ColorsPalette />
    </main>
</div>
