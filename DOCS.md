# Documentation technique BALAFON

Ce document decrit l etat actuel du projet, son architecture, ses composants, et les points de maintenance pour l equipe.

## 1. Vue d ensemble

Application web Next.js App Router servant de vitrine BALAFON, avec animations UI Framer Motion, styles Tailwind CSS v4, et contenus majoritairement en francais.

Objectifs:

- Presenter la proposition de valeur BALAFON
- Mettre en avant les domaines de competence et references clients
- Faciliter la prise de contact (CTA + page Contact)

## 2. Prerequis et installation

### 2.1 Prerequis

- Node.js 20+
- npm 10+
- Git

### 2.2 Installation

```bash
git clone <url-du-repo>
cd my-next-app
npm install
```

### 2.3 Lancement

```bash
npm run dev
```

Application disponible sur `http://localhost:3000`.

## 3. Scripts

- `npm run dev`: developpement
- `npm run lint`: lint
- `npm run build`: build production
- `npm run start`: execution production

## 4. Stack et dependances

### Runtime

- `next@16.1.6`
- `react@19.2.3`
- `react-dom@19.2.3`
- `framer-motion@12.34.3`

### Developpement

- `typescript@^5`
- `tailwindcss@^4`
- `@tailwindcss/postcss@^4`
- `eslint@^9`
- `eslint-config-next@16.1.6`
- `@types/node@^20`
- `@types/react@^19`
- `@types/react-dom@^19`

## 5. Architecture du projet

```text
app/
  layout.tsx
  page.tsx
  about/page.tsx
  contact/page.tsx
components/
  Navbar.tsx
  Hero.tsx
  TrustedBy.tsx
  Products.tsx
  Features.tsx
  CTA.tsx
  PdfInsights.tsx
  Footer.tsx
animations/
  fadeIn.ts
styles/
  globals.css
public/
  favicon.svg
  images/
    balafon-logo.png
    balafon-mark.svg
    trusted/
libs/
  utils.ts
```

## 6. Routage

- `/`:
  - Navbar
  - Hero
  - TrustedBy
  - Products
  - Features
  - CTA
  - Footer

- `/about`:
  - Hero textuel A propos
  - blocs promesse/approche/objectif
  - `PdfInsights`
  - Footer

- `/contact`:
  - informations de contact
  - Footer

## 7. Composants principaux

### 7.1 Navbar

- logo BALAFON
- liens: Produits, Pourquoi BALAFON, A propos
- bouton Demander une demo
- effet sticky avec fond/ombre au scroll

### 7.2 Hero

- texte centre
- fond anime (blobs/flou) inspire d une direction visuelle moderne
- CTA: Tous les produits, Contactez-nous
- animations conditionnees par `useReducedMotion`

### 7.3 TrustedBy

- logos de references (Orange CI, Port Autonome, FDFP, BNETD, SGCI, CIPREL)
- chargement logos via URL externe
- fallback local si erreur de chargement (`public/images/trusted/*`)

### 7.4 Products

- section cartes avec design marque BALAFON
- scroll horizontal de cartes
- navigation avec boutons precedent/suivant + points
- contenu produits adapte BALAFON (pas N-able)

### 7.5 Features

- section Pourquoi BALAFON
- 4 blocs: simplicite, performance, centralisation, securite

### 7.6 CTA

- bloc final colore en theme BALAFON
- bouton principal Demander une demo
- suppression du second bouton

### 7.7 PdfInsights

- section detaillee issue des informations du document BALAFON
- services cles
- modules plateforme
- domaines de competences
- resultats attendus

## 8. Animations

Le fichier `animations/fadeIn.ts` centralise:

- `fadeIn(direction, delay, duration)`
- `staggerChildren(stagger, delayChildren)`

Les composants utilisent ces variants pour homogeniser les transitions d'entree.

## 9. Styles et theming

Dans `styles/globals.css`:

- variables de base: `--brand` et `--accent`
- mode clair/sombre via media query
- comportement de scroll fluide

Couleurs dominantes BALAFON:

- teinte principale: `rgb(15,110,110)`
- accent secondaire: `rgb(192,122,100)`

## 10. Assets et branding

- logo principal: `public/images/balafon-logo.png`
- favicon: `public/favicon.svg` + `app/icon.svg`
- fallbacks logos partenaires: `public/images/trusted/`

## 11. Notes de maintenance

### 11.1 Encodage texte

Si des caracteres accentues apparaissent mal (ex: `Ã©`), verifier:

- encodage UTF-8 des fichiers
- terminal/editeur configure en UTF-8

### 11.2 Logos distants

Certaines images viennent de domaines externes; si indisponibles, prevoir un fallback local supplementaire.

### 11.3 Bonnes pratiques

Avant merge:

```bash
npm run lint
npm run build
```

## 12. Contribution equipe

Workflow recommande:

1. Creer une branche `feat/...` ou `fix/...`
2. Developper et tester localement
3. Lancer lint/build
4. Ouvrir une PR avec description claire des changements UI/texte

## 13. Fichier requirements.txt

Un fichier `requirements.txt` (version Node) est fourni pour reference des dependances et versions.
L installation reelle se fait avec `npm install` (ou `npm ci` en CI).
