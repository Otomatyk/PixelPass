<script lang="ts">
	import { Toaster } from "svelte-french-toast";
	import { Pages, currentPage } from "./global/stores";

	import DrawingPage from "./pages/main/DrawingPage.svelte";
	import SettingPage from "./pages/settings/SettingPage.svelte";
</script>

<Toaster />

<div class="h-screen w-screen bg-surface-50 overflow-x-hidden">
	<DrawingPage />

	{#if $currentPage === Pages.Settings}
		<SettingPage />
	{/if}
</div>
