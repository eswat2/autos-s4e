<script>
  import { actions, state, tw } from '../utils';

  const { loading, list, pick } = state;
</script>

{#if !$loading}
  <div class="flex">
    <div
      class="refresh hover:text-clrs-red md:w-auto"
      onclick={() => actions.refresh()}
      onkeydown={e => e.key === 'Enter' && actions.refresh()}
      role="button"
      tabindex="0"
    >
      <proto-ikon-loader name="refresh" size="24"></proto-ikon-loader>
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
                ? 'rounded-tl-md rounded-tr-none rounded-br-none rounded-bl-md'
                : index == $list.length - 1
                  ? 'rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-none'
                  : 'rounded-none',
              $pick == index
                ? 'bg-clrs-red text-white'
                : 'bg-clrs-yellow text-clrs-navy',
            )}
            onclick={() => actions.updatePick(index)}
            title={`${item.name} (${item.vehicles.length})`}
          >
            {index + 1}
          </button>
        {/each}
      {/if}
    </div>
  </div>
{/if}
