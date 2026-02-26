"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

const features = [
  {
    title: "Simplicité",
    description:
      "Une expérience claire, des vues utiles, des actions rapides. Vos équipes restent concentrées sur l’essentiel.",
  },
  {
    title: "Performance",
    description:
      "Réduisez les heures perdues à gérer des incidents grâce à une supervision proactive et des indicateurs fiables.",
  },
  {
    title: "Centralisation",
    description:
      "Unifiez la visibilité sur postes, serveurs, applications, réseau et cloud — sans multiplier les outils.",
  },
  {
    title: "Sécurité",
    description:
      "Contrôles, alertes et bonnes pratiques pour sécuriser vos environnements et mieux anticiper les risques.",
  },
];

export default function Features() {
  return (
    <section
      id="pourquoi"
      className="border-y border-zinc-200/70 bg-gradient-to-b from-zinc-50 via-zinc-50 to-zinc-100 py-16 dark:border-zinc-800/70 dark:bg-[radial-gradient(circle_at_top,_#020617,_#020617_40%,_#020617_60%)] sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
            Pourquoi BALAFON
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.05)}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
          >
            Gagnez du temps, économisez de l’argent, optimisez pour l’avenir
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.10)}
            className="mt-4 max-w-2xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300"
          >
            Une meilleure gestion signifie moins de temps d’arrêt, moins de problèmes et donc moins
            de coûts cachés — avec une approche modulaire et orientée résultats.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.12)}
            className="mt-10 grid gap-4 sm:grid-cols-2"
          >
            {features.map((f, idx) => (
              <motion.article
                key={f.title}
                variants={fadeIn("up", idx * 0.03)}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[rgb(192,122,100)]" />
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-950 dark:text-zinc-50">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

