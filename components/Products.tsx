"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
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
    imageSrc: "https://images.pexels.com/photos/4623309/pexels-photo-4623309.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Équipe IT collaborant devant un ordinateur",
  },
  {
    title: "Monitoring",
    text: "Surveillez serveurs, réseaux, applications et postes utilisateurs depuis une vue unifiée BALAFON.",
    signature: "Centre d'observabilité",
    product: "SERVICE Monitoring",
    accent: "from-[rgb(11,103,116)] to-[rgb(6,69,88)]",
    imageSrc: "https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Équipe de supervision IT devant plusieurs écrans",
  },
  {
    title: "Contrôle",
    text: "Pilotez les SLA, la conformité et la qualité de service avec des indicateurs clairs et actionnables.",
    signature: "Équipe gouvernance IT",
    product: "SERVICE Contrôle",
    accent: "from-[rgb(18,86,119)] to-[rgb(9,57,85)]",
    imageSrc: "https://images.pexels.com/photos/3183145/pexels-photo-3183145.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Professionnels analysant des indicateurs sur ordinateur",
  },
  {
    title: "Sécurité",
    text: "Renforcez la protection des environnements critiques avec une supervision continue et des procédures de reprise.",
    signature: "Équipe cybersécurité",
    product: "SERVICE Sécurité",
    accent: "from-[rgb(112,84,66)] to-[rgb(78,57,46)]",
    imageSrc: "https://images.pexels.com/photos/5380655/pexels-photo-5380655.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Experts cybersécurité travaillant dans un centre de contrôle",
  },
  {
    title: "Alertes",
    text: "Recevez des alertes instantanées, priorisées et exploitables pour agir avant l'impact métier.",
    signature: "Centre de supervision",
    product: "SERVICE Alertes",
    accent: "from-[rgb(12,112,105)] to-[rgb(7,73,78)]",
    imageSrc: "https://images.pexels.com/photos/5380594/pexels-photo-5380594.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Analyste surveillant des écrans d'alerte",
  },
  {
    title: "Notifications",
    text: "Diffusez la bonne information aux bonnes équipes, avec un suivi plus fluide des incidents et des escalades.",
    signature: "Équipe opérations",
    product: "SERVICE Notifications",
    accent: "from-[rgb(44,100,128)] to-[rgb(12,62,91)]",
    imageSrc: "https://images.pexels.com/photos/8867232/pexels-photo-8867232.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Équipe support et notifications en centre d'assistance",
  },
  {
    title: "Reporting",
    text: "Transformez vos données d'exploitation en tableaux de bord, rapports de pilotage et preuves de performance.",
    signature: "Équipe reporting",
    product: "SERVICE Reporting",
    accent: "from-[rgb(123,76,61)] to-[rgb(84,55,46)]",
    imageSrc: "https://images.pexels.com/photos/6476261/pexels-photo-6476261.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Équipe analysant des rapports et données métier",
  },
];

export default function Products() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const step = useMemo(() => 386, []);

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
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#073f48_0%,_#041d28_48%,_#02081d_100%)] py-16 text-white sm:py-24"
    >
      <motion.div
        aria-hidden
        className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-[rgb(15,110,110)]/25 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute right-[-7rem] top-48 h-96 w-96 rounded-full bg-[rgb(192,122,100)]/20 blur-3xl"
        animate={{ x: [0, -28, 0], y: [0, -22, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgb(255_255_255_/_0.16)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.16)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={staggerChildren(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            variants={fadeIn("up", 0)}
            className="text-lg font-semibold tracking-wide text-[rgb(192,122,100)] sm:text-xl"
          >
            Services
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.05)}
            className="mt-3 max-w-5xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Des solutions unifiées pour découvrir, observer, contrôler et sécuriser votre SI.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mt-4 max-w-4xl text-pretty text-lg leading-8 text-white/82"
          >
            Faites défiler les cartes de gauche à droite pour explorer les 7 axes majeurs de la plateforme BALAFON.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.14)} className="mt-11">
            <div
              ref={trackRef}
              onScroll={onTrackScroll}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((card) => (
                <article
                  key={card.product}
                  className={`relative flex min-h-[520px] min-w-[86%] snap-start flex-col overflow-hidden rounded-[28px] border border-white/25 bg-gradient-to-b text-white shadow-[0_22px_70px_rgba(0,0,0,0.24)] sm:min-w-[360px] ${card.accent}`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/12 blur-2xl" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/18 to-transparent" />
                  <div
                    role="img"
                    aria-label={card.imageAlt}
                    className="relative h-44 overflow-hidden bg-cover bg-center grayscale-[35%]"
                    style={{ backgroundImage: `url(${card.imageSrc})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/22 to-transparent" />
                    <div className="absolute inset-0 bg-[linear-gradient(110deg,_rgba(2,8,29,0.2),_transparent_42%,_rgba(192,122,100,0.22))]" />
                  </div>

                  <div className="relative flex flex-1 flex-col p-7">
                    <h3 className="text-4xl font-semibold leading-[1.08] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-5 text-lg leading-8 text-white/90">{card.text}</p>

                    <div className="relative mt-auto pt-7">
                      <p className="text-base font-semibold text-white/95">{card.signature}</p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/48 bg-white/10 px-4 py-2 text-base font-semibold backdrop-blur-sm">
                        {card.product}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Carte précédente"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/55 text-xl text-white"
              >
                {"<"}
              </button>

              <div className="flex items-center gap-3">
                {cards.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => goTo(idx)}
                    aria-label={`Aller à la carte ${idx + 1}`}
                    className={[
                      "h-4 w-4 rounded-full transition-colors",
                      idx === active ? "bg-white" : "bg-white/45",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Carte suivante"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/55 text-xl text-white"
              >
                {">"}
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.18)}
            className="relative mt-20 overflow-hidden rounded-[36px] border border-white/12 bg-[#031b24] px-6 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.28)] sm:px-10 lg:grid lg:min-h-[430px] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-14"
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
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#020824]"
              >
                Découvrir la plateforme
              </a>
            </div>

            <motion.div
              className="relative z-10 mt-12 flex min-h-[260px] items-center justify-center lg:mt-0"
              animate={{ y: [0, -10, 0] }}
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
