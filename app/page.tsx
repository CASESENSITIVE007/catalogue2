import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./components/Reveal";
import { HeroVisual } from "./components/HeroVisual";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-xl overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, color-mix(in srgb, var(--color-primary) 10%, transparent), transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
          <div className="md:col-span-7">
            <Reveal duration={0.8}>
              <h1 className="font-display-lg text-[36px] leading-[1.1] md:text-display-lg text-on-surface mb-md text-balance">
                Empowering Enterprise with{" "}
                <span className="gold-gradient-text gold-gradient-text-animated italic">
                  AI-Driven Excellence
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.15} duration={0.8}>
              <p className="font-body-lg text-body-lg text-tertiary mb-lg ">
                We bridge the gap between complex technological evolution and
                sustainable business growth through elite architectural
                precision and deep learning integration.
              </p>
            </Reveal>
            <Reveal delay={0.3} duration={0.8}>
              <div className="flex flex-wrap gap-md">
                <Link
                  href="/contact"
                  className="shine bg-primary text-on-primary px-lg py-sm rounded-full font-label-md text-label-md hover:shadow-xl hover:shadow-primary/30 transition-all active:scale-95"
                >
                  Initiate Strategy
                </Link>
                <Link
                  href="/work"
                  className="border border-outline text-on-surface px-lg py-sm rounded-full font-label-md text-label-md hover:bg-surface-container hover:-translate-y-0.5 transition-all"
                >
                  View Portfolio
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5 relative hidden md:block">
            <Reveal delay={0.2} duration={0.9} y={0}>
              <HeroVisual />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Expertise Section */}
      <section className="py-xl bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
              <div className="max-w-2xl">
                <h2 className="font-display-lg text-headline-lg mb-sm">
                  Core Expertise
                </h2>
                <p className="font-body-md text-body-md text-tertiary">
                  Our specialized task forces operate at the intersection of
                  mathematical theory and practical web architecture.
                </p>
              </div>
              <div className="flex gap-xs">
                <div className="w-12 h-1 bg-primary" />
                <div className="w-4 h-1 bg-outline-variant" />
                <div className="w-4 h-1 bg-outline-variant" />
              </div>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 md:grid-cols-4 gap-md">
            <RevealItem className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className="p-lg h-full flex flex-col justify-between relative z-10">
                <div>
                  <span
                    className="material-symbols-outlined text-primary text-[32px] mb-md block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    psychology
                  </span>
                  <h3 className="font-display-lg text-headline-md mb-sm">
                    Cognitive AI Systems
                  </h3>
                  <p className="font-body-md text-body-md text-tertiary ">
                    Deploying bespoke Large Language Models and predictive
                    analytics tailored for enterprise-scale logistics and
                    decision-making.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-label-md text-label-md mt-lg group-hover:gap-sm transition-all w-fit"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined ml-xs transition-transform group-hover:translate-x-1">
                    arrow_right_alt
                  </span>
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                <span className="material-symbols-outlined text-[160px] translate-x-12 translate-y-12">
                  neurology
                </span>
              </div>
            </RevealItem>
            <RevealItem className="md:col-span-2 group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-lg hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <div className="flex items-start justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary text-[24px] mb-sm block transition-transform duration-300 group-hover:scale-110">
                    terminal
                  </span>
                  <h3 className="font-display-lg text-headline-md mb-xs">
                    Web Architecture
                  </h3>
                  <p className="font-body-md text-body-md text-tertiary">
                    Scalable, high-performance web solutions built on modern
                    tech stacks like Next.js and Cloud-Native platforms.
                  </p>
                </div>
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary/10">
                  <span className="material-symbols-outlined text-primary">
                    sync_desktop
                  </span>
                </div>
              </div>
            </RevealItem>
            <RevealItem className="md:col-span-1 group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined text-primary mb-sm block transition-transform duration-300 group-hover:scale-110">
                shield_lock
              </span>
              <h4 className="font-headline-md text-label-md font-bold mb-xs">
                Cyber Security
              </h4>
              <p className="text-caption font-caption text-tertiary">
                Architecting zero-trust environments for sensitive global
                data.
              </p>
            </RevealItem>
            <RevealItem className="md:col-span-1 group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined text-primary mb-sm block transition-transform duration-300 group-hover:scale-110">
                cloud_sync
              </span>
              <h4 className="font-headline-md text-label-md font-bold mb-xs">
                Cloud Migration
              </h4>
              <p className="text-caption font-caption text-tertiary">
                Optimizing heritage systems for agile cloud-first performance.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* Global Reach Impact Map */}
      <section className="py-xl bg-inverse-surface text-inverse-on-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <div className="text-center mb-xl">
              <h2 className="font-display-lg text-headline-lg mb-sm">
                Global Impact
              </h2>
              <p className="font-body-md text-body-md text-surface-variant/70  mx-auto">
                Operating across 14 time zones, Alif Global provides 24/7
                technical oversight for multinational conglomerates.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} duration={0.9}>
            <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-[#1a1c1e] opacity-80" />
              <div className="absolute inset-0 z-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover filter grayscale contrast-125 opacity-40"
                  alt="Global network map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuByDXhv_j1yczqRbg8iwy-ka_7fJqGJ5qw8MO0CIQF5nVYsOWvV_i1i371zxym00sFqKlB2kTyPS9TEXkLJHWhlcRgy8oWiB2lW-AoYOFAjWRzg1bT_nRMfoWDuYH6WgJQb-nZn8TJIhcbtmtvqu0FnhX-DLOhSYOAAEVqZ1PyJ4zqXiahSIk8-mBz4Tho-JCW5lBgWpY82z5s6KJt81nO0DNDgR6DgOnqKICyeDq3tlb33PYdPezA6dbE87S9K9RpPOFJtEUi5Vw"
                />
              </div>
              <div className="hidden md:block absolute top-1/4 left-1/4 z-10 group">
                <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-primary rounded-full relative shadow-lg shadow-primary/50" />
                <div className="absolute left-full ml-xs top-1/2 -translate-y-1/2 glass-card p-xs rounded border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-caption text-on-surface font-bold">
                    New York Hub
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute top-1/3 right-1/4 z-10 group">
                <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-primary rounded-full relative shadow-lg shadow-primary/50" />
                <div className="absolute left-full ml-xs top-1/2 -translate-y-1/2 glass-card p-xs rounded border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-caption text-on-surface font-bold">
                    Dubai HQ
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute bottom-1/4 right-1/3 z-10 group">
                <div className="w-3 h-3 bg-primary rounded-full animate-ping absolute" />
                <div className="w-3 h-3 bg-primary rounded-full relative shadow-lg shadow-primary/50" />
                <div className="absolute left-full ml-xs top-1/2 -translate-y-1/2 glass-card p-xs rounded border border-primary/20 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  <p className="text-caption text-on-surface font-bold">
                    Singapore Lab
                  </p>
                </div>
              </div>
              <div className="absolute bottom-sm left-sm md:bottom-md md:left-md glass-card p-sm rounded-lg flex gap-md">
                <div className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-caption text-on-surface font-bold">
                    Active Hubs
                  </span>
                </div>
                <div className="flex items-center gap-xs">
                  <span className="w-2 h-2 rounded-full bg-outline" />
                  <span className="text-caption text-on-surface">
                    Data Nodes
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Consultation CTA Section */}
      <section className="py-xl relative overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container rounded-3xl p-lg md:p-xl flex flex-col md:flex-row items-center justify-between gap-xl relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <Reveal className="max-w relative z-10">
              <h2 className="font-display-lg text-[28px] md:text-display-lg mb-sm text-balance">
                Ready to Architect Your{" "}
                <span className="text-primary italic">Digital Future?</span>
              </h2>
              <p className="font-body-lg text-body-lg text-tertiary mb-md">
                Our consultants provide a 45-minute zero-obligation strategy
                audit for enterprise leaders.
              </p>
              <ul className="space-y-sm mb-lg">
                <li className="flex items-center gap-sm font-label-md text-label-md text-on-surface">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  Tech Stack Optimization Review
                </li>
                <li className="flex items-center gap-sm font-label-md text-label-md text-on-surface">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  AI Integration Feasibility Study
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.15} className="w-full md:w-[400px] relative z-10">
              <form className="w-full bg-surface rounded-2xl shadow-xl p-md border border-outline-variant/20 space-y-sm transition-shadow duration-300 hover:shadow-2xl">
                <div>
                  <label className="block font-label-md text-caption mb-xs text-tertiary uppercase">
                    Full Name
                  </label>
                  <input
                    className="w-full border-b border-outline-variant py-xs focus:border-primary focus:ring-0 outline-none transition-colors bg-transparent"
                    placeholder="Executive Name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-caption mb-xs text-tertiary uppercase">
                    Corporate Email
                  </label>
                  <input
                    className="w-full border-b border-outline-variant py-xs focus:border-primary focus:ring-0 outline-none transition-colors bg-transparent"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="block font-label-md text-caption mb-xs text-tertiary uppercase">
                    Inquiry Type
                  </label>
                  <select className="w-full border-b border-outline-variant py-xs focus:border-primary focus:ring-0 outline-none transition-colors bg-transparent font-body-md">
                    <option>AI Implementation</option>
                    <option>Web Ecosystem Audit</option>
                    <option>Cyber Security Overhaul</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="shine w-full bg-primary text-on-primary py-md rounded-full font-label-md text-label-md mt-md hover:shadow-lg transition-all active:scale-95"
                >
                  Book Strategic Audit
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
