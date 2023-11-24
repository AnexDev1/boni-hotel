import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vmgaepjtmrddqmyowphl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtZ2FlcGp0bXJkZHFteW93cGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg5OTg0NzAsImV4cCI6MjAxNDU3NDQ3MH0.rS53KMx3Izw6s9FQ5zmdoDoxsyupVZMgjjuBWO0FH60";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
