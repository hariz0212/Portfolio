-- Table des avis laissés par les visiteurs du portfolio.
create table public.avis (
  id bigint generated always as identity primary key,
  nom text not null check (char_length(nom) between 1 and 50),
  prenom text not null check (char_length(prenom) between 1 and 50),
  email text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$' and char_length(email) <= 100),
  commentaire text not null check (char_length(commentaire) between 1 and 1000),
  approuve boolean not null default false,
  created_at timestamptz not null default now()
);

-- Supabase donne par défaut tous les droits au public (rôle anon) : on les retire,
-- puis on ne rend que le strict nécessaire, colonne par colonne.
revoke all on public.avis from anon, authenticated;
grant insert (nom, prenom, email, commentaire) on public.avis to anon, authenticated;
grant select (id, nom, prenom, commentaire, created_at) on public.avis to anon, authenticated;

alter table public.avis enable row level security;

-- Tout le monde peut déposer un avis, mais jamais déjà validé.
create policy "deposer un avis" on public.avis
  for insert to anon, authenticated
  with check (approuve = false);

-- Seuls les avis validés sont visibles.
create policy "lire les avis valides" on public.avis
  for select to anon, authenticated
  using (approuve = true);
