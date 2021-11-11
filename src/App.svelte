<script>
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';
  import ProtoAutos from './components/proto-autos.svelte';
  import { state, actions, tw } from './utils';

  onMount(() => {
    actions.initApp();
    const keys = Object.keys(state);
    keys.map(key => {
      console.log('--', key, get(state[key]));
    });
  });
</script>

<ProtoAutos />
