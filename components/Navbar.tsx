"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#produits", label: "Produits" },
  { href: "#pourquoi", label: "Pourquoi BALAFON" },
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
          ? "border-zinc-200/70 bg-white/80 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/70"
          : "border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center">
          <Image
            src="/images/balafon-logo.png"
            alt="BALAFON"
            width={132}
            height={46}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#demo"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[rgb(15,110,110)] px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[rgb(12,92,92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(15,110,110)] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
          >
            Demander une démo
          </a>
        </div>
      </div>
    </header>
  );
}

