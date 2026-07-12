import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Alif Global",
    description: siteConfig.description,
    start_url: "/",
    display: "browser",
    background_color: "#f8f9fa",
    theme_color: "#775a19",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
