<script context="module">
    // import { h2, h3, code } from '@repo/ui'
    import h2 from './h2.svelte'
    import h3 from './h3.svelte'
    import code from './code.svelte'
    export { h2, h3, code };
  </script>
  
  <script>
    // import { extract, Toc } from '@repo/ui';
    import {extract} from './utils'
    import Toc from './Toc.svelte'
  </script>
  
  <main class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
    <div class="flex w-full">
      <div
        class="flex flex-col max-w-4xl mx-auto px-4 min-w-0 lg:px-8 pb:12 xl:pb-24 lg:pb-16 divide-y divide-gray-200 dark:divide-gray-800"
      >
        <div id="mainContent" class="py-8">
          <slot />
        </div>
      </div>
      <Toc {extract} headingSelector="#mainContent > :where(h2, h3)" />
    </div>
  </main>
  