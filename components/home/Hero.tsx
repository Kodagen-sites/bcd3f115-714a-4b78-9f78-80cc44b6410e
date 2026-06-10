"use client";

import { useState } from "react";
import ScrollCanvas from "@/components/ScrollCanvas";
import HeroScrollText from "@/components/motion/HeroScrollText";
import { siteConfig } from "@/content/site-config";
import assetManifest from "@/content/asset-manifest.json";
import framesManifest from "@/content/frames-manifest.json";

const manifest = assetManifest as any;
const heroVideo: string | undefined = manifest?.videos?.["scene-1"] || undefined;
const framePattern: string = framesManifest.frameUrlTemplate;

const chapters = [
  {
    at: 0,
    eyebrow: siteConfig.company.name,
    headlineLines: ["Critical infrastructure,", "under watch."],
    subline:
      "An elite operations center monitoring government and high-value sites across Nigeria — every camera, every gate, every hour.",
  },
  {
    at: 0.4,
    eyebrow: "Always watching",
    headlineLines: ["Eyes on every", "perimeter."],
    subline:
      "Live feeds, automated alerts and human analysts holding the line so nothing moves unseen.",
  },
  {
    at: 0.75,
    eyebrow: "Rapid response",
    headlineLines: ["Threats answered", "in minutes."],
    subline:
      "Intelligence-led detection and a graded response protocol — from verification to intervention.",
    cta: { label: "Request a security brief", href: "/#contact" },
  },
];

export default function Hero() {
  const [progress, setProgress] = useState(0);
  const hero = siteConfig.scrollHero;

  return (
    <ScrollCanvas
      frameCount={framesManifest.frameCount}
      pattern={framePattern}
      scrollDistance={hero.scrollDistance}
      videoSrc={heroVideo}
      loadingLabel={siteConfig.company.name}
      loadingVariant="L2"
      onProgress={setProgress}
    >
      <HeroScrollText
        progress={progress}
        chapters={chapters}
        position="bottom-left"
        textColor="#FAF6EE"
        accentColor="#E8DFCF"
        accentTextColor="#0E1C33"
      />
    </ScrollCanvas>
  );
}
