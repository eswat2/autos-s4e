<script>
  import { onMount } from 'svelte';
  import ProtoAutos from './components/proto-autos.svelte';
  import { actions } from './utils';

  onMount(() => {
    actions.initApp();
  });
</script>

<ProtoAutos />
