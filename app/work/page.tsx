import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

const description =
  "A portfolio of real websites built by Alif Global Solutions, spanning exhibition platforms, e-commerce stores, training academies, industrial trading companies, and school admissions sites.";

export const metadata: Metadata = {
  title: "Our Work",
  description,
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work | Alif Global Solutions",
    description,
    url: "/work",
    images: [{ url: "/workHero.png", width: 1600, height: 640, alt: "Alif Global Solutions portfolio" }],
  },
  twitter: {
    title: "Our Work | Alif Global Solutions",
    description,
    images: ["/workHero.png"],
  },
};

const projects = [
  {
    name: "Vista Exhibition",
    description: "Exhibition stand design & booking platform.",
    url: "https://vistaexhibition.com/",
    image: "/workHero.png",
    alt: "Homepage of Vista Exhibition, a web platform for exhibition stand design and construction.",
  },
  {
    name: "Cloud IgnitEd",
    description: "Salesforce training academy & mentorship platform.",
    url: "https://www.cloudignited.com/",
    image: "/workCloudIgnited.png",
    alt: "Homepage of Cloud IgnitEd, a Salesforce training academy website.",
  },
  {
    name: "The Original Traders",
    description: "Industrial bearings & machine parts trading company.",
    url: "https://www.theoriginaltraders.com/",
    image: "/workOriginalTraders.png",
    alt: "Homepage of The Original Traders, an industrial bearings trading company website.",
  },
  {
    name: "Nacaram",
    description: "Handmade Canarian leather goods & jewelry e-commerce.",
    url: "https://www.nacaram.com/",
    image: "/workNacaram.png",
    alt: "Homepage of Nacaram, a handmade leather goods e-commerce store.",
  },
  {
    name: "Seedlings Academy",
    description: "School admissions & academics website.",
    url: "https://seedlingsacademy.vercel.app/",
    image: "/workSeedlings.png",
    alt: "Homepage of Seedlings Academy, a school admissions website.",
  },
];

export default function WorkPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-center">
          <Reveal>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-sm block">
              Web Development Portfolio
            </span>
            <h1 className="font-display-lg text-[32px] md:text-display-lg mb-md leading-tight">
              Websites Built for{" "}
              <span className="gold-gradient-text gold-gradient-text-animated">
                Digital Impact
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[36rem] mb-lg">
              A showcase of the web platforms we&apos;ve designed and
              engineered — built for speed, clarity, and real business
              results.
            </p>
          </Reveal>
          <Reveal
            delay={0.15}
            y={0}
            className="relative h-[220px] md:h-[400px] rounded-xl overflow-hidden shadow-xl bg-surface-container group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Homepage of Vista Exhibition, a web platform built by Alif Global Solutions for exhibition stand design and construction."
              src="/workHero.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <a
              href="https://vistaexhibition.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-md left-md right-md flex items-center justify-between gap-sm bg-surface/90 backdrop-blur-sm px-md py-sm rounded-lg shadow-sm hover:bg-surface transition-colors"
            >
              <div>
                <p className="font-label-md text-label-md text-on-surface">
                  Vista Exhibition
                </p>
                <p className="text-caption text-on-surface-variant">
                  Exhibition stand design &amp; booking platform
                </p>
              </div>
              <span className="material-symbols-outlined text-primary shrink-0">
                arrow_outward
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Our Work */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <Reveal>
          <div className="mb-lg">
            <h2 className="font-headline-lg text-headline-lg mb-xs">
              Our Work
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A selection of websites we&apos;ve designed and built for
              clients across industries.
            </p>
          </div>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {projects.map((project) => (
            <RevealItem key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-outline/10 bg-surface hover-lift hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    alt={project.alt}
                    src={project.image}
                  />
                </div>
                <div className="p-md flex items-center justify-between gap-sm">
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-xs">
                      {project.name}
                    </h3>
                    <p className="text-on-surface-variant text-body-md">
                      {project.description}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform group-hover:translate-x-1">
                    arrow_outward
                  </span>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto py-xl">
        <div className="bg-inverse-surface rounded-xl p-lg md:p-xl relative overflow-hidden text-center md:text-left md:flex justify-between items-center">
          <Reveal className="relative z-10 max-w-[36rem]">
            <h2 className="font-display-lg text-headline-lg text-inverse-on-surface mb-md">
              Ready to Start Your Next Project?
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface opacity-80 mb-lg">
              From websites and apps to AI integration and automation, tell
              us what you&apos;re building and we&apos;ll show you how to
              bring it to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center md:justify-start">
              <Link
                href="/contact"
                className="shine bg-primary text-on-primary px-lg py-sm font-label-md rounded-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="border border-outline-variant text-inverse-on-surface px-lg py-sm font-label-md rounded-lg hover:bg-inverse-on-surface/10 transition-all"
              >
                Explore Our Services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
