"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

type PortalCard = {
  id: string;
  title: string;
  subtitle: string;
  badgeClassName: string;
  mediaSrc: string;
  href?: string;
};

const cards: PortalCard[] = [
  {
    id: "monitoring",
    title: "NPM",
    subtitle: "Vue temps reel",
    badgeClassName: "bg-[rgb(233,246,245)] text-[rgb(15,110,110)]",
    mediaSrc: "/videos/chart-grow-up.webm",
    href: "/console/npm",
  },
  {
    id: "security",
    title: "EDP",
    subtitle: "Protection active",
    badgeClassName: "bg-[rgb(241,236,251)] text-[rgb(98,72,177)]",
    mediaSrc: "/console-media/security.webm",
    href: "/console/edp",
  },
  {
    id: "alerts",
    title: "Alertes & noti",
    subtitle: "Reaction rapide",
    badgeClassName: "bg-[rgb(255,243,232)] text-[rgb(192,122,100)]",
    mediaSrc: "/console-media/alert.webm",
  },
  {
    id: "reports",
    title: "Dash & rapport",
    subtitle: "Pilotage rapide",
    badgeClassName: "bg-[rgb(232,241,255)] text-[rgb(59,117,228)]",
    mediaSrc: "/console-media/report.webm",
  },
  {
    id: "support",
    title: "Services Pro",
    subtitle: "Equipe & support",
    badgeClassName: "bg-[rgb(235,248,236)] text-[rgb(55,168,83)]",
    mediaSrc: "/console-media/support.webm",
  },
];

// const quickActions = [
//   "Ouvrir le monitoring",
//   "Voir les alertes",
//   "Generer un rapport",
//   "Ajouter un service",
// ];

function LottieBadge({
  className,
  mediaSrc,
}: {
  className: string;
  mediaSrc: string;
}) {
  return (
    <div className={`flex h-70 w-53 items-center justify-center rounded-2xl ${className}`}>
      <video autoPlay muted loop playsInline className="h-[150px] w-[150px] object-contain">
        <source src={mediaSrc} type="video/webm" />
      </video>
    </div>
  );
}

export default function PortalPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main id="main-content" className="min-h-screen bg-[linear-gradient(180deg,_#eef6f5_0%,_#f7fbfb_36%,_#ffffff_100%)]">
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_18%_20%,_rgb(15,110,110,0.12),_transparent_32%),radial-gradient(circle_at_78%_18%,_rgb(192,122,100,0.11),_transparent_28%)]" />
        <div className="pointer-events-none absolute left-[18%] top-8 h-5 w-5 rounded-full bg-brand/85" />
        {/* <div className="pointer-events-none absolute right-[14%] top-10 h-9 w-9 rounded-full bg-[rgb(55,168,83)]/95" /> */}
        {/* <div className="pointer-events-none absolute right-[28%] top-32 h-5 w-5 rounded-full bg-[rgb(255,189,46)]/95" /> */}
        {/* <div className="pointer-events-none absolute right-[23%] top-20 h-28 w-28 rotate-45 border border-zinc-400/70" /> */}
        {/* <div className="pointer-events-none absolute right-[23%] top-20 h-28 w-28 border-r-0 border-t-0 border-zinc-400/50 [clip-path:polygon(0_0,100%_100%,0_100%)]" /> */}

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-6xl"
        >
          <div className="grid gap-10 lg:grid-cols-[1.6fr_0.78fr]">
            <div>
              <div className="flex items-center gap-4">
                <h1 className="flex items-center gap-3 text-4xl font-semibold tracking-tight text-[rgb(8,63,73)] sm:text-5xl">
                  <span>Console</span>
                  <Image
                    src="/images/balafon-logo2.svg"
                    alt="BALAFON"
                    width={150}
                    height={40}
                    className="h-9 w-auto sm:h-17"
                  />
                </h1>
              </div>

              <p className="mt-6 text-lg text-zinc-600">
                Votre Workspace BALAFON
              </p>

              <Link
                href="/"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-[rgb(8,63,73)]"
              >
                Retour au site
              </Link>

              {/* <div className="mt-8 flex flex-wrap gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action}
                    type="button"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * index, ease: "easeOut" }}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[rgb(15,110,110)]/25 bg-white px-5 text-sm font-semibold text-[rgb(15,110,110)] shadow-sm transition hover:border-[rgb(15,110,110)]/40 hover:bg-brand/5"
                  >
                    {action}
                  </motion.button>
                ))}
              </div> */}
            </div>

            {/* <motion.aside
              initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="self-start rounded-3xl bg-[linear-gradient(160deg,_rgb(9,74,83)_0%,_rgb(15,110,110)_58%,_rgb(10,84,94)_100%)] p-6 text-white shadow-[0_18px_40px_rgba(15,110,110,0.18)]"
            >
              <p className="max-w-xs text-2xl font-medium leading-10">
                Rejoignez l&apos;espace BALAFON pour suivre vos services et agir plus vite.
              </p>
              <div className="mt-6 overflow-hidden rounded-3xl border border-white/60 bg-white/70 shadow-sm">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-44 w-full object-cover"
                >
                  <source src="/videos/chart-grow-up.webm" type="video/webm" />
                </video>
              </div>
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[rgb(8,63,73)] shadow-sm transition hover:bg-zinc-50"
                >
                  Retour au site
                </Link>
                <span className="text-3xl text-[rgb(192,122,100)]">&rarr;</span>
              </div>
            </motion.aside> */}
          </div>
        </motion.div>
      </section>

      <section id="services" className="relative mx-auto max-w-7xl mt-30 mb-30">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[62%] overflow-hidden">
          <motion.div
            aria-hidden
            className="absolute right-[-10%] top-0 h-80 w-80 rounded-full bg-brand/7 blur-3xl"
            animate={shouldReduceMotion ? { opacity: 0.7 } : { x: [0, -18, 0], y: [0, 14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute right-[12%] top-32 h-60 w-60 rounded-full bg-[rgb(192,122,100)]/8 blur-3xl"
            animate={shouldReduceMotion ? { opacity: 0.55 } : { x: [0, 14, 0], y: [0, -10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.svg
            aria-hidden
            viewBox="0 0 520 380"
            className="absolute right-[-2%] top-0 h-[430px] w-[580px] opacity-40"
            animate={shouldReduceMotion ? { opacity: 0.22 } : { x: [0, -8, 0], y: [0, 6, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <g fill="none" stroke="rgb(15 110 110 / 0.14)" strokeWidth="1.4">
              <path d="M96 20 192 68 96 116 0 68Z" />
              <path d="M192 68 288 20 384 68 288 116Z" />
              <path d="M288 116 384 68 480 116 384 164Z" />
              <path d="M96 116 192 164 96 212 0 164Z" />
              <path d="M192 164 288 116 384 164 288 212Z" />
              <path d="M288 212 384 164 480 212 384 260Z" />
              <path d="M96 20V116M192 68V164M288 20V116M384 68V164M288 116V212M384 164V260" />
            </g>
          </motion.svg>
          <motion.div
            aria-hidden
            className="absolute right-[14%] top-8 h-[360px] w-[1px] bg-[linear-gradient(180deg,_transparent,_rgb(15,110,110,0.22),_transparent)]"
            animate={shouldReduceMotion ? { opacity: 0.45 } : { scaleY: [0.92, 1.08, 0.92], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="text-5xl font-semibold tracking-tight text-[rgb(8,63,73)]">Raccourci</h2>
          <p className="mt-4 max-w-3xl text-xl leading-9 text-zinc-600">
            Accès rapides à vos modules essentiels dans votre console.
          </p>
        </motion.div>

        <div className="relative z-10 mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, index) => {
            const cardContent = (
              <>
                <LottieBadge
                  className={card.badgeClassName}
                  mediaSrc={card.mediaSrc}
                />

                <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  {card.subtitle}
                </p>
                <h3 className="mt-2 text-lg font-semibold leading-7 text-[rgb(8,63,73)]">{card.title}</h3>
              </>
            );

            const cardClassName =
              "group flex min-h-[184px] flex-col items-center rounded-3xl border border-zinc-200 bg-white p-7 text-center shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-brand/20 hover:shadow-[0_18px_36px_rgba(15,110,110,0.08)]";

            const motionProps = {
              initial: shouldReduceMotion ? false : { opacity: 0, y: 20 },
              whileInView: shouldReduceMotion ? undefined : { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.2 },
              transition: { duration: 0.4, delay: index * 0.05, ease: "easeOut" },
            } as const;

            return card.href ? (
              <motion.a
                key={card.id}
                href={card.href}
                className={cardClassName}
                {...motionProps}
              >
                {cardContent}
              </motion.a>
            ) : (
              <motion.button
                key={card.id}
                type="button"
                className={cardClassName}
                {...motionProps}
              >
                {cardContent}
              </motion.button>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>

  );
}
