import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar cta={{ label: "Demander une démo", href: "/demo", variant: "primary" }} />
      <main id="main-content" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Informations de contact */}
          <div>
            <p className="text-lg font-semibold tracking-wide text-brand">Contact</p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Parlez-nous de votre besoin
            </h1>
            <p className="mt-5 text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Pour une démo BALAFON ou une question, contactez Africa Digital Connect.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Téléphone</h2>
                  <a
                    className="mt-1 inline-block text-sm text-zinc-600 hover:text-brand hover:underline dark:text-zinc-300"
                    href="tel:+2250556225555"
                  >
                    +225 05 56 22 55 55
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Site</h2>
                  <a
                    className="mt-1 inline-block text-sm text-zinc-600 hover:text-brand hover:underline dark:text-zinc-300"
                    href="https://www.africadigitalconnect.net"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    africadigitalconnect.net
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-brand" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Adresse</h2>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    Cocody, II Plateaux, Rue J47<br />
                    01 BP 13551, Abidjan 01<br />
                    Côte d&apos;Ivoire
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="rounded-3xl border border-zinc-200 bg-zinc-50/60 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 sm:p-8">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Envoyez-nous un message
            </h2>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Nous vous répondons sous 24h.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
