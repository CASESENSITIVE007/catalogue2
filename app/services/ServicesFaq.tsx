"use client";

import { useState } from "react";
import { Reveal, RevealGroup, RevealItem } from "../components/Reveal";

const FAQS = [
  {
    question: "How does pricing work?",
    answer:
      "We don't sell fixed packages. Every engagement is scoped around your specific goals, so pricing depends on complexity, timeline, and what you already have in place. You'll get a clear quote after a short discovery call, before any work begins.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused website build usually runs 3-6 weeks. App development and AI integration projects vary more widely, from a few weeks for a scoped automation to a few months for a full product build. We'll give you a realistic timeline as part of the initial proposal.",
  },
  {
    question: "What happens after launch?",
    answer:
      "We stay on for monitoring, fast fixes, and a direct line to the team that built your project. If you need ongoing feature work or AI model tuning after launch, we can also set up a lightweight retainer.",
  },
  {
    question: "Can you work with our existing tech stack?",
    answer:
      "Yes. We regularly integrate into existing codebases, cloud setups, and internal tools rather than requiring a rebuild from scratch. For AI integration and automation work in particular, we design around what you already run.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a consultation and tell us what you're trying to solve. We'll follow up with a short discovery call to understand your goals, then send a proposal with scope, timeline, and pricing before any commitment.",
  },
];

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <Reveal>
        <div className="text-center mb-lg">
          <h2 className="font-display-lg text-headline-lg text-on-background mb-sm">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant max-w-[36rem] mx-auto">
            Everything we get asked before a project kicks off. Don&apos;t see
            your question? Reach out and we&apos;ll answer it directly.
          </p>
        </div>
      </Reveal>
      <RevealGroup className="max-w-3xl mx-auto divide-y divide-outline-variant/30 border-t border-b border-outline-variant/30">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <RevealItem key={faq.question}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-md py-md text-left"
              >
                <span className="font-label-md text-label-md md:text-headline-md text-on-background">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  add
                </span>
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr] pb-md" : "grid-rows-[0fr]"
                }`}
                style={{ display: "grid" }}
              >
                <div className="overflow-hidden">
                  <p className="text-on-surface-variant font-body-md max-w-2xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
