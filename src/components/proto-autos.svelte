<script>
  import Eswat2 from './eswat2-io.svelte';
  import Footer from './footer.svelte';
  import Spinner from './spinner.svelte';
  import ToolBar from './toolbar.svelte';
  import DealerView from './dealer-view.svelte';
  import { state, tw } from '../utils';

  const { loading } = state;
</script>

<main class="ds1-main">
  <Eswat2 />
  <h1
    class={tw(
      'text-clrs-red text-center uppercase',
      'mt-11 mr-0 mb-11 ml-0',
      'text-6xl font-thin',
    )}
  >
    Auto Dealers
  </h1>
  <ToolBar />
  {#if !$loading}
    <hr
      class={tw(
        'mt-4 mr-0 mb-4 ml-0',
        'border-solid border-gray-300',
        'border-r-0 border-b-0 border-l-0',
      )}
    />
  {:else}
    <Spinner />
  {/if}
  <DealerView />
  <Footer />
</main>
