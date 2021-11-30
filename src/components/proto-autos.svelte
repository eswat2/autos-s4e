<script>
  import Eswat2 from './eswat2-io.svelte';
  import Footer from './footer.svelte';
  import ToolBar from './toolbar.svelte';
  import DealerView from './dealer-view.svelte';
  import { state, tw } from '../utils';

  const LOADING = 'loading...';

  const { loading } = state;
</script>

<main id="app" class="ds1-main">
  <Eswat2 />
  <h1
    class={tw(
      'uppercase text-center text-clrs-red',
      'mr-0 ml-0 mt-11 mb-11',
      'font-thin text-6xl',
    )}
  >
    Auto Dealers
  </h1>
  <ToolBar />
  {#if !$loading}
    <hr
      class={tw(
        'ml-0 mr-0 mt-4 mb-4',
        'border-solid border-gray-300',
        'border-r-0 border-b-0 border-l-0',
      )}
    />
  {:else}
    <svg
      class="animate-spin h-24px w-24px text-clrs-navy"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      aria-label="title"
    >
      <title>{LOADING}</title>
      <g>
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </g>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  {/if}
  <DealerView />
  <Footer />
</main>
