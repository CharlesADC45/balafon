"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const SESSION_CLOSE_KEY = "balafon-home-popup-closed";
const SOLARWINDS_DASHBOARD_IMAGE =
  "https://p1.aprimocdn.net/solarwinds/27d7dbd9-6673-45f6-bda4-b39900e8d675/Observability_Product_Screenshot_-_Network_Dashboard_Original%20file.png?auto=webp&disable=upscale&width=1024";
const SOLARWINDS_USER_IMAGE =
  "https://www.solarwinds.com/wp-content/uploads/2025/02/2501_Blog_LookInsideCloud_2400x1380-1024x589.png";

export default function HomePromoModal() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const closed = window.sessionStorage.getItem(SESSION_CLOSE_KEY);
    if (closed) return;

    const timer = window.setTimeout(() => setOpen(true), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open || typeof window === "undefined") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const closeForSession = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(SESSION_CLOSE_KEY, "true");
    }
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(SESSION_CLOSE_KEY, "true");
    }

    setOpen(false);
    router.push("/");
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="balafon-home-promo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(8,24,29,0.58)] px-4 py-6 backdrop-blur-sm"
        >
          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95, y: 22 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="relative w-full max-w-4xl overflow-hidden rounded-[28px] border border-[rgb(15,110,110)]/10 bg-white shadow-[0_28px_90px_rgba(18,42,46,0.24)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="balafon-promo-title"
          >
            <button
              type="button"
              onClick={closeForSession}
              aria-label="Fermer la fenetre"
              className="absolute right-3 top-3 z-20 inline-flex h-13 w-13 items-center justify-center rounded-full bg-black/20 text-2xl text-white transition hover:bg-black/30"
            >
              X
            </button>

            <div className="grid lg:grid-cols-[0.98fr_1.02fr]">
              <div className="relative overflow-hidden bg-[#C4BC96] px-6 py-8 text-zinc-950 sm:px-9 sm:py-10">
                <div className="pointer-events-none absolute left-[-10%] top-[-10%] h-40 w-40 rounded-full bg-white/18 blur-3xl" />
                <div className="pointer-events-none absolute right-[-8%] bottom-[-12%] h-44 w-44 rounded-full bg-[rgb(15,110,110)]/14 blur-3xl" />
                <div className="pointer-events-none absolute left-6 top-6 h-20 w-20 rounded-full border border-white/20" />
                <div className="pointer-events-none absolute left-18 top-14 h-14 w-14 rounded-full border border-white/14" />

                <div className="relative z-10 p-0.9">
                  <h1 className="flex item-center place-items-center sm:text-lg font-bold uppercase tracking-[0.3em] text-zinc-900/55">
                    D&eacute;couvrez 
                  <Image
                    src="/images/balafon-logo2.svg"
                    alt="BALAFON"
                    width={150}
                    height={40}
                    className="h-7 w-auto sm:h-8 ml-1"
                  />
                  </h1>

                  <h2
                    id="balafon-promo-title"
                    className="mt-5 max-w-lg text-[3rem] font-semibold leading-[0.94] tracking-tight sm:text-[3.3rem]"
                  >
                    <span className="block">R&eacute;duisez vos angles morts IT</span>
                    <span className="block"></span>
                  </h2>

                  <form onSubmit={handleSubmit} className="mt-13 max-w-xl">
                    <div className="flex flex-col gap-4 sm:flex-col ">
                      <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Votre e-mail professionnel"
                        className="p-2 flex-1 rounded-lg border-none bg-white px-4 text-base text-zinc-900 outline-none placeholder:text-zinc-400"
                      />
                      <button
                        type="submit"
                        className="inline-flex h-12 rounded-lg items-center justify-center bg-[rgb(45,110,134)] px-6 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[rgb(150,109,50)]"
                      >
                        D&eacute;mander une d&eacute;mo
                      </button>
                    </div>
                  </form>

                  

                  <p className="mt-55 mb-2 text-center text-sm font-bold uppercase tracking-[0.24em] text-zinc-900/82 sm:text-[0.8rem]">
                    <span className="block">Alerter, observer et diagnostiser</span>
                  </p>

                  <div className="text-sm text-center text-zinc-900/82 sm:text-[0.6rem]">
                    <Link
                      href="/portal"
                      onClick={closeForSession}
                      className="font-semibold tracking-[0.12em] underline underline-offset-4"
                    >
                      J'utilise deja BALAFON
                    </Link>
                  </div>
                </div>
              </div>

              <div className="relative flex min-h-[300px] items-center justify-end overflow-hidden bg-[linear-gradient(180deg,_rgba(246,248,249,1),_rgba(229,237,239,1))] px-3 py-6 sm:px-4 sm:py-7">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.72),_transparent_42%)]" />
                <div className="pointer-events-none absolute right-[-18%] top-[-10%] h-72 w-72 rounded-full bg-[rgb(45,110,134)]/10 blur-3xl" />

                <div className="absolute bottom-0 right-[-1.25rem] w-[calc(100%+2rem)] max-w-[34rem] sm:max-w-[37rem]">
                  <motion.div
                    className="relative overflow-hidden rounded-[24px] border border-white/70 shadow-[0_24px_60px_rgba(26,54,65,0.18)]"
                    animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={SOLARWINDS_DASHBOARD_IMAGE}
                      alt="Dashboard SolarWinds d'observabilite reseau"
                      width={1024}
                      height={625}
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="block h-[39rem] w-full object-cover object-left-top sm:h-[42rem]"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 right-[-0.4rem] w-[74%] sm:w-[76%]"
                    animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/images/Girlcomputer.png"
                      alt="Professionnel utilisant son ordinateur pour superviser l'infrastructure"
                      width={1024}
                      height={589}
                      sizes="(max-width: 1024px) 75vw, 420px"
                      className="block h-[30rem] w-full object-contain object-bottom sm:h-[34rem]"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
