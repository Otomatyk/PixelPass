<script lang="ts">
import { GRID } from "../../global/consts"
import { drawingGrid, selectedColor } from "../../global/stores"
import { appGrid } from "../../global/styles-action"

let isMousePressed = false

const colorizePixel = (row: number, column: number) => {
	$drawingGrid[row][column] = $selectedColor
}

const onclick = (ev: MouseEvent, row: number, column: number) => {
	if (ev.button === 2) {
		const targetedColor = $drawingGrid[row][column]

		if (!targetedColor) return

		$selectedColor = targetedColor
		return
	}

	isMousePressed = true

	colorizePixel(row, column)
}

const onmouseEntered = (ev: MouseEvent, row: number, column: number) => {
	if (!isMousePressed) return

	colorizePixel(row, column)
}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	use:appGrid
	class="app-grid"
	style={`grid-template-columns: repeat(${GRID.height}, minmax(0, 1fr));`}
	on:mouseup={() => (isMousePressed = false)}
	on:mouseleave={() => (isMousePressed = false)}
>
	{#each $drawingGrid as row, rowIndex}
		{#each row as color, columnIndex}
			<button
				class="app-tile {color?.value
					? ''
					: ' border-2 border-surface-300 bg-transparent'}"
				style:background={color?.value}
				draggable={false}
				on:mouseenter={(ev) =>
					onmouseEntered(ev, rowIndex, columnIndex)}
				on:mousedown={(ev) => onclick(ev, rowIndex, columnIndex)}
				on:contextmenu={(ev) => ev.preventDefault()}
				on:dragstart={(ev) => ev.preventDefault()}
			/>
		{/each}
	{/each}
</div>
