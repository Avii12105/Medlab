// Legacy alias: export Supabase client for any code still requiring this file.
// The project uses Supabase. This file exists only to avoid errors
// when older code imports `src/config/db.ts` — prefer `src/config/supabase.ts`.

import supabase from './supabase';

export default supabase;
