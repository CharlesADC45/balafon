"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

type CtaVariant = "outline" | "primary";

type NavbarProps = {
  cta?: {
    label: string;
    href: string;
    variant: CtaVariant;
  };
};

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#pourquoi", label: "Pourquoi BALAFON" },
  { href: "/about", label: "À propos" },
];

export default function Navbar({ cta }: NavbarProps = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu au resize desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Bloquer le scroll quand le menu est ouvert
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const ctaClasses: Record<CtaVariant, string> = {
    outline:
      "inline-flex h-10 items-center justify-center rounded-xl border border-brand/30 bg-white/75 px-4 text-sm font-semibold text-brand shadow-sm transition-colors hover:bg-brand/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-zinc-900/60 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:focus-visible:ring-offset-zinc-950",
    primary:
      "inline-flex h-10 items-center justify-center rounded-xl bg-brand px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950",
  };

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full border-b transition-all",
          scrolled
            ? "border-zinc-200/70 bg-white/85 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/75"
            : "border-transparent bg-transparent",
        ].join(" ")}
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          {/* Logo + desktop nav */}
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

            <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group relative text-lg font-semibold text-zinc-700 transition-colors hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-zinc-50"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA + hamburger mobile */}
          <div className="flex items-center gap-3">
            {cta && (
              <Link href={cta.href} className={`hidden md:inline-flex ${ctaClasses[cta.variant]}`}>
                {cta.label}
              </Link>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen ? "true" : "false"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand dark:text-zinc-300 dark:hover:bg-zinc-800 md:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {menuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden
          />

          {/* Drawer */}
          <nav
            className="absolute right-0 top-0 flex h-full w-72 flex-col bg-white shadow-2xl dark:bg-zinc-950"
            aria-label="Navigation mobile"
          >
            {/* Header drawer */}
            <div className="flex h-20 items-center justify-between border-b border-zinc-200/70 px-5 dark:border-zinc-800/70">
              <Image
                src="/images/balafon-logo2.svg"
                alt="BALAFON"
                width={130}
                height={44}
                className="h-8 w-auto"
              />
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Fermer le menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-1 flex-col gap-1 px-4 pt-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* CTA mobile */}
            {cta && (
              <div className="border-t border-zinc-200/70 p-4 dark:border-zinc-800/70">
                <Link
                  href={cta.href}
                  onClick={closeMenu}
                  className={`w-full text-center ${ctaClasses[cta.variant]}`}
                >
                  {cta.label}
                </Link>
              </div>
            )}
          </nav>
        </div>
      )}
    </>
  );
}
