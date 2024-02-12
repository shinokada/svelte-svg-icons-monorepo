# My monorepo

Do the following when you move a repo

- run `pnpm i` to install dependencies.
- update `mainLayout` in `mdsvex.config.js` using the relative path

```
    mainLayout: '../../packages/ui/components/Layout.svelte'
```

- add `@repo/ui` to `package.json` `devDependencies` in the new repo

```
    "@repo/ui": "workspace:*"
```

- For Svelte SVG icons, remove `src/routes/layout` dir.
- Remove `.git` and `.gitignore` from new packages. 