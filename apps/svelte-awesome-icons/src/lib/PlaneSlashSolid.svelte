<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'plane slash';
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
    d="M514.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64H440.6L630.8 469.1c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2S28.4-3.1 38.8 5.1L238.1 161.3 197.8 20.4C194.9 10.2 202.6 0 213.2 0h56.2c11.5 0 22.1 6.2 27.8 16.1L397.7 192l116.6 0zM41.5 128.7l321 252.9L297.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6H144l-43.2 57.6c-3 4-7.8 6.4-12.8 6.4H46c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L64 256 32.5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-6.2 4-11.4 9.5-13.3z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'plane slash';
-->
