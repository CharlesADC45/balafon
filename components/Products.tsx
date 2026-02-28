"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../animations/fadeIn";

type ProductCard = {
  title: string;
  text: string;
  signature: string;
  product: string;
};

const cards: ProductCard[] = [
  {
    title: "Monitoring 360 en temps réel",
    text: "Surveillez serveurs, réseaux, applications et postes utilisateurs depuis une vue unifiée BALAFON.",
    signature: "Équipe observabilité",
    product: "BALAFON Monitoring",
  },
  {
    title: "Détection avancée et alertes",
    text: "Recevez des alertes instantanées et priorisées pour agir avant l'impact métier.",
    signature: "Centre de supervision",
    product: "BALAFON Alertes",
  },
  {
    title: "Contrôle, SLA et conformité",
    text: "Pilotez la qualité de service avec des indicateurs clairs, des rapports et des tableaux de bord adaptables.",
    signature: "Équipe gouvernance IT",
    product: "BALAFON Contrôle",
  },
  {
    title: "Sécurité et résilience",
    text: "Renforcez la protection des environnements critiques avec supervision continue et procédures de reprise.",
    signature: "Équipe cybersécurité",
    product: "BALAFON Sécurité",
  },
];

const gradients = [
  "from-[rgb(10,84,94)] to-[rgb(9,63,72)]",
  "from-[rgb(12,101,101)] to-[rgb(10,72,82)]",
  "from-[rgb(17,98,126)] to-[rgb(10,71,94)]",
  "from-[rgb(112,84,66)] to-[rgb(80,60,49)]",
];

export default function Products() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const step = useMemo(() => 380, []);

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
      id="produits"
      className="relative overflow-hidden bg-[linear-gradient(180deg,_#0b4c55_0%,_#08363f_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
            Produits
          </motion.p>
          <motion.h2
            variants={fadeIn("up", 0.05)}
            className="mt-3 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Des solutions unifiées pour la gestion IT, la sécurité et la continuité.
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.1)}
            className="mt-4 max-w-4xl text-pretty text-lg leading-8 text-white/85"
          >
            Faites défiler les cartes de gauche à droite pour découvrir les axes majeurs de la
            plateforme BALAFON.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.14)} className="mt-10">
            <div
              ref={trackRef}
              onScroll={onTrackScroll}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {cards.map((card, idx) => (
                <article
                  key={card.title}
                  className={`flex min-h-[430px] min-w-[86%] snap-start flex-col rounded-3xl border border-white/30 bg-gradient-to-b p-6 text-white shadow-[0_8px_24px_rgba(0,0,0,0.18)] sm:min-w-[340px] sm:p-7 ${gradients[idx % gradients.length]}`}
                >
                  <h3 className="text-4xl font-semibold leading-[1.1]">{card.title}</h3>
                  <p className="mt-6 text-xl leading-8 text-white/92">{card.text}</p>
                  <p className="mt-8 text-base font-semibold text-white/95">{card.signature}</p>

                  <div className="mt-auto inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/10 px-4 py-2 text-base font-semibold">
                    {card.product}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => move(-1)}
                aria-label="Carte précédente"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/55 text-xl text-white transition-colors hover:bg-white/15"
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
                      idx === active ? "bg-white" : "bg-white/45 hover:bg-white/70",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => move(1)}
                aria-label="Carte suivante"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/55 text-xl text-white transition-colors hover:bg-white/15"
              >
                {">"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
