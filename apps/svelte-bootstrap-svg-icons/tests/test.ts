import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe('Svelte Bootstrap SVG Icons');
});

test('Icons page has expected h1', async ({ page }) => {
  await page.goto('/icons');
  expect(await page.textContent('h1')).toBe('Svelte Bootstrap SVG Icons: Icons');
});
