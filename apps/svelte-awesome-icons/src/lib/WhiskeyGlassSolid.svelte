<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'whiskey glass';
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
  viewBox="0 0 512 512"
  ><path
    d="M32 32c-9.3 0-18.1 4-24.2 11.1S-1 59.4 .3 68.6l50 342.9c5.7 39.3 39.4 68.5 79.2 68.5h253c39.7 0 73.4-29.1 79.2-68.5l50-342.9c1.3-9.2-1.4-18.5-7.5-25.5S489.3 32 480 32H32zM87.7 224L69 96H443L424.3 224H87.7z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'whiskey glass';
-->
