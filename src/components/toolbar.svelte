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
        'inline-flex justify-end ml-auto',
        'border border-solid border-gray-600',
        'rounded-md',
      )}
    >
      {#if $list && $list.length > 0}
        {#each $list as item, index}
          <button
            class={tw(
              'border-none w-8 h-8 font-bold',
              index == 0
                ? 'rounded-tl-md rounded-bl-md rounded-tr-none rounded-br-none'
                : index == $list.length - 1
                ? 'rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md'
                : 'rounded-none',
              $pick == index
                ? 'text-white bg-clrs-red'
                : 'text-clrs-navy bg-clrs-yellow',
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
