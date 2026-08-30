import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 items-center bg-cloud-white py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold text-tech-blue">404</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] text-deep-navy sm:text-7xl">
            This page could not be found.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            The page may have moved, or the address may be incorrect. You can
            return to the Tenthcode Technologies home page and continue from there.
          </p>
          <Link
            href="/"
            className="mt-9 inline-flex min-h-12 items-center gap-3 border border-tech-blue bg-tech-blue px-5 text-sm font-semibold text-white transition-colors hover:border-electric-blue hover:bg-electric-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech-blue"
          >
            Return home <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
