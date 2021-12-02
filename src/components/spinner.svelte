<script>
  export let hex = 'currentColor';
  export let label = 'loading...';
  export let size = 24;
</script>

<svg
  class="animate-spin text-clrs-navy"
  width={size}
  height={size}
  fill="none"
  viewBox="0 0 24 24"
  role="img"
  aria-label="title"
>
  <title>{label}</title>
  <g>
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke={hex}
      stroke-width="4"
    />
    <path
      class="opacity-75"
      fill={hex}
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </g>
  <path d="M0 0h24v24H0z" fill="none" />
</svg>
