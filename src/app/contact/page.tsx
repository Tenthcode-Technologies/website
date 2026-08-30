import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/config/site";

const enquiryTypes = [
  {
    title: "General enquiries",
    description: "Questions about Tenthcode Technologies and what we are building.",
  },
  {
    title: "Partnerships",
    description: "Ideas for collaboration, research, or strategic partnerships.",
  },
  {
    title: "Product enquiries",
    description: "Questions about our products and current development work.",
  },
];

const description =
  "Contact Tenthcode Technologies about our products, partnerships, research, or the technology we are building.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    url: `${siteConfig.url}/contact`,
    title: "Contact Tenthcode Technologies",
    description,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Tenthcode Technologies",
    description,
    images: ["/og.png"],
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="bg-cloud-white py-20 sm:py-28 lg:py-36">
        <Container>
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-tech-blue">
            <span className="h-px w-8 bg-tech-blue" />
            Contact
          </p>
          <h1 className="text-6xl font-bold tracking-[-0.06em] text-deep-navy sm:text-8xl lg:text-9xl">
            Let&apos;s talk.
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600 sm:text-2xl sm:leading-10">
            Interested in Tenthcode Technologies, our products, partnerships,
            research, or what we are building?
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tech-blue">
                Primary contact
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 block break-all text-2xl font-semibold tracking-[-0.035em] text-deep-navy underline decoration-tech-blue decoration-2 underline-offset-8 transition-colors hover:text-tech-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech-blue sm:text-3xl"
              >
                {siteConfig.email}
              </a>
              <p className="mt-7 max-w-md text-sm leading-6 text-slate-500">
                Send us an email and include a little context about your enquiry.
                We will respond as soon as we can.
              </p>
            </div>

            <div className="border-t border-slate-300">
              {enquiryTypes.map((type, index) => (
                <a
                  key={type.title}
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(type.title)}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] gap-4 border-b border-slate-300 py-6 focus-visible:outline-2 focus-visible:outline-tech-blue sm:py-8"
                >
                  <span className="pt-1 font-mono text-xs text-slate-400">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-deep-navy transition-colors group-hover:text-tech-blue">
                      {type.title}
                    </span>
                    <span className="mt-2 block max-w-lg text-sm leading-6 text-slate-500">
                      {type.description}
                    </span>
                  </span>
                  <span className="pt-1 text-tech-blue" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
