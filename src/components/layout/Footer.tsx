import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-deep-navy text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.4fr_0.6fr_0.8fr] lg:gap-20">
          <div className="max-w-md">
            <Link
              href="/"
              className="inline-flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue"
              aria-label="Tenthcode Technologies home"
            >
              <Image
                src="/brand/tenthcode-logo-white.svg"
                alt=""
                width={36}
                height={36}
              />
              <span className="font-semibold tracking-[-0.02em]">
                Tenthcode Technologies
              </span>
            </Link>
            <p className="mt-6 text-base leading-7 text-slate-300">
              Building software and hardware technologies that solve real-world
              problems.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Connect
            </h2>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 inline-block text-sm text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-blue-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue"
            >
              {siteConfig.email}
            </a>
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label="Social platforms">
              {siteConfig.socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    rel="noreferrer"
                    target="_blank"
                    className="text-xs text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric-blue"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Tenthcode Technologies. All rights reserved.</p>
          <p>Building from Africa, for global relevance.</p>
        </div>
      </Container>
    </footer>
  );
}
