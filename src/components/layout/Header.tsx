"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "./Container";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-cloud-white/95 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech-blue"
          aria-label="Tenthcode Technologies home"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/brand/tenthcode-logo.svg"
            alt=""
            width={34}
            height={34}
            priority
          />
          <span className="text-sm font-bold tracking-[-0.02em] text-deep-navy sm:text-base">
            Tenthcode Technologies
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech-blue ${
                  isActive
                    ? "text-tech-blue"
                    : "text-slate-600 hover:text-deep-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/products"
            className="border border-tech-blue bg-tech-blue px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-electric-blue hover:bg-electric-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech-blue"
          >
            Explore Our Work
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center border border-slate-300 text-deep-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tech-blue md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-current transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${isOpen ? "block" : "hidden"} border-t border-slate-200 bg-cloud-white md:hidden`}
      >
        <Container className="flex flex-col py-4">
          {siteConfig.navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`border-b border-slate-200 py-4 text-base font-medium focus-visible:outline-2 focus-visible:outline-tech-blue ${
                  isActive ? "text-tech-blue" : "text-deep-gray"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </nav>
    </header>
  );
}
