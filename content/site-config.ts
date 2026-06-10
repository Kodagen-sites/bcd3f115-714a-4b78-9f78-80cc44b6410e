/**
 * Single source of truth for brand, contact, services, nav and SEO.
 * Consumed by the header, footer, legal pages and the home page.
 */

export const siteConfig = {
  company: {
    name: "Sentinel Security",
    fullName: "Sentinel Security Ltd.",
    tagline: "Critical infrastructure, under watch.",
    description:
      "Sentinel Security delivers 24/7 monitoring, threat detection and physical security for government and critical-infrastructure operators across Nigeria.",
    url: "https://sentinelsecurity.ng",
    logo: "/og-image.jpg",
  },

  contact: {
    email: "ops@sentinelsecurity.ng",
    phone: "+234 700 736 8463",
    location: "Central Business District, Abuja, Nigeria",
  },

  footer: {
    contactEmail: "ops@sentinelsecurity.ng",
    address: "Central Business District, Abuja, Nigeria",
    blurb:
      "An elite security operations partner for government and critical-infrastructure clients. Continuous monitoring, rapid response, total accountability.",
  },

  // 6 highlighted services — slugs double as in-page anchor ids.
  services: [
    {
      slug: "monitoring",
      name: "24/7 Monitoring",
      description:
        "Round-the-clock surveillance from a hardened operations center. Live feeds, automated alerts and human analysts watching every site, every hour.",
    },
    {
      slug: "threat",
      name: "Threat Detection & Response",
      description:
        "Intelligence-led detection and a graded response protocol — from verification to on-ground intervention in minutes, not hours.",
    },
    {
      slug: "access",
      name: "Access Control",
      description:
        "Credentialed entry, biometric gates and audited access logs that keep secure facilities sealed to anyone without clearance.",
    },
    {
      slug: "risk",
      name: "Risk Assessment",
      description:
        "Site surveys, vulnerability mapping and tailored security postures benchmarked to critical-infrastructure standards.",
    },
    {
      slug: "guards",
      name: "On-site Guards",
      description:
        "Vetted, trained and uniformed officers deployed to your perimeter — coordinated in real time with the operations center.",
    },
    {
      slug: "cctv",
      name: "CCTV & Surveillance",
      description:
        "Design, installation and management of high-resolution camera networks with retention, analytics and remote review.",
    },
  ],

  // In-page anchor nav. Header shows MAX 5; overflow folds into the footer.
  nav: [
    { href: "/#services", label: "Services" },
    { href: "/#about", label: "About" },
    { href: "/#approach", label: "Approach" },
    { href: "/#results", label: "Results" },
    { href: "/#contact", label: "Contact" },
  ],

  socials: {
    linkedin: "https://www.linkedin.com/company/sentinel-security-ng",
    x: "https://x.com/sentinelsec_ng",
    instagram: "",
    facebook: "",
  },

  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],

  seo: {
    siteUrl: "https://sentinelsecurity.ng",
    defaultTitle: "Sentinel Security — Critical infrastructure, under watch.",
    defaultDescription:
      "24/7 security monitoring, threat detection and physical protection for government and critical-infrastructure operators across Nigeria.",
    defaultOgImage: "/og-image.jpg",
    locale: "en_NG",
  },

  // Scrub-cinematic hero (Archetype G). assetMode live-generate; asset URLs
  // are written into content/asset-manifest.json by the platform pipeline.
  scrollHero: {
    archetype: "G",
    assetMode: "live-generate",
    imageUrl: "",
    frameCount: 120,
    framePattern: "/frames/frame_{n}.jpg",
    scrollDistance: 3,
  },
} as const;

export type SiteConfig = typeof siteConfig;
