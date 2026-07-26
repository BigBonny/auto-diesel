import "server-only";

import { createClient } from "@supabase/supabase-js";

import { requireEnvironmentVariable } from "@/lib/env";

export const supabaseAdmin = createClient(
  requireEnvironmentVariable("NEXT_PUBLIC_SUPABASE_URL"),
  requireEnvironmentVariable("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  { auth: { persistSession: false, autoRefreshToken: false } },
);
