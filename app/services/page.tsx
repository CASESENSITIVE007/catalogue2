import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";
import { ServiceCatalogue } from "./ServiceCatalogue";
import { ServicesFaq } from "./ServicesFaq";

const description =
  "Website development, app development, AI solutions, AI integration, and AI automation — explore the services Alif Global Solutions can build for your business.";

export const metadata: Metadata = {
  title: "Services",
  description,
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Alif Global Solutions",
    description,
    url: "/services",
  },
  twitter: {
    title: "Services | Alif Global Solutions",
    description,
  },
};

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
              Integration, App Develppment, AI Solutions and AI Automations. Trusted by
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
              src="/serviceHero.png"
            />
            <div className="absolute inset-0 border border-outline-variant/30 pointer-events-none" />
          </Reveal>
        </div>
      </section>

      <ServiceCatalogue />

      <ServicesFaq />

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
