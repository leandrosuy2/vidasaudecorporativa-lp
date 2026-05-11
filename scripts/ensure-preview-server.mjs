/**
 * TanStack Start's vite preview imports `dist/server/<inputBasename>.js` (e.g. server.js).
 * @cloudflare/vite-plugin emits the worker entry as `dist/server/index.js` instead.
 * This shim makes `npm start` / `vite preview` work on Node (Easypanel, etc.).
 */
import { access, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { join } from "node:path";

const serverDir = join(process.cwd(), "dist", "server");
const indexPath = join(serverDir, "index.js");
const serverPath = join(serverDir, "server.js");

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

const hasIndex = await exists(indexPath);
const hasServer = await exists(serverPath);

if (!hasIndex) {
  console.warn("[ensure-preview-server] dist/server/index.js not found; skipping.");
  process.exit(0);
}

if (hasServer) {
  console.log("[ensure-preview-server] dist/server/server.js already exists; skipping.");
  process.exit(0);
}

await writeFile(
  serverPath,
  'export { default } from "./index.js";\n',
  "utf8",
);
console.log("[ensure-preview-server] wrote dist/server/server.js → re-exports ./index.js");
