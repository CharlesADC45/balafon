"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

type Partner = {
  name: string;
  logo: string;
  fallback?: string;
};

const partners: Partner[] = [
  {
    name: "Orange CI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg",
  },
  {
    name: "Port Autonome d Abidjan",
    logo: "https://www.portabidjan.ci/sites/default/files//logo_0.png",
  },
  {
    name: "FDFP",
    logo: "https://fdfp.ci/wp-content/uploads/2019/09/logo-fdfp02.png",
    fallback: "/images/trusted/trust_fdfp.png",
  },
  {
    name: "BNETD",
    logo: "https://www.bnetd.ci/logo/logo_bnetd.jpg",
  },
  {
    name: "Société Générale Côte d'Ivoire",
    logo: "https://societegenerale.ci/uploads/tx_bilanding/logo_11.png",
    fallback: "/images/trusted/trust_sgci.png",
  },
  {
    name: "CIPREL",
    logo: "https://ciprel.ci/wp-content/uploads/2023/11/logo.png",
    fallback: "/images/trusted/logos_block.png",
  },
];

export default function TrustedBy() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <motion.div
        variants={staggerChildren(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 sm:p-8"
      >
        <motion.p
          variants={fadeIn("up", 0)}
          className="text-base font-semibold tracking-wide text-[rgb(15,110,110)] sm:text-lg"
        >
          Ils nous ont fait confiance
        </motion.p>
        <motion.h2
          variants={fadeIn("up", 0.04)}
          className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-3xl"
        >
          Des références solides en Côte d’Ivoire
        </motion.h2>

        <motion.div
          variants={fadeIn("up", 0.08)}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {partners.map((p) => (
            <article
              key={p.name}
              className="flex min-h-24 items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <img
                src={p.logo}
                alt={`Logo ${p.name}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="h-11 w-auto max-w-[150px] object-contain"
                onError={(e) => {
                  if (p.fallback && e.currentTarget.src !== p.fallback) {
                    e.currentTarget.src = p.fallback;
                    return;
                  }
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{p.name}</span>
            </article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
