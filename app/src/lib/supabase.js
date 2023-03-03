import { createClient } from '@supabase/supabase-js'
import { PUBLIC_SUPABASE_PROJECT_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    PUBLIC_SUPABASE_PROJECT_URL,
    PUBLIC_SUPABASE_ANON_KEY
)

