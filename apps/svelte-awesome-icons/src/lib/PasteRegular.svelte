<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'paste';
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
  viewBox="0 0 512 512"
  ><path
    d="M80 96v16c0 17.7 14.3 32 32 32h60.8c16.6-28.7 47.6-48 83.2-48h62c-7.1-27.6-32.2-48-62-48H215.4C211.6 20.9 188.2 0 160 0s-51.6 20.9-55.4 48H64C28.7 48 0 76.7 0 112V384c0 35.3 28.7 64 64 64h96V400H64c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H80zm64-40a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM256 464c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H384v48c0 17.7 14.3 32 32 32h48V448c0 8.8-7.2 16-16 16H256zm192 48c35.3 0 64-28.7 64-64V227.9c0-12.7-5.1-24.9-14.1-33.9l-51.9-51.9c-9-9-21.2-14.1-33.9-14.1H256c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H448z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'paste';
-->
