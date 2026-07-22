import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://pmnertamrhpomtnqgkqn.supabase.co",
  "sb_publishable_4miWpNckwHkFKXPztEOooA_Mhe1oQ1b",
);

export default supabase;
