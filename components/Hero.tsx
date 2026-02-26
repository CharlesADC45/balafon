"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  });

  const panelY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [22, -22],
  );
  const panelRotate = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [1.2, -1.2],
  );

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          className="absolute -left-40 -top-32 h-80 w-80 rounded-full bg-[rgb(15,110,110)]/10 blur-3xl"
          animate={shouldReduceMotion ? { opacity: 0.5 } : { x: [-10, 10, -10], y: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-40 h-80 w-80 rounded-full bg-[rgb(192,122,100)]/12 blur-3xl"
          animate={shouldReduceMotion ? { opacity: 0.55 } : { x: [8, -8, 8], y: [0, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-8 h-56 bg-[radial-gradient(circle_at_top,_rgb(15,110,110,0.14),_transparent_70%)]"
          animate={shouldReduceMotion ? { opacity: 0.35 } : { opacity: [0.2, 0.48, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          animate="show"
          className="flex flex-col items-start"
        >
          <motion.p
            variants={fadeIn("up", 0)}
            className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300"
          >
            Solution digitale professionnelle - Observabilite et gestion IT
          </motion.p>

          <motion.h1
            variants={fadeIn("up", 0.05)}
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl"
          >
            <span className="inline-flex flex-wrap items-baseline gap-x-2">
              <span className="relative inline-flex">
                <span className="text-balance">
                  Revolutionnez votre gestion informatique avec BALAFON
                </span>
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 bg-white dark:bg-zinc-950"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{
                    duration: 2.8,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                />
              </span>
              <motion.span
                aria-hidden
                className="ml-1 h-6 w-[1px] self-stretch bg-[rgb(15,110,110)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  repeatDelay: 0.2,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mt-5 max-w-xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300"
          >
            Detection avancee, surveillance en temps reel, controle personnalise et alertes
            instantanees - sur une plateforme simple, moderne et performante.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.15)}
            className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#demo"
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[rgb(15,110,110)] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[rgb(12,92,92)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(15,110,110)] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-zinc-950"
            >
              Demander une demo
            </motion.a>
            <motion.a
              href="#produits"
              whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.01 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#a67b6b] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-[#a67b6b] dark:hover:text-white dark:focus-visible:ring-zinc-700 dark:focus-visible:ring-offset-zinc-950"
            >
              Voir les produits
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.18)}
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-300"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(15,110,110)]" />
              Clair en moins de 5 secondes
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(192,122,100)]" />
              Optimise performance et SEO
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
              Pret pour evoluer vers un SaaS
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          ref={visualRef}
          initial="hidden"
          animate="show"
          variants={fadeIn("left", 0.08)}
          className="relative"
          style={{ y: panelY, rotate: panelRotate }}
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[rgb(15,110,110)]/10 to-[rgb(192,122,100)]/10 blur-2xl" />

          <motion.div
            aria-hidden
            className="absolute -left-4 top-5 hidden rounded-2xl border border-zinc-200 bg-white/85 px-3 py-2 shadow-sm backdrop-blur sm:block dark:border-zinc-700 dark:bg-zinc-950/80"
            animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, -7, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
              Uptime live
            </span>
            <span className="mt-0.5 block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              99.98%
            </span>
          </motion.div>

          <motion.div
            aria-hidden
            className="absolute -bottom-4 right-2 hidden rounded-2xl border border-zinc-200 bg-white/85 px-3 py-2 shadow-sm backdrop-blur sm:block dark:border-zinc-700 dark:bg-zinc-950/80"
            animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, 6, 0] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-zinc-400">
              Alerts
            </span>
            <span className="mt-0.5 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(15,110,110)]" />
              Stable
            </span>
          </motion.div>

          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent dark:via-white/10"
              animate={shouldReduceMotion ? { opacity: 0 } : { x: ["-35%", "265%"], opacity: [0, 0.9, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
            />
            <Image
              src="/images/hero-dashboard-safe.svg"
              alt="Apercu du tableau de bord BALAFON"
              width={1200}
              height={800}
              priority
              unoptimized
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
