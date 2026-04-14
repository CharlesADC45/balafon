"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

type Feature = {
  title: string;
  description: string;
  icon: "flow" | "speed" | "stack" | "shield";
};

const features: Feature[] = [
  {
    title: "Simplicité",
    description:
      "Une expérience claire, des vues utiles et des actions rapides. Vos équipes gardent le contrôle sans complexité inutile.",
    icon: "flow",
  },
  {
    title: "Performance",
    description:
      "Réduisez les heures perdues à gérer les incidents grâce à une supervision proactive et des indicateurs fiables.",
    icon: "speed",
  },
  {
    title: "Centralisation",
    description:
      "Unifiez la visibilité sur postes, serveurs, applications, réseau et cloud depuis une seule plateforme BALAFON.",
    icon: "stack",
  },
  {
    title: "Sécurité",
    description:
      "Contrôles, alertes et bonnes pratiques pour sécuriser vos environnements et mieux anticiper les risques.",
    icon: "shield",
  },
];

function FeatureIcon({ name }: { name: Feature["icon"] }) {
  const common = "stroke-current";

  return (
    <svg viewBox="0 0 48 48" aria-hidden className="h-8 w-8">
      {name === "flow" ? (
        <g className={common} fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 16h9c5 0 7 3 7 8s2 8 8 8" />
          <path d="M12 32h9c3.5 0 5.5-1.6 6.5-4" />
          <path d="M34 14l4 4-4 4" />
          <path d="M34 26l4 4-4 4" />
          <circle cx="12" cy="16" r="3" />
          <circle cx="12" cy="32" r="3" />
        </g>
      ) : null}
      {name === "speed" ? (
        <g className={common} fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 29a14 14 0 1 1 28 0" />
          <path d="M24 29l9-11" />
          <path d="M15 29h18" />
          <path d="M15 20l3 3" />
          <path d="M33 20l-3 3" />
        </g>
      ) : null}
      {name === "stack" ? (
        <g className={common} fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 8 39 16 24 24 9 16Z" />
          <path d="M39 24 24 32 9 24" />
          <path d="M39 32 24 40 9 32" />
        </g>
      ) : null}
      {name === "shield" ? (
        <g className={common} fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 7 38 13v10c0 9-5.4 15.2-14 18-8.6-2.8-14-9-14-18V13Z" />
          <path d="m18 24 4 4 8-9" />
        </g>
      ) : null}
    </svg>
  );
}

export default function Features() {
  return (
    <section
      id="pourquoi"
      className="relative overflow-hidden border-y border-zinc-200/70 bg-[linear-gradient(180deg,_#f8fbfb_0%,_#eef6f5_48%,_#ffffff_100%)] py-18 sm:py-24"
    >
      <div className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[rgb(15,110,110)]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-7rem] bottom-10 h-80 w-80 rounded-full bg-[rgb(192,122,100)]/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:radial-gradient(circle_at_1px_1px,_rgb(15_110_110_/_0.14)_1px,_transparent_0)] [background-size:34px_34px]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            variants={fadeIn("up", 0)}
            className="text-lg font-semibold tracking-[0.14em] text-[rgb(15,110,110)] sm:text-xl"
          >
            Pourquoi BALAFON ?
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.05)}
            className="mt-4 max-w-5xl text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl"
          >
            Gagnez du temps, économisez de l&apos;argent et pilotez votre IT avec plus de visibilité.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mt-5 max-w-3xl text-pretty text-lg leading-8 text-zinc-600"
          >
            BALAFON rassemble les signaux critiques de votre système d&apos;information pour aider vos équipes à observer, comprendre et agir plus vite.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.12)} className="mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2">
            {features.map((feature, idx) => (
              <motion.article
                key={feature.title}
                variants={fadeIn("up", idx * 0.04)}
                className="relative rounded-[28px] border border-[rgb(15,110,110)]/12 bg-white/86 p-8 pt-12 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-sm"
              >
                <div className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-[22px] border border-[rgb(15,110,110)]/18 bg-[linear-gradient(135deg,_#eff9f8,_#ffffff)] text-[rgb(15,110,110)] shadow-[0_16px_35px_rgba(15,110,110,0.14)]">
                  <div className="absolute inset-2 rounded-[18px] bg-[rgb(196,188,150)]/16" />
                  <div className="relative">
                    <FeatureIcon name={feature.icon} />
                  </div>
                </div>

                <div className="absolute right-7 top-7 h-2.5 w-2.5 rounded-full bg-[rgb(192,122,100)]" />
                <h3 className="text-2xl font-semibold tracking-tight text-zinc-950">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
