import { test, expect } from "@playwright/test";

test("main page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("CV", async ({ page }) => {
  await page.goto("/CV");
  await expect(page).toHaveScreenshot({ fullPage: true });
});
