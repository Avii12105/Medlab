import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Rely on server.ts to have already loaded dotenv
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('ERROR: Supabase credentials missing!');
  console.error('SUPABASE_URL:', SUPABASE_URL || 'NOT SET');
  console.error('SUPABASE_KEY:', SUPABASE_KEY ? 'SET' : 'NOT SET');
  throw new Error('Missing Supabase credentials in environment');
}

console.log('✓ Supabase configured successfully');

const supabase: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
