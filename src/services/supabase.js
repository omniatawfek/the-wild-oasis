import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pmnertamrhpomtnqgkqn.supabase.co";
const supabaseKey = "sb_publishable_4miWpNckwHkFKXPztEOooA_Mhe1oQ1b";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
