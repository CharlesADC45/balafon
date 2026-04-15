"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Renseignez votre email et votre mot de passe.");
      return;
    }

    setError("");
    setLoading(true);

    window.setTimeout(() => {
      router.push("/portal");
    }, 450);
  };

  return (
    <main id="main-content" className="min-h-screen bg-[linear-gradient(160deg,_#e9f3f2_0%,_#f6fafb_38%,_#ffffff_100%)] px-4 py-10 sm:px-6 sm:py-14">
      <section className="mx-auto grid w-full max-w-5xl overflow-hidden rounded-[32px] border border-zinc-200 bg-white shadow-[0_28px_90px_rgba(4,37,47,0.16)] lg:grid-cols-[1.05fr_1fr]">
        <div className="relative overflow-hidden bg-[linear-gradient(150deg,_#0b4450_0%,_#0f6e6e_55%,_#0c8191_100%)] px-7 py-8 text-white sm:px-10 sm:py-10">
          <div className="pointer-events-none absolute -left-20 top-14 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-3rem] top-[-2rem] h-48 w-48 rounded-full border border-white/15" />
          <div className="pointer-events-none absolute bottom-[-4rem] left-10 h-44 w-44 rounded-full bg-[rgb(192,122,100)]/35 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255_255_255_/_0.14)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.14)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="relative z-10 flex h-full flex-col">
            <Image
              src="/images/balafon-logo2.svg"
              alt="BALAFON"
              width={170}
              height={58}
              priority
              className="h-11 w-auto"
            />

            <div className="mt-10 max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Espace securise
              </p>
              <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Connectez-vous a votre univers BALAFON.
              </h1>
              <p className="mt-4 text-sm leading-7 text-white/84 sm:text-base">
                Accedez a une vue simple de vos services, de vos priorites et des actions a suivre
                depuis un espace centralise.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm font-medium text-white/90">Ce que vous retrouvez apres connexion</p>
              <ul className="mt-4 space-y-3 text-sm text-white/82">
                <li>Suivi rapide des modules actifs</li>
                <li>Cartes detaillees avec informations complementaires</li>
                <li>Vue claire des priorites du moment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="px-7 py-8 sm:px-10 sm:py-10">
          <div className="mx-auto max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand">
              Connexion
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
              Bienvenue
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-500">
              Saisissez vos identifiants pour acceder a la page interne BALAFON.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-zinc-700">
                  Email professionnel
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="nom@entreprise.com"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-zinc-700">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Votre mot de passe"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              {error ? (
                <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Connexion..." : "Se connecter"}
              </button>
            </form>

            <div className="mt-6 flex items-center justify-between gap-4 text-sm text-zinc-500">
              <Link href="/" className="font-medium text-zinc-700 hover:text-zinc-950">
                Retour au site
              </Link>
              <Link href="/contact" className="font-medium text-brand hover:underline">
                J&apos;ai oublier mes acces
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
