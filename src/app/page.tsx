import type { Metadata } from "next";
import { Approach } from "@/components/home/Approach";
import { CurrentFocus } from "@/components/home/CurrentFocus";
import { Focus } from "@/components/home/Focus";
import { Hero } from "@/components/home/Hero";
import { ProductPreview } from "@/components/home/ProductPreview";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: siteConfig.url,
    title:
      "Tenthcode Technologies | Building Technology for Africa and the World",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tenthcode Technologies | Building Technology for Africa and the World",
    description: siteConfig.description,
    images: ["/og.png"],
  },
};

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Focus />
      <Approach />
      <CurrentFocus />
      <ProductPreview />
    </main>
  );
}
