"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PdfInsights from "../../components/PdfInsights";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Notre promesse",
    description:
      "Offrir une supervision proactive, une détection avancée et des alertes instantanées pour sécuriser l'activité de nos clients.",
    iconSrc: "/images/services/security.svg",
  },
  {
    title: "Notre approche",
    description:
      "Une vision 360 des infrastructures IT, des indicateurs opérationnels et une plateforme conçue pour évoluer avec vos besoins.",
    iconSrc: "/images/services/monitoring.svg",
  },
  {
    title: "Notre objectif",
    description:
      "Réduire les interruptions, améliorer la disponibilité des services et renforcer la continuité opérationnelle.",
    iconSrc: "/images/services/control.svg",
  },
];

const stats = [
  { value: "2016", label: "Année de création" },
  { value: "5", label: "Services intégrés" },
  { value: "24/7", label: "Supervision continue" },
  { value: "100%", label: "Made in Africa" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <Navbar cta={{ label: "Demander une démo", href: "/demo", variant: "primary" }} />
      <main id="main-content">

        {/* Hero About - split layout */}
        <section className="py-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Texte */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-lg font-semibold tracking-wide text-brand"
              >
                À propos
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="mt-3 max-w-xl text-balance text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl md:text-4xl"
              >
                Une plateforme d&apos;observabilité signée{" "}
                <a href="https://www.africadigitalconnect.net" target="_blank" rel="noreferrer noopener" className="text-brand underline underline-offset-4 decoration-brand/40 hover:decoration-brand">
                  Africa Digital Connect
                </a>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="mt-4 max-w-lg text-pretty text-base leading-7 text-zinc-600"
              >
                Depuis 2016, Africa Digital Connect accompagne les entreprises, les organismes et les États dans leur transformation digitale. BALAFON s&apos;inscrit dans cette démarche avec une plateforme intégrée, modulaire et orientée performance.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="mt-6"
              >
                <Link
                  href="/demo"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-brand px-8 text-base font-semibold text-white shadow-sm transition hover:bg-brand-hover"
                >
                  Demander une démo
                </Link>
              </motion.div>
            </div>

            {/* Image - taille definie par le conteneur, image fit dedans */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <Image
                src="/images/observabilite-img.jpg"
                alt="Plateforme d'observabilité BALAFON"
                width={500}
                height={340}
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="h-auto max-h-[340px] w-full rounded-3xl object-cover"
                priority
              />
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-y border-zinc-200/70 bg-zinc-50 py-10">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1, ease: "easeOut" }}
                className="text-center"
              >
                <p className="text-3xl font-extrabold tracking-tight text-brand sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pillars avec icones SVG */}
        <section className="px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Ce qui nous différencie
            </motion.h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {pillars.map((pillar, idx) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border border-zinc-200 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)] transition-shadow duration-300 hover:border-brand/20 hover:shadow-[0_20px_60px_rgba(15,110,110,0.1)]"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -6, 6, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10"
                  >
                    <Image
                      src={pillar.iconSrc}
                      alt=""
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                  </motion.div>
                  <h3 className="mt-5 text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {pillar.description}
                  </p>
                  {/* Animated bottom line */}
                  <div className="mt-5 h-[2px] w-0 bg-gradient-to-r from-brand to-accent transition-all duration-500 group-hover:w-full" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Bandeau Africa Digital Connect */}
        <section className="overflow-hidden">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden rounded-3xl bg-brand px-6 py-10 sm:px-10 sm:py-12"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgb(255,255,255,0.12),_transparent_50%)]" />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl"
                animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-white/60">
                    Africa Digital Connect
                  </p>
                  <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    Accompagner la transformation digitale en Afrique depuis Abidjan.
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/75">
                    Ingénierie, infrastructure, sécurité, observabilité — nous concevons des solutions adaptées au marché africain.
                  </p>
                </div>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href="/contact"
                    className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-7 text-base font-semibold text-brand shadow-sm transition hover:bg-zinc-50"
                  >
                    Nous contacter
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="py-6" />

        <PdfInsights />
      </main>
      <Footer />
    </div>
  );
}
