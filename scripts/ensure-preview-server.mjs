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
  console.error(
    "[ensure-preview-server] dist/server/index.js missing — run `npm run build` or use `npm start` (builds if needed).",
  );
  process.exit(1);
}

writeFileSync(serverPath, shim, "utf8");
