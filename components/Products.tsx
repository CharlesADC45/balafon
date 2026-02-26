"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

type Product = {
  title: string;
  description: string;
  tag: string;
};

const products: Product[] = [
  {
    title: "Monitoring temps réel",
    tag: "MONITORING",
    description:
      "Surveillez vos infrastructures, utilisateurs et services avec une visibilité à 360°.",
  },
  {
    title: "Détection & alertes",
    tag: "NOTIFICATIONS",
    description:
      "Recevez des alertes instantanées et proactives pour agir avant l’impact sur vos équipes.",
  },
  {
    title: "Contrôle & conformité",
    tag: "CONTRÔLE",
    description:
      "Indicateurs, SLA, tableaux de bord et reporting pour piloter la performance en continu.",
  },
  {
    title: "Sécurité renforcée",
    tag: "SÉCURITÉ",
    description:
      "Centralisez la supervision et sécurisez vos environnements avec une approche moderne.",
  },
];

function Icon({ name }: { name: Product["tag"] }) {
  const common =
    "h-10 w-10 rounded-xl border border-zinc-200 bg-white p-2 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50";
  const stroke = "stroke-current";

  if (name === "MONITORING") {
    return (
      <div className={common} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className={stroke}>
          <path d="M4 18V6" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 18V10" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 18V8" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 18V12" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 18V7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  if (name === "NOTIFICATIONS") {
    return (
      <div className={common} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className={stroke}>
          <path
            d="M12 22a2.5 2.5 0 0 0 2.45-2H9.55A2.5 2.5 0 0 0 12 22Z"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7Z"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  if (name === "CONTRÔLE") {
    return (
      <div className={common} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className={stroke}>
          <path d="M4 19V5" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 19V5" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 16h8" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 12h8" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 8h8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  return (
    <div className={common} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" className={stroke}>
        <path
          d="M12 2 4 5.5V12c0 5 3.4 9.4 8 10 4.6-.6 8-5 8-10V5.5L12 2Z"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M9.5 12l1.8 1.8L15.8 9" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function Products() {
  return (
    <section id="produits" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        variants={staggerChildren(0.10)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.p
          variants={fadeIn("up", 0)}
          className="text-sm font-semibold tracking-wide text-[rgb(15,110,110)]"
        >
          Produits
        </motion.p>
        <motion.h2
          variants={fadeIn("up", 0.05)}
          className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
        >
          Une plateforme complète pour surveiller, automatiser et optimiser
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.10)}
          className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300"
        >
          BALAFON centralise l’observabilité de vos systèmes pour réduire les interruptions,
          améliorer la disponibilité et sécuriser votre environnement.
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.12)}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {products.map((p) => (
            <motion.article
              key={p.tag}
              variants={fadeIn("up", 0)}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/30"
            >
              <div className="flex items-start justify-between gap-4">
                <Icon name={p.tag} />
                <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                  {p.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {p.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

