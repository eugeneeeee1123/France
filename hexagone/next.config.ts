import type { NextConfig } from "next";
import path from "node:path";
import createNextIntlPlugin from "next-intl/plugin";

// next-intl 4: points the plugin at the request config (messages per locale).
const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    // The parent France/ folder is the git root but has no lockfile; pin the
    // workspace root here so Turbopack stops warning about the inferred root.
    // next.config.ts is transpiled to CommonJS by Next, so __dirname is defined.
    root: path.resolve(__dirname),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default withNextIntl(nextConfig);
