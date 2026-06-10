"use client";

import { useState } from "react";
import MagneticButton from "@/components/motion/MagneticButton";
import { siteConfig } from "@/content/site-config";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const message = String(data.get("message") || "");
    const org = String(data.get("org") || "");
    const subject = encodeURIComponent(`Security enquiry — ${org || name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}${org ? `, ${org}` : ""}`
    );
    // Static site, no backend: hand off to the visitor's mail client.
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full border-b border-contrast/20 bg-transparent py-3 text-contrast outline-none transition-colors placeholder:text-contrast/40 focus:border-contrast";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <input name="name" required placeholder="Full name" className={field} />
        <input name="org" placeholder="Organisation" className={field} />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <input
          name="email"
          type="email"
          required
          placeholder="Work email"
          className={field}
        />
        <input name="phone" placeholder="Phone" className={field} />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="Tell us about the site(s) you need to protect"
        className={`${field} resize-none`}
      />

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <MagneticButton
          as="button"
          strength={0.25}
          className="rounded-full bg-contrast px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-cream transition-opacity hover:opacity-90"
        >
          Send enquiry
        </MagneticButton>
        {sent && (
          <span className="text-sm text-contrast/60">
            Opening your mail client…
          </span>
        )}
      </div>
    </form>
  );
}
