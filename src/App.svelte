<script>
  import { onMount } from 'svelte';
  import { ProtoAutos } from './components';
  import { actions } from './utils';

  onMount(() => {
    actions.initApp();
  });
</script>

<main>
  <ProtoAutos />
</main>
