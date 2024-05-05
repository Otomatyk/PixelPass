<script lang="ts">
	import ClipboardCopy from "lucide-svelte/icons/clipboard-copy"
	import Cog from "lucide-svelte/icons/cog"
	import Eraser from "lucide-svelte/icons/eraser"
	import Eye from "lucide-svelte/icons/eye"
	import EyeOff from "lucide-svelte/icons/eye-off"
	import Github from "lucide-svelte/icons/github"

	import { clipboard } from "@tauri-apps/api"
	import { generatePasswordFromPixels } from "../password-generation"
	import { currentPage, drawingGrid, Pages } from "../stores"

	// biome-ignore lint/style/useConst: <explanation>
	let passwordDisplayed = false

	const copyPassword = () => {
		if ($drawingGrid.flat().some(color => color === undefined)) return

		console.log(generatePasswordFromPixels($drawingGrid))
		clipboard.writeText(generatePasswordFromPixels($drawingGrid))
	}
</script>

<div class="app-gap-grid grid w-full grid-flow-col">
	{#if passwordDisplayed}
		<div
			class="col-span-full flex h-tile w-full items-center gap-2 bg-primary-solid p-0.5 text-white sm:p-2"
		>
			<span class="text-md grow font-mono sm:text-xl">
				123-456-789-abc
			</span>

			<button
				on:click={() => (passwordDisplayed = false)}
				class="hover:bg-surface-50/10"
			>
				<EyeOff class="size-full" />
			</button>
		</div>
	{:else}
		<button
			class="app-tile app-btn-primary"
			on:click={() => copyPassword()}
		>
			<div class="!text-inherit">
				<ClipboardCopy class="!size-full !text-inherit" />
			</div>

			<span class="!text-inherit">Copy</span>
		</button>

		<button class="app-tile" on:click={() => (passwordDisplayed = true)}>
			<div>
				<Eye class="!size-full " />
			</div>

			<span>Show</span>
		</button>

		<button class="app-tile">
			<div>
				<Github class="!size-full" />
			</div>

			<span>Github</span>
		</button>

		<button
			class="app-tile"
			on:click={() => currentPage.set(Pages.Settings)}
		>
			<div>
				<Cog class="!size-full" />
			</div>

			<span>Params</span>
		</button>

		<button class="app-tile" on:click={() => drawingGrid.clear()}>
			<div>
				<Eraser class="!size-full" />
			</div>

			<span>Clear</span>
		</button>
	{/if}
</div>

<style lang="postcss">
	button > span {
		@apply hidden text-sm font-medium tracking-tighter text-surface-900 sm:text-xl dark:text-surface-100;
	}

	button:hover > span {
		@apply inline;
	}

	button:hover > div {
		@apply hidden;
	}

	button > div {
		@apply size-full;
	}
</style>
