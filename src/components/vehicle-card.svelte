<script>
  import { tw } from '../utils';

  export let value = undefined;

  const dict = {
    'citroën': 'citroen',
    'renault-sport': 'renault',
    'tesla-motors': 'tesla',
  };

  const racingRegex = /^\#[0-9]*/;

  const isRacing = model => {
    return model.match(racingRegex) != null;
  };

  const isExotic = year => {
    return year === 2554;
  };

  const isModern = year => {
    return year > 2010;
  };
</script>

{#if value}
  <div
    class={tw(
      'flex align-middle',
      'mb-1 rounded-lg p-4',
      'border border-solid',
      isExotic(value.year)
        ? 'border-clrs-navy bg-clrs-navy text-clrs-white'
        : isRacing(value.model)
        ? 'border-yellow-600 bg-yellow-300'
        : isModern(value.year)
        ? 'border-green-600 bg-green-200'
        : 'border-gray-600 bg-gray-300',
    )}
  >
    <div class="mr-1.5 flex flex-col">
      <span class="mb-2 text-xs">{value.vin}</span>
      <span class="text-lg font-bold">{value.make}</span>
      <span class="mb-2 text-sm italic">{value.model}</span>
      <span>
        {value.year}, {value.color}
      </span>
      <span>
        {isExotic(value.year)
          ? '- exotic... [ Sierra 117 ]'
          : isRacing(value.model)
          ? '- track only...'
          : ''}
      </span>
    </div>
    <proto-ikon-loader
      class="ikon ml-auto self-center"
      name={value.make}
      label={value.make.toLowerCase()}
    />
  </div>
{/if}
