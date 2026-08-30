import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function ProductPreview() {
  return (
    <section className="bg-white py-20 sm:py-28 lg:py-32">
      <Container>
        <div className="border border-slate-200 bg-cloud-white">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-80 overflow-hidden border-b border-slate-200 bg-deep-navy p-8 sm:p-12 lg:min-h-[34rem] lg:border-b-0 lg:border-r">
              <div className="product-grid absolute inset-0 opacity-70" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.16em]">
                  <span className="text-blue-300">Product 01</span>
                  <span className="border border-blue-400/40 px-3 py-2 text-blue-200">
                    In Development
                  </span>
                </div>
                <div className="mt-28">
                  <div className="flex items-end gap-3">
                    {[2, 5, 3, 7, 4, 9].map((height, index) => (
                      <span
                        key={`${height}-${index}`}
                        className="w-5 bg-electric-blue/70"
                        style={{ height: `${height * 0.8}rem` }}
                      />
                    ))}
                  </div>
                  <p className="mt-6 max-w-xs font-mono text-xs leading-5 text-slate-500">
                    From one clear event description to a coordinated set of
                    materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-tech-blue">
                Our First Product
              </p>
              <h2 className="mt-5 text-4xl font-bold tracking-[-0.045em] text-deep-navy sm:text-5xl">
                AI Event Platform
              </h2>
              <p className="mt-7 text-lg leading-8 text-slate-600">
                We are developing an AI-powered platform that helps people
                create, organize, and share event experiences and materials.
              </p>
              <p className="mt-5 text-base leading-7 text-slate-500">
                The platform is being designed to transform a simple
                description of an event into coordinated materials such as
                flyers, invitations, programs, and shareable event experiences.
              </p>
              <div className="mt-9">
                <Button href="/products">View Product</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
