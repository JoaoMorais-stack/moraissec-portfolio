import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { fileURLToPath } from "node:url";
import test from "node:test";

async function render() {
  const port = 4100 + Math.floor(Math.random() * 500);
  const root = fileURLToPath(new URL("..", import.meta.url));
  const nextBin = fileURLToPath(
    new URL("../node_modules/next/dist/bin/next", import.meta.url),
  );
  const server = spawn(process.execPath, [nextBin, "start", "-p", String(port)], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
  });

  let output = "";
  server.stdout.on("data", (chunk) => {
    output += chunk;
  });
  server.stderr.on("data", (chunk) => {
    output += chunk;
  });

  try {
    for (let attempt = 0; attempt < 50; attempt += 1) {
      if (server.exitCode !== null) {
        throw new Error(`Next.js exited before serving the page:\n${output}`);
      }

      try {
        const response = await fetch(`http://127.0.0.1:${port}/`, {
          headers: { accept: "text/html" },
        });
        return {
          contentType: response.headers.get("content-type") ?? "",
          html: await response.text(),
          status: response.status,
        };
      } catch {
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }

    throw new Error(`Next.js did not start in time:\n${output}`);
  } finally {
    server.kill();
    if (server.exitCode === null) {
      await once(server, "exit");
    }
  }
}

test("server-renders the MoraisSec portfolio", async () => {
  const { contentType, html, status } = await render();
  assert.equal(status, 200);
  assert.match(contentType, /^text\/html\b/i);
  assert.match(html, /João Morais/);
  assert.match(html, /Pentest &amp; Red Team/);
  assert.match(html, /RedTeamVault/);
  assert.match(html, /AGHUse Bot/);
  assert.match(html, /curriculo-joao-morais-pt\.docx/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});
