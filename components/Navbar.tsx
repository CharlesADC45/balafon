"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#pourquoi", label: "Pourquoi BALAFON" },
  { href: "/about", label: "A propos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full border-b transition-all",
        scrolled
          ? "border-zinc-200/70 bg-white/85 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/75"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8 lg:gap-14">
          <Link href="/#top" className="flex items-center">
            <Image
              src="/images/balafon-logo2.svg"
              alt="BALAFON"
              width={170}
              height={58}
              priority
              className="h-10 w-auto sm:h-11"
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-lg font-semibold text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/portal"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-[rgb(15,110,110)]/30 bg-white/75 px-4 text-sm font-semibold text-[rgb(15,110,110)] shadow-sm transition-colors hover:bg-[rgb(15,110,110)]/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(15,110,110)] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-offset-zinc-950"
          >
            Ma console
          </Link>
        </div>
      </div>
    </header>
  );
}
