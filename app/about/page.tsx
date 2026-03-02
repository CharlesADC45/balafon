import Navbar from "../../components/NavbarPropos";
import Footer from "../../components/Footer";
import PdfInsights from "../../components/PdfInsights";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main>
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-lg font-semibold tracking-wide text-[rgb(15,110,110)]">
            {"\u00c0 propos"}
          </p>
          <h1 className="mt-3 max-w-4xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {
              "BALAFON, une plateforme d'observabilit\u00e9 et de gestion IT sign\u00e9e Africa Digital Connect"
            }
          </h1>
          <p className="mt-5 max-w-4xl text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            {
              "Depuis 2016, Africa Digital Connect accompagne les entreprises, les organismes et les \u00c9tats dans leur transformation digitale. BALAFON s'inscrit dans cette d\u00e9marche avec une plateforme d'observabilit\u00e9 int\u00e9gr\u00e9e, modulaire et orient\u00e9e performance."
            }
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-lg font-semibold">Notre promesse</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {
                  "Offrir une supervision proactive, une d\u00e9tection avanc\u00e9e et des alertes instantan\u00e9es pour s\u00e9curiser l'activit\u00e9 de nos clients."
                }
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-lg font-semibold">Notre approche</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {
                  "Une vision 360 des infrastructures IT, des indicateurs op\u00e9rationnels et une plateforme con\u00e7ue pour \u00e9voluer avec vos besoins."
                }
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
              <h2 className="text-lg font-semibold">Notre objectif</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                {
                  "R\u00e9duire les interruptions, am\u00e9liorer la disponibilit\u00e9 des services et renforcer la continuit\u00e9 op\u00e9rationnelle."
                }
              </p>
            </div>
          </div>

          {/* <div className="mt-10">
            <Link
              href="/#demo"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[rgb(15,110,110)] px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[rgb(12,92,92)]"
            >
              {"Demander une d\u00e9mo"}
            </Link>
          </div> */}
        </section>

        <PdfInsights />
      </main>
      <Footer />
    </div>
  );
}

