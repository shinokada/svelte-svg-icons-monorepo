import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
  layout: {
    // mainLayout: './src/routes/layout/+page.svelte'
    mainLayout: '../../packages/ui/components/Layout.svelte'
  },
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  rehypePlugins: []
});

export default config;
