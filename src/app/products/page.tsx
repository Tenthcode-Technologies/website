import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

const productAssets = [
  "Event flyers",
  "Invitations",
  "Programs",
  "Shareable event experiences",
];

const description =
  "Explore products from Tenthcode Technologies, including our first AI-powered event creation platform currently in development.";

export const metadata: Metadata = {
  title: "Products",
  description,
  alternates: { canonical: "/products" },
  openGraph: {
    url: `${siteConfig.url}/products`,
    title: "Products from Tenthcode Technologies",
    description,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Products from Tenthcode Technologies",
    description,
    images: ["/og.png"],
  },
};

export default function ProductsPage() {
  return (
    <main id="main-content">
      <section className="bg-cloud-white py-20 sm:py-28 lg:py-36">
        <Container>
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-tech-blue">
            <span className="h-px w-8 bg-tech-blue" />
            Our work
          </p>
          <h1 className="text-6xl font-bold tracking-[-0.06em] text-deep-navy sm:text-8xl lg:text-9xl">
            Products
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600 sm:text-2xl sm:leading-10">
            Tenthcode Technologies develops products across software,
            artificial intelligence, and future hardware technologies.
          </p>
          <p className="mt-4 text-base font-medium text-tech-blue">
            The first product is currently in development.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-4 border-b border-slate-300 pb-6 sm:flex-row sm:items-end">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Featured product / 01
            </p>
            <span className="w-fit border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-tech-blue">
              In Development
            </span>
          </div>

          <div className="grid gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            <div>
              <SectionHeading title="AI Event Platform" />
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                Our first product is an AI-powered platform designed to help
                people create and manage event materials from a simple
                description of their event.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">
                The long-term product direction may include broader event
                creation and management capabilities.
              </p>
            </div>

            <div className="border border-slate-200 bg-cloud-white p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Designed to create
              </p>
              <ul className="mt-7 border-t border-slate-300">
                {productAssets.map((asset, index) => (
                  <li
                    key={asset}
                    className="grid grid-cols-[2.5rem_1fr] items-center border-b border-slate-300 py-5 text-sm font-medium text-deep-navy"
                  >
                    <span className="font-mono text-xs text-tech-blue">
                      0{index + 1}
                    </span>
                    {asset}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="product-grid mt-16 flex min-h-56 items-end border border-blue-900/80 bg-deep-navy p-7 sm:p-10">
            <p className="max-w-3xl text-lg leading-8 text-slate-300">
              The platform is being designed to turn one clear event
              description into a coordinated set of useful, shareable materials.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

