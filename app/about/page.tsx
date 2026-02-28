import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PdfInsights from "../../components/PdfInsights";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-lg font-semibold tracking-wide text-[rgb(15,110,110)]">À propos</p>
          <h1 className="mt-3 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            BALAFON, une plateforme d’observabilité et de gestion IT signée Africa Digital Connect
          </h1>
          <p className="mt-5 max-w-4xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Depuis 2016, Africa Digital Connect accompagne les entreprises, les organismes et les
            États dans leur transformation digitale. BALAFON s’inscrit dans cette démarche avec une
            plateforme d’observabilité intégrée, modulaire et orientée performance.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-lg font-semibold">Notre promesse</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Offrir une supervision proactive, une détection avancée et des alertes
                instantanées pour sécuriser l’activité de nos clients.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-lg font-semibold">Notre approche</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Une vision 360 des infrastructures IT, des indicateurs opérationnels et une
                plateforme conçue pour évoluer avec vos besoins.
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-lg font-semibold">Notre objectif</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                Réduire les interruptions, améliorer la disponibilité des services et renforcer la
                continuité opérationnelle.
              </p>
            </div>
          </div>

          {/* <div className="mt-10">
            <Link
              href="/#demo"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[rgb(15,110,110)] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[rgb(12,92,92)]"
            >
              Demander une démo
            </Link>
          </div> */}
        </section>

        <PdfInsights />
      </main>
      <Footer />
    </div>
  );
}
