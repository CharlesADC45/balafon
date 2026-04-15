"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

type ProductCard = {
  title: string;
  text: string;
  signature: string;
  product: string;
  accent: string;
  imageSrc: string;
  imageAlt: string;
};

const cards: ProductCard[] = [
  {
    title: "Découverte",
    text: "Cartographiez vos actifs, dépendances, équipements et services critiques avant d'engager vos actions IT.",
    signature: "Équipe inventaire IT",
    product: "SERVICE Découverte",
    accent: "from-[rgb(8,91,91)] to-[rgb(7,62,70)]",
    imageSrc: "/images/decouvert-img.jpg",
    imageAlt: "Découverte et cartographie des actifs IT",
  },
  {
    title: "Monitoring",
    text: "Surveillez serveurs, réseaux, applications et postes utilisateurs depuis une vue unifiée BALAFON.",
    signature: "Centre d'observabilité",
    product: "SERVICE Monitoring",
    accent: "from-[rgb(11,103,116)] to-[rgb(6,69,88)]",
    imageSrc: "/images/monitoring.jpg",
    imageAlt: "Supervision et monitoring IT en temps réel",
  },
  {
    title: "Contrôle",
    text: "Pilotez les SLA, la conformité et la qualité de service avec des indicateurs clairs et actionnables.",
    signature: "Équipe gouvernance IT",
    product: "SERVICE Contrôle",
    accent: "from-[rgb(18,86,119)] to-[rgb(9,57,85)]",
    imageSrc: "/images/contol-img.jpg",
    imageAlt: "Contrôle et gouvernance IT",
  },
  {
    title: "Sécurité",
    text: "Renforcez la protection des environnements critiques avec une supervision continue et des procédures de reprise.",
    signature: "Équipe cybersécurité",
    product: "SERVICE Sécurité",
    accent: "from-[rgb(112,84,66)] to-[rgb(78,57,46)]",
    imageSrc: "/images/security-img.jpg",
    imageAlt: "Sécurité et protection des environnements IT",
  },
  {
    title: "Notification & Reporting",
    text: "Recevez des alertes priorisées, diffusez l'information aux bonnes équipes et transformez vos données en tableaux de bord et rapports de pilotage.",
    signature: "Centre de supervision",
    product: "SERVICE Notification & Reporting",
    accent: "from-[rgb(44,100,128)] to-[rgb(12,62,91)]",
    imageSrc: "/images/reporting-img.jpg",
    imageAlt: "Notifications, alertes et tableaux de bord",
  },
];

export default function Products() {
  const shouldReduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const step = useMemo(() => 320, []);

  const goTo = (index: number) => {
    const node = trackRef.current;
    if (!node) return;
    const clamped = Math.max(0, Math.min(cards.length - 1, index));
    node.scrollTo({ left: clamped * step, behavior: "smooth" });
    setActive(clamped);
  };

  const move = (delta: number) => goTo(active + delta);

  const onTrackScroll = () => {
    const node = trackRef.current;
    if (!node) return;
    const idx = Math.round(node.scrollLeft / step);
    setActive(Math.max(0, Math.min(cards.length - 1, idx)));
  };

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-16 sm:py-24"
    >
      <motion.div
        aria-hidden
        className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-brand/8 blur-3xl"
        animate={shouldReduceMotion ? { opacity: 0.08 } : { x: [0, 30, 0], y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-7rem] top-48 h-96 w-96 rounded-full bg-accent/8 blur-3xl"
        animate={shouldReduceMotion ? { opacity: 0.08 } : { x: [0, -28, 0], y: [0, -22, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeIn("up", 0)}
            className="text-lg font-semibold tracking-wide text-brand sm:text-xl"
          >
            Services
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.05)}
            className="mt-3 max-w-5xl text-balance text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl md:text-5xl"
          >
            Des solutions unifiées pour découvrir, observer, contrôler et sécuriser votre SI.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mt-4 max-w-4xl text-pretty text-lg leading-8 text-zinc-600"
          >
            Faites défiler les cartes de gauche à droite pour explorer les 5 services majeurs de la plateforme BALAFON.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.14)} className="mt-11">
            <div
              ref={trackRef}
              onScroll={onTrackScroll}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((card) => (
                <motion.article
                  key={card.product}
                  whileHover={{ scale: 1.02, transition: { duration: 0.25, ease: "easeOut" } }}
                  className={`relative flex min-h-[400px] min-w-[80%] snap-start flex-col overflow-hidden rounded-3xl border border-zinc-200/60 bg-gradient-to-b text-white shadow-[0_12px_40px_rgba(15,23,42,0.10)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.16)] sm:min-w-[300px] ${card.accent}`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/12 blur-2xl" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/18 to-transparent" />
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={card.imageSrc}
                      alt={card.imageAlt}
                      fill
                      sizes="(max-width: 640px) 86vw, 360px"
                      className="object-cover object-center grayscale-[35%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/22 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(110deg,_rgba(2,8,29,0.2),_transparent_42%,_rgba(192,122,100,0.22))]" />
                  </div>

                  <div className="relative flex flex-1 flex-col p-5">
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/90">{card.text}</p>

                    <div className="relative mt-auto pt-5">
                      <p className="text-sm font-semibold text-white/95">{card.signature}</p>
                      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/48 bg-white/10 px-3 py-1.5 text-sm font-semibold backdrop-blur-sm">
                        {card.product}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div
              className="mt-7 flex items-center justify-center gap-4"
              role="group"
              aria-label="Navigation du carrousel"
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") move(-1);
                if (e.key === "ArrowRight") move(1);
              }}
            >
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Carte précédente"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:bg-brand/8 hover:border-brand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <div className="flex items-center gap-3">
                {cards.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goTo(idx)}
                    aria-label={`Aller à la carte ${idx + 1}`}
                    className={[
                      "h-3 w-3 rounded-full transition-colors",
                      "before:absolute before:inset-[-8px] before:content-['']",
                      "relative",
                      idx === active ? "bg-brand" : "bg-zinc-300 hover:bg-brand/50",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Carte suivante"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-600 transition-colors hover:bg-brand/8 hover:border-brand/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.18)}
            className="relative mt-20 overflow-hidden rounded-[32px] border border-brand/12 bg-[linear-gradient(160deg,_#0a4f5a_0%,_#0f6e6e_55%,_#0c6b82_100%)] px-6 py-10 shadow-[0_30px_80px_rgba(15,110,110,0.18)] sm:px-10 lg:grid lg:min-h-[430px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-14"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_48%,_rgba(15,110,110,0.42),_rgba(192,122,100,0.26)_22%,_transparent_42%)]" />
            <div className="absolute right-14 top-12 h-28 w-px bg-[rgb(192,122,100)]/28" />
            <div className="absolute right-6 top-1/2 hidden h-px w-[42%] bg-[rgb(15,110,110)]/22 lg:block" />

            <div className="relative z-10 max-w-2xl">
              <p className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-white/72">
                Reconnaissance marché
              </p>
              <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                <span className="bg-gradient-to-r from-[#c4bc96] via-[#c07a64] to-[#0f6e6e] bg-clip-text text-transparent">
                  BALAFON donne plus de visibilité aux équipes IT.
                </span>
              </h3>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/78">
                Une approche locale, modulaire et orientée résultats pour mieux anticiper les incidents, piloter la performance et accélérer les décisions.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-[#020824]"
              >
                Découvrir la plateforme
              </a>
            </div>

            <motion.div
              className="relative z-10 mt-12 flex min-h-[260px] items-center justify-center lg:mt-0"
              animate={shouldReduceMotion ? { opacity: 1 } : { y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,_#0f6e6e_0%,_#c07a64_46%,_transparent_70%)] blur-sm" />
              <div className="relative flex h-44 w-44 items-center justify-center rounded-[42%] bg-[linear-gradient(135deg,_#c07a64,_#0f6e6e)] shadow-[0_0_90px_rgba(15,110,110,0.35)]">
                <Image
                  src="/images/balafon-mark.svg"
                  alt=""
                  width={86}
                  height={86}
                  className="h-20 w-20 object-contain opacity-90"
                />
              </div>
              <div className="absolute right-[18%] top-[20%] rounded-full bg-[linear-gradient(135deg,_#c07a64,_#0f6e6e)] px-5 py-3 text-xl font-bold text-white shadow-lg">
                &gt;
              </div>
              <div className="absolute bottom-[22%] left-[20%] h-5 w-5 rounded-full bg-white/20" />
              <div className="absolute right-[24%] bottom-[24%] h-7 w-7 rounded-full bg-white/16" />
              <div className="absolute left-[52%] top-[18%] h-6 w-6 rounded-full bg-white/14" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
