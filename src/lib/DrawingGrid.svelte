<script lang="ts">
	import { GRID } from "./consts"
	import { drawingGrid, selectedColor } from "./stores"

	let clicked = false

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

		clicked = true

		colorizePixel(row, column)
	}

	const onmouseEntered = (ev: MouseEvent, row: number, column: number) => {
		if (!clicked) return

		colorizePixel(row, column)
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->

<div
	class="app-gap-grid grid size-fit"
	style={`grid-template-columns: repeat(${GRID.height}, minmax(0, 1fr));`}
	on:mouseup={() => (clicked = false)}
	on:mouseleave={() => (clicked = false)}
>
	{#each $drawingGrid as row, rowIndex}
		{#each row as color, columnIndex}
			<button
				class="app-tile {color?.value
					? ''
					: ' border-2 border-surface-300 bg-transparent'}"
				style:background={color?.value}
				draggable={false}
				on:mouseenter={ev => onmouseEntered(ev, rowIndex, columnIndex)}
				on:mousedown={ev => onclick(ev, rowIndex, columnIndex)}
				on:contextmenu={ev => ev.preventDefault()}
				on:dragstart={ev => ev.preventDefault()}
			/>
		{/each}
	{/each}
</div>
