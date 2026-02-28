# BALAFON Landing Page

Landing page BALAFON construite avec Next.js (App Router), TypeScript, Tailwind CSS v4 et Framer Motion.

## Objectif

Ce projet presente BALAFON: une plateforme de supervision, observabilite, securite et gestion IT proposee par Africa Digital Connect.

## Prerequis

- Node.js 20+
- npm 10+
- Git

Verification rapide:

```bash
node -v
npm -v
git --version
```

## Installation

```bash
git clone <url-du-repo>
cd my-next-app
npm install
```

## Lancement local

```bash
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Scripts disponibles

- `npm run dev`: demarrage en mode developpement
- `npm run lint`: verification ESLint
- `npm run build`: build production
- `npm run start`: lancement du build

## Stack technique

- Next.js `16.1.6`
- React `19.2.3`
- TypeScript `^5`
- Tailwind CSS `^4`
- Framer Motion `^12.34.3`
- ESLint `^9` + `eslint-config-next`

## Pages

- `/`: page principale
- `/about`: page A propos (inclut les informations cles BALAFON)
- `/contact`: page contact

## Sections de la page d accueil

- `Navbar`
- `Hero`
- `TrustedBy` (logos clients/partenaires)
- `Products` (cartes avec scroll horizontal + controles)
- `Features`
- `CTA`
- `Footer`

## Arborescence utile

```text
app/                  Routes et layout
components/           Composants UI
animations/           Variants Framer Motion reutilisables
styles/               Styles globaux (Tailwind + CSS)
libs/                 Utilitaires
public/images/        Logos et assets visuels
```

## Logos partenaires

La section `TrustedBy` utilise:

- des logos distants (URLs officielles)
- des fallbacks locaux dans `public/images/trusted`

Si un logo distant ne charge pas, un fallback local est utilise quand disponible.

## Favicon et logo

- Favicon: `public/favicon.svg` (reference aussi dans `app/icon.svg`)
- Logo principal: `public/images/balafon-logo.png`

## Documentation complementaire

Consultez `DOCS.md` pour la documentation technique detaillee (architecture, composants, maintenance, personnalisation).
