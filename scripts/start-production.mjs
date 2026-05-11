/**
 * Easypanel / Docker: often only `npm start` runs, without a prior `npm run build`,
 * so `dist/server/index.js` is missing and TanStack preview cannot load `server.js`.
 * This script builds when needed, writes the Cloudflare→preview shim, then runs vite preview.
 */
import { spawnSync } from "node:child_process";
import { existsSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = join(root, "dist", "server", "index.js");
const serverPath = join(root, "dist", "server", "server.js");
const shim = 'export { default } from "./index.js";\n';
const port = process.env.PORT ?? "3000";
const viteCli = join(root, "node_modules", "vite", "bin", "vite.js");

function run(cmd, args, label) {
  const r = spawnSync(cmd, args, {
    cwd: root,
    stdio: "inherit",
    env: process.env,
    shell: process.platform === "win32",
  });
  if (r.error) {
    console.error(`[start-production] ${label}:`, r.error);
    process.exit(1);
  }
  if (r.status !== 0 && r.status !== null) {
    process.exit(r.status);
  }
}

if (!existsSync(indexPath)) {
  console.log("[start-production] dist/server/index.js not found — running npm run build…");
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  run(npm, ["run", "build"], "build");
}

if (!existsSync(indexPath)) {
  console.error(
    "[start-production] After build, dist/server/index.js is still missing. Check the build logs.",
  );
  process.exit(1);
}

mkdirSync(join(root, "dist", "server"), { recursive: true });
writeFileSync(serverPath, shim, "utf8");

if (!existsSync(viteCli)) {
  console.error("[start-production] vite CLI not found at", viteCli, "— install dependencies.");
  process.exit(1);
}

run(process.execPath, [viteCli, "preview", "--host", "0.0.0.0", `--port=${port}`], "vite preview");
