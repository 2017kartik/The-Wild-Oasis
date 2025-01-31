import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://yflpzqfskpjigpzjwefk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmbHB6cWZza3BqaWdwemp3ZWZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAwMDM0OTIsImV4cCI6MjA0NTU3OTQ5Mn0.pJakqnivSVO28QygOgdLEzj_l4V7By2szgr7RSEStNA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
