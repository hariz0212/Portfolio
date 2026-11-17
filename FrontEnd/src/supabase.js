import { createClient } from '@supabase/supabase-js';

// La clé publique est faite pour être visible dans le navigateur :
// ce sont les règles RLS de la base qui protègent les données.
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
