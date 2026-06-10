import Link from "next/link";
import { siteConfig } from "@/content/site-config";
import { SocialLinks } from "@/components/social-icons";

// FT3 — multi-column editorial footer on the deepest navy. All primary nav
// items live here too (header caps at 5), plus legal + socials.
export default function Footer() {
  const year = new Date().getFullYear();
  const { company, contact, footer, nav, services, legal, socials } = siteConfig;

  return (
    <footer className="bg-[#0E1C33] text-cream">
      <div className="mx-auto max-w-content section-pad">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="font-display text-2xl uppercase tracking-[0.18em]">
              {company.name}
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
              {footer.blurb}
            </p>
            <div className="mt-6">
              <SocialLinks
                socials={socials}
                className="flex items-center gap-4"
                iconClassName="h-5 w-5 text-cream/70 transition-colors hover:text-cream"
              />
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <div className="eyebrow text-cream/50">Navigate</div>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + contact */}
          <div className="md:col-span-4">
            <div className="eyebrow text-cream/50">Capabilities</div>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/#${s.slug}`}
                    className="text-sm text-cream/80 transition-colors hover:text-cream"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 space-y-1 text-sm text-cream/70">
              <a
                href={`mailto:${contact.email}`}
                className="block transition-colors hover:text-cream"
              >
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="block transition-colors hover:text-cream"
              >
                {contact.phone}
              </a>
              <p>{footer.address}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-cream"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
