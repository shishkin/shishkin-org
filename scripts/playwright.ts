import { GenericContainer, type StartedTestContainer } from "testcontainers";
import { spawn } from "node:child_process";
import { networkInterfaces } from "node:os";
import packageJson from "../package.json" assert { type: "json" };

const [, , command, ...args] = process.argv;

const appPort = 4321;
const localIp = Object.entries(networkInterfaces())
  .flatMap(([_i, ips]) => ips ?? [])
  .find((ip) => ip.family === "IPv4" && ip.address !== "127.0.0.1")?.address;

if (!localIp) {
  console.error("Failed to find local IP address.");
  process.exit(1);
}

let pwServer: StartedTestContainer | undefined;
let pwPort: number | undefined;
let PW_BASE_URL: string | undefined;
let PW_TEST_CONNECT_WS_ENDPOINT: string | undefined;

if (command === "test") {
  const version = packageJson.devDependencies["playwright"];
  console.log(`Starting playwright server container version ${version}...`);
  pwServer = await new GenericContainer(
    `mcr.microsoft.com/playwright:v${version}-noble`
  )
    .withIpcMode("host")
    .withPlatform("linux/arm64")
    .withExposedPorts(3333)
    .withCommand([
      "npx",
      "-y",
      `playwright@${version}`,
      "run-server",
      "--port",
      "3333",
    ])
    .start();
  pwPort = pwServer.getFirstMappedPort();
  console.log(`Playwright server listens on port ${pwPort}`);

  PW_BASE_URL = `http://${localIp}:${appPort}/`;
  PW_TEST_CONNECT_WS_ENDPOINT = `ws://127.0.0.1:${pwPort}/`;
  console.log(`PW_BASE_URL=${PW_BASE_URL}`);
  console.log(`PW_TEST_CONNECT_WS_ENDPOINT=${PW_TEST_CONNECT_WS_ENDPOINT}`);
}

const pw = spawn(
  "pnpm",
  ["exec", "playwright", ...(command ? [command] : []), ...args],
  {
    cwd: process.cwd(),
    env: {
      ...process.env,
      ...(PW_TEST_CONNECT_WS_ENDPOINT
        ? {
            PW_BASE_URL,
            PW_TEST_CONNECT_WS_ENDPOINT,
          }
        : {}),
    },
    stdio: "inherit",
  }
);

pw.on("exit", async (code) => {
  if (pwServer) {
    console.log("Stopping playwright server...");
    await pwServer.stop();
    console.log("Playwright server stopped");
  }
  process.exit(code);
});
