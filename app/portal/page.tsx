"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

type PortalCard = {
  id: string;
  title: string;
  subtitle: string;
  badgeClassName: string;
  mediaSrc: string;
};

const cards: PortalCard[] = [
  {
    id: "monitoring",
    title: "Monitoring unifie",
    subtitle: "Vue temps reel",
    badgeClassName: "bg-[rgb(233,246,245)] text-[rgb(15,110,110)]",
    mediaSrc: "/videos/chart-grow-up.webm",
  },
  {
    id: "security",
    title: "Securite & alertes",
    subtitle: "Protection active",
    badgeClassName: "bg-[rgb(241,236,251)] text-[rgb(98,72,177)]",
    mediaSrc: "/console-media/security.webm",
  },
  {
    id: "alerts",
    title: "Alertes & notifications",
    subtitle: "Reaction rapide",
    badgeClassName: "bg-[rgb(255,243,232)] text-[rgb(192,122,100)]",
    mediaSrc: "/console-media/alert.webm",
  },
  {
    id: "reports",
    title: "Dashboard & rapports",
    subtitle: "Pilotage rapide",
    badgeClassName: "bg-[rgb(232,241,255)] text-[rgb(59,117,228)]",
    mediaSrc: "/console-media/report.webm",
  },
  {
    id: "support",
    title: "Services professionnels",
    subtitle: "Equipe & support",
    badgeClassName: "bg-[rgb(235,248,236)] text-[rgb(55,168,83)]",
    mediaSrc: "/console-media/support.webm",
  },
];

const quickActions = [
  "Ouvrir le monitoring",
  "Voir les alertes",
  "Generer un rapport",
  "Ajouter un service",
];

function LottieBadge({
  className,
  mediaSrc,
}: {
  className: string;
  mediaSrc: string;
}) {
  return (
    <div className={`flex h-20 w-20 items-center justify-center rounded-2xl ${className}`}>
      <video autoPlay muted loop playsInline className="h-[70px] w-[70px] object-contain">
        <source src={mediaSrc} type="video/webm" />
      </video>
    </div>
  );
}

export default function PortalPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#eef6f5_0%,_#f7fbfb_36%,_#ffffff_100%)]">
      <section className="relative overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_18%_20%,_rgb(15,110,110,0.12),_transparent_32%),radial-gradient(circle_at_78%_18%,_rgb(192,122,100,0.11),_transparent_28%)]" />
        <div className="pointer-events-none absolute left-[18%] top-8 h-5 w-5 rounded-full bg-[rgb(15,110,110)]/85" />
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
                {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[rgb(233,246,245)]">
                  <video autoPlay muted loop playsInline className="h-9 w-9 object-contain">
                    <source src="/console-media/monitoring.webm" type="video/webm" />
                  </video>
                </div> */}
                <h1 className="text-4xl font-semibold tracking-tight text-[rgb(8,63,73)] sm:text-5xl">
                  Console BALAFON
                </h1>
              </div>

              <p className="mt-6 text-lg text-zinc-600">
                Votre Workspace <span className="font-semibold text-[rgb(15,110,110)]">BALAFON</span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action}
                    type="button"
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * index, ease: "easeOut" }}
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[rgb(15,110,110)]/25 bg-white px-5 text-sm font-semibold text-[rgb(15,110,110)] shadow-sm transition hover:border-[rgb(15,110,110)]/40 hover:bg-[rgb(15,110,110)]/5"
                  >
                    {action}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.aside
              initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="self-start rounded-[28px] bg-[linear-gradient(160deg,_rgb(9,74,83)_0%,_rgb(15,110,110)_58%,_rgb(10,84,94)_100%)] p-6 text-white shadow-[0_18px_40px_rgba(15,110,110,0.18)]"
            >
              <p className="max-w-xs text-2xl font-medium leading-10">
                Rejoignez l&apos;espace BALAFON pour suivre vos services et agir plus vite.
              </p>
              {/* <div className="mt-6 overflow-hidden rounded-[22px] border border-white/60 bg-white/70 shadow-sm">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-44 w-full object-cover"
                >
                  <source src="/videos/chart-grow-up.webm" type="video/webm" />
                </video>
              </div> */}
              <div className="mt-10 flex items-center justify-between">
                <Link
                  href="/"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-[rgb(8,63,73)] shadow-sm transition hover:bg-zinc-50"
                >
                  Retour au site
                </Link>
                <span className="text-3xl text-[rgb(192,122,100)]">&rarr;</span>
              </div>
            </motion.aside>
          </div>
        </motion.div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 sm:pb-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-semibold tracking-tight text-[rgb(8,63,73)]">Quick access</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-zinc-600">
            Acces rapides a vos modules essentiels dans une presentation plus console.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cards.map((card, index) => (
            <motion.button
              key={card.id}
              type="button"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              className="group flex min-h-[184px] flex-col items-start rounded-[22px] border border-zinc-200 bg-white px-5 py-5 text-left shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[rgb(15,110,110)]/20 hover:shadow-[0_18px_36px_rgba(15,110,110,0.08)]"
            >
              <LottieBadge
                className={card.badgeClassName}
                mediaSrc={card.mediaSrc}
              />

              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {card.subtitle}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-7 text-[rgb(8,63,73)]">{card.title}</h3>
              {/* <p className="mt-3 text-sm leading-6 text-zinc-600">{card.description}</p> */}
            </motion.button>
          ))}
        </div>
      </section>
    </main>
  );
}
