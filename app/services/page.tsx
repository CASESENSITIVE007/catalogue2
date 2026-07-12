import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Services | Alif Global",
};

const tiers = [
  {
    name: "Core",
    tagline: "Foundational digital excellence.",
    features: [
      "Specialized Development",
      "Standard Cloud Setup",
      "Quarterly Reviews",
    ],
    cta: "Select Model",
    style: "core" as const,
  },
  {
    name: "Enterprise",
    tagline: "Scaling global operations.",
    features: [
      "Advanced AI Integration",
      "Multi-Region Infrastructure",
      "24/7 Priority Support",
    ],
    cta: "Select Model",
    style: "enterprise" as const,
  },
  {
    name: "Bespoke",
    tagline: "Strategic partnership.",
    features: [
      "Custom R&D Lab",
      "Executive Advisory",
      "Fully Managed Solutions",
    ],
    cta: "Contact Sales",
    style: "bespoke" as const,
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-[120px] pb-xl">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid md:grid-cols-2 gap-md md:gap-xl items-center">
          <Reveal className="space-y-md">
            <span className="text-primary font-label-md text-label-md tracking-widest uppercase">
              Precision Digital Engineering
            </span>
            <h1 className="font-display-lg text-[32px] md:text-display-lg text-on-background">
              World-Class Solutions for Global Enterprises
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-[32rem]">
              Architecting the future through elite Web Development, AI
              Integration, and scalable Cloud Infrastructure. Trusted by
              industry leaders to deliver precision-grade digital services.
            </p>
          </Reveal>
          <Reveal
            delay={0.15}
            className="relative aspect-[4/3] overflow-hidden group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="A macro close-up of a high-tech architectural model crafted from brushed gold and matte charcoal metal."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvs3YsDwczi3fUp6PbLOULvIeiCZ8PVu0J1YkRlyD-r68IHC5ASunx-vUMWWVIHTTO-1SajmzPDQJgqDL7dGJ3_IA85qWFVt4NPQ9xCZnshbhbGVbN5H4rKI7OWYQt3Li7tcpaZZN-kNIS6j0tlEVJypRN2mOO96Js4Y5KPvAsmaIVA5kxGluomjh-iabjB9YaWSG4ST6GuBUy_W6RVraYt6r6uadDFGqDpfGXOyq2qW74b_VMB3J1gHNl51k2pMAdMrlbZ6ZnTQ"
            />
            <div className="absolute inset-0 border border-outline-variant/30 pointer-events-none" />
          </Reveal>
        </div>
      </section>

      {/* Service Sorting & Tiers Filter */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-lg">
        <div className="flex flex-col md:flex-row justify-between items-end gap-md border-b border-outline-variant/30 pb-sm">
          <div className="flex gap-md overflow-x-auto pb-sm md:pb-0 no-scrollbar">
            <button className="font-label-md text-label-md text-primary border-b-2 border-primary pb-sm whitespace-nowrap">
              Impact Analysis
            </button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors pb-sm whitespace-nowrap">
              Core Essentials
            </button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors pb-sm whitespace-nowrap">
              Enterprise Grade
            </button>
            <button className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors pb-sm whitespace-nowrap">
              Bespoke Strategic
            </button>
          </div>
          <div className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant mb-sm">
            <span>Sort by:</span>
            <button className="flex items-center gap-1 text-on-surface">
              Market Impact{" "}
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Service Catalogue Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <RevealGroup className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <RevealItem className="md:col-span-8 group relative bg-surface-container-lowest border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 md:h-80 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="An abstract visualization of neural networks and data streams in charcoal and gold."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBxw0vy9Qk8ejP3u6pZMB8m6L6J_FQC5rD5HWCrntTCF2wZtd-2r8uDJcMo1aJ2UhvmEi71TGO2dnmFa4rTiF1gBwHt757870cSHMIpBIEK60Jpiq8fv-6WLqtjZiojQ-q3t4mhfXcGgElbofgT36zHaizNA45AhRrjDpZweOzmggjNOgNMa_uzijrLec_0huktN4JC-xIeVbzpPOBC4UlVDjFxhBxUtrlEQgzfi2W8i5n-5Bu9PEBQbQF4mJL1R-AfendhscfjA"
              />
              <div className="absolute top-sm left-sm">
                <span className="bg-primary text-on-primary px-sm py-xs font-label-md text-label-md">
                  ENTERPRISE
                </span>
              </div>
            </div>
            <div className="p-lg space-y-sm">
              <h3 className="font-headline-md text-headline-md text-on-background">
                AI Integration &amp; Automation
              </h3>
              <p className="text-on-surface-variant max-w-2xl">
                Deploy bespoke machine learning models and cognitive
                automation frameworks designed to scale with global
                operations. Our integration strategy prioritizes security and
                seamless ROI.
              </p>
              <div className="pt-md flex flex-wrap gap-xs">
                <span className="px-sm py-1 bg-surface-container text-on-surface-variant font-label-md text-caption">
                  LLM Deployment
                </span>
                <span className="px-sm py-1 bg-surface-container text-on-surface-variant font-label-md text-caption">
                  Predictive Analytics
                </span>
                <span className="px-sm py-1 bg-surface-container text-on-surface-variant font-label-md text-caption">
                  Process Optimization
                </span>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-4 group bg-surface-container-lowest border border-outline-variant/30 p-lg flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="space-y-md">
              <div className="text-primary">
                <span className="material-symbols-outlined text-[40px] transition-transform duration-300 group-hover:scale-110">
                  web
                </span>
              </div>
              <div>
                <span className="font-label-md text-label-md text-primary mb-xs block">
                  CORE
                </span>
                <h3 className="font-headline-md text-headline-md text-on-background">
                  High-Performance Web Ecosystems
                </h3>
              </div>
              <p className="text-on-surface-variant">
                Architecting scalable, lightning-fast digital storefronts and
                enterprise portals using the latest architectural paradigms.
              </p>
            </div>
            <button className="mt-lg group/btn flex items-center gap-xs font-label-md text-label-md text-primary w-fit">
              VIEW CAPABILITIES
              <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
                arrow_forward
              </span>
            </button>
          </RevealItem>

          <RevealItem className="md:col-span-4 group bg-surface-container-lowest border border-outline-variant/30 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A sleek, minimalist data center corridor with subtle gold accent lighting."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpxdDgwrGEIej_XaqZ4khgxzFy_9AWGUcBLIjX66OfKwcPvMMJESjLpbuZhaNHXuRSWSOoHPkf3tlMJFYW-e5uLepweZIqyh-nzfuNrvZyXKpQs4e9MF-Msv5LnBKRXT9Y0Y1ZEsPJHkOkrvDP_E6lxUDryiFE3cTtotObTs1ZSuc0mF0zd183znfs4nv6yWDda1B0xITrflxPfo-jG-9x2m4e-BX2T1pRklw45xlrIWqP6tTD0-EopQY967x_jrgeJGHeTa9DtA"
              />
            </div>
            <div className="p-md space-y-sm">
              <span className="font-label-md text-label-md text-primary">
                ENTERPRISE
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background">
                Cloud Infrastructure
              </h3>
              <p className="text-on-surface-variant text-body-md">
                Resilient, global cloud architectures designed for
                zero-downtime and elastic scaling.
              </p>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-4 group bg-inverse-surface text-inverse-on-surface p-lg flex flex-col justify-center text-center relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative z-10 space-y-md">
              <div className="inline-block px-sm py-1 border border-inverse-primary text-inverse-primary font-label-md text-label-md mb-md uppercase tracking-tighter">
                Bespoke Strategy
              </div>
              <h3 className="font-headline-md text-headline-md text-inverse-primary">
                Executive AI Strategy
              </h3>
              <p className="text-inverse-on-surface/70">
                A specialized consultancy for C-suite leaders looking to
                navigate the transition into the AI-first economy.
              </p>
              <div className="pt-md">
                <Link
                  href="/contact"
                  className="inline-block border-b-2 border-inverse-primary pb-1 font-label-md text-label-md hover:text-inverse-primary transition-colors"
                >
                  REQUEST ADVISORY
                </Link>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-4 group bg-surface-container-lowest border border-outline-variant/30 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="aspect-video overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Conceptual digital art representing data engineering through layered translucent planes and golden light points."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyMMYl3fRLdflvE4ZQoI5NRJiuEWX8XbwUNtEEbaro9xkaRQ6JbxNIFYt3ZeAqtcK9beRTp0e6v4zDQAAelTYFn6I43p29bYYzV_ODE-JJOkLtDGta2L7VI4U1sU2K03TetocXPVlP8rxvIzXPbSFf7PMTPLmvlcDPmh3qXxaTSwE2R2r4HI87BXTzTB4RGTzpZybIFUPVfJJTUm3cRfgwdBZTPH1SAeyihHg5veB8VEYkNem-He3QLFqetNQu47SemmVwI4Dq8Q"
              />
            </div>
            <div className="p-md space-y-sm">
              <span className="font-label-md text-label-md text-primary">
                CORE
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background">
                Data Engineering
              </h3>
              <p className="text-on-surface-variant text-body-md">
                Building the foundational pipelines that transform raw data
                into actionable enterprise intelligence.
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Engagement Tiers */}
      <section className="mt-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-lg">
            <h2 className="font-display-lg text-headline-lg text-on-background mb-sm">
              Engagement Models
            </h2>
            <p className="text-on-surface-variant max-w-[36rem] mx-auto">
              Tailored service tiers designed to meet the specific demands of
              your organization&apos;s digital evolution.
            </p>
          </div>
        </Reveal>
        <RevealGroup className="grid md:grid-cols-3 gap-md">
          {tiers.map((tier) => (
            <RevealItem
              key={tier.name}
              className={
                tier.style === "enterprise"
                  ? "p-lg bg-surface-container-lowest border-2 border-primary shadow-lg flex flex-col gap-md relative transition-transform duration-300 hover:-translate-y-1"
                  : tier.style === "bespoke"
                    ? "p-lg bg-inverse-surface border border-outline/10 flex flex-col gap-md transition-transform duration-300 hover:-translate-y-1"
                    : "p-lg bg-surface-container-low border border-outline-variant/30 flex flex-col gap-md transition-transform duration-300 hover:-translate-y-1"
              }
            >
              {tier.style === "enterprise" && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary px-md py-1 font-label-md text-caption">
                  MOST SELECTED
                </div>
              )}
              <div className="space-y-xs">
                <h4
                  className={
                    tier.style === "bespoke"
                      ? "font-headline-md text-headline-md text-inverse-primary"
                      : "font-headline-md text-headline-md text-on-background"
                  }
                >
                  {tier.name}
                </h4>
                <p
                  className={
                    tier.style === "bespoke"
                      ? "text-label-md text-inverse-on-surface/70"
                      : "text-label-md text-on-surface-variant"
                  }
                >
                  {tier.tagline}
                </p>
              </div>
              <ul className="space-y-sm flex-grow">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={
                      tier.style === "bespoke"
                        ? "flex gap-xs items-start text-body-md text-inverse-on-surface"
                        : "flex gap-xs items-start text-body-md text-on-surface"
                    }
                  >
                    <span
                      className={
                        tier.style === "bespoke"
                          ? "material-symbols-outlined text-inverse-primary text-[20px]"
                          : "material-symbols-outlined text-primary text-[20px]"
                      }
                    >
                      check_circle
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={
                  tier.style === "enterprise"
                    ? "shine w-full py-sm bg-primary text-on-primary font-label-md text-label-md hover:opacity-90 transition-all"
                    : tier.style === "bespoke"
                      ? "w-full py-sm border border-inverse-primary text-inverse-primary font-label-md text-label-md hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
                      : "w-full py-sm border border-secondary text-secondary font-label-md text-label-md hover:bg-secondary hover:text-on-secondary transition-all"
                }
              >
                {tier.cta}
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA Section */}
      <section className="mt-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <Reveal className="bg-surface-container p-lg md:p-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10">
            <h2 className="font-display-lg text-[28px] md:text-display-lg text-on-background mb-md">
              Ready to re-architect your digital presence?
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-lg">
              Schedule a technical discovery session with our lead architects
              to identify high-impact opportunities for your business.
            </p>
            <div className="flex flex-wrap gap-md">
              <Link
                href="/contact"
                className="shine bg-primary text-on-primary px-lg py-sm font-label-md text-label-md"
              >
                Book a Consultation
              </Link>
              <Link
                href="/work"
                className="border border-outline text-on-surface px-lg py-sm font-label-md text-label-md hover:bg-surface-container-high transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
