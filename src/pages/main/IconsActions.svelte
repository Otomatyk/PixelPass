<script lang="ts">
import ClipboardCopy from "lucide-svelte/icons/clipboard-copy"
import Cog from "lucide-svelte/icons/cog"
import Eraser from "lucide-svelte/icons/eraser"
import Eye from "lucide-svelte/icons/eye"
import GitHub from "lucide-svelte/icons/github"

import { clipboard } from "@tauri-apps/api"
import toast from "svelte-french-toast"
import { TOAST_CONFIG } from "../../global/consts"
import { Pages, currentPage, drawingGrid } from "../../global/stores"
import { appGrid } from "../../global/styles-action"
import { generatePasswordFromPixels } from "../../password"
import DisplayedPassword from "./topbar/DisplayedPassword.svelte"

let passwordDisplayed = false

const togglePasswordDisplayed = () => {
	passwordDisplayed = !passwordDisplayed
}

const buttons = [
	{
		label: "Copy",
		onclick: async () => {
			let generatedPassword: string

			try {
				generatedPassword =
					await generatePasswordFromPixels($drawingGrid)
			} catch (error) {
				toast.error((error as Error).message, TOAST_CONFIG)
				return
			}

			await clipboard.writeText(generatedPassword)
			toast.success("Password copied", TOAST_CONFIG)
		},
		icon: ClipboardCopy,
	},

	{
		label: "Show",
		onclick: togglePasswordDisplayed,
		icon: Eye,
	},

	{
		label: "Clear",
		onclick: drawingGrid.clear,
		icon: Eraser,
	},

	{
		label: "Settings",
		onclick: () => currentPage.set(Pages.Settings),
		icon: Cog,
	},

	{
		label: "GitHub",
		onclick: () => {},
		icon: GitHub,
	},
]
</script>

<div use:appGrid class="app-grid relative">
	{#each buttons as button, index}
		<button
			aria-hidden={passwordDisplayed}
			on:click={button.onclick}
			class="group p-1.5 {index === 0
				? 'bg-primary-solid text-white'
				: 'bg-surface-200 text-surface-800'}"
		>
			<svelte:component
				this={button.icon}
				class="!size-full !text-inherit group-hover:hidden"
			/>

			<span
				class="hidden group-hover:inline {button.label.length > 5
					? 'text-sm'
					: 'text-xl'} font-medium tracking-tighter"
				>{button.label}</span
			>
		</button>
	{/each}

	{#if passwordDisplayed}
		<DisplayedPassword hide={togglePasswordDisplayed} />
	{/if}
</div>
