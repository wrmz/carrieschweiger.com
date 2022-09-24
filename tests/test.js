import { expect, test } from '@playwright/test';

test('Home page has expected h1', async ({ page }) => {
	await page.goto('');
	expect(await page.textContent('h1').toBe('Tada! This is the first h1'));
});
