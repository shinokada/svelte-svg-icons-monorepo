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

  export let ariaLabel = 'bell active solid';
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
    d="M11.2 3.8a1 1 0 0 0-2 .4l.4 1.7a5.3 5.3 0 0 0-2.8 5.8l.2 1.5.1.3c.3 1.3-.2 2.2-.6 3-.3.5-.6 1-.5 1.4.1.6.3 1.2.8 1l12.7-2.3c.5-.1.4-.7.3-1.3-.1-.5-.6-1-1.2-1.7a5.2 5.2 0 0 1-1.4-2l-.3-1.6v-.2a5.3 5.3 0 0 0-5.4-4.4l-.3-1.6Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.5 4.3c.4.3.5 1 .1 1.4A6.9 6.9 0 0 0 4.8 10a1 1 0 0 1-2-.2c.1-2.1 1-3.9 2.3-5.5a1 1 0 0 1 1.4 0Z"
    clip-rule="evenodd"
  /> <path fill="currentColor" d="M9 19.7c.7.8 1.7 1.3 2.8 1.3 1.5 0 2.8-1.1 3.3-2.5L9 19.7Z" />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'bell active solid';
-->
