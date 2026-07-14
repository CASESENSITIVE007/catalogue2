import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

const description =
  "Meet the founders behind Alif Global Solutions — two developers building fast, polished websites, apps, and AI-powered tools, with a clear, collaborative process from first conversation to launch.";

export const metadata: Metadata = {
  title: "About Us",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | Alif Global Solutions",
    description,
    url: "/about",
  },
  twitter: {
    title: "About Us | Alif Global Solutions",
    description,
  },
};

const team = [
  {
    name: "Ayan Rahat Ali",
    role: "Founder & Developer",
    initials: "AR",
    linkedin: "https://www.linkedin.com/in/ayan-rahat-ali-01ba98215/",
  },
  {
    name: "Mohammad Saad",
    role: "Founder & Developer",
    initials: "MS",
    linkedin: "https://www.linkedin.com/in/mohammadsaad007/",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[480px] md:min-h-[560px] flex items-center pt-24 pb-lg px-margin-mobile md:px-margin-desktop overflow-hidden bg-surface-container-lowest">
        <div className="dot-grid absolute inset-0 opacity-20" />
        <div className="max-w-4xl relative z-10">
          <Reveal duration={0.7}>
            <span className="font-label-md text-primary tracking-widest uppercase mb-sm block">
              Precision. Heritage. Excellence.
            </span>
            <h1 className="font-display-lg text-[32px] leading-tight md:text-display-lg mb-md text-on-surface">
              Architecting the future through{" "}
              <span className="text-primary">Executive Precision</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.15} duration={0.7}>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-lg">
              Alif Global Solutions stands at the intersection of traditional business
              wisdom and modern technological mastery. We provide elite IT
              consultancy for global enterprises that value reliability as
              much as innovation.
            </p>
          </Reveal>
          <Reveal delay={0.3} duration={0.7}>
            <div className="flex flex-wrap gap-sm">
              <Link
                href="#team"
                className="shine bg-primary text-on-primary font-label-md px-lg py-sm rounded hover:shadow-lg transition-all active:scale-95"
              >
                Our Story
              </Link>
              <Link
                href="#methodology"
                className="border border-outline text-on-surface font-label-md px-lg py-sm rounded hover:bg-surface-variant hover:-translate-y-0.5 transition-all"
              >
                View Methodology
              </Link>
            </div>
          </Reveal>
        </div>
        <div className="hidden lg:block absolute right-[-10%] top-[10%] w-[500px] h-[500px] rounded-full border border-primary/10 animate-pulse" />
      </section>

      {/* Core Values Bento */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg mb-sm">
              Our Core Pillars
            </h2>
            <p className="font-body-md text-on-surface-variant">
              The foundations upon which we build every solution.
            </p>
          </div>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-md">
          <RevealItem className="p-lg bg-surface border border-outline-variant/30 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-lg">
            <span className="material-symbols-outlined text-primary text-4xl mb-md block">
              verified
            </span>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Excellence
            </h3>
            <p className="text-on-surface-variant font-body-md">
              We refuse to settle for &apos;adequate&apos;. Our benchmark is
              absolute technical perfection and operational fluidity.
            </p>
          </RevealItem>
          <RevealItem className="p-lg bg-inverse-surface text-inverse-on-surface rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <span className="material-symbols-outlined text-inverse-primary text-4xl mb-md block">
              lightbulb
            </span>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Innovation
            </h3>
            <p className="text-inverse-on-surface/70 font-body-md">
              Innovation is not a buzzword; it&apos;s our commitment to
              finding elegant solutions to the most complex architectural
              problems.
            </p>
          </RevealItem>
          <RevealItem className="p-lg bg-surface border border-outline-variant/30 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-lg">
            <span className="material-symbols-outlined text-primary text-4xl mb-md block">
              gavel
            </span>
            <h3 className="font-headline-md text-headline-md mb-sm">
              Integrity
            </h3>
            <p className="text-on-surface-variant font-body-md">
              Transparent communication and radical honesty form the bedrock
              of our long-term client partnerships.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Our Methodology */}
      <section
        id="methodology"
        className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-xl items-center">
          <Reveal className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square border border-outline-variant/30 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A modern corporate boardroom with a polished marble table and floor-to-ceiling windows."
                src="https://res.cloudinary.com/dfhuyzaxw/image/upload/v1784039693/aboutusmethod_smzhlz.png"
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="w-full md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg mb-md">
              Our Methodology: Clear, Collaborative, Fast
            </h2>
            <p className="font-body-md text-on-surface-variant mb-lg">
              No jargon, no unnecessary complexity. We keep you involved at
              every stage, from the first conversation to the final
              deployment.
            </p>
            <RevealGroup className="space-y-md">
              <RevealItem className="flex gap-sm">
                <span className="font-display-lg text-primary text-headline-md opacity-20">
                  01
                </span>
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Discovery &amp; Scoping
                  </h4>
                  <p className="text-on-surface-variant font-body-md">
                    We start by understanding your goals, users, and
                    constraints — so every decision has a clear reason
                    behind it.
                  </p>
                </div>
              </RevealItem>
              <RevealItem className="flex gap-sm">
                <span className="font-display-lg text-primary text-headline-md opacity-20">
                  02
                </span>
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Design &amp; Build
                  </h4>
                  <p className="text-on-surface-variant font-body-md">
                    Wireframes and prototypes get validated with you before
                    we write a single line of production code.
                  </p>
                </div>
              </RevealItem>
              <RevealItem className="flex gap-sm">
                <span className="font-display-lg text-primary text-headline-md opacity-20">
                  03
                </span>
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Launch &amp; Support
                  </h4>
                  <p className="text-on-surface-variant font-body-md">
                    Rigorous testing, a smooth deployment, and a direct line
                    to the team once you&apos;re live.
                  </p>
                </div>
              </RevealItem>
            </RevealGroup>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section
        id="team"
        className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto scroll-mt-24"
      >
        <Reveal>
          <div className="text-center mb-xl">
            <h2 className="font-headline-lg text-headline-lg mb-sm">
              Meet the Founders
            </h2>
            <p className="font-body-md text-on-surface-variant max-w-[36rem] mx-auto">
              Two developers who decided to build something of their own.
            </p>
          </div>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 gap-md max-w-2xl mx-auto">
          {team.map((member) => (
            <RevealItem
              key={member.name}
              className="text-center group p-lg bg-surface border border-outline-variant/30 rounded-xl transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-surface-container-high border border-outline-variant/30 flex items-center justify-center mb-md">
                <span className="font-headline-lg text-headline-lg text-primary">
                  {member.initials}
                </span>
              </div>
              <h4 className="font-label-md text-headline-md mb-xs">
                {member.name}
              </h4>
              <p className="text-primary font-caption mb-sm">{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-xs text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                </svg>
                LinkedIn
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-inverse-surface text-inverse-on-surface overflow-hidden relative">
        <Reveal className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-headline-lg text-[28px] md:text-display-lg mb-md">
            Ready to define your digital future?
          </h2>
          <p className="font-body-lg mb-xl text-inverse-on-surface/70">
            Our consultants are ready to discuss your next breakthrough
            project. Let&apos;s build something enduring together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-md">
            <Link
              href="/contact"
              className="shine bg-primary text-on-primary font-label-md px-lg py-sm rounded-lg hover:bg-primary-container transition-all"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/services"
              className="border border-inverse-on-surface/30 text-inverse-on-surface font-label-md px-lg py-sm rounded-lg hover:bg-inverse-on-surface/10 transition-all"
            >
              Explore Our Services
            </Link>
          </div>
        </Reveal>
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <span className="font-display-lg text-[20vw] font-extrabold uppercase select-none tracking-tighter">
            ALIF
          </span>
          <span className="font-display-lg text-[20vw] font-extrabold uppercase select-none tracking-tighter">
            GLOBAL
          </span>
        </div>
      </section>
    </>
  );
}
