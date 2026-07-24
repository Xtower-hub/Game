# XTOWER — Monorepo Architecture

XTOWER est un jeu multijoueur 3D en temps réel où les joueurs escaladent une tour infinie, construisent des abris et luttent contre des invasions hebdomadaires de rats mutants.

## 📁 Structure du Monorepo

- `/site` : Site vitrine public (Next.js 14, Tailwind CSS, altimètre incandescence au scroll) -> **Déployé sur Vercel**
- `/server` : Serveur de jeu temps réel (Colyseus, Node.js, TS, Dockerfile) -> **Déployé sur Railway**
- `/client` : Client jouable 3D (Three.js / React Three Fiber, Vite) -> **Déployé sur Vercel**
- `/admin` : Dashboard d'administration privé (Next.js 14, Tailwind CSS) -> **Déployé sur Vercel**
- `/packages/shared` : Types TypeScript partagés entre les 4 applications.

---

## 🚀 Lancer en Local

### 1. Installation des dépendances
```bash
npm install
```

### 2. Builder le package partagé
```bash
npm run build:shared
```

### 3. Démarrage des applications
- **Site Vitrine** : `npm run dev:site` (Accessible sur http://localhost:3000)
- **Client de jeu 3D** : `npm run dev:client` (Accessible sur http://localhost:3000 ou 5173)
- **Serveur Colyseus 3D** : `npm run dev:server` (Écoute sur http://localhost:2567)
- **Dashboard Admin** : `npm run dev:admin` (Accessible sur http://localhost:3001)

---

## 🗄️ Base de données Supabase

- **Projet** : `iclnjxdwpmxpfanmxijt`
- **URL** : `https://iclnjxdwpmxpfanmxijt.supabase.co`
- Le schéma SQL initial se trouve dans `supabase/schema.sql`.

---

## ⚡ Déploiement

- **GitHub Repository** : `https://github.com/Xtower-hub/Game.git`
- **Scope Vercel** : `team_696WogqCuigQslgf2ps0VKIl` (`vercel link`)
- **Railway** : Deploy depuis `/server` via Dockerfile.
