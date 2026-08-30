import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const principles = [
  {
    title: "Innovation",
    description:
      "We pursue new ideas, technologies, and unconventional approaches to solving problems.",
  },
  {
    title: "Accessibility",
    description:
      "Technology should be intuitive and usable regardless of technical background.",
  },
  {
    title: "Research",
    description:
      "We investigate, experiment, test assumptions, and continuously learn.",
  },
  {
    title: "Impact",
    description:
      "Technology should solve real problems and create meaningful value.",
  },
];

export function Approach() {
  return (
    <section className="relative overflow-hidden bg-deep-navy py-20 sm:py-28 lg:py-32">
      <div className="section-grid absolute inset-0 opacity-40" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <SectionHeading
            eyebrow="Our approach"
            title="Technology with purpose."
            inverted
          />

          <div className="grid border-l border-t border-white/15 sm:grid-cols-2">
            {principles.map((principle, index) => (
              <article
                key={principle.title}
                className="min-h-64 border-b border-r border-white/15 p-7 sm:p-8"
              >
                <span className="font-mono text-xs text-blue-300">
                  0{index + 1}
                </span>
                <h3 className="mt-14 text-xl font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
