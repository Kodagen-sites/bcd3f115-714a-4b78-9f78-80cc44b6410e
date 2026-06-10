import { siteConfig } from "@/content/site-config";

// Landing mode: every destination is an in-page anchor. Logo → "/".
// Header renders NAV_LINKS.slice(1) (max 5 anchors); index 0 is Home.
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  ...siteConfig.nav,
] as const;
