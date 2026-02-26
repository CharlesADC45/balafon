import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-wide text-[rgb(15,110,110)]">À propos</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          BALAFON, par Africa Digital Connect
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Depuis 2016, Africa Digital Connect accompagne les entreprises, les organismes et les
          États dans leur transformation digitale. BALAFON s’inscrit dans cette démarche avec une
          plateforme d’observabilité et de gestion IT, intégrée et hybride.
        </p>

        <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-lg font-semibold">Notre promesse</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            <li>Supervision proactive et alertes instantanées</li>
            <li>Centralisation des indicateurs (disponibilité, SLA, performances)</li>
            <li>Approche simple, moderne et orientée performance</li>
          </ul>
        </div>

        <div className="mt-10">
          <Link
            href="/#demo"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[rgb(15,110,110)] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[rgb(12,92,92)]"
          >
            Demander une démo
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

