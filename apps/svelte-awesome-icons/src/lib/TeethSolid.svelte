<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'teeth';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {...$$restProps}
  {role}
  width={size}
  height={size}
  fill={color}
  class={$$props.class}
  aria-label={ariaLabel}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
  viewBox="0 0 576 512"
  ><path
    d="M0 128C0 75 43 32 96 32H480c53 0 96 43 96 96V384c0 53-43 96-96 96H96c-53 0-96-43-96-96V128zm176 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48v56c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V176c0-26.5-21.5-48-48-48zM48 208v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48V312c0-13.3-10.7-24-24-24H200c-13.3 0-24 10.7-24 24v24zm176 48c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H328c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48zm80-176v24c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V208c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48V312c0-13.3-10.7-24-24-24H456c-13.3 0-24 10.7-24 24v24c0 26.5 21.5 48 48 48z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'teeth';
-->
