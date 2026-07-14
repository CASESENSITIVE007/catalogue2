"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { RevealGroup, RevealItem } from "../components/Reveal";

type Category = "development" | "ai";

type Service = {
  id: string;
  category: Category;
  badge: string;
  title: string;
  description: string;
  impact: number;
} & (
  | {
      variant: "feature";
      image: string;
      imageAlt: string;
      tags: string[];
    }
  | {
      variant: "icon";
      icon: string;
    }
  | {
      variant: "media";
      image: string;
      imageAlt: string;
    }
  | {
      variant: "advisory";
    }
);

const SERVICES: Service[] = [
  {
    id: "ai-solutions",
    category: "ai",
    badge: "AI",
    title: "AI Solutions",
    description:
      "Bespoke machine learning and LLM-powered systems for enterprise decision-making, tailored to your specific operational challenges.",
    impact: 5,
    variant: "feature",
    image:
      "https://res.cloudinary.com/dfhuyzaxw/image/upload/v1784039688/AISolutions_wnpix7.png",
    imageAlt:
      "An abstract visualization of neural networks and data streams in charcoal and gold.",
    tags: ["Machine Learning", "LLM-Powered Systems", "Decision Intelligence"],
  },
  {
    id: "website-development",
    category: "development",
    badge: "DEVELOPMENT",
    title: "Website Development",
    description:
      "High-performance, scalable websites built on modern frameworks like Next.js, engineered for speed and conversion.",
    impact: 4,
    variant: "icon",
    icon: "web",
  },
  {
    id: "app-development",
    category: "development",
    badge: "DEVELOPMENT",
    title: "App Development",
    description:
      "Native and cross-platform mobile apps engineered for speed, reliability, and a seamless user experience.",
    impact: 3,
    variant: "icon",
    icon: "smartphone",
  },
  {
    id: "ai-automation",
    category: "ai",
    badge: "AI",
    title: "AI Automation",
    description:
      "Intelligent agents that automate complex operations around the clock, freeing your team to focus on high-value work.",
    impact: 2,
    variant: "advisory",
  },
  {
    id: "ai-integration",
    category: "ai",
    badge: "AI",
    title: "AI Integration",
    description:
      "Embedding intelligent capabilities into your existing tools and workflows, connecting AI seamlessly into daily operations.",
    impact: 1,
    variant: "media",
    image:
      "https://res.cloudinary.com/dfhuyzaxw/image/upload/v1784039696/integration_hyb46v.png",
    imageAlt:
      "Conceptual digital art representing AI integration through layered translucent planes and golden light points.",
  },
];

const FILTERS: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All Services" },
  { key: "development", label: "Development" },
  { key: "ai", label: "AI" },
];

const SORT_OPTIONS = [
  { key: "impact", label: "Market Impact" },
  { key: "alpha", label: "A–Z" },
] as const;

type SortKey = (typeof SORT_OPTIONS)[number]["key"];

function ServiceCard({ service }: { service: Service }) {
  const isFeature = service.variant === "feature";

  return (
    <RevealItem
      className={
        isFeature
          ? "md:col-span-8 group relative bg-surface-container-lowest border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          : "md:col-span-4 group relative bg-surface-container-lowest border border-outline-variant/30 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      }
    >
      {service.variant === "feature" && (
        <>
          <div className="relative h-64 md:h-80 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={service.imageAlt}
              src={service.image}
            />
            <div className="absolute top-sm left-sm">
              <span className="bg-primary text-on-primary px-sm py-xs font-label-md text-label-md">
                {service.badge}
              </span>
            </div>
          </div>
          <div className="p-lg space-y-sm">
            <h3 className="font-headline-md text-headline-md text-on-background">
              {service.title}
            </h3>
            <p className="text-on-surface-variant max-w-2xl">{service.description}</p>
            <div className="pt-md flex flex-wrap gap-xs">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-sm py-1 bg-surface-container text-on-surface-variant font-label-md text-caption"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </>
      )}

      {service.variant === "icon" && (
        <div className="p-lg flex flex-col justify-between h-full">
          <div className="space-y-md">
            <div className="text-primary">
              <span className="material-symbols-outlined text-[40px] transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </span>
            </div>
            <div>
              <span className="font-label-md text-label-md text-primary mb-xs block">
                {service.badge}
              </span>
              <h3 className="font-headline-md text-headline-md text-on-background">
                {service.title}
              </h3>
            </div>
            <p className="text-on-surface-variant">{service.description}</p>
          </div>
          <Link
            href="/work"
            className="mt-lg group/btn flex items-center gap-xs font-label-md text-label-md text-primary w-fit"
          >
            VIEW CAPABILITIES
            <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      )}

      {service.variant === "media" && (
        <>
          <div className="aspect-video overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt={service.imageAlt}
              src={service.image}
            />
          </div>
          <div className="p-md space-y-sm">
            <span className="font-label-md text-label-md text-primary">{service.badge}</span>
            <h3 className="font-headline-md text-headline-md text-on-background">
              {service.title}
            </h3>
            <p className="text-on-surface-variant text-body-md">{service.description}</p>
          </div>
        </>
      )}

      {service.variant === "advisory" && (
        <div className="bg-inverse-surface text-inverse-on-surface p-lg flex flex-col justify-center text-center relative h-full">
          <div className="relative z-10 space-y-md">
            <div className="inline-block px-sm py-1 border border-inverse-primary text-inverse-primary font-label-md text-label-md mb-md uppercase tracking-tighter">
              {service.badge}
            </div>
            <h3 className="font-headline-md text-headline-md text-inverse-primary">
              {service.title}
            </h3>
            <p className="text-inverse-on-surface/70">{service.description}</p>
            <div className="pt-md">
              <Link
                href="/contact"
                className="inline-block border-b-2 border-inverse-primary pb-1 font-label-md text-label-md hover:text-inverse-primary transition-colors"
              >
                REQUEST A DEMO
              </Link>
            </div>
          </div>
        </div>
      )}
    </RevealItem>
  );
}

export function ServiceCatalogue() {
  const [activeFilter, setActiveFilter] = useState<"all" | Category>("all");
  const [sortKey, setSortKey] = useState<SortKey>("impact");
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const visibleServices = useMemo(() => {
    const filtered =
      activeFilter === "all"
        ? SERVICES
        : SERVICES.filter((service) => service.category === activeFilter);

    const sorted = [...filtered].sort((a, b) =>
      sortKey === "impact" ? b.impact - a.impact : a.title.localeCompare(b.title),
    );

    return sorted;
  }, [activeFilter, sortKey]);

  const activeSortLabel = SORT_OPTIONS.find((option) => option.key === sortKey)?.label;

  return (
    <>
      {/* Service Sorting & Tiers Filter */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-lg">
        <div className="flex flex-col md:flex-row justify-between items-end gap-md border-b border-outline-variant/30 pb-sm">
          <div className="flex gap-md overflow-x-auto pb-sm md:pb-0 no-scrollbar">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={
                  activeFilter === filter.key
                    ? "font-label-md text-label-md text-primary border-b-2 border-primary pb-sm whitespace-nowrap"
                    : "font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors pb-sm whitespace-nowrap border-b-2 border-transparent"
                }
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div ref={sortRef} className="relative mb-sm">
            <div className="flex items-center gap-xs font-label-md text-label-md text-on-surface-variant">
              <span>Sort by:</span>
              <button
                type="button"
                onClick={() => setSortOpen((open) => !open)}
                className="flex items-center gap-1 text-on-surface"
              >
                {activeSortLabel}
                <span className="material-symbols-outlined text-[18px]">expand_more</span>
              </button>
            </div>
            {sortOpen && (
              <div className="absolute right-0 top-full mt-xs bg-surface border border-outline-variant/30 shadow-lg z-20 min-w-[10rem]">
                {SORT_OPTIONS.map((option) => (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => {
                      setSortKey(option.key);
                      setSortOpen(false);
                    }}
                    className={
                      option.key === sortKey
                        ? "block w-full text-left px-sm py-xs font-label-md text-label-md text-primary bg-surface-container"
                        : "block w-full text-left px-sm py-xs font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors"
                    }
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Service Catalogue Bento Grid */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <RevealGroup
          key={activeFilter + sortKey}
          className="grid grid-cols-1 md:grid-cols-12 gap-gutter"
        >
          {visibleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </RevealGroup>
      </section>
    </>
  );
}
