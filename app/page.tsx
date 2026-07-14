import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "./components/Reveal";
import { HeroVisual } from "./components/HeroVisual";
import { Timeline } from "@/components/ui/timeline";

const processSteps = [
  {
    title: "Discovery",
    body: "We dive into your goals, users, and constraints to map the right approach before writing a spec.",
  },
  {
    title: "Design",
    body: "Wireframes and prototypes validated with you before a single line of code gets written.",
  },
  {
    title: "Build",
    body: "Agile sprints with weekly demos, so you always see real, working progress.",
  },
  {
    title: "Launch",
    body: "Rigorous QA and a smooth, zero-drama deployment to production.",
  },
  {
    title: "Support",
    body: "Ongoing monitoring, fast fixes, and a direct line to the team post-launch.",
  },
];

const timelineData = processSteps.map((step) => ({
  title: step.title,
  content: (
    <div className="pb-8">
      <p className="text-inverse-on-surface/70 font-body-md text-body-md max-w-112">
        {step.body}
      </p>
    </div>
  ),
}));

const featuredWork = [
  {
    name: "Vista Exhibition",
    description: "Exhibition stand design & booking platform.",
    url: "https://vistaexhibition.com/",
    image: "/workHero.png",
    alt: "Homepage of Vista Exhibition, a web platform for exhibition stand design and construction.",
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

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-xl overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover -z-20"
          src="https://res.cloudinary.com/dfhuyzaxw/video/upload/v1784039702/herovideo_j8gu2q.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 -z-10 bg-background/70 md:hidden" />
        <div
          className="hidden md:block absolute inset-0 -z-10 opacity-[0.4]"
          style={{
            background:
              "radial-gradient(600px circle at 15% 20%, color-mix(in srgb, var(--color-primary) 10%, transparent), transparent 60%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
          <div className="md:col-span-7 relative">
            <div className="relative">
              <Reveal duration={0.8}>
                <h1 className="font-display-lg text-[36px] leading-[1.1] md:text-display-lg text-on-surface mb-md text-balance">
                  Empowering Enterprise with{" "}
                  <span className="gold-gradient-text gold-gradient-text-animated italic">
                    AI-Driven Excellence
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.15} duration={0.8}>
                <p className="font-body-lg text-body-lg text-black mb-lg ">
                  We bridge the gap between complex technological evolution
                  and sustainable business growth through elite architectural
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
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md mx-auto ">
            <RevealItem className="group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined text-primary mb-sm block transition-transform duration-300 group-hover:scale-110">
                web
              </span>
              <h4 className="font-headline-md text-label-md font-bold mb-xs">
                Website Development
              </h4>
              <p className="text-caption font-caption text-tertiary">
                High-performance, scalable websites built on modern
                frameworks like Next.js.
              </p>
            </RevealItem>
            <RevealItem className="group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined text-primary mb-sm block transition-transform duration-300 group-hover:scale-110">
                smartphone
              </span>
              <h4 className="font-headline-md text-label-md font-bold mb-xs">
                App Development
              </h4>
              <p className="text-caption font-caption text-tertiary">
                Native and cross-platform mobile apps engineered for speed
                and reliability.
              </p>
            </RevealItem>
            <RevealItem className="group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined text-primary mb-sm block transition-transform duration-300 group-hover:scale-110">
                psychology
              </span>
              <h4 className="font-headline-md text-label-md font-bold mb-xs">
                AI Solutions
              </h4>
              <p className="text-caption font-caption text-tertiary">
                Bespoke machine learning and LLM-powered systems for
                enterprise decision-making.
              </p>
            </RevealItem>
            <RevealItem className="group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined text-primary mb-sm block transition-transform duration-300 group-hover:scale-110">
                hub
              </span>
              <h4 className="font-headline-md text-label-md font-bold mb-xs">
                AI Integrations
              </h4>
              <p className="text-caption font-caption text-tertiary">
                Embedding intelligent capabilities into your existing tools
                and workflows.
              </p>
            </RevealItem>
            <RevealItem className="group relative overflow-hidden rounded-xl bg-surface border border-outline-variant/30 p-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
              <span className="material-symbols-outlined text-primary mb-sm block transition-transform duration-300 group-hover:scale-110">
                smart_toy
              </span>
              <h4 className="font-headline-md text-label-md font-bold mb-xs">
                AI Automations
              </h4>
              <p className="text-caption font-caption text-tertiary">
                Intelligent agents that automate complex operations around
                the clock.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-xl bg-inverse-surface text-inverse-on-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <div className="text-center mb-xl">
              <h2 className="font-display-lg text-headline-lg mb-sm">
                How We Work
              </h2>
              <p className="font-body-md text-body-md text-inverse-on-surface/70 mx-auto">
                A disciplined, transparent process from first conversation to
                long-term support.
              </p>
            </div>
          </Reveal>
          <Timeline data={timelineData} />
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-xl bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
              <div className="max-w-2xl">
                <h2 className="font-display-lg text-headline-lg mb-sm">
                  Featured Work
                </h2>
                <p className="font-body-md text-body-md text-tertiary">
                  A few of the real websites we&apos;ve designed and built
                  for clients.
                </p>
              </div>
              <Link
                href="/work"
                className="hidden md:inline-flex items-center gap-xs text-primary font-label-md text-label-md hover:underline underline-offset-4 shrink-0"
              >
                View All Work
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
            {featuredWork.map((project) => (
              <RevealItem key={project.name}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-xl border border-outline-variant/30 bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                      <h3 className="font-headline-md text-label-md font-bold mb-xs">
                        {project.name}
                      </h3>
                      <p className="text-caption font-caption text-tertiary">
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
          <div className="mt-lg text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-xs text-primary font-label-md text-label-md hover:underline underline-offset-4"
            >
              View All Work
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
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
                Our consultants provide a 30-minute zero-obligation strategy
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
