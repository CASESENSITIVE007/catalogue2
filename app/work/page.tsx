import Link from "next/link";
import type { Metadata } from "next";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";
import { AnimatedCounter } from "../components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Our Work | Alif Global",
};

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "40%", label: "Avg. Efficiency Gain" },
  { value: "30+", label: "Global Jurisdictions" },
  { value: "12+", label: "AI Patents Filed" },
];

export default function WorkPage() {
  return (
    <div className="pt-24 md:pt-32">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-center">
          <Reveal>
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest mb-sm block">
              Global Portfolio
            </span>
            <h1 className="font-display-lg text-[32px] md:text-display-lg mb-md leading-tight">
              Architecture for{" "}
              <span className="gold-gradient-text gold-gradient-text-animated">
                Digital Mastery
              </span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[36rem] mb-lg">
              We partner with industry leaders to deploy sophisticated AI
              systems and digital frameworks that redefine operational
              efficiency and market dominance.
            </p>
          </Reveal>
          <Reveal
            delay={0.15}
            y={0}
            className="relative h-[220px] md:h-[400px] rounded-xl overflow-hidden shadow-xl bg-surface-container"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </Reveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-inverse-surface text-inverse-on-surface py-lg mb-xl">
        <RevealGroup className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-md text-center">
          {stats.map((stat) => (
            <RevealItem key={stat.label}>
              <div className="font-display-lg text-headline-lg text-inverse-primary mb-base">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="font-label-md text-label-md opacity-70">
                {stat.label}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Case Studies Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <Reveal>
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-md mb-lg">
            <h2 className="font-headline-lg text-headline-lg">
              Impact Report
            </h2>
            <div className="flex gap-sm overflow-x-auto no-scrollbar">
              <button className="px-sm py-xs border border-outline/30 rounded-full font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap">
                All Sectors
              </button>
              <button className="px-sm py-xs border border-outline/30 rounded-full font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap">
                Finance
              </button>
              <button className="px-sm py-xs border border-outline/30 rounded-full font-label-md text-label-md hover:bg-primary hover:text-on-primary transition-colors whitespace-nowrap">
                Logistics
              </button>
            </div>
          </div>
        </Reveal>
        <RevealGroup className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <RevealItem className="md:col-span-8 group relative overflow-hidden rounded-xl border border-outline/10 bg-surface hover-lift hover:shadow-xl">
            <div className="aspect-[16/9] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="A high-end corporate office interior with executive environment and financial data displays."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSaqxADBxcgxx2kW5Zcazx64BubcKZza6oco5_Mf2vwlekyUux71q-Ywrk2j_QkNG0JAxTJvY-1FwLmH4hrhgyD3NDjvFA0yx-oFBdVJHOyp9PFdcikf7iO4pJLWaGtpbX0PPpJfgbyg_AtL0VPN3j8ULed5O7RXHp7e394kjDX4DAikLXdiU4vzPc67zMBRCVzVzhG-zd08igxvYFBgNA-yY4AbNifTTlt5sqQbW5MWZ4HQXjnUbHvvc9TwWTstPFN60orzXPWQ"
              />
            </div>
            <div className="p-lg">
              <div className="flex items-center gap-sm mb-sm">
                <span className="px-sm py-base bg-secondary-container text-on-secondary-container rounded-full font-label-md text-caption">
                  Finance
                </span>
                <span className="text-primary font-label-md text-label-md">
                  Global Banking Corp
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-sm">
                Autonomous Algorithmic Risk Management
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-md max-w-[36rem]">
                Implemented a real-time AI liquidity engine processing over
                $2.4B in daily transactions, reducing structural risk exposure
                by 65%.
              </p>
              <div className="flex items-center gap-lg">
                <div>
                  <div className="font-headline-md text-primary">65%</div>
                  <div className="font-caption text-caption uppercase opacity-60">
                    Risk Reduction
                  </div>
                </div>
                <div className="w-px h-8 bg-outline/20" />
                <div>
                  <div className="font-headline-md text-primary">0.4ms</div>
                  <div className="font-caption text-caption uppercase opacity-60">
                    Latency
                  </div>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-4 group relative overflow-hidden rounded-xl border border-outline/10 bg-surface hover-lift hover:shadow-xl">
            <div className="aspect-square md:aspect-auto md:h-full flex flex-col">
              <div className="flex-grow overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  alt="A sophisticated laboratory setting where a robotic arm is precision-handling medical samples."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAucHTkTqnYhFGj27eZ3V6aH6cO9kNEFmpRHS4bnH3o_NLKBHzda-UaWtRiBWeEKZxe35rqWwkNRhnFLY6_xgd-O_FFczJET7-Lghj2tlDEEMR0keiiTlZTn1uJyiZOtyYYAA-i9qEzJn3szDd5If4GBCDG3UAduBY_9KZ4IeZk4Ed9UxpZGD5aBZ_VpSeJ5KwZqaCh30ESqBlIC-UINcI5HYFi4weWBsUcLxnFjDfvmoJN38hGTOGYU1nlpE4GIzKU5-BDiXC6CA"
                />
              </div>
              <div className="p-md">
                <span className="px-sm py-base bg-secondary-container text-on-secondary-container rounded-full font-label-md text-caption mb-sm inline-block">
                  Healthcare
                </span>
                <h3 className="font-headline-md text-headline-md mb-xs">
                  Bio-Predictive AI
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Speeding up vaccine synthesis through neural molecular
                  modeling.
                </p>
                <div className="font-label-md text-primary flex items-center gap-xs">
                  40% efficiency gain{" "}
                  <span className="material-symbols-outlined text-[18px]">
                    trending_up
                  </span>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-4 group relative overflow-hidden rounded-xl border border-outline/10 bg-surface hover-lift hover:shadow-xl">
            <div className="aspect-square overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="An expansive automated warehouse at dusk with glowing lights from robotic transport units."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-M9q-Ud1BCCmSomGemIrgcasjF249h5I6DawaIVbq_sPaD2oojUtBMSmNYGQ-DOg1TDsO1GSBADtgg6C_v_0IOi3MZYm-6P0OrDiIktbr15ECqdrfOCHa9w3QYBq9JBC_eW9xNcYdTY3qV6y4rsEf4w3kDP93ghrFD0tNh-j3ban_ZnrPeHncY-9MO7sYxq6-w4U4G8qaZeri7-4bIRqyA7KduClHn0WfTnlPe3RPEof0RuDrfppw3MfrOvSWfzdwpTeJPt2cmA"
              />
            </div>
            <div className="p-md">
              <span className="px-sm py-base bg-secondary-container text-on-secondary-container rounded-full font-label-md text-caption mb-sm inline-block">
                Logistics
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">
                Fleet Intelligence
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Global supply chain optimization via autonomous routing.
              </p>
            </div>
          </RevealItem>

          <RevealItem className="md:col-span-8 group relative overflow-hidden rounded-xl border border-outline/10 bg-surface hover-lift hover:shadow-xl">
            <div className="flex flex-col md:flex-row h-full">
              <div className="md:w-1/2 aspect-square md:aspect-auto overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  alt="A minimalist high-tech server room corridor with glowing golden fiber optic cables."
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOwxncXzb64hL4WZ4QD0SB_9HGz7Kbpafuu2UQcz4jTjRh0fu00pdqANS6za6Z_8w0fExjWFDWzC1-WaMLJK-TdUFy88FKuoYYLrGxV8Nx7SUBmwfHzeEG7U-b1sU7wC9Cp8LfDH-AAa5YAy41m3_VRdks9WCo0TZ0sJpu_wD0yh0F8DTj9eCU0wRfOyRaB2cPYlEg9FtZPLxU3ShPA4NDTivnqTIaLB3jja0ZEceIdVt5pE1fQ5_Rw-Xc-pM2LZk41JMwo9NDqw"
                />
              </div>
              <div className="md:w-1/2 p-lg flex flex-col justify-center">
                <span className="px-sm py-base bg-secondary-container text-on-secondary-container rounded-full font-label-md text-caption mb-sm w-fit">
                  Infrastructure
                </span>
                <h3 className="font-headline-md text-headline-md mb-sm">
                  Cloud Sovereign Framework
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-md">
                  Developing private cloud infrastructure for sovereign
                  nations, ensuring 99.999% uptime and military-grade
                  encryption.
                </p>
                <button className="flex items-center gap-xs font-label-md text-primary hover:underline underline-offset-4 transition-all w-fit">
                  View Technical Whitepaper{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* Testimonial Section */}
      <section className="py-xl bg-surface-container overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <Reveal className="max-w-2xl">
            <span
              className="material-symbols-outlined text-[64px] text-primary mb-md opacity-40 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <h2 className="font-headline-lg text-headline-lg italic mb-lg leading-snug">
              &quot;Alif Global didn&apos;t just provide a software solution;
              they re-architected our entire operational logic. Their AI
              implementation has given us a five-year head start on our
              nearest competitor.&quot;
            </h2>
            <div className="flex items-center gap-md">
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary shrink-0"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGnpWzjNxQadObaJc5eqqfYPV6kQcNeRRD5vaMvxEi-eE3wAB9Tmtwpvny1TyeRU3fUwDTt97bktiRjOvx0m12DhRf99zeonKLWtS4DFOqroCSDN23GN-LHyXmSr6VJ2knUCvF_JytC0RGooQy5QQazMlYMgrK5FDTI0ypn0AWyEJp_zNzUbLt6nxEbiWeFtBfsBsUYZSNJCogYDv0huohquXeYbdxp3VC7-As7yiBwvHue3l22p2ZEgzMPdICLcbV56Namfh33Q')",
                }}
              />
              <div>
                <div className="font-headline-md text-headline-md text-on-surface">
                  Elena Vostrova
                </div>
                <div className="font-label-md text-label-md text-primary uppercase tracking-wider">
                  CTO, Meridian Financial Group
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto py-xl">
        <div className="bg-inverse-surface rounded-xl p-lg md:p-xl relative overflow-hidden text-center md:text-left md:flex justify-between items-center">
          <Reveal className="relative z-10 max-w-[36rem]">
            <h2 className="font-display-lg text-headline-lg text-inverse-on-surface mb-md">
              Ready to Architect Your Transformation?
            </h2>
            <p className="font-body-md text-body-md text-inverse-on-surface opacity-80 mb-lg">
              Our team of global consultants is ready to discuss how our AI
              and digital frameworks can be tailored to your specific
              industrial challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center md:justify-start">
              <Link
                href="/contact"
                className="shine bg-primary text-on-primary px-lg py-sm font-label-md rounded-lg hover:bg-primary-fixed hover:text-on-primary-fixed transition-all"
              >
                Schedule a Consultation
              </Link>
              <button className="border border-outline-variant text-inverse-on-surface px-lg py-sm font-label-md rounded-lg hover:bg-inverse-on-surface/10 transition-all">
                Download Portfolio (PDF)
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
