<script lang="ts">
import { Palette } from "lucide-svelte"
import { COLOR_PALETTE } from "../../global/consts"
import { selectedColor } from "../../global/stores"
import { appGrid } from "../../global/styles-action"
</script>

<!-- style:border-radius={$selectedColor.id === color.id
	? "999px"
	: "0px"} -->
<div>
	<span class="mb-2 items-center gap-2 hidden md:flex">
		<Palette />

		<h2 class="app-text-emphase-2 text-2xl font-medium">Colors palette</h2>
	</span>

	<fieldset>

		<div use:appGrid class="app-grid">
			{#each COLOR_PALETTE as color}
				<input
					type="radio"
					class="border-none app-tile h-full block rounded-none hover:brightness-125 checked:rounded-full focus:ring-0"
					name="select-color"
					
					style:background={color.value}
						
					on:change={() => selectedColor.set(color)}

					data-test-id="select-color-{color.id}"
				/>
			{/each}
		</div>
	</fieldset>

	<!-- <ul use:appGrid class="app-grid">
		{#each COLOR_PALETTE as color}
			<button
				class="app-tile hover:brightness-125"
				style:background={color.value}
				style:border-radius={$selectedColor.id === color.id
					? "999px"
					: "0px"}
				on:click={() => selectedColor.set(color)}
				data-test-id="select-color-{color.id}"
			/>
		{/each}
	</ul> -->
</div>
