import { existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

/**
 * TanStack Start preview loads `dist/server/<entry>.js` (e.g. server.js).
 * @cloudflare/vite-plugin emits the worker as `index.js` instead.
 * This plugin writes the missing shim at the end of the server (ssr) build.
 */
export function previewServerEntryShim(): Plugin {
  let serverOutDir: string | undefined;

  return {
    name: "preview-server-entry-shim",
    apply: "build",
    enforce: "post",
    configResolved(config: ResolvedConfig) {
      const root = config.root;
      const dist = config.build.outDir ?? "dist";
      // TanStack Start registers the server bundle under environment name "ssr"
      const ssrOut = config.environments?.ssr?.build?.outDir as string | undefined;
      if (ssrOut) {
        serverOutDir = join(root, ssrOut);
      } else {
        serverOutDir = join(root, dist, "server");
      }
    },
    closeBundle() {
      if (!serverOutDir) return;
      const indexPath = join(serverOutDir, "index.js");
      const serverPath = join(serverOutDir, "server.js");
      if (!existsSync(indexPath)) return;
      if (existsSync(serverPath)) return;
      writeFileSync(serverPath, 'export { default } from "./index.js";\n');
    },
  };
}
