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

  export let ariaLabel = 'bug solid';
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
    d="M18 17v-2h1a1 1 0 0 0 0-2h-1a6 6 0 0 0-.4-1H17a2 2 0 0 0 2-2V8a1 1 0 0 0-2 0v2h-.5l-.5-.5V8a4 4 0 0 0-1-2.6l.7-.7c.2-.2.3-.4.3-.7V3a1 1 0 0 0-2 0v.6l-.7.6c-.8-.3-1.8-.3-2.6 0l-.7-.6V3a1 1 0 0 0-2 0v1c0 .3.1.5.3.7l.7.7A4 4 0 0 0 8 8v1.5l-.5.5H7V8a1 1 0 0 0-2 0v2a2 2 0 0 0 2 2h-.7a6 6 0 0 0-.2 1H5a1 1 0 0 0 0 2h1v2a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0v-2h.8a6 6 0 0 0 4.2 3V12a1 1 0 0 1 2 0v10a6 6 0 0 0 4.2-3h.8v2a1 1 0 0 0 2 0v-2a2 2 0 0 0-2-2Zm-4-8.7a5.5 5.5 0 0 0-3-.3v.1a6 6 0 0 0-1 .3V8a2 2 0 1 1 4 0v.3Z"
  />
</svg>

<!--
@component
[Go to docs](https://flowbite-svelte-icons.vercel.app/)
## Props
@prop export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = ctx.size || 'md';
@prop export let role = ctx.role || 'img';
@prop export let ariaLabel = 'bug solid';
-->
