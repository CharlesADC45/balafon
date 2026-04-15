"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

const services = ["Découverte", "Monitoring", "Contrôle", "Sécurité", "Notification & Reporting"];

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
        <motion.p
          variants={fadeIn("up", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-lg font-semibold tracking-wide text-brand sm:text-xl"
        >
          Informations clés BALAFON
        </motion.p>
        <motion.h2
          variants={fadeIn("up", 0.04)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl"
        >
          Synthèse des contenus du document BALAFON
        </motion.h2>

        {/* Services + Modules */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              Nos services clés
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {services.map((s, idx) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.08, ease: "easeOut" }}
                  className="rounded-full bg-brand/10 px-3 py-1 text-sm font-semibold text-brand"
                >
                  {s}
                </motion.span>
              ))}
            </div>
            <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              <li>Gagnez du temps grâce à l&apos;automatisation et la supervision continue.</li>
              <li>Économisez les coûts cachés liés aux pannes et arrêts de service.</li>
              <li>Optimisez l&apos;avenir avec une plateforme évolutive et modulaire.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
              Plateforme d&apos;observabilité
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {modules.map((m, idx) => (
                <motion.span
                  key={m}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.06, ease: "easeOut" }}
                  className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-semibold text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-200"
                >
                  {m}
                </motion.span>
              ))}
            </div>
            <p className="mt-5 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              BALAFON couvre les environnements IT et utilisateurs avec une vue 360, des alertes
              intelligentes et une mesure continue de la performance.
            </p>
          </motion.div>
        </div>

        {/* Domaines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8"
        >
          <div className="rounded-t-2xl bg-[rgb(27,87,153)] px-5 py-3">
            <h3 className="text-base font-semibold uppercase tracking-wide text-white sm:text-lg">
              Intégration de solutions - Domaines de compétences
            </h3>
          </div>
          <div className="rounded-b-2xl border border-t-0 border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {domaines.map((d, idx) => (
                <motion.article
                  key={d.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08, ease: "easeOut" }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-zinc-200 p-4 transition-shadow duration-300 hover:shadow-md dark:border-zinc-800"
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
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Impacts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        >
          <h3 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
            Résultats attendus
          </h3>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
            {impacts.map((impact, idx) => (
              <motion.p
                key={impact}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 + idx * 0.06, ease: "easeOut" }}
                className="flex items-start gap-2"
              >
                <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-brand" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {impact}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
