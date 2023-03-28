<script>
  import { actions, state, tw } from '../utils';

  const { loading, list, pick } = state;
</script>

{#if !$loading}
  <div class="flex">
    <div
      class="refresh hover:text-clrs-red md:w-auto"
      on:click={() => actions.refresh()}
    >
      <proto-ikon-loader name="refresh" size="24" />
    </div>
    <div
      class={tw(
        'ml-auto inline-flex justify-end',
        'border border-solid border-gray-600',
        'rounded-md',
      )}
    >
      {#if $list && $list.length > 0}
        {#each $list as item, index}
          <button
            class={tw(
              'h-8 w-8 border-none font-bold',
              index == 0
                ? 'rounded-bl-md rounded-br-none rounded-tl-md rounded-tr-none'
                : index == $list.length - 1
                ? 'rounded-bl-none rounded-br-md rounded-tl-none rounded-tr-md'
                : 'rounded-none',
              $pick == index
                ? 'bg-clrs-red text-white'
                : 'bg-clrs-yellow text-clrs-navy',
            )}
            on:click={() => actions.updatePick(index)}
            title={`${item.name} (${item.vehicles.length})`}
          >
            {index + 1}
          </button>
        {/each}
      {/if}
    </div>
  </div>
{/if}
