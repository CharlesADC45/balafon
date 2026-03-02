"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#produits", label: "Services" },
  { href: "/#pourquoi", label: "Pourquoi BALAFON" },
  { href: "/about", label: "A propos" },
];

export default function NavbarForm() {
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-12 lg:gap-20">
          <Link href="/#top" className="flex items-center">
            <Image
              src="/images/balafon-logo.png"
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
      </div>
    </header>
  );
}
