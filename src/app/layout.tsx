import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "Tenthcode Technologies | Building Technology for Africa and the World",
    template: "%s | Tenthcode Technologies",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title:
      "Tenthcode Technologies | Building Technology for Africa and the World",
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1734,
        height: 907,
        alt: "Tenthcode Technologies — Building technology for Africa and the world.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tenthcode Technologies | Building Technology for Africa and the World",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/brand/tenthcode-favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 bg-tech-blue px-4 py-3 font-semibold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
