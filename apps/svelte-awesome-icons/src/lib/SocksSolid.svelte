<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'socks';
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
    d="M175.2 476.6c-9.7-18-15.2-38.7-15.2-60.6c0-40.3 19-78.2 51.2-102.4l64-48c8.1-6 12.8-15.5 12.8-25.6V96H128V240c0 20.1-9.5 39.1-25.6 51.2l-64 48C14.2 357.3 0 385.8 0 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l21.6-16.2zM128 64H288V48c0-14.5 3.9-28.2 10.7-39.9C291 3 281.9 0 272 0H176c-26.5 0-48 21.5-48 48V64zM320 96V240c0 20.1-9.5 39.1-25.6 51.2l-64 48C206.2 357.3 192 385.8 192 416c0 53 43 96 96 96c20.8 0 41-6.7 57.6-19.2l115.2-86.4C493 382.2 512 344.3 512 304V96H320zM512 64V48c0-26.5-21.5-48-48-48H368c-26.5 0-48 21.5-48 48V64H512z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'socks';
-->
