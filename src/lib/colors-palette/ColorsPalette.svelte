<script lang="ts">
	import { Palette } from "lucide-svelte"
	import { COLOR_PALETTE, GRID } from "../consts"
	import { selectedColor } from "../stores"
</script>

<div>
	<span class="mb-2 flex items-center gap-2">
		<Palette />

		<h2 class="app-text-emphase-2 text-2xl font-medium">Colors palette</h2>
	</span>

	<ul
		class="app-gap-grid grid w-fit grid-flow-row"
		style={`grid-template-columns: repeat(${GRID.height}, minmax(0, 1fr));`}
	>
		{#each COLOR_PALETTE as color}
			<button
				class="app-tile cmp-tile-button hover:brightness-125"
				style:background={color.value}
				on:click={() => selectedColor.set(color)}
			/>
		{/each}
	</ul>
</div>
