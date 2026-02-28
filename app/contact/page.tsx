import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold tracking-wide text-[rgb(15,110,110)]">Contact</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Parlez-nous de votre besoin
        </h1>
        <p className="mt-5 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          Pour une démo BALAFON ou une question, contactez Africa Digital Connect.
        </p>

        <div className="mt-10 grid gap-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-sm font-semibold">Téléphone</h2>
            <a
              className="mt-2 inline-block text-sm text-zinc-600 hover:underline dark:text-zinc-300"
              href="tel:+2250556225555"
            >
              +225 05 56 22 55 55
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-sm font-semibold">Site</h2>
            <a
              className="mt-2 inline-block text-sm text-zinc-600 hover:underline dark:text-zinc-300"
              href="https://www.africadigitalconnect.net"
              target="_blank"
              rel="noreferrer"
            >
              africadigitalconnect.net
            </a>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-sm font-semibold">Adresse</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              Cocody, II Plateaux, Rue J47, 01 BP 13551, Abidjan 01, Côte d’Ivoire
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
