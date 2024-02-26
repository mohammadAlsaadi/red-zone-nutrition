import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://spzjbqxdghtmflngjxqg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNwempicXhkZ2h0bWZsbmdqeHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NDA3OTUsImV4cCI6MjAyNDExNjc5NX0.G5pV6kJi2cqcKm0qcYEctr_mi_0nUyKITN2xmXROSp0";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
