<script>
  import VehicleCard from './vehicle-card.svelte';

  export let list = [];
</script>

{#if list && list.length > 0}
  <div class="flex flex-col">
    {#each list as item}
      <VehicleCard value={item} />
    {/each}
  </div>
{/if}
