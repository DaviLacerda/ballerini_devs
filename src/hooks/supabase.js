import { createClient } from "@supabase/supabase-js";

const supabaseURL = process.env.REACT_APP_URL
const supabaseApiKey = process.env.REACT_APP_API_KEY

export const supabase = createClient(supabaseURL, supabaseApiKey)