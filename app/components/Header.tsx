"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Solutions" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact Us" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Us" },
];

const BOTTOM_NAV = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/services", label: "Services", icon: "category" },
  { href: "/work", label: "Work", icon: "work" },
  { href: "/about", label: "About", icon: "account_circle" },
  { href: "/contact", label: "Contact", icon: "contact_support" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "bg-surface/90 border-outline-variant/30 shadow-md py-0"
            : "bg-surface/60 border-transparent shadow-none"
        }`}
      >
        <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-sm max-w-7xl mx-auto">
          <Link
            href="/"
            aria-label="Alif Global Solutions"
            className="transition-transform duration-300 hover:scale-[1.03] inline-block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://res.cloudinary.com/dfhuyzaxw/image/upload/q_auto,f_auto,w_200/v1784105571/logo_uvemq9.png" alt="Alif Global Solutions" className="h-9 w-9 object-contain" />
          </Link>
          <nav className="hidden md:flex items-center gap-lg">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-label-md text-label-md transition-colors duration-300 pb-1 group ${
                    active ? "text-primary" : "text-on-surface hover:text-primary"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-primary transition-all duration-300 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-sm">
            <ThemeToggle className="w-9 h-9" />
            <Link
              href="/contact"
              className="shine  sm:inline-flex bg-primary text-on-primary px-md py-xs rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
            >
              Consultation
            </Link>
          
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden border-t border-outline-variant/30 bg-surface"
            >
              <div className="px-margin-mobile py-sm flex flex-col gap-xs">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`font-label-md text-label-md py-sm block ${
                          active ? "text-primary" : "text-on-surface"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link
                  href="/contact"
                  className="bg-primary text-on-primary px-md py-sm rounded-full font-label-md text-label-md text-center mt-xs active:scale-95 transition-transform"
                >
                  Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-xl border-t border-outline-variant/20 z-50 flex items-center justify-around h-20 px-sm shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        {BOTTOM_NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center gap-1 transition-transform duration-200 active:scale-90 ${
                active ? "text-primary" : "text-on-surface-variant"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="bottom-nav-active"
                  className="absolute -top-2 w-1.5 h-1.5 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span
                className="material-symbols-outlined text-[22px]"
                style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {item.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
