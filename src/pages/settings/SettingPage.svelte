<script lang="ts">
	import ChevronLeft from "lucide-svelte/icons/chevron-left";
	import { currentPage, Pages } from "../../global/stores";
</script>

<section
	class="absolute left-0 top-0 flex size-full flex-col gap-3 bg-surface-50 p-[inherit] px-5"
>
	<button
		class="app-btn-ghost flex w-full items-center gap-3"
		on:click={() => currentPage.set(Pages.Home)}
	>
		<ChevronLeft />

		<h1 class="app-h1">Settings</h1>
	</button>
</section>
