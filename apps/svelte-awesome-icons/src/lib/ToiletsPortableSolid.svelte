<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'toilets portable';
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
    d="M32 0H224c17.7 0 32 14.3 32 32V64H0V32C0 14.3 14.3 0 32 0zM0 96H24 232h24v24V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H48v8c0 13.3-10.7 24-24 24s-24-10.7-24-24V120 96zM192 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V240c0-8.8-7.2-16-16-16zM352 0H544c17.7 0 32 14.3 32 32V64H320V32c0-17.7 14.3-32 32-32zM320 96h24H552h24v24V488c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8H368v8c0 13.3-10.7 24-24 24s-24-10.7-24-24V120 96zM512 224c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V240c0-8.8-7.2-16-16-16z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'toilets portable';
-->
