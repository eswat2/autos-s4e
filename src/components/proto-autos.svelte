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
      'text-center uppercase text-clrs-red',
      'mb-11 ml-0 mr-0 mt-11',
      'text-6xl font-thin',
    )}
  >
    Auto Dealers
  </h1>
  <ToolBar />
  {#if !$loading}
    <hr
      class={tw(
        'mb-4 ml-0 mr-0 mt-4',
        'border-solid border-gray-300',
        'border-b-0 border-l-0 border-r-0',
      )}
    />
  {:else}
    <Spinner />
  {/if}
  <DealerView />
  <Footer />
</main>
