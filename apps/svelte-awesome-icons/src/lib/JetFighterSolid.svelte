<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'jet fighter';
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
    d="M160 24c0-13.3 10.7-24 24-24H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H280L384 192H500.4c7.7 0 15.3 1.4 22.5 4.1L625 234.4c9 3.4 15 12 15 21.6s-6 18.2-15 21.6L522.9 315.9c-7.2 2.7-14.8 4.1-22.5 4.1H384L280 464h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24h8V320H160l-54.6 54.6c-6 6-14.1 9.4-22.6 9.4H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H82.7c8.5 0 16.6 3.4 22.6 9.4L160 192h32V48h-8c-13.3 0-24-10.7-24-24zM80 240c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H80z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'jet fighter';
-->
