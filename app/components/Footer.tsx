import Link from "next/link";
import { Reveal } from "./Reveal";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface w-full py-xl border-t border-outline/10">
      <Reveal className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-start gap-md">
        <div className="">
          <div className="font-display-lg text-headline-md font-bold text-inverse-primary tracking-tight mb-sm">
            Alif Global
          </div>
          <p className="font-body-md text-body-md text-inverse-on-surface/70">
            A vanguard of technology consultancy, redefining the boundaries of
            intelligence and architecture since 2022.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl w-full md:w-auto">
          <div className="flex flex-col gap-sm">
            <h5 className="text-inverse-primary font-bold font-label-md text-label-md uppercase">
              Company
            </h5>
            <Link
              className="text-inverse-on-surface/70 hover:text-inverse-primary transition-colors"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-inverse-on-surface/70 hover:text-inverse-primary transition-colors"
              href="/work"
            >
              Work
            </Link>
            <Link
              className="text-inverse-on-surface/70 hover:text-inverse-primary transition-colors"
              href="/services"
            >
              Services
            </Link>
          </div>
          <div className="flex flex-col gap-sm">
            <h5 className="text-inverse-primary font-bold font-label-md text-label-md uppercase">
              Legal
            </h5>
            <a
              className="text-inverse-on-surface/70 hover:text-inverse-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-inverse-on-surface/70 hover:text-inverse-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
          <div className="flex flex-col gap-sm">
            <h5 className="text-inverse-primary font-bold font-label-md text-label-md uppercase">
              Social
            </h5>
            <a
              className="text-inverse-on-surface/70 hover:text-inverse-primary transition-colors"
              href="#"
            >
              LinkedIn
            </a>
            <a
              className="text-inverse-on-surface/70 hover:text-inverse-primary transition-colors"
              href="#"
            >
              Twitter
            </a>
          </div>
        </div>
      </Reveal>
      <Reveal
        delay={0.1}
        className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mt-xl pt-lg border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-md"
      >
        <span className="font-body-md text-body-md text-inverse-on-surface/70">
          © 2022 Alif Global. All Rights Reserved.
        </span>
        <div className="flex gap-md items-center">
          <span className="material-symbols-outlined text-inverse-primary">
            language
          </span>
          <span className="font-label-md text-label-md">
            Global - English
          </span>
        </div>
      </Reveal>
    </footer>
  );
}
