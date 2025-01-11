import { defineConfig, devices } from "@playwright/test";

const url = process.env.PW_BASE_URL ?? "http://localhost:4321";

export default defineConfig({
  timeout: process.env.CI ? 30 * 1000 : 5 * 1000,
  workers: process.env.CI ? 1 : "100%",
  reporter: process.env.CI
    ? [["github"], ["html", { open: "never" }]]
    : [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: url,
  },
  projects: [
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
  snapshotPathTemplate:
    "{testDir}/{testFileDir}/{testFileName}-snapshots/{arg}{ext}",
  webServer: {
    command: "NODE_ENV=test pnpm run dev",
    // Uncomment to debug web server start:
    // stdout: "pipe",
    url: url,
    reuseExistingServer: true,
  },
});
