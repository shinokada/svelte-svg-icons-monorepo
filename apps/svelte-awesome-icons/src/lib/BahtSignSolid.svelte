<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'baht sign';
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
  viewBox="0 0 320 512"
  ><path
    d="M144 0c-17.7 0-32 14.3-32 32V64H37.6C16.8 64 0 80.8 0 101.6V224v41.7V288 406.3c0 23 18.7 41.7 41.7 41.7H112v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c61.9 0 112-50.1 112-112c0-40.1-21.1-75.3-52.7-95.1C280.3 222.6 288 200.2 288 176c0-61.9-50.1-112-112-112V32c0-17.7-14.3-32-32-32zM112 128v96H64V128h48zm64 96V128c26.5 0 48 21.5 48 48s-21.5 48-48 48zm-64 64v96H64V288h48zm64 96V288h32c26.5 0 48 21.5 48 48s-21.5 48-48 48H176z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'baht sign';
-->
