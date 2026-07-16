import type { Metadata } from "next";

const description =
  "How Alif Global Solutions collects, uses, and protects the information you share with us through our contact and inquiry forms.";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description,
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Alif Global Solutions",
    description,
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 md:pt-32 pb-xl px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto">
      <h1 className="font-display-lg text-[32px] md:text-display-lg mb-sm text-on-background">
        Privacy Policy
      </h1>
      <p className="text-on-surface-variant font-body-md mb-xl">
        Last updated: July 2026
      </p>

      <div className="space-y-lg font-body-md text-on-surface-variant [&>section>h2]:font-headline-md [&>section>h2]:text-headline-md [&>section>h2]:text-on-background [&>section>h2]:mb-sm [&>section>p]:mb-sm">
        <section>
          <h2>1. Who We Are</h2>
          <p>
            Alif Global Solutions (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) provides
            website development, app development, and AI solutions,
            integration, and automation services. This policy explains what
            information we collect through this website and how we use it.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We only collect information you voluntarily provide to us
            through the contact and inquiry forms on this site, which may
            include your name, email address, phone number, and the details
            of your message or project inquiry. We do not use tracking
            cookies or third-party analytics on this site beyond what is
            required for the site to function.
          </p>
        </section>

        <section>
          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information you submit solely to respond to your
            inquiry, discuss a potential project, or provide the services
            you&apos;ve requested. We do not sell, rent, or share your
            personal information with third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>4. Data Retention</h2>
          <p>
            We retain inquiry and project-related information only for as
            long as necessary to respond to you, deliver services, or meet
            legal and accounting obligations, after which it is deleted.
          </p>
        </section>

        <section>
          <h2>5. Your Rights</h2>
          <p>
            You can ask us to access, correct, or delete any personal
            information we hold about you at any time by emailing us at{" "}
            <a
              href="mailto:contact@alifglobalsolutions.com"
              className="text-primary hover:underline"
            >
              contact@alifglobalsolutions.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, contact us
            at{" "}
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
