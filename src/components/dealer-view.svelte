<script>
  import DealerCard from './dealer-card.svelte';
  import VehicleList from './vehicle-list.svelte';
  import { state } from '../utils';

  const { loading, dealer } = state;
</script>

{#if !$loading}
  <div class="flex flex-col">
    {#if $dealer}
      <DealerCard dealer={$dealer} />
      {#if $dealer.vehicles}
        <VehicleList list={$dealer.vehicles} />
      {/if}
    {/if}
  </div>
{/if}
