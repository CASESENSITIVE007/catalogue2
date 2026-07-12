import type { Metadata } from "next";
import { Manrope, Geist } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alif Global | AI-Driven IT Consultancy",
  description:
    "Alif Global bridges complex technological evolution and sustainable business growth through elite architectural precision, AI integration, and scalable digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("scroll-smooth", manrope.variable, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-body-md bg-background text-on-surface antialiased overflow-x-hidden">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
