<script>
  import { getContext } from 'svelte';
  const ctx = getContext('iconCtx') ?? {};
  export let size = ctx.size || '24';
  export let role = ctx.role || 'img';
  export let color = ctx.color || 'currentColor';
  export let ariaLabel = 'trello';
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
  viewBox="0 0 448 512"
  ><path
    d="M392.3 32H56.1C25.1 32 0 57.1 0 88c-.1 0 0-4 0 336 0 30.9 25.1 56 56 56h336.2c30.8-.2 55.7-25.2 55.7-56V88c.1-30.8-24.8-55.8-55.6-56zM197 371.3c-.2 14.7-12.1 26.6-26.9 26.6H87.4c-14.8.1-26.9-11.8-27-26.6V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v254.2zm193.1-112c0 14.8-12 26.9-26.9 26.9h-81c-14.8 0-26.9-12-26.9-26.9V117.2c0-14.8 12-26.9 26.8-26.9h81.1c14.8 0 26.9 12 26.9 26.9v142.1z"
  /></svg
>

<!--
@component
[Go to docs](https://svelte-awesome-icons.vercel.app)
## Props
@prop export let size = ctx.size || '24';
@prop export let role = ctx.role || 'img';
@prop export let color = ctx.color || 'currentColor';
@prop export let ariaLabel = 'trello';
-->
