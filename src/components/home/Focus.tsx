import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const areas = [
  {
    number: "01",
    title: "Software",
    description:
      "Building practical digital products designed around real-world needs.",
    status: "Active focus",
  },
  {
    number: "02",
    title: "Artificial Intelligence",
    description:
      "Exploring and applying modern AI technologies to create useful and accessible products.",
    status: "Active focus",
  },
  {
    number: "03",
    title: "Hardware & Research",
    description:
      "A future focus on hardware development, experimentation, and applied technology research.",
    status: "Future direction",
  },
];

export function Focus() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our direction"
          title="What We Build"
          description="We research problems, experiment with emerging technologies, and develop practical products across software and hardware."
        />

        <div className="mt-14 grid border-l border-t border-slate-200 md:grid-cols-3 lg:mt-20">
          {areas.map((area) => (
            <article
              key={area.number}
              className="group flex min-h-80 flex-col border-b border-r border-slate-200 p-7 transition-colors hover:bg-cloud-white sm:p-9"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-slate-400">{area.number}</span>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-tech-blue">
                  {area.status}
                </span>
              </div>
              <h3 className="mt-auto pt-16 text-2xl font-semibold tracking-[-0.035em] text-deep-navy">
                {area.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
