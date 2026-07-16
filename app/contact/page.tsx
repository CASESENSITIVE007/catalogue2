import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";
import { ContactForm } from "./ContactForm";

const description =
  "Get in touch with Alif Global Solutions for your next website, app, or AI project. Send an inquiry or reach us directly by email or phone.";

export const metadata: Metadata = {
  title: "Contact Us",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Alif Global Solutions",
    description,
    url: "/contact",
  },
  twitter: {
    title: "Contact Us | Alif Global Solutions",
    description,
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-32 pb-xl">
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid lg:grid-cols-2 gap-lg items-center">
          <Reveal className="space-y-md">
            <span className="font-label-md text-label-md text-primary tracking-widest uppercase">
              Global Network
            </span>
            <h1 className="font-display-lg text-[32px] leading-tight md:text-display-lg md:leading-none text-on-background">
              Connect with our <br />
              <span className="text-primary">Executive Team.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[32rem]">
              Whether you&apos;re looking for enterprise solutions or
              specialized support, we are ready to assist
              with architectural precision.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative group">
            <div className="absolute -inset-2 bg-primary-fixed/30 rounded-xl blur-xl group-hover:bg-primary-fixed/40 transition duration-1000" />
            <div className="relative bg-surface border border-outline-variant/30 rounded-xl overflow-hidden shadow-sm aspect-video">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="w-full h-full object-cover"
                alt="A cinematic, high-angle shot of the Dubai International Financial Centre skyline at sunset."
                src="https://res.cloudinary.com/dfhuyzaxw/image/upload/q_auto:low,f_auto,w_800/v1784039698/contactHero_knqquj.png"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Department Contacts & Form Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <Reveal className="lg:col-span-8 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/20 shadow-sm transition-shadow duration-300 hover:shadow-lg">
            <h2 className="font-headline-lg text-headline-lg mb-md">
              Professional Inquiry
            </h2>
            <ContactForm />
          </Reveal>

          <Reveal
            delay={0.1}
            className="lg:col-span-4 bg-surface-container-lowest p-lg rounded-xl border border-outline-variant/20 shadow-sm transition-shadow duration-300 hover:shadow-lg flex flex-col justify-center gap-md"
          >
            <div>
              <span className="material-symbols-outlined text-primary text-4xl mb-sm block">
                forum
              </span>
              <h3 className="font-headline-md text-headline-md mb-xs">
                Get in Touch
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Have a question or want to start a project? Reach out
                directly — we typically respond within 24 hours.
              </p>
            </div>
            <div className="space-y-sm pt-sm border-t border-outline-variant/20">
              <a
                className="flex items-center gap-sm font-label-md text-label-md text-on-surface hover:text-primary transition-colors"
                href="mailto:contact@alifglobalsolutions.com"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  mail
                </span>
                contact@alifglobalsolutions.com
              </a>
              <a
                className="flex items-center gap-sm font-label-md text-label-md text-on-surface hover:text-primary transition-colors"
                href="tel:+918864931882"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  call
                </span>
                +91 88649 31882
              </a>
              <a
                className="flex items-center gap-sm font-label-md text-label-md text-on-surface hover:text-primary transition-colors"
                href="tel:+917060912207"
              >
                <span className="material-symbols-outlined text-primary text-[20px]">
                  call
                </span>
                +91 70609 12207
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
