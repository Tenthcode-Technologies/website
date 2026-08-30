import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";

const values = [
  {
    title: "Innovation",
    description:
      "We pursue new ideas, technologies, and unconventional approaches to solve problems.",
  },
  {
    title: "Impact",
    description: "We build technology to create real-world value.",
  },
  {
    title: "Accessibility",
    description:
      "We design technology that is simple, intuitive, and usable regardless of technical background.",
  },
  {
    title: "Research",
    description: "We continuously investigate, experiment, test, and learn.",
  },
  {
    title: "Excellence",
    description:
      "We maintain high standards in engineering, product design, execution, and reliability.",
  },
  {
    title: "Global Ambition",
    description:
      "We build from Africa with the ambition to create technology capable of competing globally.",
  },
];

const description =
  "Learn about Tenthcode Technologies, our mission, vision, approach, and values as an African technology company building for global relevance.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    url: `${siteConfig.url}/about`,
    title: "About Tenthcode Technologies",
    description,
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Tenthcode Technologies",
    description,
    images: ["/og.png"],
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="bg-cloud-white py-20 sm:py-28 lg:py-36">
        <Container>
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-tech-blue">
            <span className="h-px w-8 bg-tech-blue" />
            About us
          </p>
          <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-deep-navy sm:text-7xl lg:text-8xl">
            About Tenthcode Technologies
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600 sm:text-2xl sm:leading-10">
            Tenthcode Technologies is an African technology company building
            software and hardware products designed to solve real-world problems.
          </p>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <Container>
          <div className="grid border-l border-t border-slate-200 lg:grid-cols-2">
            <article className="border-b border-r border-slate-200 p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tech-blue">
                01 — Our Mission
              </p>
              <h2 className="mt-12 text-3xl font-bold tracking-[-0.04em] text-deep-navy sm:text-4xl">
                Make technology more relevant and accessible.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Our mission is to research real-world problems, develop
                innovative technologies, and make existing technologies more
                accessible and relevant to African communities.
              </p>
            </article>
            <article className="border-b border-r border-slate-200 p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tech-blue">
                02 — Our Vision
              </p>
              <h2 className="mt-12 text-3xl font-bold tracking-[-0.04em] text-deep-navy sm:text-4xl">
                Build from Africa. Compete globally.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                Our vision is to build Tenthcode Technologies into a leading
                African technology company competing at a global scale while
                advancing Africa&apos;s position in the global technology landscape.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-deep-navy py-20 text-white sm:py-28 lg:py-32">
        <div className="section-grid absolute inset-0 opacity-40" />
        <Container className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <SectionHeading eyebrow="How we work" title="Our Approach" inverted />
          <p className="max-w-3xl text-2xl leading-10 tracking-[-0.025em] text-slate-200 sm:text-3xl sm:leading-[1.5]">
            We combine research, experimentation, engineering, and product
            development to create technology that is innovative, practical,
            accessible, and capable of delivering meaningful impact.
          </p>
        </Container>
      </section>

      <section className="bg-cloud-white py-20 sm:py-28 lg:py-32">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="Our Values"
            description="Six principles shape how we research, build, and grow."
          />
          <div className="mt-14 grid border-l border-t border-slate-300 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="min-h-64 border-b border-r border-slate-300 p-7 sm:p-9"
              >
                <span className="font-mono text-xs text-slate-400">
                  0{index + 1}
                </span>
                <h3 className="mt-16 text-xl font-semibold text-deep-navy">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
