<script lang="ts">
	import ChevronLeft from "lucide-svelte/icons/chevron-left"
	import { currentPage, Pages, theme } from "./stores"
</script>

<section
	class="absolute left-0 top-0 flex size-full flex-col gap-3 bg-surface-50 p-[inherit] px-5 dark:bg-surface-900"
>
	<button
		class="app-btn-ghost flex w-full items-center gap-3"
		on:click={() => currentPage.set(Pages.Home)}
	>
		<ChevronLeft />

		<h1 class="app-h1">Settings</h1>
	</button>

	<section>
		<h2 class="app-text-emphase-2 text-xl font-medium">Personalization</h2>

		<label class=" label items-center">
			<span class="app-text-emphase-3"> Dark mode </span>

			<input
				type="checkbox"
				class="toggle toggle-sm toggle-primary"
				checked={$theme === "dark"}
				on:change={() => theme.toggle()}
			/>
		</label>
	</section>
</section>
