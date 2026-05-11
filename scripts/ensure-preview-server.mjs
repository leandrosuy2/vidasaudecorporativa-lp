/**
 * TanStack Start preview imports `dist/server/server.js`; Cloudflare emits `index.js`.
 * Runs before `vite preview` (see `prestart`) so Easypanel / Docker always have the file,
 * even if the Vite plugin did not run or dist was copied without server.js.
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const serverDir = join(root, "dist", "server");
const indexPath = join(serverDir, "index.js");
const serverPath = join(serverDir, "server.js");
const shim = 'export { default } from "./index.js";\n';

mkdirSync(serverDir, { recursive: true });

if (!existsSync(indexPath)) {
  console.warn(
    "[ensure-preview-server] dist/server/index.js missing — run `npm run build` before preview.",
  );
  process.exit(0);
}

writeFileSync(serverPath, shim, "utf8");
