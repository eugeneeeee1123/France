import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware wrappers around next/navigation (Link adds the /[locale] prefix).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
