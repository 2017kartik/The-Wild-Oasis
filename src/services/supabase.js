import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fhlpmbsdavfqodrepada.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZobHBtYnNkYXZmcW9kcmVwYWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgzOTkxNDgsImV4cCI6MjA1Mzk3NTE0OH0.rmerbnkZK8v9A34ttpqjuyZ0uJfJyoSfCa3B8D4-A9Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
