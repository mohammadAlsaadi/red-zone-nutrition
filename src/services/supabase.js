import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://iqnqnxcarcgjtxvfmfye.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbnFueGNhcmNnanR4dmZtZnllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NDg3NzMsImV4cCI6MjA5NjIyNDc3M30.A4-onGCNg0jSjuY1TFb3fA-cIF9JMarwNT6hWe_XKzA";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
