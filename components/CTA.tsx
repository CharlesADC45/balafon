"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scaleIn } from "../animations/fadeIn";
import Link from "next/link";

export default function CTA() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="demo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <motion.div
        variants={scaleIn(0, 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        className="relative overflow-hidden rounded-3xl bg-brand px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
      >
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,_rgb(255,255,255,0.18),_transparent_45%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_82%,_rgb(192,122,100,0.28),_transparent_40%)]" />
          <motion.svg
            aria-hidden
            viewBox="0 0 760 460"
            className="absolute -right-20 -top-6 hidden h-[130%] w-[68%] md:block"
            animate={shouldReduceMotion ? { opacity: 0.8 } : { x: [0, 8, 0], y: [0, -6, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            <g fill="none" stroke="rgb(255 255 255 / 0.24)" strokeWidth="1.6">
              <path d="M110 30 290 112 110 194 -70 112Z" />
              <path d="M290 112 470 30 650 112 470 194Z" />
              <path d="M470 194 650 112 830 194 650 276Z" />
              <path d="M110 194 290 276 110 358 -70 276Z" />
              <path d="M290 276 470 194 650 276 470 358Z" />
              <path d="M470 358 650 276 830 358 650 440Z" />
              <path d="M110 30V194M290 112V276M470 30V194M650 112V276M470 194V358M650 276V440" />
            </g>
          </motion.svg>
        </div>

        <div className="relative z-10 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl"
          >
            Prêt à simplifier votre travail avec BALAFON ?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 max-w-xl text-base leading-7 text-white/78 sm:text-lg"
          >
            BALAFON centralise la supervision, automatise les actions et donne une vision claire à
            votre équipe en temps réel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Pulse glow behind button */}
              <motion.div
                className="absolute -inset-1 rounded-xl bg-white/30 blur-md"
                animate={shouldReduceMotion ? { opacity: 0.3 } : { opacity: [0.2, 0.5, 0.2], scale: [0.98, 1.04, 0.98] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <Link
                href="/demo"
                className="relative inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-base font-semibold text-brand shadow-[0_10px_24px_rgba(4,33,46,0.28)] transition-shadow hover:shadow-[0_16px_36px_rgba(4,33,46,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
              >
                Demander une démo
              </Link>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-5 text-sm text-white/65"
          >
            Réponse moyenne en moins de 24h.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
