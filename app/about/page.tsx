import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

export const metadata: Metadata = {
  title: "About Us | Alif Global",
};

const team = [
  {
    name: "Marcus Thorne",
    role: "Chief Technical Officer",
    alt: "Professional headshot of a male executive in a charcoal suit.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXdmidlQLZhmKpj9M4Jbt_vVp4LRPLabka4-scNHZ4nKrT0OuEb2qtEUAcr6gpa7XECFAXtAjONPIqliP-Pc69L7rMkbsPELlErmBqAgirO7pRWr2o40zqOTXoDqFMFTVRNkuVn1Cj50MLShJ26M9QpCPyiKz7TwcjNvuB4MoMEokjlby1fMh3NZGX8OA9W_JVBzSvdMcytIwZPibT1Yq7Q2SUBp3szGy9Ht_apgnoliTKkNT80LvzDdkj-Xng1Pby5ZPeJfMSXA",
  },
  {
    name: "Elena Voss",
    role: "VP of Engineering",
    alt: "Professional headshot of a female technology leader.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeJqRByKQ-GDjsPEV5_RWqw2MIM6f-Ik71CJ9y6dHhvOG_X7MbuPX4Xnofe1mzoQed0eGYsqkvL6_KKxUEoL0wdhuRxQkh_VLIWm5v_Fns77-SgqBx3wbXmKcwlNjOP-CirdHtG1AcHnQ0ZFbnhToxhvDa3r-mwJro6Mqdp_5lPzUoJMkBDBn5hVMm5rc3Qn2mN1GWV9ru17N4SAZbA_CYW-PdffvO1uq-_RFA3N6CrroUnzTYgkd0PXwM1ClfCSseJG-Muq-qWQ",
  },
  {
    name: "Sanjay Gupta",
    role: "Head of Global Strategy",
    alt: "Professional portrait of a senior consultant in a dark grey blazer.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfjhEjCZHB0zZNQUbo4hQDKsCcM817OYfYDLOidzW8qJj_DjA_ARnWrZ3G-dNqA2yF8OM5cbQ2QD46ioUMun2LiWdNAlZDDuw-LIa0emvyIozUJ3EXLhnf8XLlSEQkzX7uhUuZBZxrmtkUV24jvCdL1p1SzE8g0zc1ALuLjiYEogMrudxzdsyHJlx2tKoqH4y88kyI3umPberzUxA9cPZpvmG4ybYu-1nTf6iRQeRnDZm-11SRb0CrSXwYourebTu5BdRgeyEgQ",
  },
  {
    name: "Sarah Jenkins",
    role: "Security Lead",
    alt: "Professional portrait of a female cybersecurity expert in a navy suit.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuiQ_Cc0Omk7frLEfRUBFyaVn9yNI-dd3z2qk1N4LFtN7sLGJEwEE_MTRIHUR_ALurZ_XFCVeqdB2r6IE3smY6FZ0HMgkoBOi-WYFBerFHyhnxtM8Ys54ai0_aGCasz-Jket74AgTW8mEaGhZGJFJ36lkCBzCUIHkSnplGVvVssu5TxHcBLOI3lA7RIIe2xK7NNgeWbD31gt6NNHQew_6Sfc02cgDUZt_rtXR7mhMRmvqKMr89bwEuLbkJfxo18tg7GOkN1xAySQ",
  },
];

const timeline = [
  {
    year: "2008",
    title: "Inception",
    body: "Alif Global founded as a boutique systems integration firm in London.",
  },
  {
    year: "2014",
    title: "Global Expansion",
    body: "Opening of regional hubs in Singapore and Dubai to serve emerging markets.",
  },
  {
    year: "2019",
    title: "Precision Framework",
    body: "Formalization of our proprietary 'Precision Methodology' for IT consultancy.",
  },
  {
    year: "2024",
    title: "AI Leadership",
    body: "Pioneering ethical AI integration and high-end cloud infrastructure for the Fortune 500.",
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
              Alif Global stands at the intersection of traditional business
              wisdom and modern technological mastery. We provide elite IT
              consultancy for global enterprises that value reliability as
              much as innovation.
            </p>
          </Reveal>
          <Reveal delay={0.3} duration={0.7}>
            <div className="flex flex-wrap gap-sm">
              <Link
                href="/contact"
                className="shine bg-primary text-on-primary font-label-md px-lg py-sm rounded hover:shadow-lg transition-all active:scale-95"
              >
                Our Story
              </Link>
              <Link
                href="/services"
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
          <RevealItem className="p-lg bg-inverse-surface text-inverse-on-surface rounded-xl transition-all duration-300 hover:bg-on-surface hover:-translate-y-1 hover:shadow-lg">
            <span className="material-symbols-outlined text-primary-fixed text-4xl mb-md block">
              lightbulb
            </span>
            <h3 className="font-headline-md text-headline-md mb-sm text-surface">
              Innovation
            </h3>
            <p className="text-surface-variant font-body-md">
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

      {/* Heritage Timeline */}
      <section className="py-xl bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <h2 className="font-headline-lg text-headline-lg mb-xl text-center">
              Decades of Growth
            </h2>
          </Reveal>
          <RevealGroup className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:flex md:border-l-0 md:border-t-2 md:pt-md">
            {timeline.map((item) => (
              <RevealItem
                key={item.year}
                className="mb-lg md:mb-0 md:flex-1 relative pl-8 md:pl-0"
              >
                <div className="absolute top-0 left-[-9px] md:left-0 md:top-[-11px] w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <span className="font-display-lg text-primary text-headline-md block mb-xs">
                  {item.year}
                </span>
                <h4 className="font-label-md mb-xs">{item.title}</h4>
                <p className="text-on-surface-variant font-caption">
                  {item.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Our Methodology */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-xl items-center">
          <Reveal className="w-full md:w-1/2">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-square border border-outline-variant/30 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A modern corporate boardroom with a polished marble table and floor-to-ceiling windows."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4MiywSRYedFrU7b8HkhhZ4PMo7ZIIGa3GECFlbnprMki1AC01et6YgzNUc-85uo62LqENPs4S9Iq6Nkl8PO1KVVjvzFX0yuB11iFy61oht0YIIcNUpAArIyuFxVuuvbCSbHqJYo5nIWoLAf5zqzNcCtaCK1cLioi3JXJgCQvvjimpIRA70JmGhZA5OUZyQWyDwCbwu4EBPe8DkLHB39YrOhjt_j4LZfV9_5VcU5kbVWnFhpkW6ahlhCzdd8myiPVNbhg-jnbH5A"
              />
              <div className="absolute inset-0 bg-primary/5" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="w-full md:w-1/2">
            <h2 className="font-headline-lg text-headline-lg mb-md">
              Our Methodology: Precision First
            </h2>
            <p className="font-body-md text-on-surface-variant mb-lg">
              We don&apos;t believe in one-size-fits-all. Our approach is a
              rigorous, 4-stage cycle designed to ensure maximum ROI and
              zero-friction deployment.
            </p>
            <RevealGroup className="space-y-md">
              <RevealItem className="flex gap-sm">
                <span className="font-display-lg text-primary text-headline-md opacity-20">
                  01
                </span>
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Deep Audit
                  </h4>
                  <p className="text-on-surface-variant font-body-md">
                    Thorough analysis of existing legacy structures and
                    future scalability needs.
                  </p>
                </div>
              </RevealItem>
              <RevealItem className="flex gap-sm">
                <span className="font-display-lg text-primary text-headline-md opacity-20">
                  02
                </span>
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Architectural Blueprinting
                  </h4>
                  <p className="text-on-surface-variant font-body-md">
                    Crafting custom roadmaps that align IT infrastructure
                    with business objectives.
                  </p>
                </div>
              </RevealItem>
              <RevealItem className="flex gap-sm">
                <span className="font-display-lg text-primary text-headline-md opacity-20">
                  03
                </span>
                <div>
                  <h4 className="font-label-md text-on-surface">
                    Agile Execution
                  </h4>
                  <p className="text-on-surface-variant font-body-md">
                    Precision engineering and rapid prototyping with
                    continuous stakeholder feedback.
                  </p>
                </div>
              </RevealItem>
            </RevealGroup>
          </Reveal>
        </div>
      </section>

      {/* Expert Team */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <Reveal>
          <div className="flex justify-between items-end mb-xl">
            <div className="max-w-[36rem]">
              <h2 className="font-headline-lg text-headline-lg mb-sm">
                The Engineering Vanguard
              </h2>
              <p className="font-body-md text-on-surface-variant">
                Our team consists of veteran architects, security
                specialists, and strategy consultants with decades of
                combined experience.
              </p>
            </div>
            <button className="hidden md:block text-primary font-label-md hover:underline decoration-2 underline-offset-4 shrink-0">
              Join our team
            </button>
          </div>
        </Reveal>
        <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-md">
          {team.map((member) => (
            <RevealItem key={member.name} className="text-center group">
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-sm border border-outline-variant/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={member.alt}
                  src={member.src}
                />
              </div>
              <h4 className="font-label-md">{member.name}</h4>
              <p className="text-primary font-caption">{member.role}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* CTA Section */}
      <section className="py-xl px-margin-mobile md:px-margin-desktop bg-inverse-surface text-inverse-on-surface overflow-hidden relative">
        <Reveal className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-headline-lg text-[28px] md:text-display-lg mb-md text-surface">
            Ready to define your digital future?
          </h2>
          <p className="font-body-lg mb-xl text-surface-variant/70">
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
              href="/contact"
              className="border border-surface-variant/30 text-surface font-label-md px-lg py-sm rounded-lg hover:bg-surface/10 transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </Reveal>
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <span className="font-display-lg text-[20vw] font-extrabold uppercase select-none tracking-tighter">
            ALIF GLOBAL
          </span>
        </div>
      </section>
    </>
  );
}
