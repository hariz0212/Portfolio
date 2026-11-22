# Portfolio — Hariz Piratheepan

Portfolio personnel d'un étudiant en 3e année de BUT Informatique (IUT de Villetaneuse), à la recherche d'un stage de fin d'études de 14 à 16 semaines à partir du 8 mars 2027.

**Site en ligne : https://hariz-portfolio-1.netlify.app**

## Fonctionnalités

- Univers visuel « mode photo » de jeu vidéo : photo plein écran, barre de joueur, boussole, quête principale, menu pause.
- Projets, parcours, compétences (inventaire), galerie photo, avis et contact sur une seule page.
- Raccourcis clavier : `←` `→` pour changer de section, `Échap` pour le menu, `C` pour le CV, `P` pour le mode photo (interface masquée).
- CV téléchargeable.
- Section d'avis : les visiteurs déposent un avis, qui n'apparaît qu'après validation manuelle.
- Responsive, accessible au clavier, animations réduites si le système le demande.

## Stack

| Partie | Technologies |
|---|---|
| Front-end | React 19, Vite, Tailwind CSS 4, React Router |
| Base de données | Supabase (PostgreSQL), appelée directement depuis le front |
| Hébergement | Netlify, déploiement continu depuis la branche `main` |

## Structure

```
FrontEnd/
  public/              fichiers servis tels quels (CV, favicon, photos, _redirects Netlify)
  src/
    constants/         contenu du site : liens, quête, expériences, projets, compétences, photos
    pages/             pages de l'application (accueil)
    features/          une section par dossier (accueil, projets, parcours, competences, galerie, avis, contact)
    components/
      layout/          barre du haut et menu pause
      ui/              éléments réutilisables (liste du menu, notification, raccourcis, icônes)
    context/           état de l'interface (menu ouvert, mode photo)
    hooks/             useInterface, useRaccourcis (clavier)
    services/          client Supabase
    style/             index.css et typographie.css (polices, couleurs, utilitaires Tailwind)
supabase/
  migrations/          schéma SQL de la table des avis et règles de sécurité
```

Les textes se modifient dans `FrontEnd/src/constants/constant.js`, sans toucher aux composants.

### Ajouter mes photos

1. Copier les photos dans `FrontEnd/public/photos/` (en JPEG d'environ 2000 px de large pour rester léger).
2. Dans `constant.js`, indiquer la photo de l'accueil dans `PHOTO_ACCUEIL` (ex. `'/photos/foret.jpg'`).
3. Ajouter les photos de la galerie dans `PHOTOS`. La section Galerie et son entrée dans le menu apparaissent dès la première photo.

## Lancer le projet en local

Prérequis : Node.js 20.19+ ou 22.12+ (exigé par Vite 7).

1. Installer les dépendances :

   ```bash
   cd FrontEnd
   npm install
   ```

2. Créer le fichier `FrontEnd/.env.local` (ignoré par git) avec l'URL du projet Supabase et sa clé publique (*Project Settings → API Keys → Publishable key*) :

   ```
   VITE_SUPABASE_URL=https://<ref-du-projet>.supabase.co
   VITE_SUPABASE_ANON_KEY=sb_publishable_...
   ```

3. Lancer le serveur de développement :

   ```bash
   npm run dev
   ```

Autres commandes, depuis `FrontEnd/` :

| Commande | Rôle |
|---|---|
| `npm run build` | Construit le site dans `dist/` |
| `npm run preview` | Sert le build localement |
| `npm run lint` | Vérifie le code avec ESLint |

## Base de données des avis

La table `avis` est décrite dans `supabase/migrations/`. Le front appelle Supabase directement ; ce sont les règles RLS (Row Level Security) de la base qui protègent les données :

- le public peut **ajouter** un avis, uniquement non validé ;
- le public peut **lire** les avis validés, sans jamais voir les emails ;
- personne ne peut modifier ni supprimer un avis depuis le site.

La clé publique Supabase est donc faite pour être visible dans le navigateur. La clé secrète ne doit jamais apparaître dans le front.

**Valider un avis :** dans le tableau de bord Supabase, *Table Editor → avis*, cocher la colonne `approuve`.

**Appliquer le schéma sur un nouveau projet Supabase** (avec le [CLI Supabase](https://supabase.com/docs/guides/cli)) :

```bash
supabase login
supabase link --project-ref <ref-du-projet>
supabase db push --remote
```

## Déploiement

Netlify reconstruit le site à chaque push sur `main`. Réglages attendus dans *Site configuration → Build & deploy* :

- *Base directory* : `FrontEnd`
- *Build command* : `npm run build`
- *Publish directory* : `FrontEnd/dist`
- Variables d'environnement : `VITE_SUPABASE_URL` et `VITE_SUPABASE_ANON_KEY`

Le fichier `FrontEnd/public/_redirects` renvoie toutes les URL vers `index.html`, pour que React Router gère les routes comme `/projects`.

## Contact

- LinkedIn : https://www.linkedin.com/in/hariz-piratheepan-0b1937361
- Email : harizsan38@gmail.com
