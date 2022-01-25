<script>
  export let dealer = undefined;
</script>

<div
  class="mb-4 flex flex-wrap content-center rounded-lg border border-solid border-blue-400 bg-blue-200 p-4"
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
    <span class="ml-auto self-center text-right text-sm">
      {dealer.dealerId}
    </span>
  {/if}
</div>
