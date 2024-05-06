<script lang="ts">
    export let hide: () => void;

    import { EyeOff } from "lucide-svelte";
    import { drawingGrid } from "../../../global/stores";
    import { generatePasswordFromPixels } from "../../../password";
</script>

<div
    class="absolute z-10 left-0 top-0 flex size-full items-center gap-2 bg-surface-900 text-surface-50 px-2 py-1 sm:py-2"
>
    <span class="text-md block grow font-mono">
        {#await generatePasswordFromPixels($drawingGrid) then generatedPassword}
            {generatedPassword}
        {:catch error}
            {error.message}
        {/await}
    </span>

    <button on:click={() => hide()} class="hover:bg-surface-50/10">
        <EyeOff class="size-full" />
    </button>
</div>
