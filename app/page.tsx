import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ContactForm from "@/components/home/ContactForm";
import ServiceCardV6 from "@/components/ServiceCard";
import FadeUp, { StaggerChildren } from "@/components/motion/FadeUp";
import TextReveal from "@/components/motion/TextReveal";
import NumberCounter from "@/components/motion/NumberCounter";
import Marquee from "@/components/motion/Marquee";
import MagneticButton from "@/components/motion/MagneticButton";
import { siteConfig } from "@/content/site-config";
import { resolveImage } from "@/lib/image-fallback";
import assetManifest from "@/content/asset-manifest.json";

const manifest = assetManifest as any;

function img(slot: string, keyword: string): string {
  return resolveImage({
    src: manifest?.images?.[slot],
    keyword,
    brandColor: "#1F3252",
    fallbackTier: "gradient",
  });
}

const stats = [
  { to: 150, suffix: "+", label: "Sites under active watch" },
  { to: 3, prefix: "<", suffix: " min", label: "Average response time" },
  { to: 24, suffix: "/7", label: "Operations center coverage" },
  { to: 99.9, suffix: "%", decimals: 1, label: "Monitoring uptime" },
];

const approach = [
  {
    step: "01",
    title: "Assess",
    body: "We survey every site, map vulnerabilities and benchmark your posture against critical-infrastructure standards.",
  },
  {
    step: "02",
    title: "Deploy",
    body: "Cameras, access control and vetted officers are installed and wired into the operations center.",
  },
  {
    step: "03",
    title: "Monitor",
    body: "Analysts watch live feeds around the clock, backed by automated detection on every channel.",
  },
  {
    step: "04",
    title: "Respond",
    body: "Verified threats trigger a graded protocol — from alert to on-ground intervention in minutes.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        {/* Capability ticker */}
        <section className="border-y border-contrast/10 bg-contrast py-5 text-cream">
          <Marquee speed={28} pauseOnHover gap="gap-12">
            {siteConfig.services.flatMap((s) => [
              <span
                key={s.slug}
                className="font-mono text-xs uppercase tracking-[0.25em] text-cream/80"
              >
                {s.name}
              </span>,
              <span key={`${s.slug}-dot`} className="text-cream/30">
                ✦
              </span>,
            ])}
          </Marquee>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 bg-bg">
          <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-14 section-pad lg:grid-cols-2">
            <FadeUp>
              <div className="overflow-hidden border-[3px] border-contrast shadow-[10px_10px_0_0_#0E1C33]">
                <img
                  src={img("section-about", "security operations control room monitors")}
                  alt="Security operations control room"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </FadeUp>

            <div>
              <p className="eyebrow text-primary/70">Who we are</p>
              <TextReveal
                as="h2"
                className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-tight text-contrast md:text-5xl"
              >
                Protection built for what cannot fail.
              </TextReveal>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-contrast/75">
                <FadeUp delay={0.05}>
                  <p>
                    {siteConfig.company.fullName} guards the facilities a nation depends on —
                    power, water, transport, data and government estates. We pair a hardened
                    operations center with trained officers on the ground.
                  </p>
                </FadeUp>
                <FadeUp delay={0.12}>
                  <p>
                    Continuous monitoring, rapid response and total accountability. Every event is
                    logged, every shift is audited, every site is covered.
                  </p>
                </FadeUp>
              </div>
              <FadeUp delay={0.2}>
                <div className="mt-8">
                  <MagneticButton
                    as="a"
                    href="/#contact"
                    strength={0.25}
                    className="rounded-full border border-contrast px-7 py-3 text-sm font-medium uppercase tracking-[0.15em] text-contrast transition-colors hover:bg-contrast hover:text-cream"
                  >
                    Talk to our team
                  </MagneticButton>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 bg-surface">
          <div className="mx-auto max-w-content section-pad">
            <div className="mb-12 max-w-2xl">
              <p className="eyebrow text-primary/70">What we do</p>
              <TextReveal
                as="h2"
                className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-tight text-contrast md:text-5xl"
              >
                Six capabilities, one command center.
              </TextReveal>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {siteConfig.services.map((service, i) => (
                <FadeUp key={service.slug} delay={(i % 3) * 0.08}>
                  <ServiceCardV6
                    service={service}
                    index={i}
                    imageSrc={img(`service-${service.slug}`, service.name.toLowerCase())}
                  />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="scroll-mt-24 bg-contrast text-cream">
          <div className="mx-auto max-w-content section-pad">
            <div className="mb-14 max-w-2xl">
              <p className="eyebrow text-cream/50">How we operate</p>
              <TextReveal
                as="h2"
                className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-tight md:text-5xl"
              >
                A protocol, not a promise.
              </TextReveal>
            </div>

            <StaggerChildren
              staggerDelay={0.1}
              className="grid grid-cols-1 gap-px overflow-hidden border border-cream/15 bg-cream/15 sm:grid-cols-2 lg:grid-cols-4"
            >
              {approach.map((a) => (
                <div key={a.step} className="bg-contrast p-8">
                  <div className="font-display text-4xl text-cream/25">{a.step}</div>
                  <h3 className="mt-6 font-display text-xl uppercase tracking-tight">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{a.body}</p>
                </div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Results */}
        <section id="results" className="scroll-mt-24 bg-bg">
          <div className="mx-auto max-w-content section-pad">
            <div className="mb-14 max-w-2xl">
              <p className="eyebrow text-primary/70">Track record</p>
              <TextReveal
                as="h2"
                className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-tight text-contrast md:text-5xl"
              >
                Measured in uptime and response.
              </TextReveal>
            </div>

            <StaggerChildren
              staggerDelay={0.08}
              className="grid grid-cols-2 gap-y-12 lg:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-primary pl-5">
                  <div className="font-display text-4xl tracking-tight text-contrast md:text-6xl">
                    <NumberCounter
                      to={s.to}
                      prefix={s.prefix}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </div>
                  <p className="mt-3 max-w-[12rem] text-sm text-contrast/60">{s.label}</p>
                </div>
              ))}
            </StaggerChildren>

            <FadeUp delay={0.1}>
              <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {[
                  { slot: "section-showcase-1", kw: "cctv surveillance camera building" },
                  { slot: "section-showcase-2", kw: "security guard control room night" },
                  { slot: "section-showcase-3", kw: "critical infrastructure facility perimeter" },
                ].map((s) => (
                  <div key={s.slot} className="overflow-hidden border-[3px] border-contrast">
                    <img
                      src={img(s.slot, s.kw)}
                      alt="Sentinel Security operations"
                      className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary text-cream">
          <div className="mx-auto max-w-content section-pad text-center">
            <TextReveal
              as="h2"
              className="mx-auto max-w-3xl font-display text-3xl uppercase leading-[1.05] tracking-tight md:text-5xl"
            >
              Secure what matters most.
            </TextReveal>
            <FadeUp delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-cream/75">
                Book a confidential assessment and we will map a security posture for your sites.
              </p>
            </FadeUp>
            <FadeUp delay={0.18}>
              <div className="mt-9">
                <MagneticButton
                  as="a"
                  href="/#contact"
                  strength={0.3}
                  className="rounded-full bg-cream px-9 py-4 text-sm font-medium uppercase tracking-[0.15em] text-contrast transition-opacity hover:opacity-90"
                >
                  Request a security brief
                </MagneticButton>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 bg-bg">
          <div className="mx-auto grid max-w-content grid-cols-1 gap-14 section-pad lg:grid-cols-[0.8fr_1fr]">
            <div>
              <p className="eyebrow text-primary/70">Get in touch</p>
              <TextReveal
                as="h2"
                className="mt-4 font-display text-3xl uppercase leading-[1.05] tracking-tight text-contrast md:text-4xl"
              >
                Start a conversation.
              </TextReveal>
              <p className="mt-5 max-w-sm text-contrast/70">
                Tell us about the sites you need to protect. Our team responds to every enquiry
                within one business day.
              </p>

              <dl className="mt-10 space-y-5 text-sm">
                <div>
                  <dt className="eyebrow text-contrast/40">Email</dt>
                  <dd className="mt-1">
                    <a
                      className="text-contrast transition-colors hover:text-primary"
                      href={`mailto:${siteConfig.contact.email}`}
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-contrast/40">Phone</dt>
                  <dd className="mt-1">
                    <a
                      className="text-contrast transition-colors hover:text-primary"
                      href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-contrast/40">Operations center</dt>
                  <dd className="mt-1 text-contrast/80">{siteConfig.contact.location}</dd>
                </div>
              </dl>
            </div>

            <FadeUp delay={0.08}>
              <div className="border-[3px] border-contrast bg-white p-7 shadow-[10px_10px_0_0_#0E1C33] md:p-9">
                <ContactForm />
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
