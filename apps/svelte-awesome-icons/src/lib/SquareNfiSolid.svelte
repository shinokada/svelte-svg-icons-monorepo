<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'square nfi';
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
  viewBox="0 0 448 512"
  ><path
    d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm75.7 64.6C68.8 162.5 64 168.8 64 176V336c0 8.8 7.2 16 16 16s16-7.2 16-16V233.8l66.3 110.5c3.7 6.2 11.1 9.1 18 7.2s11.7-8.2 11.7-15.4V176c0-8.8-7.2-16-16-16s-16 7.2-16 16V278.2L93.7 167.8c-3.7-6.2-11.1-9.1-18-7.2zM224 176v64 96c0 8.8 7.2 16 16 16s16-7.2 16-16V256h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H256V192h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H240c-8.8 0-16 7.2-16 16zm160 0c0-8.8-7.2-16-16-16s-16 7.2-16 16V336c0 8.8 7.2 16 16 16s16-7.2 16-16V176z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'square nfi';
-->
