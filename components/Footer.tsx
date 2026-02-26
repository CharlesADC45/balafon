import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 bg-white py-12 dark:border-zinc-800/70 dark:bg-zinc-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Image src="/images/balafon-mark.svg" alt="BALAFON" width={28} height={28} />
            <span className="text-sm font-semibold tracking-wide text-zinc-950 dark:text-zinc-50">
              BALAFON
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600 dark:text-zinc-300">
            Plateforme d’observabilité et de gestion IT pour gagner du temps, réduire les
            interruptions et sécuriser vos environnements.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Téléphone:</span>{" "}
              <a className="hover:underline" href="tel:+2250556225555">
                +225 05 56 22 55 55
              </a>
            </li>
            <li>
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Site:</span>{" "}
              <a
                className="hover:underline"
                href="https://www.africadigitalconnect.net"
                target="_blank"
                rel="noreferrer"
              >
                africadigitalconnect.net
              </a>
            </li>
            <li className="leading-6">
              <span className="font-medium text-zinc-900 dark:text-zinc-100">Adresse:</span>{" "}
              Cocody, II Plateaux, Rue J47, 01 BP 13551, Abidjan 01, Côte d’Ivoire
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">Informations</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
            <li>
              <a className="hover:underline" href="#produits">
                Produits
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#pourquoi">
                Pourquoi BALAFON
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#demo">
                Demander une démo
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-2 border-t border-zinc-200/70 pt-6 text-xs text-zinc-500 dark:border-zinc-800/70 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BALAFON. Tous droits réservés.</p>
          <p>Édité par Africa Digital Connect.</p>
        </div>
      </div>
    </footer>
  );
}

