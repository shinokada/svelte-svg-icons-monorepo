<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'trademark';
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
  viewBox="0 0 640 512"
  ><path
    d="M345.6 108.8c-8.3-11-22.7-15.5-35.7-11.2S288 114.2 288 128V384c0 17.7 14.3 32 32 32s32-14.3 32-32V224l86.4 115.2c6 8.1 15.5 12.8 25.6 12.8s19.6-4.7 25.6-12.8L576 224V384c0 17.7 14.3 32 32 32s32-14.3 32-32V128c0-13.8-8.8-26-21.9-30.4s-27.5 .1-35.7 11.2L464 266.7 345.6 108.8zM0 128c0 17.7 14.3 32 32 32H96V384c0 17.7 14.3 32 32 32s32-14.3 32-32V160h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32C14.3 96 0 110.3 0 128z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'trademark';
-->
