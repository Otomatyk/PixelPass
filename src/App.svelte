<script lang="ts">
	import { Toaster } from "svelte-french-toast"
	import DrawingGrid from "./lib/DrawingGrid.svelte"
	import SettingPage from "./lib/SettingPage.svelte"
	import ColorsPalette from "./lib/colors-palette/ColorsPalette.svelte"
	import IconsActions from "./lib/colors-palette/IconsActions.svelte"
	import { Pages, currentPage, selectedColor, theme } from "./lib/stores"

	const options = {}
</script>

<Toaster />

<main
	class="flex h-screen w-screen flex-col gap-8 bg-surface-50 px-5 dark:bg-surface-900"
	class:dark={$theme === "dark"}
>
	<div class="h-2 w-full" style:background={$selectedColor.value} />

	<div class="flex flex-col gap-[inherit] py-[inherit]">
		<IconsActions />
		<DrawingGrid />
		<ColorsPalette />
	</div>

	{#if $currentPage === Pages.Settings}
		<SettingPage />
	{/if}
</main>
