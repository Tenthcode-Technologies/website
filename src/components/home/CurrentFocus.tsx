import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusAreas = [
  { label: "Software", status: "Active", active: true },
  { label: "Artificial Intelligence", status: "Active", active: true },
  { label: "Hardware", status: "Future", active: false },
  { label: "Research", status: "Developing", active: false },
];

export function CurrentFocus() {
  return (
    <section className="bg-cloud-white py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
          <SectionHeading
            eyebrow="Now and next"
            title="Current Focus"
            description="We are currently focused on software and artificial intelligence while building the foundation for future hardware and research initiatives."
          />

          <div className="border-t border-slate-300">
            {focusAreas.map((area, index) => (
              <div
                key={area.label}
                className="grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-slate-300 py-6"
              >
                <span className="font-mono text-xs text-slate-400">
                  0{index + 1}
                </span>
                <span className="text-base font-semibold text-deep-navy">
                  {area.label}
                </span>
                <span
                  className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] ${
                    area.active ? "text-tech-blue" : "text-slate-500"
                  }`}
                >
                  <span
                    className={`size-2 ${
                      area.active ? "bg-tech-blue" : "border border-slate-400"
                    }`}
                  />
                  {area.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
