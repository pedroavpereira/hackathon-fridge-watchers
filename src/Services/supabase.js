import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  "https://dkhfrpwkssnybftzmkrm.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRraGZycHdrc3NueWJmdHpta3JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NTQ1OTEsImV4cCI6MjA1NDQzMDU5MX0.UalbGP7STsXcdjtP5M-k8Cv1jmqJuuQKFYFqQkAlMIs"
);
