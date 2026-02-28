"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

const services = ["Découverte", "Monitoring", "Contrôle", "Sécurité", "Notifications"];

const modules = [
  "Monitoring",
  "Serveur & Application",
  "Virtualisation",
  "Database",
  "Storage",
  "Network",
  "Cloud",
];

const domaines = [
  {
    title: "INGÉNIERIE",
    color: "bg-[rgb(74,143,84)]",
    points: [
      "Intégration IT et réseau multiservices",
      "Configuration de services et audit de performance",
      "Optimisation des coûts d'exploitation",
      "Accompagnement de la transformation digitale",
    ],
  },
  {
    title: "INFRAS / MATÉRIELS",
    color: "bg-[rgb(20,115,116)]",
    points: [
      "Câblage réseaux et LAN/WIFI",
      "Interconnexion de sites (fibre, VPN, MPLS)",
      "Déploiement serveurs et virtualisation",
      "Téléphonie IP et visioconférence",
    ],
  },
  {
    title: "PRA / PCA",
    color: "bg-[rgb(36,108,188)]",
    points: [
      "Plan de reprise et plan de continuité",
      "Protection renforcée et sauvegarde",
      "Procédures rapides en cas de panne majeure",
      "Limitation des interruptions de service",
    ],
  },
  {
    title: "OBSERVABILITÉ / MSP",
    color: "bg-[rgb(23,88,152)]",
    points: [
      "Détection avancée et surveillance temps réel",
      "Alertes instantanées et tableau de bord 360",
      "Suivi des infrastructures et applications métier",
      "Intégration cloud / on-premise",
    ],
  },
  {
    title: "SÉCURITÉ",
    color: "bg-[rgb(32,63,126)]",
    points: [
      "Sécurité informatique entreprise",
      "Protection des données sensibles",
      "Supervision continue 24/7",
      "Mise à jour réseau et applicative",
    ],
  },
];

const impacts = [
  "Alertes proactives et dashboards personnalisés",
  "Indicateurs SLA, disponibilité et performances",
  "Intégration avec les outils existants",
  "Réduction des interruptions de service",
  "Respect des SLA et maîtrise des risques",
  "Renforcement de la satisfaction client",
];

export default function PdfInsights() {
  return (
    <section className="border-y border-zinc-200/70 bg-zinc-50 py-16 dark:border-zinc-800/70 dark:bg-zinc-950/40 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={staggerChildren(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeIn("up", 0)}
            className="text-lg font-semibold tracking-wide text-[rgb(15,110,110)] sm:text-xl"
          >
            Informations clés BALAFON
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.04)}
            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
          >
            Synthèse des contenus du document BALAFON
          </motion.h2>

          <motion.div variants={fadeIn("up", 0.08)} className="mt-8 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                Nos services clés
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-[rgb(15,110,110)]/10 px-3 py-1 text-sm font-semibold text-[rgb(15,110,110)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                <li>Gagnez du temps grâce à l’automatisation et la supervision continue.</li>
                <li>Économisez les coûts cachés liés aux pannes et arrêts de service.</li>
                <li>Optimisez l’avenir avec une plateforme évolutive et modulaire.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
                Plateforme d’observabilité
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {modules.map((m) => (
                  <span
                    key={m}
                    className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-200"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                BALAFON couvre les environnements IT et utilisateurs avec une vue 360, des alertes
                intelligentes et une mesure continue de la performance.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn("up", 0.1)} className="mt-8">
            <div className="rounded-t-2xl bg-[rgb(27,87,153)] px-5 py-3">
              <h3 className="text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
                Intégration de solutions - Domaines de compétences
              </h3>
            </div>
            <div className="rounded-b-2xl border border-t-0 border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                {domaines.map((d) => (
                  <article
                    key={d.title}
                    className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
                  >
                    <div className="flex justify-center">
                      <div
                        className={`inline-flex min-h-16 min-w-16 items-center justify-center rounded-full px-4 py-3 text-center text-xs font-bold tracking-wide text-white ${d.color}`}
                      >
                        {d.title}
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                      {d.points.map((p) => (
                        <li key={p}>• {p}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.14)}
            className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              Résultats attendus
            </h3>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
              {impacts.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
