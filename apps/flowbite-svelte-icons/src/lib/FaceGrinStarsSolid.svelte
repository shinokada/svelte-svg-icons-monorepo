<script lang="ts">
  import { getContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface CtxType {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    role?: string;
  }

  const ctx: CtxType = getContext('iconCtx') ?? {};
  const sizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  };

  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
  export let role = ctx.role || 'img';

  export let ariaLabel = 'face grin stars solid';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  {...$$restProps}
  class={twMerge('shrink-0', sizes[size], $$props.class)}
  {role}
  aria-label={ariaLabel}
  viewBox="0 0 24 24"
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM7 12.5c.3 0 .5.2.5.4l.2.1 1 .3a18.9 18.9 0 0 0 7.8-.4.5.5 0 0 1 1 .1 5 5 0 0 1-1.6 3.4 5.5 5.5 0 0 1-7.8 0A5 5 0 0 1 6.5 13c0-.3.2-.5.5-.5Zm9.5.4Zm-9 0Zm.9-4.8L9 6.8l.6 1.3 1.4.2-1 1 .2 1.3L9 10l-1.2.6.2-1.4-1-1 1.4-.1Zm6 0 .6-1.3.6 1.3 1.4.2-1 1 .2 1.3L15 10l-1.2.6.2-1.4-1-1 1.4-.1Z"
    clip-rule="evenodd"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'face grin stars solid';
-->
