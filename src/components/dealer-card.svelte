<script>
  export let dealer = undefined;
</script>

<div
  class="flex flex-wrap content-center bg-blue-200 rounded-lg p-4 mb-4 border border-solid border-blue-400"
>
  {#if dealer && dealer.name}
    <span class="text-xl font-bold">
      {dealer.name}
      {#if dealer.vehicles && dealer.vehicles.length > 0}
        <sup>{` ${dealer.vehicles.length}`}</sup>
      {/if}
    </span>
  {/if}
  {#if dealer.dealerId}
    <span class="text-sm text-right ml-auto self-center">
      {dealer.dealerId}
    </span>
  {/if}
</div>
