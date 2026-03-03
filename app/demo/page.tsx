import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavbarForm";
import ProspectForm from "@/components/prospectForm";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#e9f3f2_0%,_#f4f7fb_35%,_#ffffff_100%)] text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />

      <main className="px-4 py-10 sm:px-6 sm:py-14">
        <section className="mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-zinc-200/80 bg-white shadow-[0_24px_70px_rgba(8,53,63,0.18)] dark:border-zinc-800 dark:bg-zinc-950">
          <div className="grid lg:grid-cols-12">
            <aside className="relative isolate overflow-hidden bg-[linear-gradient(160deg,_#0a4f5a_0%,_#0f6e6e_52%,_#0c6b82_100%)] px-6 py-8 text-white sm:px-8 sm:py-10 lg:col-span-5 lg:px-9 lg:py-12">
              <div className="pointer-events-none absolute -left-20 top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
              <div className="pointer-events-none absolute -right-14 bottom-4 h-52 w-52 rounded-full bg-[rgb(192,122,100)]/40 blur-2xl" />
              <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:linear-gradient(rgb(255_255_255_/_0.15)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.15)_1px,transparent_1px)] [background-size:36px_36px]" />

              <div className="relative z-10 flex h-full flex-col">
                <Image
                  src="/images/balafon-logo.png"
                  alt="BALAFON"
                  width={172}
                  height={60}
                  className="h-11 w-auto"
                  priority
                />

                <h1 className="mt-8 text-3xl font-semibold leading-tight sm:text-4xl">
                  Demandez votre démo BALAFON
                </h1>
                <p className="mt-4 max-w-sm text-sm leading-7 text-white/85 sm:text-base">
                  Présentez votre besoin et obtenez un accompagnement adapté pour la supervision,
                  la sécurité et la continuité de vos opérations IT.
                </p>

                <ul className="mt-7 space-y-3 text-sm text-white/92">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/90" />
                    Réponse rapide de l&apos;équipe BALAFON
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/90" />
                    Démo orientée cas d&apos;usage métier
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-white/90" />
                    Accompagnement personnalisé
                  </li>
                </ul>

                <div className="mt-auto rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-wide text-white/75">Contact direct</p>
                  <p className="mt-1 text-sm font-semibold">+225 05 56 22 55 55</p>
                </div>
              </div>
            </aside>

            <div className="bg-white px-6 py-8 sm:px-9 sm:py-10 lg:col-span-7">
              <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
                Parlez-nous de vos besoins
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                (<span className="text-red-500">*</span>) désigne les champs obligatoires.
              </p>

              <div className="mt-7">
                <ProspectForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
