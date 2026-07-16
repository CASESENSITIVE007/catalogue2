import type { Metadata } from "next";

const description =
  "The terms governing your use of the Alif Global Solutions website and our website development, app development, and AI services.";

export const metadata: Metadata = {
  title: "Terms of Service",
  description,
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | Alif Global Solutions",
    description,
    url: "/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 md:pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
      <h1 className="font-display-lg text-[32px] md:text-display-lg mb-sm text-on-background">
        Terms of Service
      </h1>
      <p className="text-on-surface-variant font-body-md mb-xl">
        Last updated: July 2026
      </p>

      <div className="space-y-lg font-body-md text-on-surface-variant [&>section>h2]:font-headline-md [&>section>h2]:text-headline-md [&>section>h2]:text-on-background [&>section>h2]:mb-sm [&>section>p]:mb-sm">
        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using this website or engaging Alif Global Solutions for services, you
            agree to these Terms of Service. If you do not agree, please do
            not use this site or our services.
          </p>
        </section>

        <section>
          <h2>2. Our Services</h2>
          <p>
            Alif Global Solutions provides website development, app development, AI
            solutions, AI integration, and AI automation services. The exact
            scope, timeline, and pricing for any project are agreed with you
            individually before work begins and are not fixed by this
            website.
          </p>
        </section>

        <section>
          <h2>3. Inquiries and Communication</h2>
          <p>
            Submitting a form on this site does not create a binding
            agreement. A project only begins once both parties agree in
            writing to a scope, timeline, and price.
          </p>
        </section>

        <section>
          <h2>4. Intellectual Property</h2>
          <p>
            Unless otherwise agreed in a project contract, ownership of
            final deliverables transfers to the client upon full payment.
            Alif Global Solutions retains the right to showcase completed work in its
            portfolio unless the client requests otherwise in writing.
          </p>
        </section>

        <section>
          <h2>5. Limitation of Liability</h2>
          <p>
            We aim to deliver high-quality, reliable work, but we make no
            guarantee of specific business outcomes, rankings, or revenue as
            a result of our services. To the extent permitted by law, Alif
            Global is not liable for indirect or consequential damages
            arising from the use of our services or this website.
          </p>
        </section>

        <section>
          <h2>6. Website Content</h2>
          <p>
            The content on this website, including project examples and
            branding, is provided for informational purposes and may be
            updated at any time without notice.
          </p>
        </section>

        <section>
          <h2>7. Changes to These Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Changes
            will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, contact
            us at{" "}
            <a
              href="mailto:contact@alifglobalsolutions.com"
              className="text-primary hover:underline"
            >
              contact@alifglobalsolutions.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
