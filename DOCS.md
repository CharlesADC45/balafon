# BALAFON Landing Page

Landing page BALAFON construite avec Next.js (App Router), TypeScript, Tailwind CSS et Framer Motion.

## 1. Prerequis

Installe ces outils avant de lancer le projet:

- Node.js `20+` (recommande: derniere LTS)
- npm `10+` (installe avec Node.js)
- Git

Verification rapide:

```bash
node -v
npm -v
git --version
```

## 2. Installation

```bash
git clone <url-du-repo>
cd my-next-app
npm install
```

## 3. Lancer le projet en local

```bash
npm run dev
```

Puis ouvre:

`http://localhost:3000`

## 4. Commandes utiles

- Dev: `npm run dev`
- Lint: `npm run lint`
- Build production: `npm run build`
- Start production (apres build): `npm run start`

## 5. Stack et outils utilises

- Framework: Next.js `16.1.6` (App Router)
- UI: React `19.2.3`
- Langage: TypeScript
- Styling: Tailwind CSS `v4`
- Animations: Framer Motion `12.34.3`
- Qualite code: ESLint `v9` + `eslint-config-next`

## 6. Structure du projet

```text
my-next-app/
  app/                 # Pages, layout, routing (App Router)
  components/          # Composants UI (Hero, CTA, Features, etc.)
  animations/          # Variants Framer Motion reutilisables
  styles/              # Styles globaux (Tailwind + CSS global)
  public/              # Assets statiques (images, svg, icons)
  libs/                # Utilitaires partages
```

## 7. Workflow recommande pour les collegues

1. Creer une branche: `git checkout -b feat/ma-feature`
2. Faire les changements
3. Verifier le lint: `npm run lint`
4. Commit: `git add . && git commit -m "feat: ..."`
5. Push et ouvrir une PR

## 8. Depannage

### PowerShell bloque `npm` (Windows)

Si tu vois une erreur `npm.ps1 cannot be loaded because running scripts is disabled`:

- Option rapide (sans changer la policy):

```bash
cmd /c npm run dev
cmd /c npm run lint
```

- Option permanente (PowerShell admin):

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Port 3000 deja utilise

Lancer sur un autre port:

```bash
npm run dev -- -p 3001
```

## 9. Notes

- Ce projet ne depend pas de variables d environnement pour demarrer.
- Si l affichage semble casse, supprime le cache navigateur et relance le serveur dev.
