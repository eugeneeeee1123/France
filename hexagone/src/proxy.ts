import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Next 16 renamed middleware.ts to proxy.ts (node_modules/next/dist/docs/01-app/
// 01-getting-started/16-proxy.md). The file must export the handler either as a
// default export or as a named `proxy` export; next-intl 4 documents the default
// export form for proxy.ts, used here. It redirects `/` to `/fr` and adds the
// locale prefix to unprefixed paths.
export default createMiddleware(routing);

export const config = {
  // Skip API routes, Next.js and Vercel internals, and any path with a file
  // extension (images, icon.png, fonts) so static assets never hit the proxy.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
