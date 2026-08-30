import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cloud-white py-20 sm:py-28 lg:py-36">
      <div className="hero-grid absolute inset-0 -z-20 opacity-70" />
      <div className="absolute -right-32 top-0 -z-10 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
      <Container>
        <div className="grid items-end gap-14 lg:grid-cols-[1fr_18rem] lg:gap-24">
          <div className="max-w-5xl">
            <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-tech-blue sm:text-sm">
              <span className="h-px w-8 bg-tech-blue" />
              Technology from Africa
            </p>
            <h1 className="max-w-5xl text-[clamp(3.25rem,8vw,7.75rem)] font-bold leading-[0.93] tracking-[-0.065em] text-deep-navy">
              Building technology for Africa and the world.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              Tenthcode Technologies builds software and hardware products that
              solve real-world problems, with Africa as our primary market and
              global relevance as our ambition.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/products">Explore Our Work</Button>
              <Button href="/about" variant="secondary">
                About Tenthcode
              </Button>
            </div>
          </div>

          <div className="border-l border-slate-300 pl-6 lg:mb-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Current focus
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-deep-navy">
              Software &amp; artificial intelligence
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Researching, experimenting, and building the foundation for a
              broader technology future.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
