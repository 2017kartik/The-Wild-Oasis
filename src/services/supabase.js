import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://lediiuxvvbwazyygglih.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxlZGlpdXh2dmJ3YXp5eWdnbGloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MTUxMTksImV4cCI6MjA4MDQ5MTExOX0.5Z9kubozf19HWd6keEvAhqTnsqCOUoh8sRYiZ-JdOaQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
